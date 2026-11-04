
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, MapPin, Search } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Navbar from "./Navbar";

export default function Hero() {
  const [query, setQuery] = useState("");
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduceMotion ? 0 : 0.7, delay },
  });

  function handleSearch(event) {
    event.preventDefault();
    const destination = query.trim();

    if (destination) {
      window.location.href = `/destinations?q=${encodeURIComponent(destination)}`;
    } else {
      window.location.href = "/destinations";
    }
  }

  return (
    <section className="relative isolate min-h-[740px] overflow-hidden bg-[#173c2e] sm:min-h-[780px] lg:min-h-[min(850px,100svh)]">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        poster="/images/hero-poster.jpg"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 -z-10 bg-black/25" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#10271e]/85 via-[#10271e]/45 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#10271e]/75 via-transparent to-black/30" />

      <Navbar />

      <div className="mx-auto flex min-h-[740px] max-w-7xl items-center px-5 pb-14 pt-36 sm:min-h-[780px] sm:px-8 lg:min-h-[min(850px,100svh)] lg:px-10">
        <div className="w-full max-w-4xl">
          <motion.div
            {...reveal(0)}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-100 backdrop-blur-md sm:text-sm"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-300" />
            A world waiting to be explored
          </motion.div>

          <motion.h1
            {...reveal(0.12)}
            className="font-display max-w-4xl text-[clamp(3.25rem,8vw,7rem)] leading-[0.98] tracking-[-0.045em] text-white"
          >
            Find your own
            <br />
            <span className="italic text-emerald-200">
              kind of wonder.
            </span>
          </motion.h1>

          <motion.p
            {...reveal(0.24)}
            className="mt-6 max-w-xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8"
          >
            From quiet mountain escapes to vibrant coastal towns, discover
            places that stay with you long after the journey ends.
          </motion.p>

          <motion.form
            {...reveal(0.36)}
            onSubmit={handleSearch}
            className="mt-9 flex max-w-2xl flex-col gap-2 rounded-3xl border border-white/20 bg-white/10 p-2 shadow-2xl backdrop-blur-xl sm:flex-row sm:items-center"
          >
            <label className="flex min-h-[60px] min-w-0 flex-1 items-center gap-3 rounded-2xl bg-white px-4">
              <MapPin
                size={21}
                className="shrink-0 text-[#2f7d5c]"
              />
              <span className="min-w-0 flex-1">
                <span className="block text-[10px] font-bold uppercase tracking-[0.13em] text-gray-500">
                  Discover a destination
                </span>
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Try Bali, Kyoto, Iceland..."
                  aria-label="Search destinations"
                  className="mt-1 w-full bg-transparent text-sm font-medium text-gray-900 outline-none placeholder:text-gray-400 sm:text-base"
                />
              </span>
            </label>

            <button
              type="submit"
              className="flex min-h-[58px] items-center justify-center gap-3 rounded-2xl bg-[#2f7d5c] px-7 text-sm font-semibold text-white transition hover:bg-[#256449] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Explore places
              <ArrowRight size={18} />
            </button>
          </motion.form>

          <motion.div
            {...reveal(0.48)}
            className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-white/75"
          >
            <span className="font-medium text-white/90">Popular:</span>
            {["Bali", "Japan", "Switzerland", "Meghalaya"].map((place) => (
              <Link
                key={place}
                href={`/destinations?q=${encodeURIComponent(place)}`}
                className="underline decoration-white/35 underline-offset-4 transition hover:text-emerald-200"
              >
                {place}
              </Link>
            ))}
          </motion.div>

          <motion.a
            {...reveal(0.6)}
            href="#destinations"
            className="mt-12 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/70 transition hover:text-white"
          >
            Scroll to discover
            <ArrowDown size={16} />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
