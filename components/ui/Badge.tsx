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
  return <span className={`${baseClass} ${variantClass} ${className}`}>{text}</span>
}
