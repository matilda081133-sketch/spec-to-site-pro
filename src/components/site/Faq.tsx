import { useState } from "react";

const items = [
  {
    q: "Это больно?",
    a: "Ощущения индивидуальны, но большинство пациентов переносят процедуру спокойно. При необходимости врач использует аппликационную анестезию.",
  },
  {
    q: "Сколько длится процедура?",
    a: "Около 40–60 минут вместе с консультацией и подготовкой кожи.",
  },
  {
    q: "Когда будет заметен эффект?",
    a: "Первые изменения обычно заметны через несколько дней: кожа выглядит более увлажнённой и свежей. Эффект развивается постепенно.",
  },
  {
    q: "Будет ли лицо выглядеть неестественно?",
    a: "Нет. Биоревитализация не меняет черты лица. Задача процедуры — улучшить качество и увлажнённость кожи.",
  },
  {
    q: "Есть ли восстановление после процедуры?",
    a: "Возможны небольшие следы инъекций, покраснение или чувствительность кожи. Обычно проходят за 1–3 дня.",
  },
  {
    q: "Есть ли противопоказания?",
    a: "Да. Перед процедурой врач обязательно проводит консультацию и оценивает противопоказания.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y border-y">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 py-3.5 md:py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-display text-base md:text-lg">{it.q}</span>
              <span className={`text-primary text-xl transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span>
            </button>
            {isOpen && (
              <p className="pb-4 text-sm text-muted-foreground leading-relaxed max-w-3xl">{it.a}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
