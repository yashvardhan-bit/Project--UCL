interface TimelineSectionProps {
  yearsWon: number[]
  title?: string
}

export default function TimelineSection({ yearsWon, title = "Champions Years" }: TimelineSectionProps) {
  const sorted = [...yearsWon].sort((a, b) => a - b)

  return (
    <section className="mb-12">
      <h3 className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--color-gold)" }}>
        {title}
      </h3>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
        {sorted.map((year) => (
          <div
            key={year}
            className="text-center p-4 border border-white/10 transition-all hover:border-yellow-400/50"
            style={{ backgroundColor: "var(--color-surface)" }}>
            <p className="text-2xl font-bold" style={{ color: "var(--color-gold)", fontFamily: "var(--font-bebas)" }}>
              {year}
            </p>
          </div>
        ))}
      </div>

      {/* Year range summary */}
      <div className="mt-6 p-4 border border-white/10" style={{ backgroundColor: "rgba(245, 197, 24, 0.05)" }}>
        <div className="flex justify-between items-center">
          <span style={{ color: "rgba(255,255,255,0.6)" }}>
            Span
          </span>
          <span className="font-mono" style={{ color: "var(--color-gold)" }}>
            {sorted[0]}–{sorted[sorted.length - 1]} ({sorted.length} titles)
          </span>
        </div>
      </div>
    </section>
  )
}
