import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/oluwole")({
  component: OluwoleLayout,
});

const links = [
  { to: "/oluwole", label: "Overview" },
  { to: "/oluwole/work", label: "Work" },
  { to: "/oluwole/about", label: "About" },
  { to: "/oluwole/contact", label: "Contact" },
] as const;

function OluwoleLayout() {
  return (
    <div className="oluwole min-h-screen">
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
        <nav className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between px-6 md:px-10">
          <Link to="/oluwole" className="font-tech text-sm font-semibold tracking-[-0.02em]">
            Oluwole Heritage<span className="text-primary"> /</span>
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            {links.slice(1).map((link) => (
              <Link key={link.to} to={link.to} className="text-xs text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "text-foreground" }}>
                {link.label}
              </Link>
            ))}
          </div>
          <Link to="/oluwole/contact" className="border border-primary px-4 py-2 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </header>
      <main><Outlet /></main>
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-8 px-6 py-12 md:flex-row md:items-end md:justify-between md:px-10">
          <div>
            <p className="font-tech text-lg font-semibold">Oluwole Heritage<span className="text-signal"> /</span></p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">Web design, UX, and writing for products that need to be understood.</p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs text-muted-foreground">
            {links.map((link) => <Link key={link.to} to={link.to} className="transition-colors hover:text-foreground">{link.label}</Link>)}
            <a href="mailto:Olukolujooluwole@gmail.com" className="text-primary">Email ↗</a>
          </div>
        </div>
      </footer>
    </div>
  );
}