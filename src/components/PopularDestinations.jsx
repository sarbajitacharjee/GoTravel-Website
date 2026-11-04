
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import destinations from "@/data/destinations";
import DestinationCard from "./DestinationCard";

export default function PopularDestinations() {
  return (
    <section id="destinations" className="bg-[#f8f7f2] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-5 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2f7d5c] sm:text-sm">
              Places to fall in love with
            </p>
            <h2 className="font-display mt-4 max-w-2xl text-4xl leading-tight tracking-tight text-[#17231d] sm:text-5xl lg:text-6xl">
              Your next favourite place is out there.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#66736b] sm:text-base">
              Discover remarkable corners of the world, each with a story
              waiting to become part of yours.
            </p>
          </div>

          <Link
            href="/destinations"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-[#cbd8ce] px-5 py-3 text-sm font-semibold text-[#174936] transition hover:border-[#2f7d5c] hover:bg-[#e8f1e9]"
          >
            All destinations
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {destinations.slice(0, 3).map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <DestinationCard destination={destination} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
