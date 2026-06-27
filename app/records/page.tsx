"use client"

import Link from "next/link"
import recordsData from "@/data/records.json"
import { Record } from "@/types"
import SectionHeader from "@/components/ui/SectionHeader"

export default function RecordsPage() {
  const records = recordsData as Record[]

  return (
    <div style={{ backgroundColor: "var(--color-navy)" }}>
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-16">
        <p className="text-sm tracking-[0.3em] mb-4" style={{ color: "var(--color-gold)" }}>
          UEFA CHAMPIONS LEAGUE
        </p>
        <h1 className="text-6xl md:text-7xl leading-none mb-6" style={{ fontFamily: "var(--font-bebas)", color: "white" }}>
          RECORDS &<br />STATISTICS
        </h1>
        <p className="text-lg md:text-xl max-w-2xl" style={{ color: "rgba(255,255,255,0.6)" }}>
          {records.length} record holders · 70 years of football history · Legendary achievements
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <SectionHeader label="ALL-TIME" title="Records & Statistics" description="Every milestone and record in Champions League history." />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {records.map((record) => (
            <div key={record.id} className="p-6 border border-white/10" style={{ backgroundColor: "var(--color-surface)" }}>
              <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "var(--color-gold)" }}>
                {record.category}
              </p>
              <h3 className="text-2xl font-bold text-white mb-2">{record.holder}</h3>
              <p className="text-4xl font-bold mb-2" style={{ color: "var(--color-gold)", fontFamily: "var(--font-bebas)" }}>
                {record.value}
              </p>
              {record.notes && <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                {record.notes}
              </p>}
              {record.year && <p className="text-xs mt-2" style={{ color: "rgba(255,255,255,0.4)" }}>
                {record.year}
              </p>}
            </div>
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
