"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import type { Treatment } from "@/data/treatments";

type Props = {
    treatment: Treatment;
};

export default function TreatmentCard({ treatment }: Props) {
    const [open, setOpen] = useState(false);

    return (
        <motion.article
            whileHover={{ y: -8, scale: 1.015 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="group h-full relative overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm"
        >
            <div className="pointer-events-none absolute inset-0 z-10 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute -left-12 -top-12 h-48 w-48 rounded-full bg-rose-200/40 blur-3xl" />
                <div className="absolute -bottom-12 -right-12 h-48 w-48 rounded-full bg-stone-200/70 blur-3xl" />
            </div>

            <div className="relative h-64 overflow-hidden bg-stone-200">
                <Image
                    src={treatment.image}
                    alt={treatment.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-110 group-hover:brightness-105"
                />
                <div
                    className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent opacity-0 group-hover:opacity-100"/>
            </div>

            <div className="relative z-20 p-6">
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-rose-500">
                    {treatment.category}
                </p>

                <h3 className="mt-3">
                    <button
                        type="button"
                        className="lusso-treatment-trigger"
                        onClick={() => setOpen((value) => !value)}
                        aria-expanded={open}
                    >
                        <span>{treatment.title}</span>
                        <span aria-hidden="true">{open ? "−" : "+"}</span>
                    </button>
                </h3>

                {open && <div className="lusso-treatment-description">
                    <p>{treatment.description}</p>
                    {treatment.highlight && <strong>{treatment.highlight}</strong>}
                </div>}
            </div>
        </motion.article>
    );
}
