import { ExternalLink, Mail, MapPin, UserRound } from "lucide-react"
import logoImage from "../assets/logo.png"

function Footer() {
  return (
    <footer className="border-t border-primary/20 bg-background/95">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-5 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-8">
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <img src={logoImage} alt="JS Club logo" className="size-11 rounded-full object-contain" />
            <div>
              <p className="font-display text-lg font-bold tracking-[0.12em] text-primary">CØDETECTOR</p>
              <p className="text-xs text-muted-foreground">JS Club - Đại học FPT Hà Nội</p>
            </div>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Sân chơi lập trình sáng tạo hằng năm, nơi sinh viên xây dựng sản phẩm công nghệ từ những vấn đề đời sống gần gũi.
          </p>

          <a
            href="https://www.facebook.com/fu.jsclub"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-3.5 py-2 text-xs font-bold text-primary transition-colors hover:border-primary/70 hover:bg-primary/15"
          >
            Fanpage JS Club
            <ExternalLink className="size-3.5" />
          </a>
        </div>

        <div className="space-y-5">
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-foreground">Liên hệ</h2>
          <div className="grid items-stretch gap-4 text-sm text-muted-foreground sm:grid-cols-2 sm:gap-x-6 sm:gap-y-5">
            <div className="flex h-full items-start gap-3 rounded-lg border border-border/40 bg-background/35 p-3">
              <UserRound className="mt-0.5 size-4 shrink-0 text-primary" />
              <div>
                <span className="block text-xs text-muted-foreground">Chủ nhiệm CLB</span>
                <span className="font-semibold text-foreground">Phạm Anh Tú</span>
              </div>
            </div>
            <a
              href="mailto:anhtupham17.work@gmail.com"
              className="flex h-full items-start gap-3 rounded-lg border border-border/40 bg-background/35 p-3 transition-colors hover:border-primary/50 hover:text-primary"
            >
              <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
              <span className="break-all leading-relaxed">anhtupham17.work@gmail.com</span>
            </a>
            <div className="flex h-full items-start gap-3 rounded-lg border border-border/40 bg-background/35 p-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              <span className="leading-relaxed">Đại học FPT, Khu Công nghệ cao Hòa Lạc, Hà Nội.</span>
            </div>
            <a
              href="mailto:jsclub.fpt@gmail.com"
              className="flex h-full items-start gap-3 rounded-lg border border-border/40 bg-background/35 p-3 transition-colors hover:border-primary/50 hover:text-primary"
            >
              <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
              <span className="break-all leading-relaxed">jsclub.fpt@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border/50">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-5 lg:px-8">
          <span>© 2026 Codetector: Parallax — JS Club</span>
          <span className="text-primary/80">Solve the case. Reveal the truth.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
