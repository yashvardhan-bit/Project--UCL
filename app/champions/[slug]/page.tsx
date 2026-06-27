import { notFound } from "next/navigation"
import Link from "next/link"
import clubsData from "@/data/clubs.json"
import championsData from "@/data/champions.json"
import { ChampionClub, FinalRecord } from "@/types"
import { getCountries } from "@/data/utils"
import ClubHero from "@/components/champions/ClubHero"
import TimelineSection from "@/components/champions/TimelineSection"
import LegendaryPlayersSection from "@/components/champions/LegendaryPlayersSection"

interface ClubDetailPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const clubs = clubsData as ChampionClub[]
  return clubs.map((club) => ({
    slug: club.slug,
  }))
}

export default async function ClubDetailPage({ params }: ClubDetailPageProps) {
  const { slug } = await params
  const clubs = clubsData as ChampionClub[]
  const finals = championsData as FinalRecord[]

  const club = clubs.find((c) => c.slug === slug)
  if (!club) notFound()

  // Get all finals where this club won
  const clubFinals = finals.filter(
    (final) => final.winner.toLowerCase().replace(/\s+/g, "-") === slug
  )

  // Most recent winning final
  const mostRecentFinal = clubFinals.length > 0
    ? clubFinals.sort((a, b) => b.year - a.year)[0]
    : null

  return (
    <div style={{ backgroundColor: "var(--color-navy)" }}>
      {/* Back Link */}
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-4">
        <Link href="/champions" className="text-xs tracking-widest uppercase inline-block"
          style={{ color: "var(--color-gold)" }}>
          ← All Champions
        </Link>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <ClubHero club={club} />

        {/* Champions Years Timeline */}
        {club.yearsWon.length > 0 && (
          <TimelineSection yearsWon={club.yearsWon} title="Champions Years" />
        )}

        {/* Most Recent Final */}
        {mostRecentFinal && (
          <section className="mb-12">
            <h3 className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--color-gold)" }}>
              Most Recent Victory
            </h3>
            <div
              className="p-6 border border-white/10"
              style={{ backgroundColor: "var(--color-surface)" }}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <p className="text-3xl font-bold mb-1" style={{ fontFamily: "var(--font-bebas)", color: "white" }}>
                    {mostRecentFinal.year}
                  </p>
                  <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                    {mostRecentFinal.stadium}, {mostRecentFinal.city}
                  </p>
                </div>
                <div className="mt-4 md:mt-0">
                  <p className="text-2xl font-bold text-white">
                    <span style={{ color: "var(--color-gold)" }}>{mostRecentFinal.winner}</span>
                    {" "}
                    <span style={{ color: "rgba(255,255,255,0.5)" }}>
                      {mostRecentFinal.score}
                    </span>
                    {" "}
                    <span style={{ color: "rgba(255,255,255,0.5)" }}>
                      {mostRecentFinal.runner_up}
                    </span>
                  </p>
                </div>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                {mostRecentFinal.story}
              </p>
            </div>
          </section>
        )}

        {/* Legendary Players */}
        {club.legendary_players && club.legendary_players.length > 0 && (
          <LegendaryPlayersSection
            players={club.legendary_players}
            title="Legendary Players"
          />
        )}

        {/* Finals Record */}
        <section className="mb-12">
          <h3 className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--color-gold)" }}>
            Finals Record
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div
              className="p-6 border border-white/10 text-center"
              style={{ backgroundColor: "var(--color-surface)" }}>
              <p className="text-3xl font-bold mb-2 text-white" style={{ fontFamily: "var(--font-bebas)" }}>
                {club.finalsPlayed}
              </p>
              <p className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.5)" }}>
                Played
              </p>
            </div>
            <div
              className="p-6 border border-white/10 text-center"
              style={{ backgroundColor: "var(--color-surface)" }}>
              <p className="text-3xl font-bold mb-2" style={{ color: "var(--color-gold)", fontFamily: "var(--font-bebas)" }}>
                {club.finalsWon}
              </p>
              <p className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.5)" }}>
                Won
              </p>
            </div>
            <div
              className="p-6 border border-white/10 text-center"
              style={{ backgroundColor: "var(--color-surface)" }}>
              <p className="text-3xl font-bold mb-2 text-white" style={{ fontFamily: "var(--font-bebas)" }}>
                {club.finalsLost}
              </p>
              <p className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.5)" }}>
                Lost
              </p>
            </div>
            <div
              className="p-6 border border-white/10 text-center"
              style={{ backgroundColor: "var(--color-surface)" }}>
              <p className="text-3xl font-bold mb-2 text-white" style={{ fontFamily: "var(--font-bebas)" }}>
                {club.finalsWon > 0 ? ((club.finalsWon / club.finalsPlayed) * 100).toFixed(0) : 0}%
              </p>
              <p className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.5)" }}>
                Win Rate
              </p>
            </div>
          </div>
        </section>

        {/* All Finals */}
        {clubFinals.length > 0 && (
          <section className="mb-12">
            <h3 className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--color-gold)" }}>
              All Finals Won ({clubFinals.length})
            </h3>
            <div className="space-y-3">
              {clubFinals
                .sort((a, b) => b.year - a.year)
                .map((final) => (
                  <div
                    key={final.id}
                    className="p-4 border border-white/10 flex items-center justify-between"
                    style={{ backgroundColor: "var(--color-surface)" }}>
                    <div>
                      <p className="text-sm font-bold text-white">
                        {final.year} - {final.stadium}
                      </p>
                      <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>
                        {final.manager} • {final.city}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-mono" style={{ color: "var(--color-gold)" }}>
                        {final.score}
                      </p>
                      <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                        vs {final.runner_up}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </section>
        )}

        {/* Back to Champions */}
        <div className="mt-16 text-center">
          <Link
            href="/champions"
            className="inline-block px-6 py-3 text-sm font-semibold tracking-widest uppercase transition-colors"
            style={{
              backgroundColor: "var(--color-gold)",
              color: "var(--color-navy)",
            }}>
            ← Back to Champions
          </Link>
        </div>
      </div>
    </div>
  )
}
