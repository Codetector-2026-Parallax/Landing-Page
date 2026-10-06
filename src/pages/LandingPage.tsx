import Home from "../components/Home"
import Navigation from "../components/Navigation"
import backgroundImage from "../assets/codetector-background.jpg"
import Information from "../components/Information"
import CaseDossier from "../components/Overview"
import Stage from "../components/Stage"
import Awards from "../components/Awards"
import FAQ from "../components/FAQ"
import Footer from "../components/Footer"

function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden text-foreground">
      <div aria-hidden="true" className="fixed inset-0 -z-10">
        <img src={backgroundImage} alt="" className="h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-background/65" />
        <div className="absolute inset-0 bg-linear-to-b from-background/30 via-background/15 to-background/80" />
      </div>
      <Navigation />
      <main>
        <Home />
        <Information />
        <CaseDossier />
        <Stage />
        <Awards />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default LandingPage
