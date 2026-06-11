import { useState } from "react";

export function LeadForm({ compact = false, submitText = "Узнать, подойдёт ли мне процедура" }: { compact?: boolean; submitText?: string }) {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [agree, setAgree] = useState(true);

  const formatPhone = (val: string) => {
    // Strip non-digits
    let cleaned = val.replace(/\D/g, "");
    
    // Handle leading 7 or 8
    if (cleaned.startsWith("7") || cleaned.startsWith("8")) {
      cleaned = cleaned.substring(1);
    }
    
    // Limit to 10 digits
    cleaned = cleaned.substring(0, 10);
    
    // Format the digits
    let formatted = "";
    if (cleaned.length > 0) {
      formatted = "+7 (" + cleaned.substring(0, 3);
    }
    if (cleaned.length >= 4) {
      formatted += ") " + cleaned.substring(3, 6);
    }
    if (cleaned.length >= 7) {
      formatted += "-" + cleaned.substring(6, 8);
    }
    if (cleaned.length >= 9) {
      formatted += "-" + cleaned.substring(8, 10);
    }
    return formatted;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setPhone(formatted);
  };

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !phone || !agree) return;
    
    // Validate complete phone number (+7 + 10 digits = 18 chars)
    if (phone.length < 18) {
      alert("Пожалуйста, введите полный номер телефона");
      return;
    }
    
    setSent(true);
  }

  if (sent) {
    return (
      <div className="premium-card p-6 text-left">
        <div className="font-display text-2xl mb-2">Спасибо за заявку</div>
        <p className="text-muted-foreground text-sm">Администратор свяжется с вами в ближайшее время, ответит на вопросы и подберёт удобное время записи.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={`premium-card ${compact ? "p-5" : "p-6 md:p-8"} space-y-4`}>
      <div className="space-y-2">
        <label className="text-sm text-muted-foreground font-medium" htmlFor="name">Имя</label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full rounded-lg border border-border bg-background/50 px-4 py-3 outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all duration-300 text-sm md:text-base"
          placeholder="Как к вам обращаться"
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm text-muted-foreground font-medium" htmlFor="phone">Телефон</label>
        <input
          id="phone"
          type="tel"
          value={phone}
          onChange={handlePhoneChange}
          required
          className="w-full rounded-lg border border-border bg-background/50 px-4 py-3 outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all duration-300 text-sm md:text-base"
          placeholder="+7 (___) ___-__-__"
        />
      </div>
      <label className="flex items-start gap-2.5 text-xs text-muted-foreground cursor-pointer select-none">
        <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} className="mt-0.5 accent-accent" />
        <span>Согласен(на) на обработку персональных данных в соответствии с политикой клиники.</span>
      </label>
      <button type="submit" className="btn-primary w-full cursor-pointer">{submitText}</button>
      <p className="text-xs text-muted-foreground text-left">
        Администратор свяжется с вами, ответит на вопросы и подберёт удобное время записи.
      </p>
      <p className="text-[11px] text-muted-foreground text-left pt-2.5 border-t border-border/60">
        Имеются противопоказания, необходима консультация специалиста.
      </p>
    </form>
  );
}
