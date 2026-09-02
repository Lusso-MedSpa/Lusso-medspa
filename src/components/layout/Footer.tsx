import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Footer() {
    return (
        <footer className="border-t border-stone-200 bg-gradient-to-b from-rose-50 to-stone-100 text-stone-900">
            <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-4">
                <div>
                    <h3 className="text-xl font-semibold">Lusso</h3>
                    <p className="mt-4 text-sm leading-6 text-stone-900">
                        Luxury aesthetic treatments designed to help you feel confident,
                        refreshed, and naturally radiant.
                    </p>
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

                <div>
                    <h4 className="font-semibold">Contact</h4>
                    <div className="mt-4 space-y-2 text-sm text-stone-900">
                        <p className="whitespace-pre-line">Address: {siteConfig.address}</p>
                        <p><a href="tel:+19166644490">{siteConfig.phone}</a></p>
                        <p><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p>
                    </div>
                </div>
            </div>

            <div className="border-t border-stone-800 px-6 py-5 text-center text-xs text-stone-800">
                © {new Date().getFullYear()}  Lusso MedSpa. All rights reserved.
            </div>
        </footer>
    );
}