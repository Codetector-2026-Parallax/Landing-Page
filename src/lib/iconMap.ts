import {
  AlertTriangle,
  Astroid,
  BrainCircuit,
  ClipboardList,
  Crown,
  Database,
  Eye,
  Fingerprint,
  GraduationCap,
  Landmark,
  Medal,
  Search,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Star,
  Swords,
  Terminal,
  Trophy,
  User,
  Users,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

export const iconMap: Record<string, LucideIcon> = {
  AlertTriangle,
  Astroid,
  BrainCircuit,
  ClipboardList,
  Crown,
  Database,
  Eye,
  Fingerprint,
  GraduationCap,
  Landmark,
  Medal,
  Search,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Star,
  Swords,
  Terminal,
  Trophy,
  User,
  Users,
}

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Search
}
