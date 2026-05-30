/**
 * Production Node.js server wrapper.
 * Serves static files from dist/client/ and passes other requests to the built SSR handler.
 */
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { join, extname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const DIST_CLIENT = join(__dirname, "dist/client");
const PORT = parseInt(process.env.PORT || "3000", 10);

console.log("Loading SSR handler...");
const { default: workerHandler } = await import("./dist/server/index.mjs");
console.log("SSR handler loaded.");

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".mjs": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json",
  ".webp": "image/webp",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".txt": "text/plain",
};

function getContentType(filePath) {
  return MIME[extname(filePath).toLowerCase()] || "application/octet-stream";
}

async function serveStatic(req, res, filePath) {
  const contentType = getContentType(filePath);
  const content = await readFile(filePath);
  res.writeHead(200, {
    "Content-Type": contentType,
    "Cache-Control": "public, max-age=3600",
  });
  res.end(content);
}

const server = createServer(async (req, res) => {
  try {
    const urlPath = req.url.split("?")[0].split("#")[0];

    // Try to serve as static file
    try {
      const filePath = join(DIST_CLIENT, urlPath);
      const s = await stat(filePath);
      if (s.isFile()) {
        await serveStatic(req, res, filePath);
        return;
      }
    } catch {
      // Not a static file — fall through to SSR
    }

    // SSR: convert Node.js request → Web API Request → CF Workers handler
    const host = req.headers.host || `localhost:${PORT}`;
    const url = `http://${host}${req.url}`;

    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    const body = chunks.length ? Buffer.concat(chunks) : null;

    const headers = new Headers();
    for (const [k, v] of Object.entries(req.headers)) {
      if (!v) continue;
      if (Array.isArray(v)) v.forEach((x) => headers.append(k, x));
      else headers.set(k, v);
    }

    const webReq = new Request(url, {
      method: req.method,
      headers,
      body: body?.length ? body : undefined,
      duplex: "half",
    });

    const webRes = await workerHandler.fetch(webReq, {}, {
      waitUntil: () => {},
      passThroughOnException: () => {},
    });

    const resHeaders = {};
    webRes.headers.forEach((v, k) => { resHeaders[k] = v; });

    const buf = Buffer.from(await webRes.arrayBuffer());
    resHeaders["content-length"] = buf.length;
    res.writeHead(webRes.status, resHeaders);
    res.end(buf);
  } catch (err) {
    console.error("Request error:", err);
    if (!res.headersSent) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
    }
  }
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server started on port ${PORT}`);
});
