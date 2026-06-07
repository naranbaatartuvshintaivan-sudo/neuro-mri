import { cn } from "@/lib/utils";

/** Mono eyebrow: cyan status dot · index · uppercase label. */
export function SectionLabel({
  children,
  index,
  className,
}: {
  children: React.ReactNode;
  index?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-3 font-mono text-[0.72rem] uppercase tracking-[0.22em] text-muted",
        className
      )}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full rounded-full bg-cyan opacity-60 blink" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan" />
      </span>
      {index && <span className="text-blue-bright">{index}</span>}
      <span className="h-px w-6 bg-line-2" />
      <span>{children}</span>
    </div>
  );
}
