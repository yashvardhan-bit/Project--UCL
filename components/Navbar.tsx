"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/champions", label: "Champions" },
  { href: "/legends", label: "Legends" },
  { href: "/seasons", label: "Seasons" },
  { href: "/records", label: "Records" },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10"
      style={{ backgroundColor: "var(--color-navy)" }}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🏆</span>
          <span
            className="text-xl tracking-widest"
            style={{ fontFamily: "var(--font-bebas)", color: "var(--color-gold)" }}>
            The Champions Archive
          </span>
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide transition-colors duration-200"
              style={{
                color: pathname === link.href
                  ? "var(--color-gold)"
                  : "rgba(255,255,255,0.7)",
              }}>
              {link.label}
            </Link>
          ))}
        </div>

      </div>
    </nav>
  )
}