"use client";

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
                background="luxury-glow"
            />

            <section className="luxury-glow py-16">
            <div className="mx-auto max-w-6xl px-6">
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
                <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4">
                    {visibleImages.map((item, index) => (
                        <div key={item.id} className="mb-5 break-inside-avoid">
                            <FadeIn delay={Math.min(index * 0.05, 0.2)}>
                                <motion.figure
                                    whileHover={{ y: -5 }}
                                    transition={{ type: "spring", stiffness: 260, damping: 24 }}
                                    className="group relative isolate overflow-hidden rounded-[1.5rem] bg-[#eadfd5] shadow-[0_14px_35px_rgba(67,46,37,0.15)]"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="block h-auto w-full"
                                        loading="lazy"
                                    />
                                    <div
                                        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#211913]/85 via-[#211913]/35 to-transparent"
                                        aria-hidden="true"
                                    />
                                    <figcaption className="absolute inset-x-0 bottom-0 p-6 text-white">
                                        <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#f0d9c8]">
                                            {item.category}
                                        </p>
                                        <h2 className="mt-2 font-serif text-xl font-medium leading-snug drop-shadow-sm">
                                            {item.title}
                                        </h2>
                                    </figcaption>
                                </motion.figure>
                            </FadeIn>
                        </div>
                    ))}
                </div>
            </div>
            </section>
        </main>
    );
}
