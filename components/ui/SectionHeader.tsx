interface SectionHeaderProps {
  label?: string
  title: string
  description?: string
}

export default function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-8">
      {label && (
        <p className="text-sm tracking-[0.3em] mb-2" style={{ color: "var(--color-gold)" }}>
          {label}
        </p>
      )}
      <h2
        className="text-4xl md:text-5xl font-bold mb-3"
        style={{ fontFamily: "var(--font-bebas)", color: "white" }}>
        {title}
      </h2>
      {description && (
        <p className="text-sm max-w-2xl" style={{ color: "rgba(255,255,255,0.6)" }}>
          {description}
        </p>
      )}
    </div>
  )
}
