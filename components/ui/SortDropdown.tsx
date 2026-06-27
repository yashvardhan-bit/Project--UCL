"use client"

interface SortDropdownProps {
  value: string
  onChange: (value: string) => void
  options: Array<{ value: string; label: string }>
}

export default function SortDropdown({ value, onChange, options }: SortDropdownProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="px-4 py-3 bg-white/5 border border-white/10 rounded text-white text-sm focus:outline-none focus:border-white/30 transition-colors cursor-pointer"
      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='white' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 0.5rem center", backgroundSize: "1.2em auto", paddingRight: "2rem" }}>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value} style={{ backgroundColor: "#0A0E1A", color: "white" }}>
          {opt.label}
        </option>
      ))}
    </select>
  )
}
