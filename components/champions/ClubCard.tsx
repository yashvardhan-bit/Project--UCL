"use client"

import Link from "next/link"
import { ChampionClub } from "@/types"
import Badge from "@/components/ui/Badge"

interface ClubCardProps {
  club: ChampionClub
  rank: number
}

export default function ClubCard({ club, rank }: ClubCardProps) {
  return (
    <Link
      href={`/champions/${club.slug}`}
      className="group block h-full"
      passHref>
      <div
        className="h-full p-6 border border-white/10 transition-all duration-300 hover:border-yellow-400/50 hover:shadow-lg cursor-pointer"
        style={{
          backgroundColor: "var(--color-surface)",
          backgroundImage: rank === 1 ? "linear-gradient(135deg, rgba(245, 197, 24, 0.05) 0%, transparent 100%)" : "none",
        }}>
        {/* Header with rank and country */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "rgba(255,255,255,0.4)" }}>
              #{rank}
            </p>
            {rank === 1 && (
              <div className="mb-3">
                <Badge text="🏆 Most Titles" variant="gold" />
              </div>
            )}
          </div>
          <Badge text={club.country} variant="outline" />
        </div>

        {/* Club logo and name */}
        <div className="mb-4">
          {club.logo && (
            <img
              src={club.logo}
              alt={club.name}
              className="w-16 h-16 mb-3 object-contain opacity-90 group-hover:opacity-100 transition-opacity"
              onError={(e) => {
                e.currentTarget.style.display = "none"
              }}
            />
          )}
          <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
            {club.name}
          </h3>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-3 mb-4 py-4 border-y border-white/10">
          <div>
            <p className="text-2xl font-bold" style={{ color: "var(--color-gold)" }}>
              {club.titles}
            </p>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
              Titles
            </p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">
              {club.finalsPlayed}
            </p>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
              Finals
            </p>
          </div>
        </div>

        {/* Last title */}
        <div className="flex items-center justify-between">
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
            Last Title
          </span>
          <span className="text-sm font-mono font-bold text-white">
            {club.lastTitle}
          </span>
        </div>

        {/* Years won preview */}
        {club.yearsWon.length > 0 && (
          <div className="mt-4 pt-4 border-t border-white/10">
            <p className="text-xs mb-2" style={{ color: "rgba(255,255,255,0.4)" }}>
              Recent wins
            </p>
            <div className="flex flex-wrap gap-1">
              {club.yearsWon.slice(-3).map((year) => (
                <span
                  key={year}
                  className="text-xs px-2 py-1 rounded"
                  style={{ backgroundColor: "rgba(245, 197, 24, 0.1)", color: "var(--color-gold)" }}>
                  {year}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </Link>
  )
}
