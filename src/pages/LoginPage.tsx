import { ArrowLeft } from "lucide-react"
import { Link } from "@tanstack/react-router"
import { LoginHero, LoginForm } from "../components/authentication"

function LoginPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-foreground">
      <Link
        to="/"
        preload="intent"
        className="animate-enter-down absolute left-5 top-5 z-10 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-primary sm:left-8 sm:top-8"
      >
        <ArrowLeft className="size-4" />
        Về trang chủ
      </Link>

      <div className="mx-auto grid min-h-screen w-full max-w-7xl items-center gap-10 px-5 py-24 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12 lg:py-16">
        <LoginHero />
        <LoginForm />
      </div>
    </main>
  )
}

export default LoginPage
