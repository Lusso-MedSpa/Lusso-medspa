"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Treatments", href: "/treatments" },
    { label: "Packages", href: "/packages" },
    { label: "About", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);

        handleScroll();
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    return (
        <header
            className={`sticky top-0 z-50 border-b transition-all duration-300 ${
                isScrolled
                    ? "border-stone-200 bg-white/90 shadow-lg shadow-stone-200/50 backdrop-blur-xl"
                    : "border-transparent bg-white/80 backdrop-blur-md"
            }`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className="font-serif text-2xl font-semibold tracking-wide text-stone-900 transition hover:text-rose-500"
                >
                    MedSpa Masoud
                </Link>

                <nav className="hidden items-center gap-7 text-sm font-medium text-stone-700 md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`relative transition hover:text-rose-500 ${
                                isActive(link.href) ? "text-rose-500" : ""
                            }`}
                        >
                            {link.label}

                            {isActive(link.href) && (
                                <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-rose-500" />
                            )}
                        </Link>
                    ))}
                </nav>

                <Link
                    href={siteConfig.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden rounded-full bg-stone-900 px-5 py-2 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-rose-500 hover:shadow-lg md:inline-flex"
                >
                    Book Now
                </Link>

                <button
                    type="button"
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-white text-xl text-stone-900 shadow-sm transition hover:border-rose-300 hover:text-rose-500 md:hidden"
                    aria-label="Toggle navigation menu"
                    aria-expanded={isOpen}
                >
                    {isOpen ? "×" : "☰"}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.25 }}
                        className="border-t border-stone-200 bg-white md:hidden"
                    >
                        <nav className="flex flex-col gap-2 px-6 py-5 text-sm font-medium text-stone-700">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`rounded-2xl px-4 py-3 transition ${
                                        isActive(link.href)
                                            ? "bg-rose-50 text-rose-500"
                                            : "hover:bg-stone-100 hover:text-rose-500"
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            ))}

                            <Link
                                href={siteConfig.bookingUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsOpen(false)}
                                className="mt-3 rounded-full bg-stone-900 px-5 py-3 text-center text-white shadow-sm transition hover:bg-rose-500"
                            >
                                Book Now
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}