"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import legendsData from "@/data/legends.json"
import { Legend } from "@/types"
import SectionHeader from "@/components/ui/SectionHeader"
import SearchBar from "@/components/ui/SearchBar"

export default function LegendsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const legends = legendsData as Legend[]

  const filtered = useMemo(
    () =>
      legends.filter(
        (legend) =>
          legend.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          legend.nationality.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [searchQuery]
  )

  const sorted = [...filtered].sort((a, b) => b.ucl_goals - a.ucl_goals)

  return (
    <div style={{ backgroundColor: "var(--color-navy)" }}>
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-16">
        <p className="text-sm tracking-[0.3em] mb-4" style={{ color: "var(--color-gold)" }}>
          UEFA CHAMPIONS LEAGUE
        </p>
        <h1 className="text-6xl md:text-7xl leading-none mb-6" style={{ fontFamily: "var(--font-bebas)", color: "white" }}>
          LEGENDARY<br />PLAYERS
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8" style={{ color: "rgba(255,255,255,0.6)" }}>
          {legends.length} greatest players · {legends.reduce((s, l) => s + l.ucl_goals, 0)} combined goals · 70+ years of greatness
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <SectionHeader label="EXPLORE" title="The Legends" description="The greatest players to ever grace the Champions League." />

        <SearchBar value={searchQuery} onChange={setSearchQuery} onClear={() => setSearchQuery("")} placeholder="Search by name or nationality..." />

        <div className="mt-8 space-y-4">
          {sorted.map((legend) => (
            <Link key={legend.id} href={`/legends/${legend.slug}`}>
              <div className="p-6 border border-white/10 hover:border-yellow-400/50 transition-all cursor-pointer" style={{ backgroundColor: "var(--color-surface)" }}>
                <div className="flex justify-between items-start md:items-center mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white hover:text-yellow-400 transition-colors">{legend.name}</h3>
                    <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                      {legend.nationality}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold" style={{ color: "var(--color-gold)", fontFamily: "var(--font-bebas)" }}>
                      {legend.ucl_goals}
                    </p>
                    <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                      Goals
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center text-sm">
                  <div>
                    <p className="font-bold text-white">{legend.ucl_appearances}</p>
                    <p style={{ color: "rgba(255,255,255,0.4)" }}>Apps</p>
                  </div>
                  <div>
                    <p className="font-bold text-white">{legend.ucl_titles}</p>
                    <p style={{ color: "rgba(255,255,255,0.4)" }}>Titles</p>
                  </div>
                  <div>
                    <p className="font-bold text-white">{legend.final_appearances}</p>
                    <p style={{ color: "rgba(255,255,255,0.4)" }}>Finals</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/" className="inline-block px-6 py-3 text-sm font-semibold tracking-widest uppercase transition-colors" style={{ backgroundColor: "var(--color-gold)", color: "var(--color-navy)" }}>
            ← Back Home
          </Link>
        </div>
      </section>
    </div>
  )
}
