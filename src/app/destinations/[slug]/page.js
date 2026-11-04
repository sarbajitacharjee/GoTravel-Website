
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Compass,
  MapPin,
  Globe2,
  Mountain,
} from "lucide-react";

import destinations from "@/data/destinations";
import DestinationCard from "@/components/DestinationCard";
import Footer from "@/components/Footer";

// Generate static routes for all destinations.
export function generateStaticParams() {
  return destinations.map((destination) => ({
    slug: destination.slug,
  }));
}

// Dynamic SEO metadata.
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const destination = destinations.find(
    (item) => item.slug === slug
  );

  if (!destination) {
    return {
      title: "Destination Not Found | GoTravel",
    };
  }

  return {
    title: `${destination.name}, ${destination.country} | GoTravel`,
    description: destination.description,
  };
}

// Destination content.
async function DestinationContent({ params }) {
  const { slug } = await params;

  const destination = destinations.find(
    (item) => item.slug === slug
  );

  if (!destination) {
    notFound();
  }

  // Find destinations from the same region first.
  const relatedDestinations = [
    ...destinations.filter(
      (item) =>
        item.id !== destination.id &&
        item.region === destination.region
    ),
    ...destinations.filter(
      (item) =>
        item.id !== destination.id &&
        item.region !== destination.region
    ),
  ].slice(0, 3);

  return (
    <main className="min-h-screen bg-[#101a16] text-white">

      {/* DESTINATION HERO */}

      <section className="relative isolate min-h-[620px] overflow-hidden bg-[#142d22] sm:min-h-[700px]">

        {/* UNIVERSAL DESTINATION VIDEO / IMAGE HERO */}

{destination.heroVideo ? (
  <video
    key={destination.heroVideo}
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
    poster={destination.image}
    className="absolute inset-0 z-0 h-full w-full object-cover"
    aria-label={`Scenic view of ${destination.name}`}
  >
    <source src={destination.heroVideo} type="video/mp4" />
  </video>
) : (
  <Image
    src={destination.image}
    alt={`${destination.name}, ${destination.country}`}
    fill
    priority
    sizes="100vw"
    className="object-cover"
  />
)}

        <div className="absolute inset-0 -z-0 bg-black/35" />
        <div className="absolute inset-0 -z-0 bg-gradient-to-b from-black/65 via-black/20 to-[#101a16]" />
        <div className="absolute inset-0 -z-0 bg-gradient-to-r from-black/50 to-transparent" />

        {/* NAVIGATION */}

        <header className="relative z-20">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8 lg:px-10">

            <Link href="/" className="flex items-center gap-2">
              <Compass size={25} className="text-emerald-300" />

              <span className="text-xl font-bold">
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

              <Link
                href="/destinations"
                className="text-emerald-300"
              >
                Destinations
              </Link>

              <Link
                href="/#experiences"
                className="hidden text-white/75 transition hover:text-white sm:block"
              >
                Experiences
              </Link>

            </div>
          </nav>
        </header>

        {/* HERO CONTENT */}

        <div className="relative z-10 mx-auto flex min-h-[520px] max-w-7xl flex-col justify-end px-5 pb-24 pt-24 sm:min-h-[580px] sm:px-8 lg:px-10">

          <Link
            href="/destinations"
            className="mb-10 inline-flex w-fit items-center gap-2 text-sm font-medium text-white/75 transition hover:text-emerald-200"
          >
            <ArrowLeft size={17} />
            All destinations
          </Link>

          <div className="max-w-4xl">

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-100 backdrop-blur-md">
              <MapPin size={14} />
              {destination.country}
            </div>

            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-200 sm:text-sm">
              {destination.category}
            </p>

            <h1 className="font-display text-6xl leading-[0.95] tracking-tight sm:text-7xl lg:text-9xl">
              {destination.name}
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
              {destination.description}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">

              <a
                href="#overview"
                className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#174936] transition hover:bg-emerald-200"
              >
                Discover destination
                <ArrowRight size={17} />
              </a>

              <Link
                href="/destinations"
                className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
              >
                Explore more
                <ArrowUpRight size={17} />
              </Link>

            </div>

          </div>
        </div>
      </section>

      {/* DESTINATION OVERVIEW */}

      <section
        id="overview"
        className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10"
      >

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-20">

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
              Discover the destination
            </p>

            <h2 className="font-display mt-5 text-4xl leading-tight sm:text-5xl">
              A place worth
              <br />
              <span className="italic text-emerald-200">
                experiencing.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/65">
              {destination.description}
            </p>

            <p className="mt-5 max-w-2xl text-sm leading-8 text-white/50">
              Explore the character of {destination.name}, discover its
              surroundings and find inspiration for your next journey.
              Whether you are looking for relaxation, adventure or cultural
              experiences, use this destination guide as the starting point
              for planning your trip.
            </p>

            <div className="mt-9 flex items-center gap-3 text-sm font-semibold text-emerald-200">
              <Compass size={19} />
              Your next adventure starts here.
            </div>

          </div>

          {/* DESTINATION INFORMATION */}

          <div className="h-fit rounded-3xl border border-white/10 bg-[#1b2922] p-6 sm:p-8">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
              Destination information
            </p>

            <div className="mt-7 space-y-6">

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-emerald-300">
                  <MapPin size={22} />
                </div>

                <div>
                  <p className="text-xs text-white/45">Destination</p>
                  <p className="mt-1 font-semibold">
                    {destination.name}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-emerald-300">
                  <Globe2 size={22} />
                </div>

                <div>
                  <p className="text-xs text-white/45">Country</p>
                  <p className="mt-1 font-semibold">
                    {destination.country}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-emerald-300">
                  <Mountain size={22} />
                </div>

                <div>
                  <p className="text-xs text-white/45">Region</p>
                  <p className="mt-1 font-semibold">
                    {destination.region}
                  </p>
                </div>
              </div>

              <div className="border-t border-white/10 pt-6">
                <p className="text-xs text-white/45">
                  Travel category
                </p>

                <p className="mt-2 font-semibold text-emerald-200">
                  {destination.category}
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* DESTINATION IMAGE */}

      <section className="px-5 sm:px-8 lg:px-10">

        <div className="relative mx-auto h-[300px] max-w-7xl overflow-hidden rounded-3xl sm:h-[450px] lg:h-[560px]">

          <Image
            src={destination.image}
            alt={`Explore ${destination.name}`}
            fill
            sizes="100vw"
            className="object-cover transition duration-1000 hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />

          <div className="absolute bottom-8 left-8 right-8 sm:bottom-12 sm:left-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
              Go beyond the ordinary
            </p>

            <h2 className="font-display mt-3 text-4xl sm:text-6xl">
              Discover {destination.name}.
            </h2>
          </div>

        </div>
      </section>

      {/* RELATED DESTINATIONS */}

      {relatedDestinations.length > 0 && (
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10">

          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
                Keep exploring
              </p>

              <h2 className="font-display mt-4 text-4xl sm:text-5xl">
                You might also love.
              </h2>

              <p className="mt-3 text-sm text-white/50">
                Discover more incredible destinations around the world.
              </p>
            </div>

            <Link
              href="/destinations"
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-emerald-200 transition hover:text-white"
            >
              View all destinations
              <ArrowRight size={17} />
            </Link>

          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {relatedDestinations.map((item, index) => (
              <DestinationCard
                key={item.id}
                destination={item}
                index={index}
              />
            ))}

          </div>
        </section>
      )}

      <Footer />

    </main>
  );
}

// Suspense boundary for Next.js 16 instant navigation.
export default function DestinationDetailPage({ params }) {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-[#101a16] text-white">
          <div className="text-center">

            <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-white/20 border-t-emerald-400" />

            <p className="mt-5 text-sm text-white/60">
              Preparing your destination...
            </p>

          </div>
        </main>
      }
    >
      <DestinationContent params={params} />
    </Suspense>
  );
}
