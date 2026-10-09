import { useEffect, useState, useMemo, type ReactNode } from "react"
import type { Session, User } from "@supabase/supabase-js"
import { supabase } from "../lib/supabase"
import { signOut as authSignOut } from "../services/authService"
import { AuthContext, type AuthContextValue } from "./authContextBase"

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null)
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    async function initializeAuth() {
      try {
        const { data } = await supabase.auth.getSession()
        if (isMounted) {
          setSession(data.session)
          setUser(data.session?.user ?? null)
        }
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    initializeAuth()

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession)
      setUser(newSession?.user ?? null)
      setIsLoading(false)
    })

    return () => {
      isMounted = false
      subscription.unsubscribe()
    }
  }, [])

  const username = useMemo(() => {
    if (!user) return null
    if (typeof user.user_metadata?.username === "string") {
      return user.user_metadata.username
    }
    if (user.email) {
      return user.email.split("@")[0]
    }
    return null
  }, [user])

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      session,
      username,
      isLoading,
      isAuthenticated: !!user,
      signOut: async () => {
        await authSignOut()
        setSession(null)
        setUser(null)
      },
    }),
    [user, session, username, isLoading]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
