import logoImg from "@/assets/logo.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img src={logoImg} alt="Здоровье нации" className="h-10 md:h-12 w-auto object-contain" />
    </div>
  );
}

