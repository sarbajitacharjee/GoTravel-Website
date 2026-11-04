/* eslint-disable react-hooks/set-state-in-effect */

"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Search,
  SlidersHorizontal,
  X,
  Compass,
} from "lucide-react";

import destinations from "@/data/destinations";
import DestinationCard from "./DestinationCard";

export default function DestinationsExplorer() {
  const [query, setQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All regions");
  const [selectedCategory, setSelectedCategory] = useState("All categories");
  const [sortBy, setSortBy] = useState("featured");

  // Read search query passed from the homepage.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setQuery(params.get("q") || "");
  }, []);

  // Generate filter options from existing destination data.
  const regions = useMemo(
    () => [
      "All regions",
      ...new Set(destinations.map((item) => item.region)),
    ],
    []
  );

  const categories = useMemo(
    () => [
      "All categories",
      ...new Set(destinations.map((item) => item.category)),
    ],
    []
  );

  // Search, filter and sort destinations.
  const filteredDestinations = useMemo(() => {
    let results = destinations.filter((destination) => {
      const searchText = query.trim().toLowerCase();

      const matchesSearch =
        !searchText ||
        [
          destination.name,
          destination.country,
          destination.region,
          destination.category,
          destination.description,
        ]
          .filter(Boolean)
          .some((value) => value.toLowerCase().includes(searchText));

      const matchesRegion =
        selectedRegion === "All regions" ||
        destination.region === selectedRegion;

      const matchesCategory =
        selectedCategory === "All categories" ||
        destination.category === selectedCategory;

      return matchesSearch && matchesRegion && matchesCategory;
    });

    results = [...results];

    if (sortBy === "az") {
      results.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "za") {
      results.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortBy === "featured") {
      results.sort(
        (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured))
      );
    }

    return results;
  }, [query, selectedRegion, selectedCategory, sortBy]);

  const clearFilters = () => {
    setQuery("");
    setSelectedRegion("All regions");
    setSelectedCategory("All categories");
    setSortBy("featured");
  };

  const hasActiveFilters =
    query.trim() !== "" ||
    selectedRegion !== "All regions" ||
    selectedCategory !== "All categories";

  return (
    <main className="min-h-screen bg-[#101a16] text-white">

      {/* CINEMATIC HERO */}

      <section className="relative isolate min-h-[540px] overflow-hidden bg-[#142d22] sm:min-h-[600px] lg:min-h-[650px]">

        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero-poster.jpg"
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        >
          <source src="/videos/switz.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 -z-10 bg-black/40" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/65 via-black/20 to-[#101a16]" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#101a16]/65 to-transparent" />

        {/* NAVIGATION */}

        <header className="relative z-20">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8 lg:px-10">

            <Link href="/" className="flex items-center gap-2">
              <Compass size={25} className="text-emerald-300" />

              <span className="text-xl font-bold tracking-tight">
                Go<span className="text-emerald-300">Travel</span>
              </span>
            </Link>

            <div className="flex items-center gap-5 text-sm font-medium sm:gap-8">

              <Link
                href="/"
                className="text-white/75 transition hover:text-white"
              >
                Home
              </Link>

              <span className="text-emerald-300">
                Destinations
              </span>

              <Link
                href="/#experiences"
                className="hidden text-white/75 transition hover:text-white sm:block"
              >
                Experiences
              </Link>

              <Link
                href="/"
                className="rounded-full bg-white px-5 py-2.5 text-xs font-bold text-[#174936] transition hover:bg-emerald-200 sm:text-sm"
              >
                Go Home
              </Link>

            </div>
          </nav>
        </header>

        {/* HERO CONTENT */}

        <div className="mx-auto flex min-h-[430px] max-w-7xl flex-col justify-center px-5 pb-24 pt-14 sm:px-8 lg:px-10">

          <div className="max-w-3xl">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-100 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
              Discover somewhere extraordinary
            </div>

            <h1 className="font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">
              The world is
              <br />
              <span className="italic text-emerald-200">
                yours to explore.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
              Find your next escape. From breathtaking mountain landscapes
              to peaceful coastlines, discover destinations worth travelling for.
            </p>

            <div className="mt-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
              <Compass size={17} className="text-emerald-300" />
              Explore beyond the ordinary
            </div>

          </div>
        </div>

      </section>

      {/* DESTINATION EXPLORER */}

      <section className="relative z-10 mx-auto -mt-8 max-w-7xl px-5 pb-24 sm:px-8 lg:px-10">

        {/* SEARCH BAR */}

        <div className="rounded-3xl border border-white/10 bg-[#1b2922] p-4 shadow-2xl sm:p-6">

          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">

            <div className="flex min-h-[58px] flex-1 items-center gap-3 rounded-2xl border border-white/10 bg-[#25352c] px-4">

              <Search size={20} className="shrink-0 text-emerald-300" />

              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search destination, country or experience..."
                aria-label="Search destinations"
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/40"
              />

              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="text-white/50 hover:text-white"
                >
                  <X size={18} />
                </button>
              )}

            </div>

            <div className="flex items-center gap-2 text-sm text-white/60">
              <SlidersHorizontal size={18} className="text-emerald-300" />
              <span>Refine your journey</span>
            </div>

          </div>

          {/* FILTER CONTROLS */}

          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">

            <label className="flex flex-col gap-2 text-xs font-semibold text-white/55">
              Region

              <select
                value={selectedRegion}
                onChange={(event) => setSelectedRegion(event.target.value)}
                className="h-12 rounded-xl border border-white/10 bg-[#25352c] px-4 text-sm text-white outline-none focus:border-emerald-400"
              >
                {regions.map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-2 text-xs font-semibold text-white/55">
              Travel category

              <select
                value={selectedCategory}
                onChange={(event) => setSelectedCategory(event.target.value)}
                className="h-12 rounded-xl border border-white/10 bg-[#25352c] px-4 text-sm text-white outline-none focus:border-emerald-400"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-2 text-xs font-semibold text-white/55">
              Sort destinations

              <select
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                className="h-12 rounded-xl border border-white/10 bg-[#25352c] px-4 text-sm text-white outline-none focus:border-emerald-400"
              >
                <option value="featured">Featured first</option>
                <option value="az">Name: A to Z</option>
                <option value="za">Name: Z to A</option>
              </select>
            </label>

          </div>

        </div>

        {/* DESTINATION HEADING */}

        <div className="mb-9 mt-16 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
              Find your next escape
            </p>

            <h2 className="font-display mt-3 text-4xl tracking-tight sm:text-5xl">
              Explore destinations
            </h2>

            <p className="mt-3 text-sm text-white/50">
              Discover places that make every journey memorable.
            </p>
          </div>

          <div className="flex items-center gap-3">

            <span className="text-sm text-white/60">
              <span className="font-bold text-emerald-300">
                {filteredDestinations.length}
              </span>{" "}
              {filteredDestinations.length === 1 ? "destination" : "destinations"} found
            </span>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="flex items-center gap-1 text-xs font-semibold text-emerald-300 transition hover:text-white"
              >
                <X size={14} />
                Clear filters
              </button>
            )}

          </div>

        </div>

        {/* DESTINATION GRID */}

        {filteredDestinations.length > 0 ? (

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {filteredDestinations.map((destination, index) => (
              <div
                key={destination.id}
                className="animate-in fade-in duration-500"
              >
                <DestinationCard
                  destination={destination}
                  index={index}
                />
              </div>
            ))}

          </div>

        ) : (

          /* EMPTY STATE */

          <div className="flex min-h-[350px] flex-col items-center justify-center rounded-3xl border border-white/10 bg-[#1b2922] px-6 text-center">

            <Search size={40} className="text-emerald-300" />

            <h3 className="font-display mt-6 text-3xl">
              No destinations found
            </h3>

            <p className="mt-3 max-w-md text-sm leading-7 text-white/50">
              We couldnt find any places matching your search.
              Try another destination or adjust your filters.
            </p>

            <button
              onClick={clearFilters}
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
            >
              Clear all filters
              <ArrowRight size={17} />
            </button>

          </div>

        )}

        {/* BOTTOM CTA */}

        <div className="mt-20 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-[#1d4935] to-[#142d22] p-8 sm:p-12">

          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
                Your next adventure awaits
              </p>

              <h3 className="font-display mt-3 text-3xl sm:text-4xl">
                Somewhere new is calling.
              </h3>

              <p className="mt-3 max-w-lg text-sm leading-7 text-white/65">
                Explore the world at your own pace and find a destination
                that feels like yours.
              </p>
            </div>

            <Link
              href="/#destinations"
              className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#174936] transition hover:bg-emerald-200"
            >
              Back to home
              <ArrowUpRight size={18} />
            </Link>

          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="border-t border-white/10 bg-[#0b1410] px-5 py-8 sm:px-8 lg:px-10">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-xs text-white/40 sm:flex-row">

          <p>© 2026 GoTravel. All rights reserved.</p>

          <Link
            href="/"
            className="transition hover:text-emerald-300"
          >
            Discover more with GoTravel
          </Link>

        </div>

      </footer>

    </main>
  );
}
