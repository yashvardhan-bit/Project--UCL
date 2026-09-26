import Link from "next/link"
import { ChampionClub } from "@/types"

export default function ClubGrid({ clubs }: { clubs: ChampionClub[] }) {
  if (clubs.length === 0) {
    return (
      <div className="py-12 text-center" style={{ color: "rgba(255,255,255,0.5)" }}>
        <p>No clubs found matching your criteria.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {clubs.map((club) => (
        <Link key={club.id} href={`/champions/${club.slug}`}>
          <div
            className="p-6 border border-white/10 hover:border-yellow-400/50 transition-all cursor-pointer h-full flex flex-col justify-between group"
            style={{ backgroundColor: "var(--color-surface)" }}>
            <div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                  {club.name}
                </h3>
                <span
                  className="text-2xl font-bold"
                  style={{ fontFamily: "var(--font-bebas)", color: "var(--color-gold)" }}>
                  {club.titles}
                </span>
              </div>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                {club.country}
              </p>
            </div>
            
            <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center text-xs">
              <span style={{ color: "rgba(255,255,255,0.4)" }}>
                Last Title: {club.lastTitle}
              </span>
              <span style={{ color: "var(--color-gold)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Explore →
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
