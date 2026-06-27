"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import clubsData from "@/data/clubs.json"
import { ChampionClub } from "@/types"
import { getCountries } from "@/data/utils"
import SectionHeader from "@/components/ui/SectionHeader"
import SearchBar from "@/components/ui/SearchBar"
import SortDropdown from "@/components/ui/SortDropdown"
import FilterTabs from "@/components/ui/FilterTabs"
import ClubGrid from "@/components/champions/ClubGrid"

type SortOption = "titles-desc" | "titles-asc" | "alpha-asc" | "recent"

export default function ChampionsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState<SortOption>("titles-desc")
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)

  const clubs = clubsData as ChampionClub[]
  const countries = useMemo(() => getCountries(clubs), [])

  // Filter clubs
  const filtered = useMemo(() => {
    let result = clubs

    // Search filter
    if (searchQuery) {
      result = result.filter(
        (club) =>
          club.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          club.country.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Country filter
    if (selectedCountry) {
      result = result.filter((club) => club.country === selectedCountry)
    }

    return result
  }, [searchQuery, selectedCountry])

  // Sort clubs
  const sorted = useMemo(() => {
    const copy = [...filtered]

    switch (sortBy) {
      case "titles-desc":
        return copy.sort((a, b) => b.titles - a.titles)
      case "titles-asc":
        return copy.sort((a, b) => a.titles - b.titles)
      case "alpha-asc":
        return copy.sort((a, b) => a.name.localeCompare(b.name))
      case "recent":
        return copy.sort((a, b) => b.lastTitle - a.lastTitle)
      default:
        return copy
    }
  }, [filtered, sortBy])

  return (
    <div style={{ backgroundColor: "var(--color-navy)" }}>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-16">
        <p className="text-sm tracking-[0.3em] mb-4" style={{ color: "var(--color-gold)" }}>
          UEFA CHAMPIONS LEAGUE
        </p>
        <h1
          className="text-6xl md:text-7xl leading-none mb-6"
          style={{ fontFamily: "var(--font-bebas)", color: "white" }}>
          CHAMPION<br />
          CLUBS
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8" style={{ color: "rgba(255,255,255,0.6)" }}>
          {clubs.length} legendary clubs · {clubs.reduce((sum, c) => sum + c.titles, 0)} titles · 70+ years of history
        </p>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-8 mt-12">
          <div>
            <p
              className="text-4xl font-bold mb-2"
              style={{ fontFamily: "var(--font-bebas)", color: "var(--color-gold)" }}>
              {clubs.length}
            </p>
            <p className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.5)" }}>
              Clubs
            </p>
          </div>
          <div>
            <p
              className="text-4xl font-bold mb-2"
              style={{ fontFamily: "var(--font-bebas)", color: "var(--color-gold)" }}>
              {countries.length}
            </p>
            <p className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.5)" }}>
              Countries
            </p>
          </div>
          <div>
            <p
              className="text-4xl font-bold mb-2"
              style={{ fontFamily: "var(--font-bebas)", color: "var(--color-gold)" }}>
              {clubs.reduce((sum, c) => sum + c.titles, 0)}
            </p>
            <p className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.5)" }}>
              Titles
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <SectionHeader
          label="EXPLORE"
          title="All Champions"
          description="Search, sort, and filter through all clubs that have won the UEFA Champions League. Click any club to explore their complete history."
        />

        {/* Controls */}
        <div className="mb-8 space-y-6">
          {/* Search */}
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            onClear={() => setSearchQuery("")}
            placeholder="Search by club name or country..."
          />

          {/* Sort and Filter Row */}
          <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
            <div className="flex-1 min-w-0">
              <SortDropdown
                value={sortBy}
                onChange={(value) => setSortBy(value as SortOption)}
                options={[
                  { value: "titles-desc", label: "Most Titles" },
                  { value: "titles-asc", label: "Fewest Titles" },
                  { value: "alpha-asc", label: "Alphabetical" },
                  { value: "recent", label: "Recent Winners" },
                ]}
              />
            </div>

            <div className="flex-1 md:flex-none">
              <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>
                Filter by Country
              </p>
            </div>
          </div>

          {/* Country Filter Tabs */}
          <FilterTabs
            options={countries}
            selected={selectedCountry}
            onChange={setSelectedCountry}
          />
        </div>

        {/* Results Summary */}
        <div className="mb-8 flex items-center justify-between">
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
            Showing <span className="font-bold text-white">{sorted.length}</span> of{" "}
            <span className="font-bold text-white">{clubs.length}</span> clubs
          </p>
          {searchQuery || selectedCountry ? (
            <button
              onClick={() => {
                setSearchQuery("")
                setSelectedCountry(null)
              }}
              className="text-xs tracking-widest uppercase px-3 py-1 border border-white/20 hover:border-white/30 transition-colors"
              style={{ color: "var(--color-gold)" }}>
              Reset Filters
            </button>
          ) : null}
        </div>

        {/* Club Grid */}
        <ClubGrid clubs={sorted} />

        {/* Back to Home */}
        <div className="mt-16 text-center">
          <Link
            href="/"
            className="inline-block px-6 py-3 text-sm font-semibold tracking-widest uppercase transition-colors"
            style={{
              backgroundColor: "var(--color-gold)",
              color: "var(--color-navy)",
            }}>
            ← Back Home
          </Link>
        </div>
      </section>
    </div>
  )
}