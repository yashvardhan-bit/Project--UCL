interface BadgeProps {
  text: string
  variant?: "default" | "gold" | "outline"
  className?: string
}

export default function Badge({
  text,
  variant = "default",
  className = "",
}: BadgeProps) {
  const baseClass = "text-xs px-2 py-1 font-medium tracking-widest uppercase"

  const variantClass = {
    default: "bg-white/10 text-white/80 border border-white/20",
    gold: "bg-yellow-400/10 text-yellow-400 border border-yellow-400/30",
    outline: "bg-transparent border border-white/30 text-white/70",
  }[variant]

  return <span className={`${baseClass} ${variantClass} ${className}`}>{text}</span>
}
