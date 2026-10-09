import backgroundImage from "../../assets/codetector-background.jpg"

export function BackgroundOverlay() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 select-none">
      <img src={backgroundImage} alt="" className="h-full w-full object-cover object-center" />
      <div className="absolute inset-0 bg-background/65" />
      <div className="absolute inset-0 bg-linear-to-b from-background/30 via-background/15 to-background/80" />
    </div>
  )
}

export default BackgroundOverlay
