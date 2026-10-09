import { ShieldCheck } from "lucide-react"
import logoImage from "../../assets/logo.png"

export function LoginHero() {
  return (
    <section className="hidden max-w-md lg:block">
      <div className="mb-8 flex items-center gap-3">
        <img src={logoImage} alt="JS Club logo" className="size-10 object-contain" />
        <div>
          <p className="font-display text-xl font-bold tracking-[0.16em] text-primary">CØDETECTOR</p>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">AUREUM-2026</p>
        </div>
      </div>

      <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-primary">
        <span className="font-display text-lg">00</span>
        <span className="h-px w-8 bg-primary/70" />
        Khu vực điều tra
      </p>
      <h1 className="mt-5 font-display text-6xl font-semibold leading-[0.9] text-foreground xl:text-7xl">
        Cơ sở
        <span className="gold-text block">Dữ liệu.</span>
      </h1>
      <p className="mt-6 max-w-sm text-sm leading-7 text-muted-foreground">
        Đăng nhập để tiếp tục hành trình truy vết những dữ liệu bị che giấu tại bảo tàng Aureum.
      </p>

      <div className="mt-10 border-l border-primary/45 pl-4 text-xs leading-relaxed text-muted-foreground">
        <div className="mb-2 flex items-center gap-2 font-mono font-bold uppercase tracking-[0.12em] text-primary">
          <ShieldCheck className="size-4" />
          CSDL đã được bảo mật
        </div>
       Mọi dữ liệu bên trong chỉ dành cho các thám tử đã được xác thực.
      </div>
    </section>
  )
}

export default LoginHero

