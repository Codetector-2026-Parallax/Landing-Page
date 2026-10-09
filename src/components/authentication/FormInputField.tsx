import { useState, type ReactNode } from "react"
import { Eye, EyeOff, AlertCircle } from "lucide-react"

interface FormInputFieldProps {
  id: string
  name: string
  label: string
  type?: string
  value: string
  placeholder?: string
  autoComplete?: string
  hasError?: boolean
  errorMessage?: string
  onBlur: () => void
  onChange: (value: string) => void
  extraAction?: ReactNode
}

export function FormInputField({
  id,
  name,
  label,
  type = "text",
  value,
  placeholder,
  autoComplete,
  hasError,
  errorMessage,
  onBlur,
  onChange,
  extraAction,
}: FormInputFieldProps) {
  const [showPassword, setShowPassword] = useState(false)
  const isPassword = type === "password"
  const currentType = isPassword ? (showPassword ? "text" : "password") : type

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between gap-3">
        <label htmlFor={id} className="text-xs font-bold uppercase tracking-[0.14em] text-foreground">
          {label}
        </label>
        {extraAction}
      </div>

      <div className="relative">
        <input
          id={id}
          name={name}
          type={currentType}
          autoComplete={autoComplete}
          placeholder={placeholder}
          value={value}
          onBlur={onBlur}
          onChange={(e) => onChange(e.target.value)}
          className={`h-12 w-full rounded-lg border bg-background/70 px-4 text-sm text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground/60 ${
            isPassword ? "pr-12" : ""
          } ${
            hasError
              ? "border-destructive focus:border-destructive focus:ring-1 focus:ring-destructive/50 focus:shadow-[0_0_16px_rgba(180,60,45,0.18)]"
              : "border-border/80 focus:border-primary focus:ring-1 focus:ring-primary/50 focus:shadow-[0_0_18px_rgba(202,160,82,0.16)]"
          }`}
        />

        {isPassword && (
          <button
            type="button"
            aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-0 top-0 flex h-12 w-12 items-center justify-center text-muted-foreground transition-colors hover:text-primary"
          >
            {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
          </button>
        )}
      </div>

      {hasError && errorMessage && (
        <p className="flex items-center gap-1.5 text-xs text-destructive">
          <AlertCircle className="size-3.5 shrink-0" />
          <span>{errorMessage}</span>
        </p>
      )}
    </div>
  )
}

export default FormInputField

