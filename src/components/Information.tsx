import landingData from "../data/landingData.json"
import SectionLabel from "./shared/SectionLabel"
import { getIcon } from "../lib/iconMap"

function Information() {
  const {
    sectionNumber,
    sectionTitle,
    heading,
    subheading,
    description,
    pillars,
  } = landingData.information

  return (
    <section id="info" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-12 sm:px-5 sm:py-14 lg:px-8">
      <div className="grid min-w-0 items-end gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 xl:gap-20">
        <div className="min-w-0 space-y-6 border-l-2 border-primary/60 pl-5 sm:pl-7">
          <SectionLabel number={sectionNumber}>{sectionTitle}</SectionLabel>
          <h2 className="font-display text-3xl font-semibold leading-tight text-foreground sm:text-5xl">
            {heading}<br />
            <span className="gold-text">{subheading}</span>
          </h2>

          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-foreground/85">
            <p className="text-sm leading-relaxed text-muted-foreground">
              <b>CODETECTOR 2026: PARALLAX</b> {description[0]}
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {description[1]}
            </p>
          </div>
        </div>

        <div className="grid min-w-0 gap-3 sm:grid-cols-3 lg:grid-cols-1 lg:gap-4">
          {pillars.map((pillar, index) => {
            const Icon = getIcon(pillar.icon)

            return (
              <div
                key={index}
                className="content-panel rounded-xl border border-primary/45 p-4 shadow-[0_0_25px_rgba(202,160,82,0.14)] transition-colors hover:border-primary/70 sm:p-5"
              >
                <div className="flex items-start gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-primary/40 bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-base sm:text-lg font-bold text-foreground">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Information
