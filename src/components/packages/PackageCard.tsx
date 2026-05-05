"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { SpaPackage } from "@/data/packages";

const MotionLink = motion.create(Link);

type Props = {
    item: SpaPackage;
};

export default function PackageCard({ item }: Props) {
    return (
        <MotionLink
            href={`/packages/${item.slug}`}
            whileHover={{ y: -8, scale: 1.015 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="group relative overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm"
        >
            <div className="pointer-events-none absolute inset-0 z-10 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-rose-200/40 blur-3xl" />
                <div className="absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-stone-200/70 blur-3xl" />
            </div>

            <div className="relative h-64 overflow-hidden bg-stone-200">
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-110 group-hover:brightness-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                {item.status === "coming-soon" && (
                    <span className="absolute right-4 top-4 rounded-full bg-white/90 px-4 py-2 text-xs font-medium text-stone-900 shadow-sm backdrop-blur">
            Coming Soon
          </span>
                )}
            </div>

            <div className="relative z-20 p-6">
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-rose-500">
                    {item.category}
                </p>

                <h3 className="mt-3 font-serif text-2xl font-semibold text-stone-900 transition group-hover:text-rose-500">
                    {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-stone-600">
                    {item.description}
                </p>

                <div className="mt-5 flex items-center justify-between gap-4">
          <span className="text-sm text-stone-500">
            {item.sessions}
          </span>

                    <span className="text-sm font-medium text-stone-900 transition group-hover:translate-x-1 group-hover:text-rose-500">
            View Package →
          </span>
                </div>
            </div>
        </MotionLink>
    );
}