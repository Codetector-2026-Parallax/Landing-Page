import { HelpCircle } from "lucide-react"
import landingData from "../data/landingData.json"
import SectionLabel from "./shared/SectionLabel"

function FAQ() {
  const { sectionNumber, sectionTitle, heading, subheading, intro, items } = landingData.faq

  return (
    <section id="faq" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-12 sm:px-5 sm:py-14 lg:px-8">
      <div className="mx-auto max-w-3xl space-y-4 text-center">
        <div className="flex justify-center">
          <SectionLabel number={sectionNumber}>{sectionTitle}</SectionLabel>
        </div>
        <h2 className="font-display text-3xl font-semibold leading-tight text-foreground sm:text-5xl">
          {heading}<br />
          <span className="gold-text">{subheading}</span>
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{intro}</p>
      </div>

      <div className="mt-8 grid min-w-0 gap-4 sm:mt-10 lg:grid-cols-3">
        {items.map((item, index) => (
          <article
            key={item.question}
            className="content-panel group flex min-w-0 flex-col rounded-2xl border border-primary/35 p-5 shadow-[0_0_18px_rgba(202,160,82,0.08)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-primary/70 hover:shadow-[0_0_25px_rgba(202,160,82,0.16)] sm:p-6"
          >
            <div className="flex items-start justify-between gap-3 border-b border-border/50 pb-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-primary/40 bg-primary/10 text-primary">
                <HelpCircle className="size-5" />
              </div>
              <span className="font-display text-2xl font-semibold text-primary/60">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="mt-5 text-sm font-bold leading-relaxed text-foreground sm:text-base">
              {item.question}
            </h3>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground sm:text-sm">
              {item.answer}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default FAQ
