/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly SUPABASE_URL: string
  readonly SUPABASE_ANON_KEY: string
  readonly AUTH_DOMAIN?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

