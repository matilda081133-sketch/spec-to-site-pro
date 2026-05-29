import { createFileRoute } from "@tanstack/react-router";
import doctorImg from "@/assets/doctor.jpg";
import cabinetImg from "@/assets/cabinet.jpg";
import atlantisBright from "@/assets/atlantis-bright.jpg";
import atlantisAmber from "@/assets/atlantis-amber.jpg";
import { Logo } from "@/components/site/Logo";
import { LeadForm } from "@/components/site/LeadForm";
import { Faq } from "@/components/site/Faq";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Биоревитализация 3 зон — 13 000 ₽ | МЦ «Здоровье нации», Липецк" },
      {
        name: "description",
        content:
          "Комплекс биоревитализации лица, шеи и кистей рук за 13 000 ₽ вместо 23 000 ₽. Консультация врача-косметолога включена. МЦ «Здоровье нации» в Липецке.",
      },
      { property: "og:title", content: "Биоревитализация 3 зон — 13 000 ₽" },
      {
        property: "og:description",
        content:
          "Свежая, увлажнённая кожа лица, шеи и рук. Врачебная косметология в медицинском центре. Спецпредложение до конца месяца.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function SectionTitle({ kicker, title, sub }: { kicker?: string; title: string; sub?: string }) {
  return (
    <div className="max-w-3xl mb-8 md:mb-10">
      {kicker && (
        <div className="text-xs uppercase tracking-[0.18em] text-accent mb-2.5">{kicker}</div>
      )}
      <h2 className="font-display text-3xl md:text-[2.6rem] leading-[1.05]">{title}</h2>
      {sub && <p className="mt-3 text-muted-foreground md:text-base max-w-2xl">{sub}</p>}
    </div>
  );
}

function Index() {
  const monthEnd = (() => {
    const d = new Date();
    const last = new Date(d.getFullYear(), d.getMonth() + 1, 0);
    return last.toLocaleDateString("ru-RU", { day: "numeric", month: "long" });
  })();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/85 backdrop-blur sticky top-0 z-40">
        <div className="container-page flex items-center justify-between py-3.5">
          <Logo className="text-primary" />
          <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <a href="tel:+74742370363" className="hover:text-foreground font-medium">+7 (4742) 370-363</a>
            <span>Липецк, Октябрьская, 61</span>
          </div>
          <a href="#zayavka" className="btn-secondary text-sm py-2 px-4 hidden sm:inline-flex">Записаться</a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-surface to-background" />
        <div className="container-page grid md:grid-cols-12 gap-8 md:gap-10 py-8 md:py-14 items-center">
          <div className="md:col-span-7 order-1">
            <div className="badge-urgency mb-4">
              <span className="dot" />
              Спецпредложение до {monthEnd}
            </div>
            <h1 className="font-display text-[2.25rem] sm:text-5xl md:text-[3.5rem] leading-[1.02]">
              Биоревитализация лица, шеи и&nbsp;кистей рук
              <span className="block text-primary mt-1">за 13 000 ₽</span>
            </h1>
            <p className="mt-4 text-muted-foreground md:text-lg max-w-xl">
              Комплекс из 3 зон у врача-косметолога. Консультация включена.
            </p>

            {/* Price block */}
            <div className="mt-6 flex flex-wrap items-stretch gap-3">
              <div className="price-block">
                <div className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">Цена комплекса</div>
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-5xl md:text-6xl text-primary leading-none">13 000 ₽</span>
                  <span className="text-[var(--color-price-old)] line-through text-lg">23 000 ₽</span>
                </div>
              </div>
              <div className="price-block bg-surface-soft border-accent/40">
                <div className="text-[11px] uppercase tracking-[0.16em] text-accent-foreground/70">Ваша выгода</div>
                <div className="font-display text-3xl md:text-4xl text-primary leading-none mt-1">−10 000 ₽</div>
                <div className="text-xs text-muted-foreground mt-1">3 зоны по цене одной</div>
              </div>
            </div>

            <div className="mt-6">
              <a href="#zayavka" className="btn-primary w-full sm:w-auto">Узнать, подойдёт ли мне процедура →</a>
              <p className="mt-2.5 text-xs text-muted-foreground">
                Администратор свяжется с вами и подберёт удобное время.
              </p>
            </div>

            <ul className="mt-7 grid sm:grid-cols-3 gap-2.5">
              {[
                { t: "Приём ведёт врач-косметолог", s: "Не салон, а медцентр", primary: true },
                { t: "Консультация включена", s: "Оценка кожи и противопоказаний", primary: true },
                { t: "3 зоны за одну процедуру", s: "Лицо, шея и кисти рук" },
              ].map((b) => (
                <li
                  key={b.t}
                  className={`rounded-xl p-3.5 ${b.primary ? "border-2 border-primary/15 bg-card" : "border bg-card/60"}`}
                >
                  <div className="text-sm font-semibold leading-tight">{b.t}</div>
                  <div className="text-xs text-muted-foreground mt-1">{b.s}</div>
                </li>
              ))}
            </ul>

            <p className="mt-5 text-[11px] text-muted-foreground">
              Имеются противопоказания, необходима консультация специалиста.
            </p>
          </div>

          <div className="md:col-span-5 order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-surface-soft/50 rounded-[2rem] -z-10" />
              <img
                src={doctorImg}
                alt="Врач-косметолог Перова Екатерина Александровна"
                width={1024}
                height={1280}
                className="rounded-2xl shadow-xl object-cover w-full aspect-[4/5] scale-x-[-1]"
              />
              <div className="absolute -bottom-5 -left-5 bg-card border rounded-xl p-4 shadow-lg max-w-[240px] hidden md:block">
                <div className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Ваш врач</div>
                <div className="font-display text-lg leading-tight mt-1">Перова Екатерина Александровна</div>
                <div className="text-xs text-muted-foreground mt-1">Врач-косметолог · стаж с 2013</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 2 — кому подходит */}
      <section className="container-page py-12 md:py-16">
        <SectionTitle
          kicker="Кому подходит"
          title="Когда пациенты обращаются на биоревитализацию"
          sub="Процедура помогает улучшить качество кожи и восстановить свежий ухоженный внешний вид."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { t: "Сухость и обезвоженность кожи", i: "💧" },
            { t: "Тусклый цвет лица", i: "☀️" },
            { t: "Ощущение «уставшей» кожи", i: "😴" },
            { t: "Снижение упругости", i: "✦" },
            { t: "Первые возрастные изменения", i: "⏳" },
            { t: "Кожа после солнца и стресса", i: "🌿" },
          ].map((it) => (
            <div key={it.t} className="rounded-xl border bg-card p-4 flex items-center gap-3 hover:border-primary/30 transition-colors">
              <span className="w-10 h-10 rounded-lg bg-surface-soft flex items-center justify-center text-base shrink-0">{it.i}</span>
              <span className="font-medium text-[15px]">{it.t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* BLOCK 3 — комплекс и цена */}
      <section className="bg-surface py-12 md:py-16 border-y">
        <div className="container-page grid md:grid-cols-2 gap-10 items-start">
          <div>
            <SectionTitle
              kicker="Что входит в комплекс"
              title="Комплекс биоревитализации 3 зон"
              sub="Одна процедура у врача-косметолога — три ключевые зоны и консультация перед началом."
            />
            <ul className="space-y-2.5">
              {[
                ["Консультация врача-косметолога", "Оценка состояния кожи и противопоказаний"],
                ["Биоревитализация лица", "Работа с увлажнённостью и качеством кожи"],
                ["Биоревитализация шеи", "Часто остаётся без должного ухода"],
                ["Биоревитализация кистей рук", "Видимая зона, которой часто пренебрегают"],
                ["Индивидуальный подбор препарата", "ATLANTIS BRIGHT или ATLANTIS AMBER"],
                ["Рекомендации после процедуры", "Понятный план ухода и восстановления"],
              ].map(([t, s]) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <div>
                    <div className="font-medium">{t}</div>
                    <div className="text-sm text-muted-foreground">{s}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-card border-2 border-primary/10 p-7 md:p-9 shadow-xl">
            <div className="badge-urgency mb-4">
              <span className="dot" />
              До {monthEnd}
            </div>
            <div className="text-sm uppercase tracking-[0.14em] text-muted-foreground">Стоимость комплекса</div>
            <div className="mt-2 flex items-baseline gap-3 flex-wrap">
              <span className="font-display text-6xl md:text-7xl text-primary leading-none">13 000 ₽</span>
              <span className="text-[var(--color-price-old)] line-through text-xl">23 000 ₽</span>
            </div>
            <div className="mt-4 rounded-xl bg-surface-soft border border-accent/30 p-4">
              <div className="text-xs uppercase tracking-[0.14em] text-accent-foreground/70">Ваша выгода</div>
              <div className="font-display text-3xl text-primary mt-1">−10 000 ₽</div>
              <div className="text-sm text-muted-foreground mt-1">
                3 зоны по цене одной процедуры биоревитализации.
              </div>
            </div>
            <div className="divider-rule my-5" />
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>— Консультация врача-косметолога включена</li>
              <li>— Подбор препарата индивидуально</li>
              <li>— Лицензированный медицинский центр</li>
            </ul>
            <a href="#zayavka" className="btn-primary mt-6 w-full">Записаться на консультацию →</a>
            <p className="mt-3 text-[11px] text-muted-foreground text-center">
              Цена действует в рамках спецпредложения до конца месяца.
            </p>
          </div>
        </div>
      </section>

      {/* BLOCK 4 — врач */}
      <section className="container-page py-12 md:py-16">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <img
              src={doctorImg}
              alt="Перова Екатерина Александровна, врач-косметолог"
              loading="lazy"
              width={1024}
              height={1280}
              className="rounded-2xl object-cover w-full aspect-[4/5] border"
            />
            <div className="grid grid-cols-3 gap-2 mt-4">
              <div className="rounded-xl border bg-card p-3 text-center">
                <div className="font-display text-2xl text-primary">12+</div>
                <div className="text-[11px] text-muted-foreground leading-tight mt-1">лет практики</div>
              </div>
              <div className="rounded-xl border bg-card p-3 text-center">
                <div className="font-display text-2xl text-primary">I</div>
                <div className="text-[11px] text-muted-foreground leading-tight mt-1">квалификац. категория</div>
              </div>
              <div className="rounded-xl border bg-card p-3 text-center">
                <div className="font-display text-2xl text-primary">2</div>
                <div className="text-[11px] text-muted-foreground leading-tight mt-1">врачебных специальности</div>
              </div>
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="text-xs uppercase tracking-[0.18em] text-accent mb-2">Ваш врач</div>
            <h2 className="font-display text-3xl md:text-[2.6rem] leading-[1.05]">Перова Екатерина Александровна</h2>
            <p className="mt-3 text-muted-foreground md:text-base max-w-xl">
              Медицинский подход к качеству кожи — без эффекта «переколотого» лица.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Врач-дерматовенеролог", "Врач-косметолог", "I квалификационная категория", "Стаж с 2013 года"].map((b) => (
                <span key={b} className="badge-soft">{b}</span>
              ))}
            </div>

            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              <div className="rounded-xl bg-surface border p-4">
                <div className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground mb-1.5">Образование</div>
                <p className="text-sm">Воронежская гос. медицинская академия им. Н. Н. Бурденко, 2012</p>
                <p className="text-sm mt-1.5">Интернатура по дерматовенерологии, 2013</p>
              </div>
              <div className="rounded-xl bg-surface border p-4">
                <div className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground mb-1.5">Специализации</div>
                <p className="text-sm">Профессиональная переподготовка по косметологии</p>
                <p className="text-sm mt-1.5">Регулярное повышение квалификации по инъекционным методикам</p>
              </div>
            </div>

            <div className="mt-4 rounded-xl border-l-2 border-primary bg-card p-4">
              <div className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground mb-1.5">Направления работы</div>
              <p className="text-sm">
                Биоревитализация · мезотерапия · ботулинотерапия · контурная пластика · работа с качеством и увлажнённостью кожи.
              </p>
            </div>

            <a href="#zayavka" className="btn-secondary mt-6">Записаться к врачу-косметологу</a>
          </div>
        </div>
      </section>

      {/* BLOCK 5 — препараты */}
      <section className="bg-surface border-y py-12 md:py-16">
        <div className="container-page">
          <SectionTitle
            kicker="Препараты"
            title="Какие препараты используются"
            sub="Сертифицированные препараты линейки ATLANTIS. Конкретный препарат врач подбирает индивидуально после консультации."
          />
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                t: "ATLANTIS BRIGHT",
                s: "Для кожи, которой нужно вернуть более свежий и ровный внешний вид.",
                img: atlantisBright,
              },
              {
                t: "ATLANTIS AMBER",
                s: "Для увлажнения, поддержки качества кожи и более ухоженного внешнего вида.",
                img: atlantisAmber,
              },
            ].map((p) => (
              <div key={p.t} className="rounded-2xl bg-card border overflow-hidden flex flex-col sm:flex-row">
                <div className="sm:w-2/5 bg-surface-soft/50 flex items-center justify-center p-4">
                  <img src={p.img} alt={p.t} loading="lazy" width={1024} height={1024} className="w-full max-w-[200px] aspect-square object-cover rounded-xl" />
                </div>
                <div className="p-6 sm:w-3/5">
                  <div className="text-[11px] uppercase tracking-[0.14em] text-accent mb-1.5">Медицинский препарат</div>
                  <div className="font-display text-2xl">{p.t}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{p.s}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5 text-[11px]">
                    <span className="badge-soft">Сертифицирован</span>
                    <span className="badge-soft">Профессиональная линейка</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-xl border-l-2 border-primary bg-card p-4 max-w-3xl">
            <div className="text-sm font-medium">Препарат подбирает врач — не пациент</div>
            <p className="text-sm text-muted-foreground mt-1">
              Самостоятельно выбирать препарат не нужно. Решение принимает врач после консультации и оценки состояния кожи.
            </p>
          </div>
        </div>
      </section>

      {/* BLOCK 6 — безопасность */}
      <section className="container-page py-10 md:py-14">
        <SectionTitle
          kicker="Безопасность"
          title="Перед процедурой — обязательная оценка врача"
          sub="Биоревитализация — медицинская процедура, поэтому консультация и осмотр являются её частью."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            "Врач уточняет состояние кожи и жалобы",
            "Оценивает возможные противопоказания",
            "Подбирает препарат индивидуально",
            "Оценивает чувствительность кожи",
            "При необходимости — аппликационная анестезия",
            "Даёт рекомендации после процедуры",
          ].map((t) => (
            <div key={t} className="rounded-xl border bg-card p-4 flex gap-2.5">
              <span className="text-accent shrink-0 mt-0.5">●</span>
              <span className="text-sm">{t}</span>
            </div>
          ))}
        </div>
        <p className="mt-5 text-sm text-muted-foreground max-w-3xl">
          Если врач увидит противопоказания, он предложит другой вариант ухода или лечения.
        </p>
      </section>

      {/* BLOCK 7 — как проходит */}
      <section className="bg-surface border-y py-12 md:py-16">
        <div className="container-page">
          <SectionTitle
            kicker="Этапы процедуры"
            title="Как проходит процедура"
            sub="От консультации до рекомендаций — всё в медицинском центре под контролем врача."
          />
          <div className="grid md:grid-cols-12 gap-6 items-start">
            <ol className="md:col-span-7 grid sm:grid-cols-2 gap-3">
              {[
                ["Консультация", "Врач оценивает состояние кожи и подбирает препарат."],
                ["Подготовка кожи", "Очищение и подготовка зон к процедуре."],
                ["Процедура", "Биоревитализация лица, шеи и кистей рук."],
                ["Рекомендации", "Врач объясняет, как ухаживать за кожей после."],
              ].map(([t, s], i) => (
                <li key={t} className="rounded-2xl bg-card border p-5">
                  <div className="font-display text-2xl text-primary/80">0{i + 1}</div>
                  <div className="mt-1.5 font-semibold">{t}</div>
                  <p className="text-sm text-muted-foreground mt-1.5">{s}</p>
                </li>
              ))}
            </ol>
            <div className="md:col-span-5">
              <img src={cabinetImg} alt="Процедурный кабинет МЦ «Здоровье нации»" loading="lazy" width={1280} height={896} className="rounded-2xl border object-cover w-full aspect-[4/5]" />
              <p className="mt-3 text-xs text-muted-foreground text-center">Кабинет медицинского центра «Здоровье нации»</p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 8 — результат */}
      <section className="container-page py-12 md:py-16">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <SectionTitle
              kicker="Результат"
              title="Чего ждать от процедуры"
              sub="Биоревитализация работает с качеством кожи — это не пластика и не радикальное омоложение."
            />
            <ul className="space-y-2.5">
              {[
                "Более увлажнённая и свежая кожа",
                "Более ровный и здоровый тон",
                "Ухоженный внешний вид лица, шеи и рук",
                "Эффект развивается постепенно в течение нескольких дней",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="text-accent mt-1.5">—</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-5 grid grid-cols-2 gap-3">
            {[
              { n: "Анна", t: "Кожа стала выглядеть свежее уже через несколько дней." },
              { n: "Марина", t: "Перед процедурой подробно объяснили, без давления." },
              { n: "Ольга", t: "Результат естественный, без эффекта «переколотого» лица." },
              { n: "Ирина", t: "Спокойный медицинский подход и приятный кабинет." },
            ].map((r) => (
              <figure key={r.n} className="rounded-xl bg-card border p-4">
                <blockquote className="text-sm text-foreground/90 leading-relaxed">«{r.t}»</blockquote>
                <figcaption className="mt-2 text-xs text-muted-foreground">— {r.n}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCK 10 — FAQ */}
      <section className="bg-surface border-y py-12 md:py-16">
        <div className="container-page grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <SectionTitle kicker="FAQ" title="Частые вопросы" />
            <p className="text-sm text-muted-foreground">Не нашли ответ? Администратор перезвонит и ответит подробно.</p>
            <a href="#zayavka" className="btn-secondary mt-5">Задать вопрос врачу</a>
          </div>
          <div className="md:col-span-8">
            <Faq />
          </div>
        </div>
      </section>

      {/* BLOCK 11 — финальная форма */}
      <section id="zayavka" className="py-14 md:py-20 bg-gradient-to-b from-background to-surface">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="badge-urgency mx-auto mb-4">
              <span className="dot" />
              Спецпредложение до {monthEnd}
            </div>
            <h2 className="font-display text-3xl md:text-5xl leading-[1.05]">
              Узнайте, подойдёт ли вам комплекс биоревитализации
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Лица, шеи и кистей рук по специальной цене <span className="text-foreground font-semibold">13 000 ₽ вместо 23 000 ₽</span> — до конца месяца.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-start max-w-4xl mx-auto">
            <div className="space-y-3">
              <ul className="space-y-2.5 text-[15px]">
                <li className="flex gap-2.5"><span className="text-accent mt-1.5">●</span> Спокойный медицинский подход</li>
                <li className="flex gap-2.5"><span className="text-accent mt-1.5">●</span> Лицензированный медицинский центр</li>
                <li className="flex gap-2.5"><span className="text-accent mt-1.5">●</span> Без давления и навязчивых продаж</li>
                <li className="flex gap-2.5"><span className="text-accent mt-1.5">●</span> Консультация врача-косметолога включена</li>
              </ul>
              <div className="rounded-xl border bg-card p-4 mt-4">
                <div className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Стоимость</div>
                <div className="flex items-baseline gap-3 mt-1">
                  <span className="font-display text-4xl text-primary">13 000 ₽</span>
                  <span className="text-[var(--color-price-old)] line-through">23 000 ₽</span>
                  <span className="badge-soft">−10 000 ₽</span>
                </div>
              </div>
            </div>
            <LeadForm />
          </div>
        </div>
      </section>

      {/* BLOCK 12 — контакты */}
      <section className="container-page py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Logo className="text-primary" />
            <p className="text-sm text-muted-foreground mt-4">
              Медицинский центр «Здоровье нации». Лицензированная врачебная косметология в Липецке.
            </p>
          </div>
          <div className="space-y-2 text-sm">
            <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground mb-2">Контакты</div>
            <div><a href="tel:+74742370363" className="hover:text-primary font-medium">+7 (4742) 370-363</a></div>
            <div>
              <a
                href="https://yandex.ru/maps/?text=Липецк, ул. Октябрьская, 61"
                target="_blank" rel="noreferrer"
                className="hover:text-primary"
              >Липецк, ул. Октябрьская, 61</a>
            </div>
            <div className="text-muted-foreground">Пн–Сб: 09:00–20:00</div>
          </div>
          <div className="text-xs text-muted-foreground space-y-1.5">
            <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground mb-2">Юридическая информация</div>
            <div>ООО «Здоровье нации»</div>
            <div>Лицензия № Л041-01195-48/00318538 от 18.01.2018</div>
            <div>ИНН 4826040251</div>
            <div className="pt-2">Имеются противопоказания, необходима консультация специалиста.</div>
          </div>
        </div>
        <div className="mt-8 rounded-2xl overflow-hidden border aspect-[16/6]">
          <iframe
            title="Карта"
            src="https://yandex.ru/map-widget/v1/?text=Липецк%2C%20ул.%20Октябрьская%2C%2061&z=16"
            width="100%" height="100%" loading="lazy"
            style={{ border: 0 }}
          />
        </div>
        <p className="mt-6 text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} Медицинский центр «Здоровье нации». Все права защищены.
        </p>
      </section>
    </div>
  );
}
