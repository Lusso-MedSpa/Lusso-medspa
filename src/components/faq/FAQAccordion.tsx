"use client";

import { useState } from "react";
import { faqGroups } from "@/data/faqs";
import { AnimatePresence, motion } from "framer-motion";

export default function FAQAccordion() {
    const [openItem, setOpenItem] = useState<string | null>(null);

    return (
        <section className="mx-auto max-w-4xl px-6 py-16">
            <div className="space-y-10">
                {faqGroups.map((group) => (
                    <div key={group.category}>
                        <h2 className="mb-5 font-serif text-2xl font-semibold text-stone-900">
                            {group.category}
                        </h2>

                        <div className="space-y-4">
                            {group.items.map((item) => {
                                const id = `${group.category}-${item.question}`;
                                const isOpen = openItem === id;

                                return (
                                    <div
                                        key={id}
                                        className="rounded-2xl border border-stone-200 bg-white shadow-sm"
                                    >
                                        <button
                                            type="button"
                                            onClick={() => setOpenItem(isOpen ? null : id)}
                                            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                                        >
                      <span className="font-medium text-stone-900">
                        {item.question}
                      </span>

                                            <span className="text-xl text-rose-500">
                        {isOpen ? "−" : "+"}
                      </span>
                                        </button>

                                        <AnimatePresence initial={false}>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="border-t border-stone-100 px-6 pb-5 pt-4 text-sm leading-7 text-stone-600">
                                                        {item.answer}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}