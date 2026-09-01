import { notFound } from "next/navigation";
import Link from "next/link";
import championsData from "@/data/champions.json";
import { FinalRecord } from "@/types";

interface FinalDetailPageProps {
  params: Promise<{ id: string }>;
}

function randomFunction() {
}

export async function generateStaticParams() {
  const finals = championsData as FinalRecord[];
  return finals.map((final) => ({
    id: final.id,
  }));
}
import { notFound } from "next/navigation";
import Link from "next/link";
import championsData from "@/data/champions.json";
import { FinalRecord } from "@/types";

export default async function FinalDetailPage({
  params,
}: FinalDetailPageProps) {
  const { id } = await params;
  const finals = championsData as FinalRecord[];
  const final = finals.find((f) => f.id === id);
  if (!final) notFound();

  return (
    <div style={{ backgroundColor: "var(--color-navy)" }}>
      <div className="max-w-4xl mx-auto px-6 pt-24">
        <Link
          href="/seasons"
          className="text-xs tracking-widest uppercase inline-block mb-8"
          style={{ color: "var(--color-gold)" }}
        >
          ← All Seasons
        </Link>

        <div className="mb-12">
          <p
            className="text-sm tracking-[0.3em] mb-4"
            style={{ color: "var(--color-gold)" }}
          >
            {final.year} · {final.city}
          </p>
          <h1
            className="text-5xl md:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            {final.winner} vs {final.runner_up}
          </h1>
          <div
            className="inline-block px-4 py-2 border text-lg font-mono"
            style={{
              borderColor: "var(--color-gold)",
              color: "var(--color-gold)",
            }}
          >
            {final.score}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div
            className="p-6 border border-white/10"
            style={{ backgroundColor: "var(--color-surface)" }}
          >
            <p
              className="text-xs tracking-widest uppercase mb-3"
              style={{ color: "var(--color-gold)" }}
            >
              Match Info
            </p>
            <div className="space-y-3">
              <div>
                <p
                  className="text-xs mb-1"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  Stadium
                </p>
                <p className="text-white font-bold">{final.stadium}</p>
              </div>
              <div>
                <p
                  className="text-xs mb-1"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  Manager
                </p>
                <p className="text-white font-bold">{final.manager}</p>
              </div>
              <div>
                <p
                  className="text-xs mb-1"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  Captain
                </p>
                <p className="text-white font-bold">{final.captain}</p>
              </div>
            </div>
          </div>

          <div
            className="p-6 border border-white/10"
            style={{ backgroundColor: "var(--color-surface)" }}
          >
            <p
              className="text-xs tracking-widest uppercase mb-3"
              style={{ color: "var(--color-gold)" }}
            >
              Road to Glory
            </p>
            <div className="space-y-2">
              {Object.entries(final.road_to_glory).map(([round, opponent]) => (
                <div
                  key={round}
                  className="flex justify-between py-2 border-b border-white/10"
                >
                  <span
                    className="text-xs uppercase"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    {round.replace("_", " ")}
                  </span>
                  <span className="text-sm text-white font-bold">
                    {opponent === "bye" ? "—" : opponent}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="p-6 border border-white/10 mb-12"
          style={{ backgroundColor: "var(--color-surface)" }}
        >
          <p
            className="text-xs tracking-widest uppercase mb-3"
            style={{ color: "var(--color-gold)" }}
          >
            The Story
          </p>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            {final.story}
          </p>
        </div>

        <div
          className="p-6 border border-white/10 mb-12"
          style={{ backgroundColor: "var(--color-surface)" }}
        >
          <p
            className="text-xs tracking-widest uppercase mb-4"
            style={{ color: "var(--color-gold)" }}
          >
            Starting XI · {final.starting_xi.formation}
          </p>
          <div className="space-y-3">
            {[
              { role: "GK", players: final.starting_xi.goalkeeper },
              { role: "DEF", players: final.starting_xi.defenders },
              { role: "MID", players: final.starting_xi.midfielders },
              { role: "FWD", players: final.starting_xi.forwards },
            ].map(({ role, players }) => (
              <div key={role} className="flex gap-3">
                <span
                  className="text-xs font-mono w-10"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  {role}
                </span>
                <div className="flex flex-wrap gap-2">
                  {players.map((player) => (
                    <span
                      key={player}
                      className="text-xs px-2 py-1 border border-white/10 text-white/80"
                    >
                      {player}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-12">
          <Link
            href="/seasons"
            className="inline-block px-6 py-3 text-sm font-semibold tracking-widest uppercase transition-colors"
            style={{
              backgroundColor: "var(--color-gold)",
              color: "var(--color-navy)",
            }}
          >
            ← Back to Seasons
          </Link>
        </div>
      </div>
    </div>
  );
}
