import { notFound } from "next/navigation"
import Link from "next/link"
import legendsData from "@/data/legends.json"
import { Legend } from "@/types"

interface LegendDetailPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const legends = legendsData as Legend[]
  return legends.map((legend) => ({
    slug: legend.slug,
  }))
}

export default async function LegendDetailPage({ params }: LegendDetailPageProps) {
  const { slug } = await params
  const legends = legendsData as Legend[]
  const legend = legends.find((l) => l.slug === slug)
  if (!legend) notFound()

  return (
    <div style={{ backgroundColor: "var(--color-navy)" }}>
      <div className="max-w-4xl mx-auto px-6 pt-24">
        <Link href="/legends" className="text-xs tracking-widest uppercase inline-block mb-8" style={{ color: "var(--color-gold)" }}>
          ← All Legends
        </Link>

        <div className="mb-12 pb-12 border-b border-white/10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-bebas)" }}>
            {legend.name}
          </h1>
          <p className="text-lg mb-6" style={{ color: "rgba(255,255,255,0.6)" }}>
            {legend.nationality} · b. {legend.birth_year}
          </p>
          <p className="text-base leading-relaxed max-w-2xl" style={{ color: "rgba(255,255,255,0.75)" }}>
            {legend.biography}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="p-6 border border-white/10 text-center" style={{ backgroundColor: "var(--color-surface)" }}>
            <p className="text-3xl font-bold mb-1" style={{ color: "var(--color-gold)", fontFamily: "var(--font-bebas)" }}>
              {legend.ucl_goals}
            </p>
            <p className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.5)" }}>
              Goals
            </p>
          </div>
          <div className="p-6 border border-white/10 text-center" style={{ backgroundColor: "var(--color-surface)" }}>
            <p className="text-3xl font-bold mb-1 text-white" style={{ fontFamily: "var(--font-bebas)" }}>
              {legend.ucl_appearances}
            </p>
            <p className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.5)" }}>
              Appearances
            </p>
          </div>
          <div className="p-6 border border-white/10 text-center" style={{ backgroundColor: "var(--color-surface)" }}>
            <p className="text-3xl font-bold mb-1 text-white" style={{ fontFamily: "var(--font-bebas)" }}>
              {legend.ucl_titles}
            </p>
            <p className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.5)" }}>
              Titles
            </p>
          </div>
          <div className="p-6 border border-white/10 text-center" style={{ backgroundColor: "var(--color-surface)" }}>
            <p className="text-3xl font-bold mb-1 text-white" style={{ fontFamily: "var(--font-bebas)" }}>
              {legend.final_appearances}
            </p>
            <p className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.5)" }}>
              Finals
            </p>
          </div>
        </div>

        <div className="p-6 border border-white/10 mb-12" style={{ backgroundColor: "var(--color-surface)" }}>
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "var(--color-gold)" }}>
            Career Highlights
          </p>
          <ul className="space-y-3">
            {legend.career_highlights.map((highlight, i) => (
              <li key={i} className="flex gap-3">
                <span style={{ color: "var(--color-gold)" }}>•</span>
                <span style={{ color: "rgba(255,255,255,0.75)" }}>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-6 border border-white/10 mb-12" style={{ backgroundColor: "var(--color-surface)" }}>
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "var(--color-gold)" }}>
            Clubs in Champions League
          </p>
          <div className="flex flex-wrap gap-2">
            {legend.clubs_in_ucl.map((club) => (
              <span key={club} className="text-sm px-3 py-1 border border-white/20" style={{ backgroundColor: "rgba(245, 197, 24, 0.1)", color: "var(--color-gold)" }}>
                {club}
              </span>
            ))}
          </div>
        </div>

        <div className="text-center mb-12">
          <Link href="/legends" className="inline-block px-6 py-3 text-sm font-semibold tracking-widest uppercase transition-colors" style={{ backgroundColor: "var(--color-gold)", color: "var(--color-navy)" }}>
            ← Back to Legends
          </Link>
        </div>
      </div>
    </div>
  )
}
