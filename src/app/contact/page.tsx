import PageHeader from "@/components/ui/PageHeader";
import { siteConfig } from "@/config/site";

export const metadata = {
    title: "Contact | MedSpa Masoud",
    description: "Contact MedSpa Masoud to book a consultation or ask about treatments.",
};

export default function ContactPage() {
    return (
        <main>
            <PageHeader label="Get in Touch" title="Contact & Booking" description="Book your consultation or send us a message. We’ll help you find the
                    right treatment plan." />

            <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2">
                <div className="rounded-3xl bg-white p-8 shadow-sm border border-stone-200">
                    <h2 className="font-serif text-3xl font-semibold text-stone-900">
                        Send a Message
                    </h2>

                    <form className="mt-8 space-y-5">
                        <div>
                            <label className="text-sm font-medium text-stone-700">Full Name</label>
                            <input
                                type="text"
                                placeholder="Your name"
                                className="mt-2 w-full rounded-2xl border border-stone-200 px-4 py-3 outline-none transition focus:border-rose-400"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-stone-700">Email</label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="mt-2 w-full rounded-2xl border border-stone-200 px-4 py-3 outline-none transition focus:border-rose-400"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-stone-700">Phone</label>
                            <input
                                type="tel"
                                placeholder="+916..."
                                className="mt-2 w-full rounded-2xl border border-stone-200 px-4 py-3 outline-none transition focus:border-rose-400"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-stone-700">Message</label>
                            <textarea
                                rows={5}
                                placeholder="Tell us what treatment you are interested in..."
                                className="mt-2 w-full resize-none rounded-2xl border border-stone-200 px-4 py-3 outline-none transition focus:border-rose-400"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-rose-500"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                <div className="space-y-6">
                    <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
                        <h2 className="font-serif text-3xl font-semibold text-stone-900">
                            Visit Us
                        </h2>

                        <div className="mt-6 space-y-4 text-stone-600">
                            <p>
                                <span className="font-medium text-stone-900">Address:</span>{" "}
                                California, USA
                            </p>
                            <p>
                                <span className="font-medium text-stone-900">Phone:</span>{" "}
                                +916 000 0000
                            </p>
                            <p>
                                <span className="font-medium text-stone-900">Email:</span>{" "}
                                info@medspamasoud.com
                            </p>
                            <p>
                                <span className="font-medium text-stone-900">Hours:</span>{" "}
                                Mon - Sat, 9:00 - 18:00
                            </p>
                            <a
                                href={siteConfig.googleReviewUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-6 inline-flex rounded-full border border-stone-900 px-5 py-3 text-sm font-medium text-stone-900 transition hover:bg-stone-900 hover:text-white"
                            >
                                Rate us on Google
                            </a>
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-3xl border border-stone-200 bg-stone-200 shadow-sm">
                        <iframe
                            title="MedSpa location map"
                            src="https://www.google.com/maps?q=California,USA&output=embed"
                            className="h-[360px] w-full border-0"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}