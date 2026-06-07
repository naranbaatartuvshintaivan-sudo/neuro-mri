/**
 * Fixed background atmosphere for the whole page: an off-white base, one
 * anchored soft blue→cyan light source, and a faint blueprint grid.
 * Deliberately calm and airy — a single intentional light, not blobs everywhere.
 */
export function Atmosphere() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* clean light base */}
      <div className="absolute inset-0 bg-bg" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-10%,rgba(20,102,255,0.06),transparent_60%)]" />

      {/* anchored top-right light source, very soft */}
      <div className="glow-blue absolute -right-[18%] -top-[20%] h-[55vw] w-[55vw] opacity-30" />
      <div className="glow-cyan absolute right-[6%] top-[8%] h-[26vw] w-[26vw] opacity-25" />

      {/* structure */}
      <div className="atmo-grid absolute inset-0" />
      <div className="atmo-noise absolute inset-0" />

      {/* edge fade back to the page background */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-bg to-transparent" />
    </div>
  );
}
