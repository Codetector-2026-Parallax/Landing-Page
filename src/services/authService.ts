import type { AuthError, Session, User } from "@supabase/supabase-js"
import { supabase } from "../lib/supabase"

const AUTH_DOMAIN = import.meta.env.VITE_AUTH_DOMAIN || "codetector.internal"

export function formatUsernameToEmail(username: string): string {
  const trimmed = username.trim().toLowerCase()
  return trimmed.includes("@") ? trimmed : `${trimmed}@${AUTH_DOMAIN}`
}

export function formatAuthError(error: AuthError | Error | unknown): string {
  if (!error || typeof error !== "object") {
    return "Đăng nhập thất bại. Vui lòng thử lại."
  }

  const message = "message" in error && typeof error.message === "string" ? error.message : ""

  if (message.includes("Invalid login credentials")) {
    return "Tên đăng nhập hoặc mật khẩu không chính xác."
  }

  if (message.includes("Email not confirmed")) {
    return "Tài khoản chưa được kích hoạt bởi Ban tổ chức."
  }

  if (message.includes("Too many requests") || message.includes("rate limit")) {
    return "Quá nhiều lần thử thất bại. Vui lòng chờ ít phút trước khi thử lại."
  }

  if (message.includes("Failed to fetch") || message.includes("NetworkError")) {
    return "Không thể kết nối tới máy chủ. Vui lòng kiểm tra đường truyền mạng."
  }

  return "Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin hoặc liên hệ BTC."
}

export async function signInWithUsername(username: string, password: string) {
  const email = formatUsernameToEmail(username)
  return await supabase.auth.signInWithPassword({
    email,
    password,
  })
}

export async function signOut() {
  return await supabase.auth.signOut()
}

export async function getSession(): Promise<Session | null> {
  const { data } = await supabase.auth.getSession()
  return data.session
}

export async function getCurrentUser(): Promise<User | null> {
  const { data } = await supabase.auth.getUser()
  return data.user
}

