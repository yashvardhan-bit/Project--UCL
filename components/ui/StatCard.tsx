interface StatCardProps {
  label: string
  value: string | number
  style?: "gold" | "default"
}

export default function StatCard({ label, value, style = "default" }: StatCardProps) {
  return (
    <div className="text-center">
      <p
        className="text-3xl font-bold mb-1"
        style={{
          fontFamily: "var(--font-bebas)",
          color: style === "gold" ? "var(--color-gold)" : "white",
        }}>
        {value}
      </p>
      <p className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.5)" }}>
        {label}
      </p>
    </div>
  )
}
