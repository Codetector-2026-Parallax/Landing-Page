export interface NavigationLink {
  label: string
  href: string
}

export interface NavigationData {
  brand: string
  badge: string
  links: NavigationLink[]
}

export interface CompetitionInfoItem {
  icon: string
  title: string
  description: string
}

export interface HomeData {
  tag: string
  title: string
  subtitle: string
  description: string
  cta: {
    register: string
    rules: string
  }
  competitionInfo: {
    title: string
    items: CompetitionInfoItem[]
  }
}

export interface PillarItem {
  icon: string
  title: string
  description: string
}

export interface InformationData {
  sectionNumber: string
  sectionTitle: string
  heading: string
  subheading: string
  description: string[]
  pillars: PillarItem[]
}

export interface QuickFact {
  label: string
  value: string
  alert?: boolean
}

export interface CrimeSceneClue {
  icon: string
  label: string
  text: string
}

export interface SqlSnippetLine {
  keyword: string
  text: string
}

export interface CaseDossierData {
  sectionNumber: string
  sectionTitle: string
  heading: string
  subheading: string
  intro: string
  quickFacts: QuickFact[]
  crimeScene: {
    title: string
    badge: string
    description: string
    clues: CrimeSceneClue[]
    status: string
    handover: string
  }
  adversary: {
    title: string
    badge: string
    description: string
    sqlSnippet: {
      filename: string
      status: string
      comment: string
      lines: SqlSnippetLine[]
    }
    objective: string
  }
}

export interface StageDetail {
  icon: string
  label: string
  text: string
}

export interface StageItem {
  id: number
  phase: string
  title: string
  subtitle: string
  date: string
  icon: string
  statusText: string
  statusStyle: string
  summary: string
  details: StageDetail[]
  footerLeft: string
  footerRight: string
}

export interface InvestigationData {
  sectionNumber: string
  sectionTitle: string
  heading: string
  subheading: string
  intro: string
  stages: StageItem[]
}

export interface AwardItem {
  rank: string
  title: string
  prize?: string
  certificate: string
  icon: string
}

export interface AwardsData {
  sectionNumber: string
  sectionTitle: string
  heading: string
  subheading: string
  intro: string
  items: AwardItem[]
}

export interface FAQItem {
  question: string
  answer: string
}

export interface FAQData {
  sectionNumber: string
  sectionTitle: string
  heading: string
  subheading: string
  intro: string
  items: FAQItem[]
}

export interface LandingData {
  navigation: NavigationData
  home: HomeData
  information: InformationData
  caseDossier: CaseDossierData
  investigation: InvestigationData
  awards: AwardsData
  faq: FAQData
}

