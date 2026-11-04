
import Link from "next/link";
import { Compass, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer id="about" className="bg-[#142d22] px-5 pb-8 pt-16 text-white sm:px-8 sm:pt-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 border-b border-white/15 pb-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-2">
              <Compass size={25} className="text-emerald-300" />
              <span className="text-2xl font-bold">
                Go<span className="text-emerald-300">Travel</span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/65">
              Find new perspectives, discover beautiful places and make
              every journey count.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Explore</h3>
            <div className="mt-5 flex flex-col items-start gap-4 text-sm text-white/65">
              <Link className="transition hover:text-white" href="/destinations">
                Destinations
              </Link>
              <Link className="transition hover:text-white" href="/destinations">
                Travel inspiration
              </Link>
              <Link className="transition hover:text-white" href="/destinations">
                Nature escapes
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Our approach</h3>
            <p className="mt-5 text-sm leading-7 text-white/65">
              Thoughtful travel discovery, useful destination information and
              inspiration for your next adventure.
            </p>
            <a
              href="#destinations"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-200 hover:text-white"
            >
              Start exploring <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          
          <p>© 2026 GoTravel. All rights reserved.</p>
          <p>Made for curious travellers.</p>
        </div>
      </div>
    </footer>
  );
}
