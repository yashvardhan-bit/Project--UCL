// Starting XI formation
export interface StartingXI {
  formation: string
  goalkeeper: string[]
  defenders: string[]
  midfielders: string[]
  forwards: string[]
}

// Road to glory in tournament
export interface RoadToGlory {
  r16?: string
  quarterfinal: string
  semifinal: string
  final: string
}

// A single final/season record
export interface FinalRecord {
  id: string
  year: number
  winner: string
  winner_country: string
  runner_up: string
  runner_up_country?: string
  score: string
  stadium: string
  city: string
  manager: string
  captain: string
  logo: string
  photos?: {
    team_celebration?: string
    trophy_lift?: string
  }
  story: string
  starting_xi: StartingXI
  road_to_glory: RoadToGlory
}

// A champion club (aggregated from finals)
export interface ChampionClub {
  id: string
  name: string
  slug: string
  country: string
  logo: string
  founded?: number
  titles: number
  yearsWon: number[]
  lastTitle: number
  firstTitle: number
  finalsPlayed: number
  finalsWon: number
  finalsLost: number
  runners_up_count: number
  legendary_players?: string[]
  historical_summary?: string
}

// Legendary player
export interface Legend {
  id: string
  name: string
  slug: string
  nationality: string
  birth_year: number
  photo?: string
  ucl_appearances: number
  ucl_goals: number
  ucl_titles: number
  final_appearances: number
  clubs_in_ucl: string[]
  biography: string
  career_highlights: string[]
}

// Season stats
export interface SeasonStats {
  totalWinners: number
  totalClubs: number
  totalCountries: number
  yearRange: string
}

// Record holder
export interface Record {
  id: string
  category: string
  holder: string
  value: number | string
  year?: number
  notes?: string
}
