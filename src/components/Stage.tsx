import {
  ChevronRight,
  Lock,
  Terminal,
} from "lucide-react"
import landingData from "../data/landingData.json"
import SectionLabel from "./shared/SectionLabel"
import { getIcon } from "../lib/iconMap"

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

      <div className="mt-8 grid min-w-0 gap-4 sm:mt-10 lg:grid-cols-3 lg:gap-5">
        <div className="hidden lg:col-span-3 lg:flex lg:items-center lg:gap-3">
          <span className="h-px flex-1 bg-primary/30" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/70">Case progression</span>
          <span className="h-px flex-1 bg-primary/30" />
        </div>
          {stages.map((stage, index) => {
            const StageIcon = getIcon(stage.icon)

            return (
              <article key={stage.id} className="relative min-w-0">
                <div className="flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-primary/40 bg-background/85 shadow-[0_0_20px_rgba(202,160,82,0.1)] backdrop-blur-sm transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-primary/70 hover:shadow-[0_0_28px_rgba(202,160,82,0.16)]">
                  <header className="flex flex-wrap items-start gap-2.5 border-b border-border/60 px-4 py-4">
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-primary/40 bg-primary/10 text-primary">
                      <StageIcon className="size-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                          {stage.phase}
                        </span>
                        <span className="rounded border border-primary/40 bg-primary/10 px-1.5 py-0.5 text-[9px] font-mono font-bold uppercase text-primary">
                          {stage.statusText}
                        </span>
                      </div>
                      <h3 className="mt-0.5 text-sm font-bold text-foreground sm:text-base">
                        {stage.title}
                        <span className="ml-1.5 font-normal text-muted-foreground">— {stage.subtitle}</span>
                      </h3>
                    </div>
                    <span className="ml-auto rounded-md border border-primary/30 bg-primary/10 px-2 py-1 text-[10px] font-bold tracking-wider text-primary font-mono">
                      {stage.date}
                    </span>
                  </header>

                  <div className="flex flex-1 flex-col">
                    <div className="space-y-3 px-4 py-4">
                      <p className="text-xs leading-relaxed text-foreground/85 sm:text-sm">{stage.description}</p>
                      <div className="space-y-2">
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

                    <div className="border-t border-border/40 bg-background/40 px-4 py-4">
                      <div className="rounded-lg border border-border/60 bg-background/70 p-2.5 font-mono text-[11px] leading-relaxed backdrop-blur-sm">
                        <div className="mb-2 flex items-center justify-between gap-2 border-b border-border/40 pb-2 text-[9px] text-primary/80">
                          <span className="flex min-w-0 items-center gap-1.5 truncate">
                            <Terminal className="size-3 shrink-0" /> {stage.sqlSnippet.filename}
                          </span>
                          <span className={index === 2 ? "text-green-500" : index === 1 ? "text-destructive" : "text-primary"}>
                            {stage.sqlSnippet.label}
                          </span>
                        </div>
                        {stage.sqlSnippet.lines.map((line, lineIndex) => (
                          <p key={lineIndex} className={line.isComment ? "text-muted-foreground italic" : ""}>
                            <span className="text-primary">{line.keyword}</span>
                            <span className={line.isComment ? "text-muted-foreground" : "text-foreground"}>{line.text}</span>
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>

                  <footer className="mt-auto flex items-center justify-between gap-3 border-t border-border/40 px-4 py-2.5 text-[10px] text-muted-foreground sm:text-[11px]">
                    <span className="flex min-w-0 items-center gap-1.5 truncate">
                      <Lock className="size-3 shrink-0 text-primary/60" />
                      {stage.footerLeft}
                    </span>
                    <span className="flex shrink-0 items-center gap-1 font-semibold text-primary">
                      {stage.footerRight}
                      <ChevronRight className="size-3" />
                    </span>
                  </footer>
                </div>
              </article>
            )
          })}
      </div>
    </section>
  )
}

export default Stage
