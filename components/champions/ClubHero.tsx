"use client"

import { ChampionClub } from "@/types"
import Badge from "@/components/ui/Badge"

interface ClubHeroProps {
  club: ChampionClub
}

export default function ClubHero({ club }: ClubHeroProps) {
  return (
    <div className="mb-12 pb-12 border-b border-white/10">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-8">
        {/* Logo */}
        {club.logo && (
          <div className="w-32 h-32 flex-shrink-0">
            <img
              src={club.logo}
              alt={club.name}
              className="w-full h-full object-contain opacity-90"
              onError={(e) => {
                e.currentTarget.style.display = "none"
              }}
            />
          </div>
        )}

        {/* Info */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <Badge text={club.country} variant="gold" />
            {club.founded && (
              <Badge text={`Founded ${club.founded}`} variant="outline" />
            )}
          </div>

          <h1
            className="text-5xl md:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-bebas)" }}>
            {club.name}
          </h1>

          {club.historical_summary && (
            <p className="max-w-2xl text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
              {club.historical_summary}
            </p>
          )}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <p
            className="text-4xl font-bold mb-1"
            style={{ fontFamily: "var(--font-bebas)", color: "var(--color-gold)" }}>
            {club.titles}
          </p>
          <p className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.5)" }}>
            Titles Won
          </p>
        </div>

        <div>
          <p className="text-4xl font-bold mb-1 text-white" style={{ fontFamily: "var(--font-bebas)" }}>
            {club.finalsPlayed}
          </p>
          <p className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.5)" }}>
            Finals Played
          </p>
        </div>

        <div>
          <p className="text-4xl font-bold mb-1 text-white" style={{ fontFamily: "var(--font-bebas)" }}>
            {club.finalsWon}
          </p>
          <p className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.5)" }}>
            Finals Won
          </p>
        </div>

        <div>
          <p className="text-4xl font-bold mb-1 text-white" style={{ fontFamily: "var(--font-bebas)" }}>
            {club.lastTitle}
          </p>
          <p className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.5)" }}>
            Last Title
          </p>
        </div>
      </div>
    </div>
  )
}
