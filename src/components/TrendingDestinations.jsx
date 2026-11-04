
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import destinations from "@/data/destinations";
import DestinationCard from "./DestinationCard";

export default function TrendingDestinations() {
  return (
    <section className="bg-[#edf2e9] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-5 sm:mb-12 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2f7d5c] sm:text-sm">
              A little inspiration
            </p>
            <h2 className="font-display mt-4 text-4xl leading-tight text-[#17231d] sm:text-5xl lg:text-6xl">
              Places on our minds.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#66736b] sm:text-base">
            From timeless cultural escapes to wild natural landscapes, here
            are a few places worth adding to your travel list.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.slice(3, 6).map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <DestinationCard destination={destination} index={index} />
            </motion.div>
          ))}
        </div>

        <div className="mt-9 flex justify-center">
          <a
            href="/destinations"
            className="inline-flex items-center gap-2 rounded-full bg-[#174936] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#245a43]"
          >
            Explore all places
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
