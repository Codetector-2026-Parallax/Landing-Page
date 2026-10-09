import {
  Navigation,
  Home,
  Information,
  CaseDossier,
  Stage,
  Awards,
  FAQ,
  Footer,
} from "../components/landingpage"

function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden text-foreground">
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
