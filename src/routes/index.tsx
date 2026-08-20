import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

const portals = [
  {
    href: "https://lifeisagame.com",
    label: "Life is a Game",
    lines: ["Life is", "a Game"],
  },
  {
    href: "https://eternalrhythm.com",
    label: "Eternal Rhythm",
    lines: ["Eternal", "Rhythm"],
  },
] as const;

function Home() {
  return (
    <div className="stage">
      <main className="flex flex-1 items-center justify-center px-4">
        <h1 className="sr-only">Bitsyth</h1>
        <nav className="portal-row" aria-label="Destinations">
          {portals.map((portal) => (
            <a
              key={portal.href}
              className="portal-tile"
              href={portal.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${portal.label} — ${portal.href.replace("https://", "")}`}
            >
              <span className="sheen" aria-hidden="true" />
              <span className="rim" aria-hidden="true" />
              <span className="portal-mark">
                {portal.lines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </span>
            </a>
          ))}
        </nav>
      </main>
      <footer>
        <p className="legal">
          Copyright ©2026{" "}
          <a href="https://bitsyth.com" target="_blank" rel="noopener noreferrer">
            Bitsyth.com
          </a>{" "}
          All rights reserved
        </p>
      </footer>
    </div>
  );
}
