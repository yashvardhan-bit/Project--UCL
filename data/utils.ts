import { FinalRecord, ChampionClub } from "@/types"

/**
 * Transform seasons data into club aggregates.
 * Computes finals played, wins/losses from finals data.
 */
export function computeClubStats(seasons: FinalRecord[]): Record<string, Partial<ChampionClub>> {
  const clubStats: Record<string, Partial<ChampionClub>> = {}

  seasons.forEach((season) => {
    // Winner stats
    const winner = season.winner.toLowerCase().replace(/\s+/g, "-")
    if (!clubStats[winner]) {
      clubStats[winner] = { finalsWon: 0, finalsPlayed: 0, finalsLost: 0 }
    }
    clubStats[winner].finalsPlayed! += 1
    clubStats[winner].finalsWon! += 1

    // Runner-up stats
    const runnerUp = season.runner_up.toLowerCase().replace(/\s+/g, "-")
    if (!clubStats[runnerUp]) {
      clubStats[runnerUp] = { finalsWon: 0, finalsPlayed: 0, finalsLost: 0 }
    }
    clubStats[runnerUp].finalsPlayed! += 1
    clubStats[runnerUp].finalsLost! += 1
  })

  return clubStats
}

/**
 * Get all finals for a specific club (by slug)
 */
export function getClubFinals(seasons: FinalRecord[], clubSlug: string): FinalRecord[] {
  return seasons.filter(
    (season) =>
      season.winner.toLowerCase().replace(/\s+/g, "-") === clubSlug ||
      season.runner_up.toLowerCase().replace(/\s+/g, "-") === clubSlug
  )
}

/**
 * Get finals where club won (not runner-up)
 */
export function getClubWins(seasons: FinalRecord[], clubSlug: string): FinalRecord[] {
  return seasons.filter(
    (season) => season.winner.toLowerCase().replace(/\s+/g, "-") === clubSlug
  )
}

/**
 * Format year range string (e.g., "1956–2024")
 */
export function formatYearRange(years: number[]): string {
  if (years.length === 0) return ""
  const sorted = [...years].sort((a, b) => a - b)
  return `${sorted[0]}–${sorted[sorted.length - 1]}`
}

/**
 * Get countries from clubs
 */
export function getCountries(clubs: ChampionClub[]): string[] {
  return Array.from(new Set(clubs.map((c) => c.country))).sort()
}
