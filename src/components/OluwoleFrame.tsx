export function OluwoleFrame({
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
    <div className={`overflow-hidden border border-border bg-card shadow-[0_24px_80px_-36px_var(--cobalt)] ${className}`}>
      <div className="flex h-9 items-center justify-between border-b border-border px-3">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-muted-foreground/50" />
          <span className="h-2 w-2 rounded-full bg-muted-foreground/50" />
          <span className="h-2 w-2 rounded-full bg-muted-foreground/50" />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{label}</span>
      </div>
      <img src={src} alt={alt} loading="lazy" className="block aspect-[16/10] w-full object-cover object-top transition-transform duration-700 hover:scale-[1.025]" />
    </div>
  );
}