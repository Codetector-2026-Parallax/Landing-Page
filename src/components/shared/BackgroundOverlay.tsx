import backgroundImage from "../../assets/codetector-background.jpg"

interface BackgroundOverlayProps {
  variant?: "landing" | "login"
}

export function BackgroundOverlay({ variant = "landing" }: BackgroundOverlayProps) {
  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10">
      <img src={backgroundImage} alt="" className="h-full w-full object-cover object-center" />
      {variant === "login" ? (
        <>
          <div className="absolute inset-0 bg-background/60" />
          <div className="absolute inset-0 bg-linear-to-br from-background/70 via-background/35 to-[#281c0d]/80" />
          <div className="pointer-events-none absolute -top-40 right-1/4 size-[520px] rounded-full bg-primary/10 blur-[140px]" />
          <div className="pointer-events-none absolute -bottom-40 left-10 size-[460px] rounded-full bg-primary/8 blur-[120px]" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-background/65" />
          <div className="absolute inset-0 bg-linear-to-b from-background/30 via-background/15 to-background/80" />
        </>
      )}
    </div>
  )
}

export default BackgroundOverlay

