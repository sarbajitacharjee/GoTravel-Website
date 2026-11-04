
"use client";

import { motion } from "framer-motion";
import {
  Mountain,
  Waves,
  Trees,
  Landmark,
  Footprints,
  Camera,
  ArrowUpRight,
} from "lucide-react";

const experiences = [
  {
    title: "Mountain escapes",
    description: "Find quiet above the clouds.",
    icon: Mountain,
    color: "bg-[#e6eee0]",
  },
  {
    title: "Coastal days",
    description: "Follow the horizon.",
    icon: Waves,
    color: "bg-[#e0eff0]",
  },
  {
    title: "Into the wild",
    description: "Reconnect with nature.",
    icon: Trees,
    color: "bg-[#e3ead9]",
  },
  {
    title: "Culture & heritage",
    description: "Discover stories and traditions.",
    icon: Landmark,
    color: "bg-[#f2e8d9]",
  },
  {
    title: "Outdoor adventure",
    description: "Take the scenic route.",
    icon: Footprints,
    color: "bg-[#e9e3f1]",
  },
  {
    title: "Photography trips",
    description: "See the world differently.",
    icon: Camera,
    color: "bg-[#f3e6df]",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experiences" className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2f7d5c] sm:text-sm">
            Travel your way
          </p>

          <h2 className="font-display mt-4 text-4xl leading-tight tracking-tight text-[#17231d] sm:text-5xl lg:text-6xl">
            What does your kind of escape look like?
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-[#66736b] sm:text-base">
            Whether you crave stillness or adventure, find the experiences
            that make a journey uniquely yours.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {experiences.map((experience, index) => {
            const Icon = experience.icon;

            return (
              <motion.article
                key={experience.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className={`group flex min-h-40 items-center gap-5 rounded-3xl p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6 ${experience.color}`}
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/80 text-[#245a43] transition group-hover:bg-[#245a43] group-hover:text-white">
                  <Icon size={25} strokeWidth={1.7} />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-bold text-[#17231d] sm:text-lg">
                    {experience.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#66736b]">
                    {experience.description}
                  </p>
                </div>

                <ArrowUpRight
                  size={18}
                  className="shrink-0 text-[#245a43] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
