
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Compass } from "lucide-react";

const links = [
  { label: "Destinations", href: "/destinations" },
  { label: "Experiences", href: "#experiences" },
  { label: "Our story", href: "#about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <Link href="/" className="flex items-center gap-2 text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
            <Compass size={21} />
          </span>
          <span className="text-xl font-bold tracking-tight">
            Go<span className="text-emerald-300">Travel</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/85 transition hover:text-emerald-200"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/destinations"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#174936] transition hover:bg-emerald-100"
          >
            Start exploring
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-md md:hidden"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="mx-5 rounded-2xl border border-white/15 bg-[#173c2e]/95 p-5 shadow-xl backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/destinations"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-full bg-white px-4 py-3 text-center text-sm font-semibold text-[#174936]"
            >
              Start exploring
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
