# Этап 1: Сборка
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --legacy-peer-deps
COPY . .
RUN npm run build

# Этап 2: Запуск
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
RUN npm ci --only=production --legacy-peer-deps
EXPOSE 3000
ENV PORT=3000
ENV HOST=0.0.0.0
CMD ["node", "dist/server/index.mjs"]
