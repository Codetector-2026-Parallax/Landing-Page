import landingData from "../../data/landingData.json"
import { getIcon } from "../../lib/iconMap"
import SectionHeader from "./shared/SectionHeader"

function Information() {
  const { sectionNumber, sectionTitle, heading, subheading, description, pillars } = landingData.information

  return (
    <section id="info" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-10 sm:px-5 sm:py-12 lg:px-8">
      <div className="grid items-start gap-8 sm:gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div className="space-y-4 sm:space-y-5">
          <SectionHeader
            number={sectionNumber}
            title={sectionTitle}
            heading={heading}
            subheading={subheading}
          />
          <div className="space-y-3 text-xs leading-relaxed text-foreground/85 sm:text-sm sm:leading-relaxed">
            {description.map((paragraph, index) => (
              <p key={index} className={index > 0 ? "text-muted-foreground" : "text-foreground/90 font-medium"}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {pillars.map((pillar, index) => {
            const Icon = getIcon(pillar.icon)

            return (
              <article
                key={index}
                className="content-panel rounded-xl border border-primary/45 p-4 shadow-[0_0_25px_rgba(202,160,82,0.14)] transition-colors hover:border-primary/70 sm:p-5"
              >
                <div className="flex items-start gap-3.5">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-primary/40 bg-primary/10 text-primary">
                    <Icon className="size-4.5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-foreground sm:text-base">{pillar.title}</h3>
                    <p className="text-xs leading-relaxed text-muted-foreground">{pillar.description}</p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Information
