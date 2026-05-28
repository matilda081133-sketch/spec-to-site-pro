import { createFileRoute } from "@tanstack/react-router";
import doctorImg from "@/assets/doctor.jpg";
import cabinetImg from "@/assets/cabinet.jpg";
import { Logo } from "@/components/site/Logo";
import { LeadForm } from "@/components/site/LeadForm";
import { Faq } from "@/components/site/Faq";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Биоревитализация 3 зон — 13 000 ₽ | МЦ «Мать и Дитя», Липецк" },
      {
        name: "description",
        content:
          "Комплекс биоревитализации лица, шеи и кистей рук за 13 000 ₽ вместо 23 000 ₽. Консультация врача-косметолога включена. Медицинский центр в Липецке.",
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
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

function SectionTitle({ kicker, title, sub }: { kicker?: string; title: string; sub?: string }) {
  return (
    <div className="max-w-3xl mb-10 md:mb-14">
      {kicker && (
        <div className="text-xs uppercase tracking-[0.18em] text-accent mb-3">{kicker}</div>
      )}
      <h2 className="font-display text-3xl md:text-5xl leading-[1.05]">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground md:text-lg max-w-2xl">{sub}</p>}
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur sticky top-0 z-40">
        <div className="container-page flex items-center justify-between py-4">
          <Logo className="text-primary" />
          <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <a href="tel:+74742370363" className="hover:text-foreground">+7 (4742) 370-363</a>
            <span>Липецк, Октябрьская, 61</span>
          </div>
          <a href="#zayavka" className="btn-secondary text-sm py-2 px-4 hidden sm:inline-flex">Записаться</a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-surface to-background" />
        <div className="container-page grid md:grid-cols-12 gap-10 md:gap-12 py-10 md:py-20 items-center">
          <div className="md:col-span-7 order-1">
            <div className="text-xs uppercase tracking-[0.18em] text-accent mb-4">
              Врачебная косметология в медицинском центре
            </div>
            <h1 className="font-display text-[2.25rem] sm:text-5xl md:text-[3.75rem] leading-[1.02]">
              Свежая, увлажнённая кожа лица, шеи и&nbsp;рук
              <span className="block text-primary mt-1">за 13 000 ₽</span>
            </h1>
            <p className="mt-5 text-muted-foreground md:text-lg max-w-xl">
              Комплекс биоревитализации 3 зон у врача-косметолога. Консультация перед процедурой включена. Одна процедура — три зоны: лицо, шея и кисти рук.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
              <div className="flex items-baseline gap-3">
                <span className="font-display text-4xl md:text-5xl text-primary">13 000 ₽</span>
                <span className="text-[var(--color-price-old)] line-through text-lg">23 000 ₽</span>
              </div>
              <span className="badge-soft">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Спецпредложение действует до конца месяца
              </span>
            </div>

            <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:items-center">
              <a href="#zayavka" className="btn-primary w-full sm:w-auto">Узнать, подойдёт ли мне процедура</a>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Администратор свяжется с вами, уточнит удобное время и запишет к врачу.
            </p>

            <ul className="mt-8 grid sm:grid-cols-3 gap-3">
              {[
                { t: "3 зоны за одну процедуру", s: "Лицо, шея и кисти рук" },
                { t: "Приём ведёт врач-косметолог", s: "Не салон, а медицинский центр" },
                { t: "Консультация включена", s: "Оценка кожи и противопоказаний" },
              ].map((b) => (
                <li key={b.t} className="rounded-xl border bg-card p-4">
                  <div className="text-sm font-medium">{b.t}</div>
                  <div className="text-xs text-muted-foreground mt-1">{b.s}</div>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-[11px] text-muted-foreground">
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
                className="rounded-2xl shadow-xl object-cover w-full aspect-[4/5]"
              />
              <div className="absolute -bottom-5 -left-5 bg-card border rounded-xl p-4 shadow-lg max-w-[220px] hidden md:block">
                <div className="text-xs text-muted-foreground">Ваш врач</div>
                <div className="font-display text-lg leading-tight">Перова Екатерина Александровна</div>
                <div className="text-xs text-muted-foreground mt-1">Стаж с 2013 года</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 2 — для кого */}
      <section className="container-page py-16 md:py-24">
        <SectionTitle
          kicker="Когда актуальна процедура"
          title="Когда пациенты чаще всего обращаются на биоревитализацию"
          sub="Процедура помогает улучшить качество кожи и восстановить более свежий и ухоженный внешний вид."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Сухость и обезвоженность кожи",
            "Тусклый цвет лица",
            "Ощущение «уставшей» кожи",
            "Снижение упругости",
            "Первые возрастные изменения",
            "Кожа после солнца, стресса и недосыпа",
          ].map((t) => (
            <div key={t} className="rounded-xl border bg-card p-5 flex items-start gap-3">
              <span className="mt-1 w-8 h-8 rounded-full bg-surface-soft text-primary flex items-center justify-center text-sm shrink-0">✓</span>
              <span>{t}</span>
            </div>
          ))}
        </div>
        <p className="mt-8 text-muted-foreground max-w-2xl">
          Биоревитализация не меняет черты лица и не создаёт эффект «переколотого» лица.
        </p>
      </section>

      {/* BLOCK 3 — комплекс */}
      <section className="bg-surface py-16 md:py-24 border-y">
        <div className="container-page grid md:grid-cols-2 gap-12 items-start">
          <div>
            <SectionTitle
              kicker="Что входит в комплекс"
              title="Комплекс биоревитализации 3 зон"
              sub="Одна процедура у врача-косметолога — три ключевые зоны и консультация перед началом."
            />
            <ul className="space-y-3">
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
          <div className="rounded-2xl bg-card border p-8 md:p-10">
            <div className="text-sm uppercase tracking-[0.16em] text-muted-foreground">Стоимость комплекса</div>
            <div className="mt-3 flex items-baseline gap-3">
              <span className="font-display text-6xl text-primary">13 000 ₽</span>
              <span className="text-[var(--color-price-old)] line-through text-xl">23 000 ₽</span>
            </div>
            <div className="mt-2 inline-flex badge-soft">Выгода 10 000 ₽</div>
            <div className="divider-rule my-6" />
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>— Консультация врача-косметолога включена</li>
              <li>— Подбор препарата индивидуально</li>
              <li>— Процедура в лицензированном медицинском центре</li>
              <li>— Спецпредложение действует до конца месяца</li>
            </ul>
            <a href="#zayavka" className="btn-secondary mt-7 w-full">Записаться на консультацию</a>
          </div>
        </div>
      </section>

      {/* BLOCK 4 — врач */}
      <section className="container-page py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5">
            <img
              src={doctorImg}
              alt="Перова Екатерина Александровна, врач-косметолог"
              loading="lazy"
              width={1024}
              height={1280}
              className="rounded-2xl object-cover w-full aspect-[4/5] border"
            />
          </div>
          <div className="md:col-span-7">
            <div className="text-xs uppercase tracking-[0.18em] text-accent mb-3">Ваш врач</div>
            <h2 className="font-display text-3xl md:text-5xl leading-[1.05]">Перова Екатерина Александровна</h2>
            <p className="mt-4 text-muted-foreground md:text-lg max-w-xl">
              Комплексный медицинский подход к качеству кожи без эффекта «переколотого» лица.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Врач-дерматовенеролог", "Врач-косметолог", "Первая квалификационная категория", "Стаж с 2013 года"].map((b) => (
                <span key={b} className="badge-soft">{b}</span>
              ))}
            </div>
            <ul className="mt-7 grid sm:grid-cols-2 gap-3">
              {[
                "Оценка состояния кожи перед процедурой",
                "Индивидуальный подбор препарата",
                "Естественный результат",
                "Работа с качеством кожи, а не только с внешним видом",
              ].map((t) => (
                <li key={t} className="flex gap-2 text-sm">
                  <span className="text-accent">—</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7 rounded-xl bg-surface border p-5">
              <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground mb-2">Образование</div>
              <p className="text-sm">2012 — Воронежская государственная медицинская академия им. Н. Н. Бурденко</p>
              <p className="text-sm mt-1">2013 — Интернатура по специальности «Дерматовенерология»</p>
            </div>
            <a href="#zayavka" className="btn-secondary mt-7">Записаться на консультацию к врачу-косметологу</a>
          </div>
        </div>
      </section>

      {/* BLOCK 5 — препараты */}
      <section className="bg-surface border-y py-16 md:py-24">
        <div className="container-page">
          <SectionTitle
            kicker="Препараты"
            title="Какие препараты используются"
            sub="Для комплекса применяются ATLANTIS BRIGHT или ATLANTIS AMBER. Конкретный препарат врач подбирает индивидуально на консультации."
          />
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { t: "ATLANTIS BRIGHT", s: "Для кожи, которой нужно вернуть более свежий и ровный внешний вид." },
              { t: "ATLANTIS AMBER", s: "Для увлажнения, поддержки качества кожи и более ухоженного внешнего вида." },
            ].map((p) => (
              <div key={p.t} className="rounded-2xl bg-card border p-7">
                <div className="w-12 h-12 rounded-full bg-surface-soft flex items-center justify-center text-primary mb-5">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 2v6m0 0l3-3m-3 3L9 5m-4 8a7 7 0 1014 0 7 7 0 00-14 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </div>
                <div className="font-display text-2xl">{p.t}</div>
                <p className="mt-2 text-muted-foreground">{p.s}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted-foreground max-w-2xl">
            Самостоятельно выбирать препарат не нужно — врач определяет подходящий вариант после консультации и оценки состояния кожи.
          </p>
        </div>
      </section>

      {/* BLOCK 6 — безопасность */}
      <section className="container-page py-16 md:py-24">
        <SectionTitle
          kicker="Безопасность"
          title="Перед процедурой врач оценивает состояние кожи и противопоказания"
          sub="Биоревитализация — медицинская процедура, поэтому перед ней важны консультация, осмотр и индивидуальное решение врача."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Врач уточняет состояние кожи и жалобы пациента",
            "Оценивает возможные противопоказания",
            "Подбирает препарат индивидуально",
            "Оценивает чувствительность кожи",
            "При необходимости использует аппликационную анестезию",
            "Даёт рекомендации после процедуры",
          ].map((t) => (
            <div key={t} className="rounded-xl border bg-card p-5 flex gap-3">
              <span className="text-accent shrink-0 mt-0.5">●</span>
              <span className="text-sm">{t}</span>
            </div>
          ))}
        </div>
        <p className="mt-6 text-muted-foreground max-w-3xl">
          Если врач увидит противопоказания или поймёт, что процедура сейчас не показана, он предложит другой вариант ухода или лечения.
        </p>
      </section>

      {/* BLOCK 7 — как проходит */}
      <section className="bg-surface border-y py-16 md:py-24">
        <div className="container-page">
          <SectionTitle
            kicker="Этапы процедуры"
            title="Как проходит процедура"
            sub="От консультации до рекомендаций после процедуры — всё проходит в медицинском центре под контролем врача."
          />
          <ol className="grid md:grid-cols-4 gap-4">
            {[
              ["Консультация", "Врач оценивает состояние кожи, уточняет противопоказания и подбирает препарат."],
              ["Подготовка кожи", "Очищение и подготовка зон к процедуре."],
              ["Проведение процедуры", "Биоревитализация лица, шеи и кистей рук."],
              ["Рекомендации", "Врач объясняет, как ухаживать за кожей после процедуры."],
            ].map(([t, s], i) => (
              <li key={t} className="rounded-2xl bg-card border p-6">
                <div className="font-display text-3xl text-primary/70">0{i + 1}</div>
                <div className="mt-2 font-medium">{t}</div>
                <p className="text-sm text-muted-foreground mt-2">{s}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm text-muted-foreground">Процедура проводится амбулаторно и не требует госпитализации.</p>
        </div>
      </section>

      {/* BLOCK 8 — результат */}
      <section className="container-page py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-6">
            <SectionTitle
              kicker="Результат"
              title="Чего ждать от процедуры"
              sub="Биоревитализация работает с качеством кожи — это не пластика и не радикальное омоложение."
            />
            <ul className="space-y-3">
              {[
                "Более увлажнённая и свежая кожа",
                "Более ровный и здоровый тон",
                "Ухоженный внешний вид зон лица, шеи и рук",
                "Эффект развивается постепенно в течение нескольких дней",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="text-accent mt-1.5">—</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-6">
            <img src={cabinetImg} alt="Процедурный кабинет медицинского центра" loading="lazy" width={1280} height={896} className="rounded-2xl border object-cover w-full aspect-[4/3]" />
          </div>
        </div>
      </section>

      {/* BLOCK 9 — отзывы / атмосфера */}
      <section className="bg-surface border-y py-16 md:py-24">
        <div className="container-page">
          <SectionTitle
            kicker="Отзывы пациентов"
            title="Почему пациенты выбирают эту процедуру"
            sub="Спокойный медицинский подход, естественный результат и консультация врача-косметолога перед процедурой."
          />
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { n: "Анна", t: "Понравился спокойный подход врача. Кожа стала выглядеть более свежей и увлажнённой уже через несколько дней." },
              { n: "Марина", t: "Перед процедурой подробно всё объяснили, провели осмотр. Никакого давления и навязчивых продаж." },
              { n: "Ольга", t: "Хороший медицинский центр и приятный кабинет. Результат естественный, без эффекта «переколотого» лица." },
            ].map((r) => (
              <figure key={r.n} className="rounded-2xl bg-card border p-6">
                <blockquote className="text-foreground/90 leading-relaxed">«{r.t}»</blockquote>
                <figcaption className="mt-4 text-sm text-muted-foreground">— {r.n}, пациент</figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted-foreground max-w-2xl">
            Биоревитализация — это работа с качеством кожи и её состоянием, а не попытка полностью изменить внешность.
          </p>
        </div>
      </section>

      {/* BLOCK 10 — FAQ */}
      <section className="container-page py-16 md:py-24">
        <SectionTitle kicker="FAQ" title="Частые вопросы о биоревитализации" />
        <Faq />
        <div className="mt-8">
          <a href="#zayavka" className="btn-secondary">Записаться на консультацию</a>
        </div>
      </section>

      {/* BLOCK 11 — финальная форма */}
      <section id="zayavka" className="bg-surface border-y py-16 md:py-24">
        <div className="container-page grid md:grid-cols-2 gap-10 items-start">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-accent mb-3">Запись</div>
            <h2 className="font-display text-3xl md:text-5xl leading-[1.05]">Запишитесь на консультацию по биоревитализации</h2>
            <p className="mt-4 text-muted-foreground md:text-lg max-w-xl">
              Комплекс биоревитализации лица, шеи и кистей рук — <span className="text-foreground font-medium">13 000 ₽ вместо 23 000 ₽</span>. Консультация врача-косметолога включена.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              <li className="flex gap-2"><span className="text-accent">●</span> Спокойный медицинский подход</li>
              <li className="flex gap-2"><span className="text-accent">●</span> Лицензированный медицинский центр</li>
              <li className="flex gap-2"><span className="text-accent">●</span> Без давления и навязчивых продаж</li>
            </ul>
          </div>
          <LeadForm />
        </div>
      </section>

      {/* BLOCK 12 — контакты */}
      <section className="container-page py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Logo className="text-primary" />
            <p className="text-sm text-muted-foreground mt-4">
              Медицинский центр «Мать и Дитя». Лицензированная врачебная косметология в Липецке.
            </p>
          </div>
          <div className="space-y-2 text-sm">
            <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground mb-2">Контакты</div>
            <div><a href="tel:+74742370363" className="hover:text-primary">+7 (4742) 370-363</a></div>
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
            <div>ООО «Мать и Дитя»</div>
            <div>Лицензия № Л041-01195-48/00318538 от 18.01.2018</div>
            <div>ИНН 4826040251</div>
            <div>Юр. адрес: Липецк, ул. Фрунзе, д. 14, помещение №3</div>
            <div className="pt-2">Имеются противопоказания, необходима консультация специалиста.</div>
          </div>
        </div>
        <div className="mt-10 rounded-2xl overflow-hidden border aspect-[16/6]">
          <iframe
            title="Карта"
            src="https://yandex.ru/map-widget/v1/?text=Липецк%2C%20ул.%20Октябрьская%2C%2061&z=16"
            width="100%" height="100%" loading="lazy"
            style={{ border: 0 }}
          />
        </div>
        <p className="mt-8 text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} Медицинский центр «Мать и Дитя». Все права защищены.
        </p>
      </section>
    </div>
  );
}
