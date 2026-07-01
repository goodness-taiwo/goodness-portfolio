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
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

function NotFoundComponent() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-xl text-center">
          <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">Error 404</p>
          <h1 className="font-display text-7xl md:text-9xl mt-4">Lost page.</h1>
          <p className="mt-6 text-muted-foreground">
            The page you're looking for slipped out of the manuscript. Let's get you home.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 mt-8 border-b border-foreground pb-1"
          >
            Return to the index <span className="text-accent">→</span>
          </Link>
        </div>
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
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <h1 className="font-display text-4xl">Something interrupted the page.</h1>
        <p className="mt-3 text-sm text-muted-foreground">Try again, or head home.</p>
        <div className="mt-6 flex justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="px-5 py-2 bg-primary text-primary-foreground text-sm"
          >
            Try again
          </button>
          <a href="/" className="px-5 py-2 border border-border text-sm">Home</a>
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
      { title: "Goodness Taiwo — Brand Writer & Web Designer" },
      {
        name: "description",
        content:
          "Portfolio of Goodness Taiwo — a brand and creative writer, and web designer shaping voice, story and interface for modern brands.",
      },
      { name: "author", content: "Goodness Taiwo" },
      { property: "og:title", content: "Goodness Taiwo — Brand Writer & Web Designer" },
      {
        property: "og:description",
        content:
          "Three years of writing brand voice, editorial, and product copy. Selected work with Black Women App, Lorchain Labs, Whizzcard, Flowdrive and Markdrop.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
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
      <div className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
