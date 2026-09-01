"use client"

interface FilterTabsProps {
  options: string[]
  selected: string | null
  onChange: (option: string | null) => void
}

export default function FilterTabs({ options, selected, onChange }: FilterTabsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onChange(null)}
        className={`px-3 py-2 text-xs font-medium tracking-wider uppercase border transition-all ${
          selected === null
            ? "border-yellow-400/70 text-yellow-400"
            : "border-white/20 text-white/60 hover:border-white/30"
        }`}
        style={{
          backgroundColor: selected === null ? "rgba(245, 197, 24, 0.1)" : "transparent",
        }}>
        All tabs
      </button>
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={`px-3 py-2 text-xs font-medium tracking-wider uppercase border transition-all ${
            selected === option
              ? "border-yellow-400/70 text-yellow-400"
              : "border-white/20 text-white/60 hover:border-white/30"
          }`}
          style={{
            backgroundColor: selected === option ? "rgba(245, 197, 24, 0.1)" : "transparent",
          }}>
          {option}
        </button>
      ))}
    </div>
  )
}
