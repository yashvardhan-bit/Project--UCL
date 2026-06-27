"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import championsData from "@/data/champions.json"
import { FinalRecord } from "@/types"
import SectionHeader from "@/components/ui/SectionHeader"
import SearchBar from "@/components/ui/SearchBar"

export default function SeasonsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const finals = championsData as FinalRecord[]

  const filtered = useMemo(
    () =>
      finals.filter(
        (final) =>
          final.winner.toLowerCase().includes(searchQuery.toLowerCase()) ||
          final.runner_up.toLowerCase().includes(searchQuery.toLowerCase()) ||
          final.year.toString().includes(searchQuery)
      ),
    [searchQuery]
  )

  return (
    <div style={{ backgroundColor: "var(--color-navy)" }}>
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-16">
        <p className="text-sm tracking-[0.3em] mb-4" style={{ color: "var(--color-gold)" }}>
          UEFA CHAMPIONS LEAGUE
        </p>
        <h1 className="text-6xl md:text-7xl leading-none mb-6" style={{ fontFamily: "var(--font-bebas)", color: "white" }}>
          SEASONS<br />ARCHIVE
        </h1>
        <p className="text-lg md:text-xl max-w-2xl" style={{ color: "rgba(255,255,255,0.6)" }}>
          {finals.length} seasons · 2000-2026 · Every final documented
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <SectionHeader label="COMPLETE" title="All Finals" description="Search and explore every Champions League final from 2000 to 2026." />

        <SearchBar value={searchQuery} onChange={setSearchQuery} onClear={() => setSearchQuery("")} placeholder="Search by club or year..." />

        <div className="mt-8 space-y-4">
          {[...filtered].reverse().map((final) => (
            <Link key={final.id} href={`/finals/${final.id}`}>
              <div className="p-6 border border-white/10 hover:border-yellow-400/50 transition-all cursor-pointer" style={{ backgroundColor: "var(--color-surface)" }}>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs mb-1" style={{ color: "var(--color-gold)" }}>
                      {final.year}
                    </p>
                    <h3 className="text-lg font-bold text-white mb-1">{final.stadium}</h3>
                    <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                      {final.city}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-xl font-bold mb-1 text-white">
                      <span style={{ color: "var(--color-gold)" }}>{final.winner}</span>
                      <span className="text-yellow-400 mx-2">{final.score}</span>
                      <span>{final.runner_up}</span>
                    </p>
                    <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                      {final.manager} · {final.city}
                    </p>
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
