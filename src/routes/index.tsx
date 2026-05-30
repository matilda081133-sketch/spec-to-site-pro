import { createFileRoute } from "@tanstack/react-router";
import doctorOfficeImg from "@/assets/doctor-office.jpg";
import doctorPortraitImg from "@/assets/doctor-portrait.jpg";
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
            <h1 className="font-display text-[2.25rem] sm:text-5xl md:text-[3.5rem] leading-[1.02]">
              Биоревитализация лица, шеи и&nbsp;кистей рук
              <span className="block text-primary mt-1">за 13 000 ₽</span>
            </h1>
            <p className="mt-4 text-muted-foreground md:text-lg max-w-xl">
              Перед процедурой врач оценит состояние кожи и возможные противопоказания.
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

            {/* Promo plaque */}
            <div className="mt-4 flex">
              <div className="inline-flex items-center gap-2 text-[13px] font-medium text-muted-foreground bg-surface/80 border px-3.5 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Спецпредложение действует до 30 июня
              </div>
            </div>

            <div className="mt-6">
              <a href="#zayavka" className="btn-primary w-full sm:w-auto">Узнать, подойдёт ли мне процедура →</a>
              <p className="mt-2.5 text-xs text-muted-foreground">
                Администратор свяжется с вами и подберёт удобное время.
              </p>
            </div>

            <p className="mt-5 text-[11px] text-muted-foreground">
              Имеются противопоказания, необходима консультация специалиста.
            </p>
          </div>

          <div className="md:col-span-5 order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-surface-soft/50 rounded-[2rem] -z-10" />
              <img
                src={doctorOfficeImg}
                alt="Врач-косметолог Перова Екатерина Александровна"
                width={1024}
                height={1280}
                className="rounded-2xl shadow-xl object-cover w-full aspect-[4/5]"
              />
              <div className="absolute -bottom-5 -left-5 bg-card border rounded-xl p-4 shadow-lg max-w-[250px] hidden md:block">
                <div className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Ваш врач</div>
                <div className="font-display text-lg leading-tight mt-1">Перова Екатерина Александровна</div>
                <div className="text-xs text-muted-foreground mt-1.5">Врач-косметолог, дерматовенеролог</div>
                <div className="text-xs text-muted-foreground mt-0.5">Стаж с 2013 года</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 2 — кому подходит */}
      <section className="container-page py-12 md:py-16">
        <SectionTitle
          kicker="Кому подходит"
          title="Биоревитализация может подойти, если вы замечаете:"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              t: "Отражение выглядит более уставшим, чем вы себя ощущаете",
              d: "Вы хорошо себя чувствуете, но всё чаще кажется, что лицо выглядит уставшим. Даже после выходных, отпуска или хорошего сна отражение уже не радует так, как раньше.",
              i: "😴",
            },
            {
              t: "Домашний уход уже не даёт привычного эффекта",
              d: "Кремы, сыворотки и маски остаются частью ухода, но их становится недостаточно. Хочется более заметного результата и ощущения, что кожа действительно получает необходимое увлажнение.",
              i: "🧴",
            },
            {
              t: "Кажется, что лицо потеряло свежесть",
              d: "Не обязательно появились глубокие морщины. Но лицо выглядит менее живым, менее сияющим и менее ухоженным, чем несколько лет назад.",
              i: "✨",
            },
            {
              t: "Кожа всё чаще кажется сухой и требует больше ухода",
              d: "Приходится чаще пользоваться кремами и сыворотками, но ощущение увлажнённости и комфорта сохраняется ненадолго.",
              i: "💧",
            },
            {
              t: "Шея начинает выдавать возраст",
              d: "Лицо ещё радует отражением в зеркале, а вот шея всё чаще напоминает о возрасте. Нередко именно она начинает привлекать внимание раньше, чем появляются выраженные возрастные изменения на лице.",
              i: "⏳",
            },
            {
              t: "Хочется выглядеть моложе, но естественно",
              d: "Без резких изменений внешности, без эффекта «сделанного лица» и без страха потерять свою естественность и индивидуальность.",
              i: "🌿",
            },
          ].map((it) => (
            <div key={it.t} className="rounded-2xl border bg-card p-5 md:p-6 flex flex-col gap-3 hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-surface-soft flex items-center justify-center text-base shrink-0">{it.i}</span>
                <h3 className="font-sans text-[1.0625rem] font-semibold leading-snug text-foreground">{it.t}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{it.d}</p>
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
              title="Три зоны, которые чаще всего выдают возраст"
              sub="Лицо, шея и кисти рук требуют внимания одновременно. Именно поэтому в комплекс входят все три зоны и консультация врача-косметолога."
            />
            <ul className="space-y-2.5">
              {[
                ["Консультация врача-косметолога", "Врач оценит состояние кожи, ответит на вопросы и поможет подобрать оптимальный вариант процедуры."],
                ["Биоревитализация лица", "Для более свежего, увлажнённого и ухоженного внешнего вида кожи лица."],
                ["Биоревитализация шеи", "Для зоны, которая одной из первых начинает напоминать о возрасте и часто остаётся без внимания."],
                ["Биоревитализация кистей рук", "Для кожи рук, которая ежедневно находится на виду и также нуждается в уходе и увлажнении."],
                ["Индивидуальный подбор препарата", "Врач подберёт препарат с учётом состояния кожи и целей процедуры."],
                ["Рекомендации после процедуры", "Подробные рекомендации для восстановления и сохранения результата после процедуры."],
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
              До 30 июня
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
                Специальная цена на комплекс из трёх зон действует до 30 июня.
              </div>
            </div>
            <div className="divider-rule my-5" />
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>— Консультация врача-косметолога включена</li>
              <li>— Подбор препарата индивидуально</li>
              <li>— Лицензированный медицинский центр</li>
            </ul>
            <a href="#zayavka" className="btn-primary mt-6 w-full">Записаться на консультацию →</a>
            <p className="mt-2 text-xs text-muted-foreground text-center">Запись не обязывает к проведению процедуры</p>
            <p className="mt-3 text-[11px] text-muted-foreground text-center">
              Цена действует в рамках спецпредложения до 30 июня.
            </p>
          </div>
        </div>
      </section>

      {/* BLOCK 4 — врач */}
      <section className="container-page py-12 md:py-16">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <img
              src={doctorPortraitImg}
              alt="Перова Екатерина Александровна, врач-косметолог"
              loading="lazy"
              width={1024}
              height={1280}
              className="rounded-2xl object-cover w-full aspect-[4/5] border"
            />
            <div className="mt-4">
              <div className="rounded-xl border bg-card p-3 text-center max-w-[140px]">
                <div className="font-display text-2xl text-primary">12+</div>
                <div className="text-[11px] text-muted-foreground leading-tight mt-1">лет практики</div>
              </div>
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="text-xs uppercase tracking-[0.18em] text-accent mb-2">Ваш врач</div>
            <h2 className="font-display text-3xl md:text-[2.6rem] leading-[1.05]">Перова Екатерина Александровна</h2>
            <p className="mt-3 text-muted-foreground md:text-base max-w-xl">
              Более свежий и ухоженный внешний вид без эффекта «сделанного лица»
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Врач-косметолог", "Врач-дерматовенеролог", "I квалификационная категория", "Стаж с 2013 года"].map((b) => (
                <span key={b} className="badge-soft">{b}</span>
              ))}
            </div>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground max-w-xl">
              Екатерина Александровна специализируется на инъекционной косметологии и помогает пациентам сохранять естественный и ухоженный внешний вид без радикальных изменений внешности.
            </p>

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

            <div className="mt-4 rounded-xl border-l-2 border-accent bg-card p-4">
              <div className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground mb-1.5">Подход врача</div>
              <p className="text-sm">
                Основной акцент — на качестве кожи, естественном результате и процедурах, которые помогают выглядеть более свежо и ухоженно без радикальных изменений внешности.
              </p>
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
            sub="Состояние кожи и желаемый результат у всех разные. Поэтому конкретный препарат врач подбирает индивидуально после консультации."
          />
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                t: "ATLANTIS BRIGHT",
                s: "Для кожи, которая выглядит тусклой, потеряла свежесть и нуждается в более ровном тоне и естественном сиянии.",
                img: atlantisBright,
              },
              {
                t: "ATLANTIS AMBER",
                s: "Для кожи, которой важно вернуть увлажнённость, упругость и более ухоженный внешний вид.",
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
                    <span className="badge-soft border-accent/30 text-accent-foreground bg-accent/5">Подбор после консультации врача</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-xl border-l-2 border-primary bg-card p-4 max-w-3xl">
            <div className="text-sm font-medium">Препарат подбирает врач — не пациент</div>
            <p className="text-sm text-muted-foreground mt-1">
              Самостоятельно выбирать препарат не нужно. Решение принимается врачом после консультации и оценки состояния кожи.
            </p>
          </div>
        </div>
      </section>

      {/* BLOCK 6 — безопасность */}
      <section className="container-page py-10 md:py-14">
        <SectionTitle
          kicker="Безопасность"
          title="Если биоревитализация вам не подходит, врач скажет об этом на консультации"
          sub="Перед проведением процедуры врач оценивает состояние кожи, возможные противопоказания и подбирает оптимальный вариант ухода."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              t: "Врач-косметолог проводит осмотр перед началом",
              d: "Не косметолог-эстетист, а специалист с медицинским образованием и опытом работы в косметологии.",
            },
            {
              t: "Оцениваются противопоказания",
              d: "Если врач увидит ограничения, он предложит другой вариант ухода или лечения.",
            },
            {
              t: "Используются сертифицированные препараты",
              d: "В работе применяются препараты профессиональной линейки медицинского назначения.",
            },
            {
              t: "Процедура проводится в медицинском центре",
              d: "Все этапы проходят в лицензированном медицинском учреждении под контролем врача.",
            },
            {
              t: "При необходимости применяется анестезия",
              d: "Решение принимается врачом после осмотра и консультации.",
            },
            {
              t: "Вы получите рекомендации по уходу",
              d: "Врач подробно объяснит, как ухаживать за кожей после процедуры и на что обратить внимание в период восстановления.",
            },
          ].map((c) => (
            <div key={c.t} className="rounded-xl border bg-card p-5 flex flex-col gap-2 hover:border-primary/30 transition-colors">
              <div className="flex gap-2.5 items-start">
                <span className="text-accent shrink-0 mt-1">●</span>
                <span className="font-semibold text-[15px]">{c.t}</span>
              </div>
              <p className="text-sm text-muted-foreground pl-5 leading-relaxed">{c.d}</p>
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
            sub="Процедура занимает 20–40 минут. Перед началом врач проводит осмотр кожи, а после процедуры даёт рекомендации по уходу."
          />
          <div className="grid md:grid-cols-12 gap-6 items-start">
            <ol className="md:col-span-7 grid sm:grid-cols-2 gap-3">
              {[
                ["Консультация и осмотр", "Врач оценит состояние кожи, ответит на вопросы и определит оптимальный план проведения процедуры."],
                ["Подготовка кожи", "Кожа очищается и подготавливается к процедуре. При необходимости врач использует аппликационную анестезию."],
                ["Проведение процедуры", "Врач выполняет инъекции в выбранные зоны. В зависимости от объёма работы процедура обычно занимает от 20 до 40 минут."],
                ["Рекомендации после процедуры", "Врач расскажет об особенностях восстановления, уходе за кожей и ответит на вопросы, которые могут возникнуть после процедуры."],
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
          <div className="mt-8 rounded-xl border border-primary/10 bg-card p-5 max-w-3xl">
            <div className="text-sm font-semibold text-primary">После процедуры можно вернуться к привычным делам в тот же день</div>
            <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
              После биоревитализации не требуется длительного восстановления. Однако в местах инъекций могут временно сохраняться небольшие следы или синяки. Это нормальная реакция кожи, которая обычно проходит самостоятельно.
            </p>
          </div>
        </div>
      </section>

      {/* BLOCK 8 — результат */}
      <section className="container-page py-12 md:py-16">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <SectionTitle
              kicker="Результат"
              title="Какие изменения обычно замечают после процедуры"
              sub="Биоревитализация помогает улучшить качество кожи и сделать внешний вид более свежим и ухоженным без радикальных изменений внешности."
            />
            <ul className="space-y-4">
              {[
                ["Кожа выглядит более увлажнённой и ухоженной", "После процедуры кожа постепенно выглядит более свежей и напитанной."],
                ["Лицо выглядит более свежим и отдохнувшим", "Уходит ощущение тусклого, уставшего внешнего вида."],
                ["Тон кожи становится более ровным", "Кожа может выглядеть спокойнее, ровнее и визуально здоровее."],
                ["Шея и кисти рук выглядят более ухоженно", "Комплекс помогает уделить внимание не только лицу, но и открытым зонам, которые часто выдают возраст."],
                ["Изменения развиваются постепенно", "Первые изменения обычно становятся заметны через несколько дней после процедуры."],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-3">
                  <span className="text-accent mt-1">—</span>
                  <div>
                    <div className="font-semibold text-base leading-snug">{t}</div>
                    <div className="text-sm text-muted-foreground mt-0.5">{d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-5 rounded-2xl border-2 border-accent/15 bg-card p-6 md:p-8 shadow-lg">
            <div className="text-xs uppercase tracking-[0.14em] text-accent mb-2">Важно понимать</div>
            <h3 className="font-display text-2xl text-primary leading-tight">Биоревитализация не меняет черты лица и не даёт эффекта пластики</h3>
            <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
              Она работает с качеством кожи: увлажнённостью, свежестью, ухоженностью и общим состоянием открытых зон.
            </p>
            <p className="text-sm text-muted-foreground mt-2.5 leading-relaxed">
              Результат индивидуален и зависит от исходного состояния кожи.
            </p>
          </div>
        </div>
      </section>

      {/* BLOCK 9 — FAQ */}
      <section className="bg-surface border-y py-12 md:py-16">
        <div className="container-page grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <SectionTitle kicker="FAQ" title="Частые вопросы" />
            <p className="text-sm text-muted-foreground">
              Не нашли ответ на свой вопрос? Оставьте заявку, и администратор медицинского центра свяжется с вами и подробно проконсультирует.
            </p>
            <a href="#zayavka" className="btn-secondary mt-5">Остались вопросы? Мы перезвоним</a>
          </div>
          <div className="md:col-span-8">
            <Faq />
          </div>
        </div>
      </section>

      {/* BLOCK 10 — финальная форма */}
      <section id="zayavka" className="py-14 md:py-20 bg-gradient-to-b from-background to-surface">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="font-display text-3xl md:text-5xl leading-[1.05]">
              Получите консультацию и узнайте, подходит ли вам биоревитализация
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Если биоревитализация вам не подходит, врач честно скажет об этом на консультации.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-start max-w-4xl mx-auto">
            <div className="flex flex-col">
              {/* Cost block first */}
              <div className="rounded-xl border-2 border-primary/10 bg-card p-6 shadow-md mb-6">
                <div className="badge-urgency mb-3">
                  <span className="dot" />
                  Спецпредложение действует до 30 июня
                </div>
                <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Стоимость комплекса</div>
                <div className="flex items-baseline gap-3 mt-1.5">
                  <span className="font-display text-4xl text-primary font-semibold">13 000 ₽</span>
                  <span className="text-[var(--color-price-old)] line-through text-lg">23 000 ₽</span>
                  <span className="badge-soft font-semibold bg-accent/10 border-accent/30 text-accent-foreground">−10 000 ₽</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Комплекс включает лицо, шею и кисти рук.</p>
              </div>

              {/* Advantages list second */}
              <ul className="space-y-2.5 text-[15px]">
                <li className="flex gap-2.5"><span className="text-accent mt-1.5">●</span> Процедуру проводит врач-косметолог с опытом более 12 лет</li>
                <li className="flex gap-2.5"><span className="text-accent mt-1.5">●</span> Используются сертифицированные препараты профессиональной линейки</li>
                <li className="flex gap-2.5"><span className="text-accent mt-1.5">●</span> Медицинский центр имеет лицензию на оказание услуг по косметологии</li>
                <li className="flex gap-2.5"><span className="text-accent mt-1.5">●</span> Консультация врача-косметолога включена в стоимость</li>
              </ul>
            </div>
            <LeadForm submitText="Получить консультацию" />
          </div>
        </div>
      </section>

      {/* BLOCK 11 — контакты */}
      <section className="container-page py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Logo className="text-primary" />
            <p className="text-sm text-muted-foreground mt-4">
              Медицинский центр «Здоровье нации»<br />
              Врачебная косметология в Липецке. Консультации и процедуры под контролем врача-косметолога.
            </p>
          </div>
          <div className="space-y-2 text-sm">
            <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground mb-2">Запись на консультацию</div>
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
            src="https://yandex.ru/map-widget/v1/?ll=39.591549%2C52.607412&z=16&pt=39.591549%2C52.607412%2Cpm2rdm"
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
