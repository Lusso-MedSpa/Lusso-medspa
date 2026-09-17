import Link from "next/link";
import { Instagram } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Footer() {
    return (
        <footer className="border-t border-stone-200 bg-gradient-to-b from-rose-50 to-stone-100 text-stone-900">
            <div className="lusso-footer-grid mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-4">
                <div>
                    <h3 className="text-xl font-semibold">Lusso</h3>
                    <p className="mt-4 text-sm leading-6 text-stone-900">
                        Luxury aesthetic treatments designed to help you feel confident,
                        refreshed, and naturally radiant.
                    </p>
                    <a
                        href="https://www.instagram.com/lusso_medspa?stkn=MWxhZDI0Ymt4M28zNw=="
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Lusso MedSpa on Instagram"
                        className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-400/60 text-stone-800 transition hover:-translate-y-0.5 hover:border-stone-900 hover:bg-stone-900 hover:text-white"
                    >
                        <Instagram className="h-5 w-5" aria-hidden="true" />
                    </a>
                </div>

                <div>
                    <h4 className="font-semibold">Pages</h4>
                    <div className="mt-4 flex flex-col gap-2 text-sm text-stone-900">
                        <Link href="/treatments">Treatments</Link>
                        <Link href="/about">About</Link>
                        <Link href="/gallery">Gallery</Link>
                    </div>
                </div>

                <div>
                    <h4 className="font-semibold">Support</h4>
                    <div className="mt-4 flex flex-col gap-2 text-sm text-stone-900">
                        <Link href="/faq">FAQ</Link>
                        <Link href="/contact">Contact</Link>
                        <Link href="/privacy">Privacy Policy</Link>
                        <Link href="/terms">Terms</Link>
                    </div>
                </div>

                <div className="lusso-footer-contact">
                    <h4 className="font-semibold">Contact</h4>
                    <div className="mt-4 space-y-2 text-sm text-stone-900">
                        <p><strong>Address:</strong> {siteConfig.address}</p>
                        <p><strong>Call us at:</strong> <a href="tel:+19166644490">{siteConfig.phone}</a></p>
                        <p><strong>Email:</strong> <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p>
                    </div>
                </div>
            </div>

            <div className="border-t border-stone-800 px-6 py-5 text-center text-xs text-stone-800">
                © {new Date().getFullYear()}  Lusso MedSpa. All rights reserved.
            </div>
        </footer>
    );
}
