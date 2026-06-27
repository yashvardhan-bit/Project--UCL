import { ChampionClub } from "@/types"
import ClubCard from "@/components/champions/ClubCard"

interface ClubGridProps {
  clubs: ChampionClub[]
}

export default function ClubGrid({ clubs }: ClubGridProps) {
  if (clubs.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-lg" style={{ color: "rgba(255,255,255,0.5)" }}>
          No champions found. Try adjusting your filters.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {clubs.map((club, idx) => (
        <ClubCard key={club.id} club={club} rank={idx + 1} />
      ))}
    </div>
  )
}
