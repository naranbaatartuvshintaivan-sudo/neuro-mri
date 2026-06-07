/**
 * Fixed background atmosphere for the whole page: one anchored blue→cyan
 * glow, a faint blueprint grid, a console dot-field, and a whisper of grain.
 * Deliberately NOT "gradient blobs everywhere" — a single intentional light source.
 */
export function Atmosphere() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* deep vignette base */}
      <div className="absolute inset-0 bg-ink" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-10%,rgba(18,30,66,0.9),transparent_60%)]" />

      {/* anchored top-right light source */}
      <div className="glow-blue absolute -right-[18%] -top-[20%] h-[55vw] w-[55vw] opacity-60" />
      <div className="glow-cyan absolute right-[6%] top-[8%] h-[26vw] w-[26vw] opacity-40" />
      <div className="glow-blue absolute -left-[14%] top-[58%] h-[42vw] w-[42vw] opacity-25" />

      {/* structure */}
      <div className="atmo-grid absolute inset-0" />
      <div className="atmo-noise absolute inset-0" />

      {/* edge fade back to pure ink */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-ink to-transparent" />
    </div>
  );
}
