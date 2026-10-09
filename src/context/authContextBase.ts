import { createContext } from "react"
import type { Session, User } from "@supabase/supabase-js"

export interface AuthContextValue {
  user: User | null
  session: Session | null
  username: string | null
  isLoading: boolean
  isAuthenticated: boolean
  signOut: () => Promise<void>
}

export const AuthContext = createContext<AuthContextValue | undefined>(undefined)

