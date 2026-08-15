import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoAsset from "@/assets/IMG_5720.webp";
import gaSailsLogo from "/ga-sails-logo.webp";
import terzoLogo from "@/assets/WhatsApp Image 2026-08-15 at 2.58.15 PM.jpeg";

const nav = [
  { to: "/", label: "Home" },
  { to: "/program", label: "Program" },
  { to: "/book", label: "Book now" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-8">
        <div className="flex items-center gap-3 sm:gap-4">
          <Link to="/" aria-label="SurfStar home" className="block">
            <img
              src={logoAsset}
              alt="SurfStar Watersport Center Porto Pollo logo"
              className="size-16 object-contain sm:size-20"
            />
          </Link>
          <img
            src={gaSailsLogo}
            alt="GA Sails logo"
            className="h-14 w-auto object-contain sm:h-16"
          />
          <img
            src={terzoLogo}
            alt="Terzo logo"
            className="h-14 w-auto object-contain sm:h-16"
          />
        </div> {/* <--- ECCO IL DIV CHIUSO CORRETTAMENTE */}

        <nav className="hidden items-center gap-2 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="px-5 py-2 font-display text-lg tracking-wide text-white uppercase transition-colors hover:bg-white/15 [&.active]:bg-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="flex size-11 items-center justify-center bg-ink/70 text-brand md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col bg-ink/95 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: item.to === "/" }}
              className="border-b border-white/10 px-6 py-4 font-display text-xl text-white uppercase [&.active]:text-brand"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}