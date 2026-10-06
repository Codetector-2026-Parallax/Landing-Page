import { ChevronRight, Lock } from "lucide-react"
import landingData from "../data/landingData.json"
import { getIcon } from "../lib/iconMap"
import SectionLabel from "./shared/SectionLabel"

function Stage() {
  const { sectionNumber, sectionTitle, heading, subheading, intro, stages } = landingData.investigation

  return (
    <section id="timeline" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-10 sm:px-5 sm:py-12 lg:px-8">
      <div className="max-w-3xl space-y-4">
        <SectionLabel number={sectionNumber}>{sectionTitle}</SectionLabel>
        <h2 className="font-display text-3xl font-semibold leading-tight text-foreground sm:text-5xl">
          {heading}<br />
          <span className="gold-text">{subheading}</span>
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{intro}</p>
      </div>

      <div className="relative mt-8 sm:mt-10">
        <div className="absolute bottom-5 left-4 top-5 w-px bg-linear-to-b from-primary/60 via-primary/30 to-primary/10 sm:left-5" />
        <div className="space-y-5 sm:space-y-6">
          {stages.map((stage) => {
            const StageIcon = getIcon(stage.icon)

            return (
              <article key={stage.id} className="relative pl-10 sm:pl-14">
                <div className="absolute left-0 top-4 flex size-8 items-center justify-center rounded-full border border-primary/70 bg-background text-xs font-bold text-primary sm:size-10 sm:text-sm">
                  {stage.id}
                </div>
                <div className="content-panel overflow-hidden rounded-xl border border-primary/40 shadow-[0_0_18px_rgba(202,160,82,0.1)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-primary/70 hover:shadow-[0_0_24px_rgba(202,160,82,0.16)]">
                  <header className="flex flex-wrap items-center gap-2.5 border-b border-border/60 px-4 py-3 sm:px-5">
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-primary/40 bg-primary/10 text-primary">
                      <StageIcon className="size-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">{stage.phase}</span>
                        <span className="rounded border border-primary/40 bg-primary/10 px-1.5 py-0.5 text-[9px] font-mono font-bold uppercase text-primary">
                          {stage.statusText}
                        </span>
                      </div>
                      <h3 className="mt-0.5 text-sm font-bold text-foreground sm:text-base">
                        {stage.title}
                        <span className="ml-1.5 font-normal text-muted-foreground">— {stage.subtitle}</span>
                      </h3>
                    </div>
                    <span className="rounded-md border border-primary/30 bg-primary/10 px-2 py-1 text-[10px] font-bold tracking-wider text-primary font-mono">
                      {stage.date}
                    </span>
                  </header>

                  <div className="space-y-4 px-4 py-4 sm:px-5 sm:py-5">
                    <p className="text-sm font-semibold leading-relaxed text-foreground/90">{stage.summary}</p>
                    <div className="grid gap-2.5 sm:grid-cols-2">
                      {stage.details.map((detail, detailIndex) => {
                        const DetailIcon = getIcon(detail.icon)
                        return (
                          <div key={detailIndex} className="flex items-start gap-2 text-xs leading-relaxed">
                            <DetailIcon className="mt-0.5 size-3.5 shrink-0 text-primary" />
                            <span>
                              <strong className="text-foreground">{detail.label}:</strong>{" "}
                              <span className="text-muted-foreground">{detail.text}</span>
                            </span>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  <footer className="flex items-center justify-between gap-3 border-t border-border/40 px-4 py-2 text-[10px] text-muted-foreground sm:px-5 sm:text-[11px]">
                    <span className="flex min-w-0 items-center gap-1.5 truncate">
                      <Lock className="size-3 shrink-0 text-primary/60" /> {stage.footerLeft}
                    </span>
                    <span className="flex shrink-0 items-center gap-1 font-semibold text-primary">
                      {stage.footerRight} <ChevronRight className="size-3" />
                    </span>
                  </footer>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Stage
