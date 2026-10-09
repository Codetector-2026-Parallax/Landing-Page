import { createClient } from "@supabase/supabase-js"

const SUPABASE_URL = process.env.SUPABASE_URL || "https://your-project-id.supabase.co"
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || "your-service-role-key"
const AUTH_DOMAIN = process.env.AUTH_DOMAIN || "codetector.internal"

const supabaseAdmin = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
})

interface ContestantSeedData {
  username: string
  password: string
  teamName: string
}

const sampleContestants: ContestantSeedData[] = [
  { username: "detective_01", password: "PassWord#2026A", teamName: "Shadow Cipher" },
  { username: "detective_02", password: "PassWord#2026B", teamName: "Aureum Enigma" },
  { username: "detective_03", password: "PassWord#2026C", teamName: "Quantum Clue" },
]

async function seedContestants() {
  for (const contestant of sampleContestants) {
    const internalEmail = `${contestant.username.toLowerCase()}@${AUTH_DOMAIN}`

    const { data, error } = await supabaseAdmin.auth.admin.createUser({
      email: internalEmail,
      password: contestant.password,
      email_confirm: true,
      user_metadata: {
        username: contestant.username,
        team_name: contestant.teamName,
        role: "contestant",
      },
    })

    if (error) {
      console.error(`Failed to create ${contestant.username}:`, error.message)
    } else {
      console.log(`Created contestant: ${contestant.username} (ID: ${data.user.id})`)
    }
  }
}

seedContestants()

