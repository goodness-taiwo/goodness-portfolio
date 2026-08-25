export function MercyFrame({
  src,
  alt,
  label,
  className = "",
}: {
  src: string;
  alt: string;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl border border-border bg-card overflow-hidden shadow-[0_40px_120px_-50px_rgba(0,0,0,0.9)] ${className}`}
    >
      <div className="flex items-center gap-2 px-4 h-10 border-b border-border bg-secondary/50">
        <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/40" />
        <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/40" />
        <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/40" />
        <span className="ml-3 truncate rounded-md bg-background/70 px-3 py-0.5 font-mono text-[11px] text-muted-foreground">
          {label}
        </span>
      </div>
      <div className="overflow-hidden">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full block transition-transform duration-[1200ms] ease-out hover:scale-[1.02]"
        />
      </div>
    </div>
  );
}
