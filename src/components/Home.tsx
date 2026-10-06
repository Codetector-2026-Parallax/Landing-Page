import { ChevronDown, Info } from "lucide-react"
import landingData from "../data/landingData.json"
import { getIcon } from "../lib/iconMap"

function Home() {
  const { tag, title, subtitle, description, cta, competitionInfo } = landingData.home

  return (
    <section id="home" className="relative flex min-h-[calc(100svh-3.5rem)] items-center justify-center px-0 pt-20 pb-12 sm:min-h-screen sm:pt-24 lg:pt-28 lg:pb-14">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-5 lg:px-8">
        <div className="grid min-w-0 items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          <div className="flex min-w-0 flex-col justify-center">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="flex items-center gap-2 border border-primary/40 bg-background/85 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.24em] text-primary">
                <span className="size-1.5 rounded-full bg-primary animate-pulse" />
                {tag}
              </span>
            </div>

            <h1 className="font-display text-[clamp(3.25rem,14vw,4.5rem)] font-semibold leading-[0.88] tracking-normal text-foreground sm:text-7xl lg:text-7xl">
              {title}
              <span className="gold-text block text-[0.72em] tracking-[0.14em]">{subtitle}</span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-relaxed text-foreground/85 sm:text-base lg:text-lg lg:leading-8">
              {description}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:max-w-md sm:flex-row">
              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-primary-foreground shadow-[0_0_20px_rgba(202,160,82,0.3)] transition-colors hover:bg-primary/90 sm:tracking-[0.16em]"
              >
                {cta.register}
              </button>

              <a
                href="https://docs.google.com/document/d/1P-TPuBqzSuzhYY8oYvdU7tJOPPR_T1wtwMzoCFVr1DA/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-border/80 bg-background/85 px-4 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-foreground transition-colors hover:border-primary/60 hover:bg-background/95 sm:tracking-[0.16em]"
              >
                {cta.rules}
              </a>
            </div>
          </div>

          <div className="w-full min-w-0">
            <div className="content-panel rounded-2xl border border-primary/50 p-5 shadow-[0_0_30px_rgba(202,160,82,0.18),inset_0_0_15px_rgba(202,160,82,0.04)] sm:p-8">
              <div className="flex items-center gap-3 pb-5 border-b border-border/60">
                <Info className="size-6 text-primary" />
                <h3 className="text-lg sm:text-xl font-bold text-foreground tracking-wide">
                  {competitionInfo.title}
                </h3>
              </div>

              <ul className="mt-5 space-y-5 sm:mt-6 sm:space-y-6">
                {competitionInfo.items.map((item, index) => {
                  const Icon = getIcon(item.icon)

                  return (
                    <li key={index} className="space-y-1.5">
                      <div className="flex items-center gap-2.5 font-bold text-sm sm:text-base text-foreground">
                        <Icon className="size-5 text-primary shrink-0" />
                        <span>{item.title}</span>
                      </div>
                      <p className="pl-7 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#info"
        aria-label="Xem tiếp"
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 text-primary transition-opacity hover:opacity-80"
      >
        <ChevronDown className="size-6 animate-bounce" />
      </a>
    </section>
  )
}

export default Home
