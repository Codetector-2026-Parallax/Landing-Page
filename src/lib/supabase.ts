import { createClient } from "@supabase/supabase-js"

const supabaseUrl = import.meta.env.SUPABASE_URL || "https://placeholder.supabase.co"
const supabaseAnonKey = import.meta.env.SUPABASE_ANON_KEY || "placeholder-anon-key"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})

export default supabase

