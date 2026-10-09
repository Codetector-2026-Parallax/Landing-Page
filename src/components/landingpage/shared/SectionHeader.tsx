import SectionLabel from "./SectionLabel"

interface SectionHeaderProps {
  number: string
  title: string
  heading: string
  subheading: string
  intro?: string
  center?: boolean
  className?: string
}

export function SectionHeader({
  number,
  title,
  heading,
  subheading,
  intro,
  center = false,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`space-y-4 ${center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}>
      <div className={center ? "flex justify-center" : ""}>
        <SectionLabel number={number}>{title}</SectionLabel>
      </div>
      <h2 className="font-display text-3xl font-semibold leading-tight text-foreground sm:text-5xl">
        {heading}
        <br />
        <span className="gold-text">{subheading}</span>
      </h2>
      {intro && <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{intro}</p>}
    </div>
  )
}

export default SectionHeader

