import type { ReactNode } from "react"

type SectionLabelProps = {
  number: string
  children: ReactNode
}

function SectionLabel({ number, children }: SectionLabelProps) {
  return (
    <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-primary">
      <span className="font-display text-lg">{number}</span>
      <span className="h-px w-8 bg-primary/70" />
      {children}
    </p>
  )
}

export default SectionLabel
