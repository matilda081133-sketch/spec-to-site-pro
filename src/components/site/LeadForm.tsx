import { useState } from "react";

export function LeadForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [agree, setAgree] = useState(true);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !phone || !agree) return;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-xl border bg-card p-6 text-center">
        <div className="font-display text-2xl mb-2">Спасибо за заявку</div>
        <p className="text-muted-foreground text-sm">Администратор свяжется с вами в ближайшее время, ответит на вопросы и подберёт удобное время записи.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={`rounded-2xl border bg-card ${compact ? "p-5" : "p-6 md:p-8"} space-y-4`}>
      <div className="space-y-2">
        <label className="text-sm text-muted-foreground" htmlFor="name">Имя</label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full rounded-lg border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring"
          placeholder="Как к вам обращаться"
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm text-muted-foreground" htmlFor="phone">Телефон</label>
        <input
          id="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="w-full rounded-lg border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring"
          placeholder="+7 (___) ___-__-__"
        />
      </div>
      <label className="flex items-start gap-2 text-xs text-muted-foreground">
        <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} className="mt-0.5" />
        <span>Согласен(на) на обработку персональных данных в соответствии с политикой клиники.</span>
      </label>
      <button type="submit" className="btn-primary w-full">Узнать, подойдёт ли мне процедура</button>
      <p className="text-xs text-muted-foreground text-center">
        Администратор свяжется с вами, ответит на вопросы и подберёт удобное время записи.
      </p>
      <p className="text-[11px] text-muted-foreground text-center pt-2 border-t">
        Имеются противопоказания, необходима консультация специалиста.
      </p>
    </form>
  );
}
