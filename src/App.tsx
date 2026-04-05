import { useRef } from "react"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { Activity, CircleDot, SlidersHorizontal } from "lucide-react"

import { AnimatedText } from "@/components/ui/animated-text"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

import fasieLogo from "./head_logo_fasie.png"

const BASE = import.meta.env.BASE_URL
const HEADER_LOGO_SRC = `${BASE}logo_header.svg`
const HERO_LOGO_SRC = `${BASE}logo_main.png`

const teasers = [
  {
    icon: Activity,
    title: "Рефлексотерапия",
    hint: "Точечное механическое воздействие на выбранные зоны тела.",
    accent: "shadow-[0_0_48px_-14px_var(--color-cryo)] border-cyan-500/25",
  },
  {
    icon: SlidersHorizontal,
    title: "Настраиваемая поверхность",
    hint: "Шаг и расположение воздействующих элементов можно подстроить под себя.",
    accent: "shadow-[0_0_48px_-14px_rgba(255,255,255,0.12)] border-white/12",
  },
  {
    icon: CircleDot,
    title: "Гладкие навершия",
    hint: "Сменные элементы из разных материалов — под чувствительность и предпочтения.",
    accent: "shadow-[0_0_48px_-14px_var(--color-ember)] border-rose-500/30",
  },
] as const

function App() {
  const reduceMotion = useReducedMotion()
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 72])

  return (
    <div className="relative min-h-svh overflow-x-hidden bg-background text-foreground">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute top-[-22%] left-[-18%] h-[58vmin] w-[58vmin] rounded-full bg-cyan-500/14 blur-[110px]" />
        <div className="absolute top-[8%] right-[-22%] h-[62vmin] w-[62vmin] rounded-full bg-rose-600/11 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, white 1px, transparent 1.2px)",
            backgroundSize: "22px 22px",
          }}
        />
      </div>

      <header className="mx-auto flex max-w-6xl items-center justify-center px-6 py-6 md:justify-start md:py-7">
        <a
          href={BASE}
          className="inline-flex shrink-0 items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <img
            src={HEADER_LOGO_SRC}
            alt="ВКС-ПРОЕКТ"
            className="h-28 w-auto max-h-32 object-contain object-center sm:h-32 sm:max-h-40 md:h-40 md:max-h-[11rem]"
            width={480}
            height={240}
            decoding="async"
          />
        </a>
      </header>

      <main>
        <section
          ref={heroRef}
          className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 pb-16 pt-2 md:flex-row md:items-center md:gap-16"
        >
          <div className="flex max-w-xl flex-1 flex-col items-center text-center md:items-start md:text-left">
            <AnimatedText
              text="Точный импульс"
              duration={0.05}
              delay={0.03}
              textClassName="font-heading text-4xl tracking-tight text-balance text-zinc-50 sm:text-5xl md:text-6xl"
              underlineGradient="from-cyan-400 via-fuchsia-500/75 to-rose-500"
              underlineHeight="h-0.5"
              underlineOffset="-bottom-3"
              underlineClassName="rounded-full opacity-90"
              className="items-center md:items-start"
            />
            <p className="mt-7 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
              Nova — массажёр с настраиваемой ипликаторной поверхностью для
              самостоятельного использования: мягкое точечное воздействие в логике
              рефлексотерапии. Подробности о запуске — позже.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3 md:justify-start">
              <Button size="lg" className="rounded-full px-6 shadow-lg shadow-cyan-500/10" asChild>
                <a href="#notify">Уведомить о запуске</a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-white/15 bg-white/5 backdrop-blur-sm" asChild>
                <a href="#about">Коротко о задумке</a>
              </Button>
            </div>
          </div>

          <motion.div
            style={{ y }}
            className="relative flex w-full flex-1 justify-center md:justify-end"
          >
            <div className="relative aspect-square w-full max-w-[min(100%,520px)] md:-translate-x-3 lg:-translate-x-4">
              <img
                src={HERO_LOGO_SRC}
                alt="Nova"
                className="h-full w-full object-contain p-2 sm:p-3"
                width={800}
                height={800}
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>
        </section>

        <section
          id="about"
          className="mx-auto max-w-6xl px-6 pb-20"
        >
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] px-6 py-8 backdrop-blur-sm md:px-10 md:py-10">
            <p className="font-heading text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-muted-foreground">
              в двух словах
            </p>
            <p className="mt-4 max-w-3xl text-pretty text-sm leading-relaxed text-zinc-200 md:text-base">
              Устройство создаёт контролируемое давление на рефлекторные зоны — в
              домашних условиях или под наблюдением специалиста. Поверхность можно
              перенастроить под ваш анатомический шаг; воздействующие элементы
              сменные и с гладкими навершиями, без агрессивных острых шипов.
            </p>
          </div>
        </section>

        <section id="vision" className="mx-auto max-w-6xl px-6 pb-28">
          <p className="mb-12 text-center font-heading text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-muted-foreground">
            акценты без лишней детализации
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {teasers.map(({ icon: Icon, title, hint, accent }, i) => (
              <motion.div
                key={title}
                initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-48px" }}
                transition={{
                  delay: reduceMotion ? 0 : i * 0.09,
                  type: "spring",
                  stiffness: 170,
                  damping: 22,
                }}
                whileHover={
                  reduceMotion ? undefined : { y: -5, transition: { duration: 0.22 } }
                }
              >
                <Card
                  className={cn(
                    "h-full border-white/10 bg-card/85 backdrop-blur-xl",
                    accent,
                  )}
                >
                  <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white/[0.06] ring-1 ring-white/10">
                      <Icon className="size-5 text-zinc-100" strokeWidth={1.35} />
                    </div>
                    <div className="min-w-0 text-left">
                      <CardTitle className="font-heading text-base">{title}</CardTitle>
                      <CardDescription className="text-xs leading-snug">{hint}</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="notify" className="mx-auto max-w-6xl px-6 pb-32">
          <div className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent px-8 py-14 text-center backdrop-blur-md">
            <p className="font-heading text-lg text-zinc-50 md:text-xl">
              Связаться с нами
            </p>
            <p className="mt-3 max-w-md mx-auto text-sm text-muted-foreground">
              Напишите на почту или позвоните — контакты продублированы внизу страницы.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button className="rounded-full shadow-md shadow-rose-500/10" size="lg" asChild>
                <a href="mailto:vcspro@internet.ru">Написать на почту</a>
              </Button>
              <Button className="rounded-full" size="lg" variant="outline" asChild>
                <a href="tel:+79000080956">Позвонить: +7 (900) 008-09-56</a>
              </Button>
            </div>
            <p className="mt-5 text-xs text-muted-foreground">
              Дополнительно:{" "}
              <a
                href="tel:+79000080925"
                className="text-zinc-400 underline-offset-2 hover:text-zinc-200 hover:underline"
              >
                +7 (900) 008-09-25
              </a>
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto w-full max-w-6xl px-6 py-5">
          <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] px-4 py-4 sm:px-5 sm:py-4">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-start lg:gap-5 xl:gap-8">
              <div className="order-2 justify-self-start text-left lg:order-1 lg:pr-2">
                <p className="font-heading text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-zinc-600">
                  Реквизиты
                </p>
                <div className="mt-2 space-y-1.5 text-[0.65rem] leading-snug text-zinc-500 sm:text-[0.6875rem]">
                  <p className="font-medium text-zinc-300">
                    ООО Научно-инновационная компания «ВКС-ПРОЕКТ»
                  </p>
                  <p>ИНН 9200030111 · КПП 920001001 · ОГРН 1259200004601</p>
                  <p className="text-balance">
                    299011, г. Севастополь, ул. Большая Морская, дом 21, А/Я 115
                  </p>
                </div>
              </div>

              <div className="order-1 flex max-w-md flex-col items-center gap-3 justify-self-center text-center lg:order-2 lg:max-w-[22rem] lg:px-2 xl:max-w-[24rem]">
                <p className="text-pretty text-[0.65rem] leading-snug text-zinc-500 sm:text-[0.7rem]">
                  Проект выполнен при поддержке «Фонда содействия инновациям» в рамках
                  программы «Студенческий стартап» федерального проекта «Платформа
                  университетского технологического предпринимательства».
                </p>
                <img
                  src={fasieLogo}
                  alt="Фонд содействия инновациям"
                  className="h-12 w-auto max-w-[180px] shrink-0 object-contain sm:h-14 sm:max-w-[200px]"
                />
              </div>

              <div className="order-3 flex flex-col items-end gap-1.5 self-start text-right text-[0.65rem] text-zinc-400 sm:text-[0.6875rem] lg:pl-2">
                <a
                  href="https://vcspro.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 underline-offset-2 hover:text-white hover:underline"
                >
                  vcspro.ru
                </a>
                <a
                  href="mailto:vcspro@internet.ru"
                  className="text-zinc-300 underline-offset-2 hover:text-white hover:underline"
                >
                  vcspro@internet.ru
                </a>
                <p>
                  <a href="tel:+79000080956" className="hover:text-zinc-100 hover:underline">
                    +7 (900) 008-09-56
                  </a>
                  <span className="text-zinc-600"> · </span>
                  <a href="tel:+79000080925" className="hover:text-zinc-100 hover:underline">
                    +7 (900) 008-09-25
                  </a>
                </p>
              </div>
            </div>
          </div>

          <p className="mt-3 text-center text-[0.6rem] text-muted-foreground">
            © {new Date().getFullYear()} Nova · детали продукта появятся позже
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
