import landingData from "../data/landingData.json"
import SectionLabel from "./shared/SectionLabel"
import { getIcon } from "../lib/iconMap"

function Awards() {
  const { sectionNumber, sectionTitle, heading, subheading, intro, items } = landingData.awards

  return (
    <section id="giai-thuong" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-12 sm:px-5 sm:py-14 lg:px-8">
      <div className="max-w-3xl space-y-4">
        <SectionLabel number={sectionNumber}>{sectionTitle}</SectionLabel>
        <h2 className="font-display text-3xl font-semibold leading-tight text-foreground sm:text-5xl">
          {heading}<br />
          <span className="gold-text">{subheading}</span>
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{intro}</p>
      </div>

      <div className="mt-8 grid min-w-0 items-end gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => {
          const Icon = getIcon(item.icon)
          const isFirst = item.title === "Giải Nhất"
          const heightClass = [
            "min-h-[270px]",
            "min-h-[250px]",
            "min-h-[230px]",
            "min-h-[210px]",
          ][index]

          return (
            <article
              key={item.rank}
              className={`group relative flex ${heightClass} flex-col overflow-hidden rounded-2xl border p-5 shadow-[0_0_22px_rgba(202,160,82,0.12)] backdrop-blur-sm transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-2 hover:border-primary/75 hover:shadow-[0_0_28px_rgba(202,160,82,0.2)] ${
                isFirst
                  ? "border-primary/75 bg-primary/12"
                  : "border-primary/35 bg-background/85 hover:border-primary/65"
              }`}
            >
              {isFirst && <div className="absolute inset-x-0 top-0 h-0.5 bg-primary" />}
              <div className="flex items-start justify-between gap-3">
                <div className={`flex size-11 items-center justify-center rounded-xl border ${
                  isFirst ? "border-primary/60 bg-primary/15 text-primary" : "border-primary/35 bg-primary/10 text-primary"
                }`}>
                  <Icon className="size-5" />
                </div>
                <span className="font-display text-2xl font-semibold text-primary/70">{item.rank}</span>
              </div>

              <h3 className="mt-5 text-base font-bold text-foreground">{item.title}</h3>
              {item.prize ? (
                <p className="mt-1 font-mono text-lg font-bold text-primary">{item.prize}</p>
              ) : (
                <p className="mt-1 text-sm font-semibold text-primary">Chứng nhận</p>
              )}
              <div className="mt-auto border-t border-border/50 pt-3">
                <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                  Chứng nhận
                </span>
                <p className="mt-1 text-xs font-semibold leading-relaxed text-foreground/85">{item.certificate}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Awards
