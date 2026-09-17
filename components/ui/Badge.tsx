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
    default: "bg-slate-900 text-white rounded-full",
    gold: "bg-amber-400 text-slate-900 rounded-full",
    outline: "border border-slate-300 bg-transparent text-slate-900 rounded-full",
  }[variant]

  return <span className={`${baseClass} ${variantClass} ${className}`}>{text}</span>
}
