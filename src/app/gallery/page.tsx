"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { galleryImages } from "@/data/gallery";
import PageHeader from "@/components/ui/PageHeader";
import FadeIn from "@/components/ui/FadeIn";

export default function GalleryPage() {
    const [category, setCategory] = useState<"Clinic" | "Staff">("Clinic");
    const visibleImages = galleryImages.filter((item) => item.category === category);

    return (
        <main>
            <PageHeader
                label="Gallery"
                title="Clinic & Staff"
                description="A look inside our clinic and the people who welcome you."
            />

            <section className="luxury-glow mx-auto max-w-7xl px-6 py-16">
                <div className="mb-10 flex justify-center gap-3" role="tablist" aria-label="Gallery categories">
                    {(["Clinic", "Staff"] as const).map((item) => (
                        <button
                            key={item}
                            type="button"
                            role="tab"
                            aria-selected={category === item}
                            className="lusso-gallery-tab"
                            onClick={() => setCategory(item)}
                        >
                            {item}
                        </button>
                    ))}
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {visibleImages.map((item, index) => (
                        <FadeIn key={item.id} delay={index * 0.05}>
                            <motion.div
                                whileHover={{ y: -8, scale: 1.015 }}
                                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                                className="group relative overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm"
                            >
                                <div className="pointer-events-none absolute inset-0 z-10 opacity-0 transition duration-500 group-hover:opacity-100">
                                    <div className="absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-rose-200/40 blur-3xl" />
                                    <div className="absolute -top-12 -right-12 h-48 w-48 rounded-full bg-stone-200/70 blur-3xl" />
                                </div>

                                <div className="relative h-80 overflow-hidden bg-stone-200">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover transition duration-700 group-hover:scale-110 group-hover:brightness-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                                </div>

                                <div className="relative z-20 p-5">
                                    <p className="text-xs font-medium uppercase tracking-[0.25em] text-rose-500">
                                        {item.category}
                                    </p>

                                    <h2 className="mt-2 font-serif text-xl font-semibold text-stone-900 transition group-hover:text-rose-500">
                                        {item.title}
                                    </h2>
                                </div>
                            </motion.div>
                        </FadeIn>
                    ))}
                </div>
            </section>
        </main>
    );
}
