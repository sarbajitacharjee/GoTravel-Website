
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

export default function DestinationCard({ destination, index = 0 }) {
  return (
    <Link
      href={`/destinations/${destination.slug}`}
      className="group block min-w-0"
    >
      <article className="relative isolate aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#dce8df] sm:rounded-[1.75rem]">
        <Image
          src={destination.image}
          alt={`${destination.name}, ${destination.country}`}
          fill
          sizes="(max-width: 639px) 88vw, (max-width: 1023px) 45vw, 30vw"
          priority={index < 2}
          className="object-cover transition duration-700 ease-out group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/5" />

        <span className="absolute left-4 top-4 rounded-full border border-white/25 bg-black/20 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md sm:left-5 sm:top-5">
          {destination.category}
        </span>

        <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#174936] transition duration-300 group-hover:rotate-45 sm:right-5 sm:top-5">
          <ArrowUpRight size={19} />
        </span>

        <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
          <div className="mb-2 flex items-center gap-1.5 text-xs text-white/80 sm:text-sm">
            <MapPin size={14} />
            {destination.country}
          </div>

          <h3 className="font-display text-3xl leading-tight sm:text-4xl">
            {destination.name}
          </h3>

          <p className="mt-2 max-w-sm text-sm leading-6 text-white/80">
            {destination.description}
          </p>

          <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-emerald-200">
            Discover destination
            <ArrowUpRight size={16} />
          </div>
        </div>
      </article>
    </Link>
  );
}
