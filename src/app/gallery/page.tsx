"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { galleryImages } from "@/data/gallery";
import PageHeader from "@/components/ui/PageHeader";
import FadeIn from "@/components/ui/FadeIn";

export default function GalleryPage() {
    const [category, setCategory] = useState<"Clinic" | "Treatment Rooms">("Clinic");
    const visibleImages = galleryImages.filter((item) => item.category === category);

    return (
        <main>
            <PageHeader
                label="Gallery"
                title="Clinic & Treatment Rooms"
                description="A look inside our clinic and treatment rooms."
                background="luxury-glow"
            />

            <section className="luxury-glow py-16">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mb-10 flex justify-center gap-3" role="tablist" aria-label="Gallery categories">
                    {(["Clinic", "Treatment Rooms"] as const).map((item) => (
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
