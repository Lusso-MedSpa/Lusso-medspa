"use client";

import { useState } from "react";
import TreatmentCard from "@/components/treatments/TreatmentCard";
import { treatmentCategories, treatments } from "@/data/treatments";
import FadeIn from "@/components/ui/FadeIn";

export default function TreatmentsGrid() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredTreatments =
        activeCategory === "All"
            ? treatments
            : treatments.filter((item) => item.category === activeCategory);

    return (
        <section className="luxury-glow mx-auto max-w-7xl px-6 py-16">
            <FadeIn>
                <div className="mb-12 flex flex-wrap justify-center gap-3">
                    {treatmentCategories.map((category) => (
                        <button
                            key={category}
                            type="button"
                            onClick={() => setActiveCategory(category)}
                            className={`rounded-full border px-5 py-2 text-sm font-medium shadow-sm transition duration-300 hover:-translate-y-0.5 ${
                                activeCategory === category
                                    ? "border-stone-900 bg-stone-900 text-white shadow-md"
                                    : "border-stone-200 bg-white/80 text-stone-700 hover:border-rose-400 hover:text-rose-500"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </FadeIn>

            <div className="grid gap-8 md:grid-cols-3">
                {filteredTreatments.map((treatment, index) => (
                    <FadeIn key={treatment.slug} delay={index * 0.08}>
                        <TreatmentCard treatment={treatment} />
                    </FadeIn>
                ))}
            </div>
        </section>
    );
}