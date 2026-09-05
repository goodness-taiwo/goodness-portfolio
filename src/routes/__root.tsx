import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

const SITE_URL = "https://oluwole-heritage-portfolio.lovable.app";

const links = [
  { to: "/", label: "Overview" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">Error 404</p>
        <h1 className="mt-4 text-6xl font-semibold md:text-8xl">Lost page.</h1>
        <p className="mt-6 text-muted-foreground">
          The page you&apos;re looking for isn&apos;t here. Let&apos;s get you back.
        </p>
        <Link to="/" className="mt-8 inline-flex items-center gap-2 border-b border-foreground pb-1">
          Return to the overview <span className="text-primary">→</span>
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-md text-center">
        <h1 className="text-4xl font-semibold">Something interrupted the page.</h1>
        <p className="mt-3 text-sm text-muted-foreground">Try again, or head home.</p>
        <div className="mt-6 flex justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground"
          >
            Try again
          </button>
          <a href="/" className="border border-border px-5 py-2 text-sm">Home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Oluwole Heritage — Web Designer & Writer" },
      {
        name: "description",
        content:
          "Portfolio of Oluwole Heritage — a web designer and writer turning complex ideas into clear digital experiences.",
      },
      { name: "author", content: "Oluwole Heritage" },
      { property: "og:title", content: "Oluwole Heritage — Web Designer & Writer" },
      {
        property: "og:description",
        content:
          "Web design, UX, and writing for products that need to be understood. Selected work with GenRev, Mango Entertainment, and Tax & Compliance.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Oluwole Heritage" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Oluwole Heritage — Web Designer & Writer" },
      {
        name: "twitter:description",
        content: "Web design, UX, and writing for products that need to be understood.",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Oluwole Heritage",
          jobTitle: "Web Designer & Writer",
          email: "mailto:Olukolujooluwole@gmail.com",
          url: SITE_URL,
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
          <nav className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between px-6 md:px-10">
            <Link to="/" className="font-tech text-sm font-semibold tracking-[-0.02em]">
              Oluwole Heritage<span className="text-primary"> /</span>
            </Link>
            <div className="hidden items-center gap-8 md:flex">
              {links.slice(1).map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                  activeProps={{ className: "text-foreground" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <Link
              to="/contact"
              className="border border-primary px-4 py-2 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Let&apos;s talk <span aria-hidden="true">↗</span>
            </Link>
          </nav>
        </header>

        <main className="flex-1">
          <Outlet />
        </main>

        <footer className="border-t border-border">
          <div className="mx-auto flex max-w-[1240px] flex-col gap-8 px-6 py-12 md:flex-row md:items-end md:justify-between md:px-10">
            <div>
              <p className="font-tech text-lg font-semibold">
                Oluwole Heritage<span className="text-signal"> /</span>
              </p>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Web design, UX, and writing for products that need to be understood.
              </p>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs text-muted-foreground">
              {links.map((link) => (
                <Link key={link.to} to={link.to} className="transition-colors hover:text-foreground">
                  {link.label}
                </Link>
              ))}
              <a href="mailto:Olukolujooluwole@gmail.com" className="text-primary">Email ↗</a>
            </div>
          </div>
        </footer>
      </div>
    </QueryClientProvider>
  );
}
