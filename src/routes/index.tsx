import { useState, useEffect, useCallback } from "react";
import { createFileRoute } from "@tanstack/react-router";
import useEmblaCarousel from "embla-carousel-react";
import { Moon, Sparkles, Droplet, Clock, Leaf, Activity, Check, Phone, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import doctorOfficeImg from "@/assets/doctor-office.jpg";
import doctorWhiteImg from "@/assets/doctor-white.png";
import cabinetImg from "@/assets/cabinet.jpg";
import emptyCabinetImg from "@/assets/empty-cabinet.png";
import procedureVideo1 from "@/assets/procedure-video-1.mp4";
import procedureVideo2 from "@/assets/procedure-video-2.mp4";
import atlantisBrightFull from "@/assets/atlantis-bright-full.png";
import atlantisAmberFull from "@/assets/atlantis-amber-full.png";
import procedure3 from "@/assets/procedure-3.jpg";
import review1 from "@/assets/review-1.png";
import review2 from "@/assets/review-2.png";
import review3 from "@/assets/review-3.jpg";
import review4 from "@/assets/review-4.jpg";
import review5 from "@/assets/review-5.jpg";
import review6 from "@/assets/review-6.jpg";
import review7 from "@/assets/review-7.jpg";
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
  const [showAllReasons, setShowAllReasons] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", containScroll: "trimSnaps" });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

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
              Медицинский<br />
              центр
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <a href="tel:+74742370363" className="hover:text-foreground font-medium">+7 (474) 237-03-63</a>
            <span>Липецк, Октябрьская, 61</span>
          </div>
          <div className="flex items-center gap-3">
            <a href="tel:+74742370363" className="md:hidden flex items-center justify-center border border-primary text-primary hover:bg-surface-soft transition-colors text-sm font-semibold py-1.5 px-3 rounded-lg gap-2">
              <Phone className="w-4 h-4" />
              <span>Позвонить</span>
            </a>
            <a href="#zayavka" className="hidden md:inline-flex items-center justify-center border border-primary text-primary hover:bg-surface-soft transition-colors text-sm font-semibold py-2 px-5 rounded-lg">Записаться</a>
          </div>
        </div>
      </header>

      {/* Floating social widget */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
        <a href="https://max.ru/zdorovie_nacii48" target="_blank" rel="noreferrer" className="w-12 h-12 bg-primary rounded-full shadow-lg flex items-center justify-center text-white hover:scale-110 transition-transform" aria-label="Связаться">
          <MessageCircle className="w-6 h-6" />
        </a>
        <a href="https://t.me/zdorovie48" target="_blank" rel="noreferrer" className="w-12 h-12 bg-[#0088cc] rounded-full shadow-lg flex items-center justify-center text-white hover:scale-110 transition-transform" aria-label="Написать в Telegram">
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.892-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
        </a>
        <a href="https://vk.com/zdorovie_nacii48" target="_blank" rel="noreferrer" className="w-12 h-12 bg-[#0077FF] rounded-full shadow-lg flex items-center justify-center text-white hover:scale-110 transition-transform" aria-label="Написать в ВКонтакте">
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M15.077 2H8.923C3.654 2 2 3.654 2 8.923v6.154C2 20.346 3.654 22 8.923 22h6.154C20.346 22 22 20.346 22 15.077V8.923C22 3.654 20.346 2 15.077 2zm3.327 13.577c.365.365.73.712 1.077 1.096.385.423.808.827 1.154 1.308.231.308.058.692-.308.692h-1.904c-.385 0-.692-.154-.923-.462-.327-.442-.654-.885-.981-1.346-.173-.25-.346-.481-.558-.712-.212-.212-.442-.231-.635-.058-.288.25-.385.596-.385.981v1.173c0 .327-.135.423-.462.423h-1.462c-2.327-.096-4.23-1.077-5.75-2.885-1.788-2.115-3.077-4.577-4.135-7.192-.115-.288 0-.462.308-.462h1.981c.269 0 .442.135.538.385.808 2.058 1.846 3.923 3.327 5.462.173.192.346.212.519.096.25-.154.346-.385.346-.692V9.019c0-.462-.135-.692-.558-.788-.192-.038-.192-.096-.077-.231.192-.192.423-.269.75-.269h2.385c.288.058.385.212.385.519v3.423c0 .288.192.365.365.212.192-.192.385-.404.558-.615 1.058-1.288 1.846-2.731 2.481-4.25.077-.212.212-.308.462-.308h2.096c.462 0 .538.212.442.442-.481 1.25-1.154 2.385-1.981 3.442-.327.423-.385.596 0 1z"/></svg>
        </a>
      </div>

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

              {/* Price block */}
              <div className="mt-6 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                <div className="rounded-2xl bg-card border border-border p-4 shadow-sm flex items-center justify-between gap-4">
                  <div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-primary/10 text-[10px] font-bold text-primary tracking-wider uppercase leading-none mb-1.5">
                      Цена комплекса
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-3xl md:text-4xl text-primary font-bold leading-none">13 000 ₽</span>
                      <span className="text-[var(--color-price-old)] line-through text-sm">23 000 ₽</span>
                    </div>
                  </div>
                  <div className="bg-accent/15 border border-accent/20 text-accent-foreground px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap text-center">
                    Выгода<br/>10 000 ₽
                  </div>
                </div>
                <div className="text-xs text-muted-foreground font-medium flex items-center bg-surface-soft p-3 sm:bg-transparent sm:p-0 rounded-xl sm:rounded-none">
                  <Check className="w-4 h-4 text-primary mr-1.5 shrink-0" />
                  3 зоны по цене одной
                </div>
              </div>

            </div>

            <div className="mt-6">
              <a href="#zayavka" className="btn-primary w-full sm:w-auto">Узнать подробности</a>
              <p className="mt-2.5 text-xs text-muted-foreground">
                Администратор свяжется с вами и подберёт удобное время.
              </p>
            </div>
          </div>

          <div className="md:col-span-5 order-2 flex flex-col">
            <div className="relative h-full flex flex-col">
              <div className="absolute -inset-4 bg-surface-soft/50 rounded-[2rem] -z-10" />
              <div className="rounded-2xl shadow-xl overflow-hidden w-full h-full min-h-[300px] sm:min-h-[400px] md:min-h-0 relative z-0">
                <img
                  src={doctorWhiteImg}
                  alt="Врач-косметолог Перова Екатерина Александровна"
                  width={1024}
                  height={1280}
                  className="object-cover object-[center_top] w-full h-full scale-[1.25] translate-y-[5%] brightness-[1.15] contrast-[1.05]"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto bg-card/90 backdrop-blur border rounded-xl p-3 sm:p-4 shadow-lg max-w-[260px] mx-auto sm:mx-0">
                <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.14em] text-muted-foreground">ваш врач-косметолог</div>
                <div className="font-display text-base sm:text-lg leading-tight mt-1">Перова Екатерина Александровна</div>
                <div className="mt-2 inline-flex items-center px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/25 text-[9px] sm:text-[10px] font-bold text-primary tracking-wide uppercase leading-none">
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
          ].slice(0, showAllReasons ? 6 : 3).map((it) => {
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
        {!showAllReasons && (
          <div className="mt-8 flex justify-center">
            <button onClick={() => setShowAllReasons(true)} className="btn-secondary w-full sm:w-auto">Показать еще 3 ситуации</button>
          </div>
        )}
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
              <div className="mt-5 rounded-xl bg-surface-soft border border-accent/25 p-4.5 shadow-sm text-center">
                <div className="font-display text-2xl text-primary font-semibold">Экономия 10 000 ₽</div>
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
              <a href="#zayavka" className="btn-primary mt-9 w-full justify-center text-base sm:text-lg py-3.5">Записаться на консультацию</a>
              <p className="mt-3.5 text-xs text-muted-foreground text-center">Запись не обязывает к проведению процедуры</p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 4 — ВРАЧ */}
      <section className="container-page py-12 md:py-16">
        <div className="grid md:grid-cols-12 gap-10 items-stretch">
          <div className="md:col-span-5 hidden md:flex flex-col">
            <img
              src={doctorOfficeImg}
              alt="Перова Екатерина Александровна, врач-косметолог"
              loading="lazy"
              width={1024}
              height={1280}
              className="rounded-2xl object-cover w-full h-full border shadow-lg"
            />
          </div>
          <div className="md:col-span-7 flex flex-col justify-start">
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-primary mb-2">Ваш врач</div>
              <h2 className="font-display text-4xl md:text-5xl leading-[1.1] md:leading-[1.05]">Перова Екатерина Александровна</h2>
              <div className="mt-4 flex flex-wrap gap-2 mb-6">
                {["Врач-косметолог", "Врач-дерматовенеролог", "Стаж с 2013 года", "I квалификационная категория"].map((b) => (
                  <span key={b} className="badge-soft">{b}</span>
                ))}
              </div>
              
              <div className="md:hidden rounded-2xl overflow-hidden mb-6 h-[400px]">
                <img
                  src={doctorOfficeImg}
                  alt="Перова Екатерина Александровна, врач-косметолог"
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="object-cover object-[center_top] w-full h-full"
                />
              </div>

              <div className="flex justify-center md:justify-start mb-8">
                <a href="#zayavka" className="btn-primary w-full md:w-auto justify-center">Записаться к врачу-косметологу</a>
              </div>
            </div>

            <div className="rounded-xl border-l-2 border-accent bg-card p-4 mt-auto">
              <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground mb-1.5">Подход врача</div>
              <p className="text-sm md:text-base">
                Основной акцент — на качестве кожи, естественном результате и процедурах, которые помогают выглядеть более свежо и ухоженно без радикальных изменений внешности.
              </p>
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
                  className="sm:w-2/5 bg-white flex items-center justify-center p-4 sm:p-6 focus:outline-none focus:ring-2 focus:ring-primary hover:opacity-90 transition-opacity cursor-zoom-in group"
                  title="Нажмите, чтобы увеличить изображение"
                  aria-label={`Увеличить изображение ${p.t}`}
                >
                  <img
                    src={p.img}
                    alt={p.t}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="product-image transition-transform duration-300 group-hover:scale-105"
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
            <div className="font-sans text-base md:text-lg font-semibold text-primary">Конкретный препарат врач выбирает после консультации и оценки состояния кожи</div>
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
          <div className="grid md:grid-cols-12 gap-8 items-stretch mt-8">
            <div className="md:col-span-8 space-y-6">
              <ol className="grid sm:grid-cols-2 gap-5">
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
            <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-1 md:flex md:flex-col gap-4">
              <div className="rounded-2xl overflow-hidden border shadow-lg bg-black group w-full relative">
                <video
                  src={procedureVideo1}
                  controls playsInline
                  preload="metadata"
                  className="w-full h-auto block max-h-[60vh] object-contain mx-auto"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border shadow-lg bg-black group w-full relative">
                <video
                  src={procedureVideo2}
                  controls playsInline
                  preload="metadata"
                  className="w-full h-auto block max-h-[60vh] object-contain mx-auto"
                />
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
            <div className="md:col-span-2 relative flex items-center">
              <button 
                onClick={scrollPrev}
                className="absolute -left-3 sm:-left-5 z-10 w-10 h-10 bg-white border shadow-md rounded-full flex items-center justify-center text-primary hover:bg-surface-soft hover:scale-105 transition-all"
                aria-label="Предыдущий отзыв"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <div className="overflow-hidden -mx-4 px-4 md:mx-0 md:px-0 w-full" ref={emblaRef}>
                <div className="flex gap-4 cursor-grab active:cursor-grabbing h-full">
                  {[review1, review2, review3, review4, review5, review6, review7].map((r, i) => (
                    <div key={i} className="flex-[0_0_85%] sm:flex-[0_0_48%] min-w-0">
                      <button 
                        onClick={() => setActivePhoto(r)} 
                        className="focus:outline-none focus:ring-2 focus:ring-primary rounded-2xl overflow-hidden shadow-md transition-transform hover:scale-[1.02] active:scale-[0.99] cursor-zoom-in border bg-white p-4 flex items-center justify-center h-full w-full"
                        aria-label={`Увеличить отзыв ${i + 1}`}
                      >
                        <img src={r} alt={`Отзыв пациента на Продокторов ${i + 1}`} loading="lazy" className="object-contain max-h-[300px] md:max-h-full max-w-full" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <button 
                onClick={scrollNext}
                className="absolute -right-3 sm:-right-5 z-10 w-10 h-10 bg-white border shadow-md rounded-full flex items-center justify-center text-primary hover:bg-surface-soft hover:scale-105 transition-all"
                aria-label="Следующий отзыв"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
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
              <img src={procedure3} alt="Ресепшен клиники Здоровье Нации" loading="lazy" className="rounded-2xl border object-cover w-full h-full shadow-md min-h-[200px] sm:min-h-[350px] md:min-h-0" />
            </div>
            <div className="md:col-span-8 bg-card rounded-2xl border p-6 md:p-8 shadow-sm">
              <Faq />
              <div className="mt-4 pt-4 md:mt-8 md:pt-8 border-t border-border/60">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-sans text-base md:text-lg font-semibold text-primary leading-tight">Не нашли ответ на свой вопрос?</h3>
                  </div>
                  <a href="#zayavka" className="btn-primary shrink-0 w-full sm:w-auto justify-center">Получить консультацию</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 10 — финальная форма */}
      <section id="zayavka" className="py-14 md:py-20 bg-gradient-to-b from-background to-surface">
        <div className="container-page">
          <div className="max-w-2xl mb-8">
            <h2 className="font-display text-3xl sm:text-4xl md:text-6xl leading-[1.1] md:leading-[1.05]">
              Получите консультацию и узнайте, подходит ли вам биоревитализация
            </h2>
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
