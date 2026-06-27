interface LegendaryPlayersSectionProps {
  players: string[]
  title?: string
}

export default function LegendaryPlayersSection({
  players,
  title = "Legendary Players",
}: LegendaryPlayersSectionProps) {
  if (!players || players.length === 0) {
    return null
  }

  return (
    <section className="mb-12">
      <h3 className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--color-gold)" }}>
        {title}
      </h3>

      <div className="space-y-3">
        {players.map((player) => (
          <div
            key={player}
            className="p-4 border border-white/10 flex items-center justify-between group hover:border-yellow-400/30 transition-colors"
            style={{ backgroundColor: "var(--color-surface)" }}>
            <span className="text-sm text-white group-hover:text-yellow-400 transition-colors">
              {player}
            </span>
            <svg
              className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ color: "var(--color-gold)" }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        ))}
      </div>
    </section>
  )
}
