import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Moon, Sparkles, Droplet, Clock, Leaf, Activity, Check } from "lucide-react";
import doctorOfficeImg from "@/assets/doctor-office.jpg";
import doctorPortraitImg from "@/assets/doctor-portrait.jpg";
import cabinetImg from "@/assets/cabinet.jpg";
import atlantisBright from "@/assets/atlantis-bright.jpg";
import atlantisAmber from "@/assets/atlantis-amber.jpg";
import atlantisBrightFull from "@/assets/atlantis-bright-full.png";
import atlantisAmberFull from "@/assets/atlantis-amber-full.png";
import procedure1 from "@/assets/procedure-1.jpg";
import procedure2 from "@/assets/procedure-2.jpg";
import procedure3 from "@/assets/procedure-3.jpg";
import review1 from "@/assets/review-1.png";
import review2 from "@/assets/review-2.png";
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
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Montserrat:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function SectionTitle({ kicker, title, sub }: { kicker?: string; title: React.ReactNode; sub?: React.ReactNode }) {
  return (
    <div className="max-w-3xl mb-8 md:mb-10">
      {kicker && (
        <div className="text-xs uppercase tracking-[0.18em] text-primary mb-2.5">{kicker}</div>
      )}
      <h2 className="font-display text-4xl md:text-5xl leading-[1.1] md:leading-[1.05]">{title}</h2>
      {sub && <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-2xl">{sub}</p>}
    </div>
  );
}

function Index() {
  const [activePhoto, setActivePhoto] = useState<string | null>(null);

  useEffect(() => {
    if (!activePhoto) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActivePhoto(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePhoto]);

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
          <div className="flex items-center gap-4">
            <Logo className="text-primary" />
            <div className="hidden sm:block h-8 w-px bg-border" />
            <span className="hidden sm:inline text-xs text-muted-foreground leading-tight font-medium">
              Частная семейная<br />
              клиника в Липецке
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <a href="tel:+74742370363" className="hover:text-foreground font-medium">+7 (474) 237-03-63</a>
            <span>Липецк, Октябрьская, 61</span>
          </div>
          <a href="#zayavka" className="hidden sm:inline-flex items-center justify-center border border-primary text-primary hover:bg-surface-soft transition-colors text-sm font-semibold py-2 px-5 rounded-lg">Записаться</a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-surface to-background" />
        <div className="container-page grid md:grid-cols-12 gap-8 md:gap-10 py-8 md:py-14 items-stretch">
          <div className="md:col-span-7 order-1 flex flex-col justify-between h-full">
            <div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-[54px] leading-[1.1] md:leading-[1.05]">
                Биоревитализация лица,<br className="hidden sm:inline" /> шеи и кистей рук
                <span className="block text-primary text-lg md:text-xl mt-3 font-semibold font-sans leading-tight">
                  + консультация врача перед процедурой <span className="inline-block bg-accent/15 text-accent-foreground px-2.5 py-0.5 rounded-md text-sm md:text-base font-bold border border-accent/20 tracking-wide">бесплатно</span>
                </span>
              </h1>
              <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-xl">
                Комплекс для тех, кто хочет более свежий и ухоженный внешний вид без радикальных изменений.
              </p>

              {/* Price block */}
              <div className="mt-6 flex flex-wrap gap-4 items-start">
                <div className="flex-1 sm:flex-initial min-w-[200px] rounded-2xl bg-card border border-border p-4 flex flex-col shadow-sm">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/10 text-[10px] font-bold text-primary tracking-wider uppercase leading-none">
                      Цена комплекса
                    </span>
                    <div className="flex items-baseline gap-2 mt-2.5">
                      <span className="font-display text-3xl md:text-4xl text-primary font-bold leading-none">13 000 ₽</span>
                      <span className="text-[var(--color-price-old)] line-through text-sm">23 000 ₽</span>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-2.5 font-medium">
                    Консультация включена
                  </div>
                </div>

                <div className="flex-1 sm:flex-initial min-w-[200px] relative overflow-hidden rounded-2xl bg-accent/8 border border-accent/30 p-4 flex flex-col shadow-sm">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-accent/15 rounded-full blur-2xl -mr-6 -mt-6 pointer-events-none" />
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-accent/15 text-[10px] font-bold text-accent-foreground tracking-wider uppercase leading-none">
                      Ваша выгода
                    </span>
                    <div className="font-display text-3xl md:text-4xl text-accent-foreground font-semibold leading-none mt-2.5">
                      −10 000 ₽
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-2.5 font-medium">
                    3 зоны по цене одной
                  </div>
                </div>
              </div>

            </div>

            <div className="mt-6">
              <a href="#zayavka" className="btn-primary w-full sm:w-auto">Узнать, подойдёт ли мне процедура →</a>
              <p className="mt-2.5 text-xs text-muted-foreground">
                Администратор свяжется с вами и подберёт удобное время.
              </p>
            </div>
          </div>

          <div className="md:col-span-5 order-2 flex flex-col">
            <div className="relative h-full flex flex-col">
              <div className="absolute -inset-4 bg-surface-soft/50 rounded-[2rem] -z-10" />
              <img
                src={cabinetImg}
                alt="Врач-косметолог Перова Екатерина Александровна"
                width={1024}
                height={1280}
                className="rounded-2xl shadow-xl object-cover w-full h-full min-h-[400px] md:min-h-0"
              />
              <div className="absolute -bottom-5 -left-5 bg-card border rounded-xl p-4 shadow-lg max-w-[250px] hidden md:block">
                <div className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">ваш врач-косметолог</div>
                <div className="font-display text-lg leading-tight mt-1">Перова Екатерина Александровна</div>
                <div className="mt-2.5 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/25 text-[10px] font-bold text-primary tracking-wide uppercase leading-none">
                  Стаж с 2013 года
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 2 — кому подходит */}
      <section className="container-page py-12 md:py-16">
        <SectionTitle
          kicker="Кому подходит"
          title={
            <>
              Биоревитализация может подойти,<br className="hidden sm:inline" /> если вы замечаете:
            </>
          }
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              t: "Отражение выглядит более уставшим, чем вы себя ощущаете",
              d: "Вы хорошо себя чувствуете, но всё чаще кажется, что лицо выглядит уставшим. Даже после выходных, отпуска или хорошего сна отражение уже не радует так, как раньше.",
              i: Moon,
            },
            {
              t: "Домашний уход уже не даёт привычного эффекта",
              d: "Кремы, сыворотки и маски остаются частью ухода, но их становится недостаточно. Хочется более заметного результата и ощущения, что кожа действительно получает необходимое увлажнённости.",
              i: Activity,
            },
            {
              t: "Кажется, что лицо потеряло свежесть",
              d: "Не обязательно появились глубокие морщины. Но лицо выглядит менее живым, менее сияющим и менее ухоженным, чем несколько лет назад.",
              i: Sparkles,
            },
            {
              t: "Кожа всё чаще кажется сухой и требует больше ухода",
              d: "Приходится чаще пользоваться кремами и сыворотками, но ощущение увлажнённости и комфорта сохраняется ненадолго.",
              i: Droplet,
            },
            {
              t: "Шея начинает выдавать возраст",
              d: "Лицо ещё радует отражением в зеркале, а вот шея всё чаще напоминает о возрасте. Нередко именно она начинает привлекать внимание раньше, чем появляются выраженные возрастные изменения на лице.",
              i: Clock,
            },
            {
              t: "Хочется выглядеть моложе, но естественно",
              d: "Без резких изменений внешности, без эффекта «сделанного лица» и без страха потерять свою естественность и индивидуальность.",
              i: Leaf,
            },
          ].map((it) => {
            const Icon = it.i;
            return (
              <div key={it.t} className="rounded-2xl border bg-card p-5 md:p-6 flex flex-col gap-3 hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary shrink-0">
                    <Icon className="w-5 h-5" />
                  </span>
                  <h3 className="font-sans text-base md:text-lg font-semibold leading-snug text-foreground">{it.t}</h3>
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{it.d}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* BLOCK 3 — комплекс и цена */}
      <section className="bg-surface py-12 md:py-16 border-y">
        <div className="container-page grid md:grid-cols-2 gap-10 items-stretch">
          <div className="flex flex-col justify-between">
            <div>
              <SectionTitle
                kicker="Что входит в комплекс"
                title="Комплекс биоревитализации"
                sub="Лицо, шею и кисти рук требуют внимания одновременно. Именно поэтому в комплекс входят все три зоны и консультация врача-косметолога."
              />
              <ul className="space-y-2.5">
                {[
                  ["Консультация врача-косметолога", "Врач оценит состояние кожи, ответит на вопросы и поможет подобрать оптимальный вариант процедуры."],
                  ["Биоревитализация лица", "Для более свежего, увлажнённого и ухоженного внешнего вида кожи лица."],
                  ["Биоревитализация шеи", "Для зоны, которая одной из первых начинает напоминать о возрасте и часто остаётся без внимания."],
                  ["Биоревитализация кистей рук", "Для кожи рук, которая ежедневно находится на виду и также нуждается в уходе и увлажнённости."],
                  ["Индивидуальный подбор препарата", "Врач подберёт препарат с учётом состояния кожи и целей процедуры."],
                  ["Рекомендации после процедуры", "Подробные рекомендации для восстановления и сохранения результата после процедуры."],
                ].map(([t, s]) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <div>
                      <div className="font-sans text-base md:text-lg font-semibold text-foreground">{t}</div>
                      <div className="text-sm md:text-base text-muted-foreground">{s}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="rounded-2xl bg-card border border-border p-7 md:p-9 shadow-xl flex flex-col justify-between">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-primary mb-1.5">Стоимость комплекса</div>
              <div className="mt-2.5 flex items-baseline gap-3 flex-wrap">
                <span className="font-display text-5xl md:text-6xl text-primary font-bold leading-none">13 000 ₽</span>
                <span className="text-[var(--color-price-old)] line-through text-lg">23 000 ₽</span>
              </div>
              <div className="mt-5 rounded-xl bg-surface-soft border border-accent/25 p-4.5 shadow-sm">
                <div className="text-[10px] uppercase tracking-[0.14em] text-accent-foreground/80 font-bold leading-relaxed">
                  экономия по сравнению со стандартной стоимостью комплекса
                </div>
                <div className="font-display text-3xl text-primary font-semibold mt-1">−10 000 ₽</div>
              </div>
              <div className="divider-rule my-7" />
              <ul className="space-y-4 text-sm md:text-base text-muted-foreground">
                <li className="flex items-start gap-2.5">
                  <Check className="text-accent w-4.5 h-4.5 shrink-0 mt-0.5" />
                  <span>Процедуру проводит врач-косметолог с опытом более 12 лет</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="text-accent w-4.5 h-4.5 shrink-0 mt-0.5" />
                  <span>Используются сертифицированные препараты профессиональной линейки</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="text-accent w-4.5 h-4.5 shrink-0 mt-0.5" />
                  <span>Медицинский центр имеет лицензию на оказание услуг по косметологии</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="text-accent w-4.5 h-4.5 shrink-0 mt-0.5" />
                  <span>Консультация врача-косметолога включена в стоимость</span>
                </li>
              </ul>
            </div>
            <div>
              <a href="#zayavka" className="btn-primary mt-9 w-full">Записаться на консультацию →</a>
              <p className="mt-3.5 text-xs text-muted-foreground">Запись не обязывает к проведению процедуры</p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 4 — ВРАЧ */}
      <section className="container-page py-12 md:py-16">
        <div className="grid md:grid-cols-12 gap-10 items-stretch">
          <div className="md:col-span-5 flex flex-col">
            <img
              src={doctorPortraitImg}
              alt="Перова Екатерина Александровна, врач-косметолог"
              loading="lazy"
              width={1024}
              height={1280}
              className="rounded-2xl object-cover w-full h-full border shadow-lg min-h-[450px] md:min-h-0"
            />
          </div>
          <div className="md:col-span-7 flex flex-col justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-primary mb-2">Ваш врач</div>
              <h2 className="font-display text-4xl md:text-5xl leading-[1.1] md:leading-[1.05]">Перова Екатерина Александровна</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Врач-косметолог", "Врач-дерматовенеролог", "Стаж с 2013 года", "I квалификационная категория"].map((b) => (
                  <span key={b} className="badge-soft">{b}</span>
                ))}
              </div>

              <p className="mt-4 text-sm md:text-base leading-relaxed text-muted-foreground max-w-xl">
                Екатерина Александровна специализируется на инъекционной косметологии и помогает пациентам сохранять естественный и ухоженный внешний вид без радикальных изменений внешности.
              </p>

              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                <div className="rounded-xl bg-surface border p-4.5">
                  <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-primary mb-2.5 block border-b pb-1.5 border-primary/15">Образование</div>
                  <p className="text-sm md:text-base leading-relaxed">Воронежская гос. медицинская академия им. Н. Н. Бурденко, 2012</p>
                  <p className="text-sm md:text-base leading-relaxed mt-2.5 pt-2 border-t border-dashed border-border">Интернатура по дерматовенерологии, 2013</p>
                </div>
                <div className="rounded-xl bg-surface border p-4.5">
                  <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-primary mb-2.5 block border-b pb-1.5 border-primary/15">Специализации</div>
                  <p className="text-sm md:text-base leading-relaxed">Профессиональная переподготовка по косметологии</p>
                  <p className="text-sm md:text-base leading-relaxed mt-2.5 pt-2 border-t border-dashed border-border">Регулярное повышение квалификации по инъекционным методикам</p>
                </div>
              </div>

              <div className="mt-4 rounded-xl border-l-2 border-accent bg-card p-4">
                <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground mb-1.5">Подход врача</div>
                <p className="text-sm md:text-base">
                  Основной акцент — на качестве кожи, естественном результате и процедурах, которые помогают выглядеть более свежо и ухоженно без радикальных изменений внешности.
                </p>
              </div>

              <div className="mt-4 rounded-xl border-l-2 border-primary bg-card p-4">
                <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground mb-1.5">Ожидаемый результат</div>
                <p className="text-sm md:text-base font-semibold text-primary">
                  Более свежий и ухоженный внешний вид без эффекта «сделанного» лица
                </p>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <a href="#zayavka" className="btn-primary">Записаться к врачу-косметологу →</a>
            </div>
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
                s: "Препарат нового поколения с арбутином для осветления, выравнивания тона кожи, борьбы с пигментацией и куперозом. Устраняет тусклый и неровный цвет кожи, придает естественное сияние.",
                img: atlantisBrightFull,
              },
              {
                t: "ATLANTIS AMBER",
                s: "Препарат с янтарной кислотой (сукцинатом натрия) для глубокого увлажнения, гладкости, плотности и упругости кожи, устранения отеков, улучшения микроциркуляции и уменьшения мелких морщин.",
                img: atlantisAmberFull,
              },
            ].map((p) => (
              <div key={p.t} className="rounded-2xl bg-card border overflow-hidden flex flex-col sm:flex-row">
                <button
                  onClick={() => setActivePhoto(p.img)}
                  className="sm:w-2/5 bg-surface-soft/50 flex items-center justify-center p-4 focus:outline-none focus:ring-2 focus:ring-primary hover:bg-surface-soft/80 transition-colors cursor-zoom-in group"
                  title="Нажмите, чтобы увеличить изображение"
                  aria-label={`Увеличить изображение ${p.t}`}
                >
                  <img
                    src={p.img}
                    alt={p.t}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="w-full max-w-[150px] aspect-square object-contain rounded-xl transition-transform duration-300 group-hover:scale-105"
                  />
                </button>
                <div className="p-6 sm:w-3/5">
                  <div className="text-xs uppercase tracking-[0.14em] text-primary mb-1.5">Медицинский препарат</div>
                  <div className="font-sans text-base md:text-lg font-semibold text-primary">{p.t}</div>
                  <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">{p.s}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5 text-xs">
                    <span className="badge-soft">Сертифицирован</span>
                    <span className="badge-soft border-accent/30 text-accent-foreground bg-accent/5">Подбор после консультации врача</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-xl border-l-2 border-primary bg-card p-4 max-w-3xl">
            <div className="font-sans text-base md:text-lg font-semibold text-primary">Препарат подбирает врач — не пациент</div>
            <p className="text-sm md:text-base text-muted-foreground mt-1">
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
                <Check className="text-primary w-4.5 h-4.5 shrink-0 mt-1" />
                <span className="font-sans text-base md:text-lg font-semibold text-foreground">{c.t}</span>
              </div>
              <p className="text-sm md:text-base text-muted-foreground pl-7 leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-sm md:text-base text-muted-foreground max-w-3xl">
          Если врач увидит противопоказания, он предложит другой вариант ухода или лечения.
        </p>
      </section>

      {/* BLOCK 7 — как проходит */}
      <section className="bg-surface border-y py-12 md:py-16">
        <div className="container-page">
          <SectionTitle
            kicker="Этапы процедуры"
            title="Как проходит процедура"
            sub={
              <>
                Процедура занимает <span className="font-semibold text-primary underline decoration-accent/40 decoration-2 underline-offset-2">40–60 минут</span>. Перед началом врач проводит осмотр кожи, а после процедуры даёт рекомендации по уходу.
              </>
            }
          />
          <div className="space-y-6">
            <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                ["Консультация и осмотр", "Врач оценит состояние кожи, ответит на вопросы и определит оптимальный план проведения процедуры."],
                ["Подготовка кожи", "Кожа очищается и подготавливается к процедуре. При необходимости врач использует аппликационную анестезию."],
                ["Проведение процедуры", <>Врач выполняет инъекции в выбранные зоны. В зависимости от объёма работы процедура обычно занимает <strong className="font-semibold text-primary">от 40 до 60 минут</strong>.</>],
                ["Рекомендации после процедуры", "Врач расскажет об особенностях восстановления, уходе за кожей и ответит на вопросы, которые могут возникнуть после процедуры."],
              ].map(([t, s], i) => (
                <li key={t} className="rounded-2xl bg-card border p-5 md:p-6 flex flex-col gap-2 hover:border-primary/30 transition-colors shadow-sm">
                  <div className="font-display text-3xl text-primary font-semibold">0{i + 1}</div>
                  <h3 className="font-sans text-base md:text-lg font-semibold text-foreground mt-1">{t}</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mt-1.5">{s}</p>
                </li>
              ))}
            </ol>
            <div className="rounded-2xl border border-primary/10 bg-card p-6 shadow-sm">
              <div className="flex gap-4 items-start">
                <span className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <Sparkles className="w-5 h-5" />
                </span>
                <div>
                  <h4 className="font-sans text-base md:text-lg font-semibold text-primary">После процедуры можно вернуться к привычным делам <span className="font-bold underline decoration-accent/40 decoration-2 underline-offset-2 text-primary">в&nbsp;тот&nbsp;же&nbsp;день</span></h4>
                  <p className="text-sm md:text-base text-muted-foreground mt-1.5 leading-relaxed">
                    После биоревитализации не требуется длительного восстановления. Однако в местах инъекций могут временно сохраняться небольшие следы или синяки. Это нормальная реакция кожи, которая обычно проходит самостоятельно.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 8 — отзывы */}
      <section className="container-page py-12 md:py-16">
        <SectionTitle
          kicker="Отзывы"
          title="Что отмечают пациенты после&nbsp;процедуры"
          sub="Отзывы пациентов после биоревитализации у Екатерины Перовой"
        />
        <div className="mt-8">
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            <div className="rounded-2xl border bg-card p-6 md:p-8 shadow-sm flex flex-col justify-center items-start text-left">
              <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground mb-3">Рейтинг врача</div>
              <div className="font-display text-5xl md:text-6xl text-primary font-bold">4,9 <span className="text-xl md:text-2xl font-sans text-muted-foreground font-normal">из 5</span></div>
              <div className="flex gap-1.5 text-accent text-2xl my-3.5">★★★★★</div>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                на основании отзывов пациентов на портале Продокторов
              </p>
            </div>
            <button 
              onClick={() => setActivePhoto(review1)} 
              className="focus:outline-none focus:ring-2 focus:ring-primary rounded-2xl overflow-hidden shadow-md transition-transform hover:scale-[1.02] active:scale-[0.99] cursor-zoom-in border bg-white p-4 flex items-center justify-center h-full w-full"
              aria-label="Увеличить отзыв 1"
            >
              <img src={review1} alt="Отзыв пациента на Продокторов 1" loading="lazy" className="object-contain max-h-full max-w-full" />
            </button>
            <button 
              onClick={() => setActivePhoto(review2)} 
              className="focus:outline-none focus:ring-2 focus:ring-primary rounded-2xl overflow-hidden shadow-md transition-transform hover:scale-[1.02] active:scale-[0.99] cursor-zoom-in border bg-white p-4 flex items-center justify-center h-full w-full"
              aria-label="Увеличить отзыв 2"
            >
              <img src={review2} alt="Отзыв пациента на Продокторов 2" loading="lazy" className="object-contain max-h-full max-w-full" />
            </button>
          </div>
          <p className="text-xs text-muted-foreground text-left mt-4">
            Отзывы опубликованы на независимом медицинском портале Продокторов.
          </p>
        </div>
      </section>

      {/* BLOCK 9 — FAQ */}
      <section className="bg-surface border-y py-12 md:py-16">
        <div className="container-page">
          <SectionTitle title="Частые вопросы" />
          <div className="grid md:grid-cols-12 gap-8 items-stretch">
            <div className="md:col-span-4 flex flex-col">
              <img src={procedure3} alt="Ресепшен клиники Здоровье Нации" loading="lazy" className="rounded-2xl border object-cover w-full h-full shadow-md min-h-[350px] md:min-h-0" />
            </div>
            <div className="md:col-span-8 bg-card rounded-2xl border p-6 md:p-8 shadow-sm">
              <Faq />
            </div>
          </div>
          <div className="mt-12 max-w-xl">
            <h3 className="font-display text-2xl text-primary leading-tight">Не нашли ответ на свой вопрос?</h3>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              Оставьте заявку, и администратор медицинского центра свяжется с вами и подробно проконсультирует.
            </p>
            <a href="#zayavka" className="btn-primary mt-5">Получить консультацию →</a>
          </div>
        </div>
      </section>

      {/* BLOCK 10 — финальная форма */}
      <section id="zayavka" className="py-14 md:py-20 bg-gradient-to-b from-background to-surface">
        <div className="container-page">
          <div className="max-w-2xl mb-8">
            <h2 className="font-display text-4xl md:text-6xl leading-[1.1] md:leading-[1.05]">
              Получите консультацию и узнайте, подходит ли вам биоревитализация
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Если биоревитализация вам не подходит, врач честно скажет об этом на консультации.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-stretch">
            <div className="rounded-2xl border bg-card p-6 md:p-8 shadow-md flex flex-col justify-between h-full">
              <div>
                <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground font-semibold">СТОИМОСТЬ КОМПЛЕКСА</div>
                <div className="flex items-baseline gap-3 mt-1.5 flex-wrap">
                  <span className="font-display text-4xl text-primary font-bold">13 000 ₽</span>
                  <span className="text-[var(--color-price-old)] line-through text-lg">23 000 ₽</span>
                  <span className="text-primary font-semibold text-sm">[ Экономия 10 000 ₽ ]</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2.5 font-medium">Комплекс включает: лицо, шею и кисти рук</p>

                <div className="border-t my-6 border-border" />

                {/* Advantages list second */}
                <ul className="space-y-4 text-sm md:text-base text-muted-foreground">
                  <li className="flex gap-3 items-start">
                    <Check className="text-accent w-5 h-5 shrink-0 mt-0.5" />
                    <span>Консультация врача-косметолога включена в стоимость</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Check className="text-accent w-5 h-5 shrink-0 mt-0.5" />
                    <span>Лицо, шея и кисти рук за одну процедуру</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Check className="text-accent w-5 h-5 shrink-0 mt-0.5" />
                    <span>Подбор препарата индивидуально</span>
                  </li>
                </ul>
              </div>
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
            <p className="text-sm text-muted-foreground mt-4 animate-fade-in">
              Медицинский центр «Здоровье нации»<br />
              Врачебная косметология в Липецке. Консультации и процедуры под контролем врача-косметолога.
            </p>
            <div className="flex gap-3 mt-4 flex-wrap">
              <a
                href="https://vk.com/zdorovie_nacii48"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-xl border bg-card text-muted-foreground hover:text-[#0077FF] hover:border-[#0077FF]/40 hover:bg-[#0077FF]/5 transition-all duration-300 shadow-sm"
                title="Мы ВКонтакте"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.14 2H4.86A2.86 2.86 0 0 0 2 4.86v14.28A2.86 2.86 0 0 0 4.86 22h14.28a2.86 2.86 0 0 0 2.86-2.86V4.86A2.86 2.86 0 0 0 19.14 2zm-2.83 13.56c-.63.63-1.69.91-3.23.91h-1.07c-2.31 0-4.59-1.15-5.96-3.83A14.9 14.9 0 0 1 5 8.79a.78.78 0 0 1 .78-.79h1.5a.78.78 0 0 1 .78.67c.36 1.13.93 2.13 1.69 2.92.23.23.44.33.61.33.26 0 .4-.18.4-.67V9.38c0-.75-.22-1.08-.83-1.18a.4.4 0 0 1-.29-.39.77.77 0 0 1 .77-.77h2.36a.78.78 0 0 1 .78.78v3.2c0 .35.08.53.24.53s.31-.13.57-.45a13.31 13.31 0 0 0 1.62-2.73.8.8 0 0 1 .76-.54h1.5a.78.78 0 0 1 .77.89 12.28 12.28 0 0 1-1.28 2.65c-.21.3-.33.47-.23.63.1.15.42.44.85.88a9.49 9.49 0 0 1 1.77 2.61.78.78 0 0 1-.72 1.07z"/>
                </svg>
              </a>
              <a
                href="https://ok.ru/zdorovie_nacii48"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-xl border bg-card text-muted-foreground hover:text-[#EE8208] hover:border-[#EE8208]/40 hover:bg-[#EE8208]/5 transition-all duration-300 shadow-sm"
                title="Мы в Одноклассниках"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2c-2.48 0-4.5 2.02-4.5 4.5S9.52 11 12 11s4.5-2.02 4.5-4.5S14.48 2 12 2zm0 7c-1.38 0-2.5-1.12-2.5-2.5S10.62 4 12 4s2.5 1.12 2.5 2.5S13.38 9 12 9zm0 3.5c-3.25 0-6.23 1.25-8.08 3.32a1 1 0 1 0 1.49 1.34C6.91 16.03 9.3 15 12 15s5.09 1.03 6.59 2.16a1 1 0 0 0 1.49-1.34c-1.85-2.07-4.83-3.32-8.08-3.32zm0 4.5a1.5 1.5 0 0 0-1.36.88l-1.92 1.92a1 1 0 1 0 1.42 1.42l1.63-1.63 1.63 1.63a1 1 0 0 0 1.42-1.42l-1.92-1.92A1.5 1.5 0 0 0 12 17z" />
                </svg>
              </a>
              <a
                href="https://t.me/zdorovie48"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-xl border bg-card text-muted-foreground hover:text-[#24A1DE] hover:border-[#24A1DE]/40 hover:bg-[#24A1DE]/5 transition-all duration-300 shadow-sm"
                title="Наш Telegram-канал"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.35-.49.97-.74 3.79-1.65 6.32-2.73 7.57-3.26 3.6-1.5 4.35-1.76 4.84-1.77.11 0 .35.03.51.16.13.11.17.27.19.38.02.13.02.26 0 .4z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground mb-2">Запись на консультацию</div>
            <div><a href="tel:+74742370363" className="hover:text-primary font-medium">+7 (474) 237-03-63</a></div>
            <div>
              <a
                href="https://yandex.ru/maps/?text=Липецк, ул. Октябрьская, 61"
                target="_blank" rel="noreferrer"
                className="hover:text-primary"
              >Липецк, ул. Октябрьская, 61</a>
            </div>
            <div className="text-muted-foreground space-y-0.5">
              <div>Пн–Пт: 08:00–21:00</div>
              <div>Сб: 08:00–18:00</div>
              <div>Вс: 09:00–18:00</div>
            </div>
          </div>
          <div className="text-xs text-muted-foreground space-y-1.5">
            <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground mb-2">Юридическая информация</div>
            <div>ООО «Мать и дитя»</div>
            <div>Адрес: Липецк, ул. Фрунзе, дом 14, помещение №3</div>
            <div>Лицензия № Л041-01195-48/00318538 от 18.01.2018</div>
            <div>ИНН 4826040251</div>
          </div>
        </div>
        <div className="mt-8 rounded-2xl overflow-hidden border aspect-[16/6]">
          <iframe
            title="Карта"
            src="https://yandex.ru/map-widget/v1/?ll=39.592617%2C52.601421&z=16&pt=39.592617%2C52.601421%2Cpm2rdm"
            width="100%" height="100%" loading="lazy"
            style={{ border: 0 }}
          />
        </div>
        <div className="mt-8 pt-8 border-t text-left flex flex-col gap-6">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Медицинский центр «Здоровье нации». Все права защищены.
          </p>
          <div className="text-left text-muted-foreground/60 font-sans font-bold tracking-[0.25em] text-sm sm:text-base md:text-xl uppercase p-4 border border-dashed rounded-xl select-none">
            ИМЕЮТСЯ ПРОТИВОПОКАЗАНИЯ, НЕОБХОДИМА КОНСУЛЬТАЦИЯ СПЕЦИАЛИСТА
          </div>
        </div>
      </section>

      {activePhoto && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 cursor-zoom-out animate-fade-in"
          onClick={() => setActivePhoto(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute -top-10 right-0 md:-right-10 text-white text-4xl font-light hover:text-gray-300 focus:outline-none cursor-pointer"
              onClick={() => setActivePhoto(null)}
              aria-label="Закрыть"
            >
              &times;
            </button>
            <img
              src={activePhoto}
              alt="Увеличенное изображение"
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl transition-transform duration-300 scale-100"
            />
          </div>
        </div>
      )}
    </div>
  );
}
