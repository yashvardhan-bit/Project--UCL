import Link from "next/link"
import championsData from "@/data/champions.json"

const clubs = new Set(championsData.map((c) => c.winner)).size
const nations = new Set(championsData.map((c) => c.winner_country)).size
const years = championsData.map((c) => c.year)
const range = `${Math.min(...years)}–${Math.max(...years)}`

const stats = [
  { label: "Champions", value: championsData.length },
  { label: "Clubs", value: clubs },
  { label: "Nations", value: nations },
  { label: "Era", value: range },
]

export default function Home() {
  return (
    <div style={{ backgroundColor: "var(--color-navy)" }}>

      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <p className="text-sm tracking-[0.3em] mb-4" style={{ color: "var(--color-gold)" }}>
          UEFA CHAMPIONS LEAGUE
        </p>
        <h1
          className="text-7xl md:text-9xl leading-none mb-6"
          style={{ fontFamily: "var(--font-bebas)", color: "white" }}>
          THE CHAMPIONS<br />
          <span style={{ color: "var(--color-gold)" }}>ARCHIVE</span>
        </h1>
        <p className="text-lg md:text-xl mb-10" style={{ color: "rgba(255,255,255,0.6)" }}>
          Every Champion. Every Story. Every Era.
        </p>
        <Link
          href="/champions"
          className="px-8 py-3 text-sm font-semibold tracking-widest uppercase transition-colors duration-200"
          style={{
            backgroundColor: "var(--color-gold)",
            color: "var(--color-navy)",
          }}>
          Explore Champions
        </Link>
      </section>

      {/* Stats Strip */}
      <section
        className="py-12 border-y border-white/10"
        style={{ backgroundColor: "var(--color-surface)" }}>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-6">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p
                className="text-5xl mb-1"
                style={{ fontFamily: "var(--font-bebas)", color: "var(--color-gold)" }}>
                {stat.value}
              </p>
              <p className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.5)" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}