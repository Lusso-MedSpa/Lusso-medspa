import PageHeader from "@/components/ui/PageHeader";
import { siteConfig } from "@/config/site";

export const metadata = {
    title: "Contact | Lusso",
    description: "Contact Lusso to request an appointment or ask about treatments.",
};

export default function ContactPage() {
    return (
        <main>
            <PageHeader label="Get in Touch" title="Contact & Booking" description="Request an appointment or send us a message. We’ll help you find the
                    right treatment plan." background="luxury-glow" />

            <section className="luxury-glow py-16">
            <div className="mx-auto grid max-w-7xl items-start gap-10 px-6 md:grid-cols-2">
                <div className="lusso-email-panel">
                    <p className="text-sm font-medium uppercase tracking-[0.3em] text-rose-500">Questions</p>
                    <h2 className="mt-4 font-serif text-3xl font-semibold text-stone-900">We’re here to help.</h2>
                    <p className="mt-6 leading-8 text-stone-600">
                        If you have any questions, send us an email to{" "}
                        <a className="font-medium text-stone-900 underline decoration-rose-300 underline-offset-4" href="mailto:concierge.lussomedspa@gmail.com">
                            concierge.lussomedspa@gmail.com
                        </a>
                    </p>
                </div>

                <div className="space-y-6">
                    <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
                        <h2 className="font-serif text-3xl font-semibold text-stone-900">
                            Visit Us
                        </h2>

                        <div className="mt-6 space-y-4 text-stone-600">
                            <p>
                                <strong className="text-stone-900">Address:</strong>{" "}
                                <span>{siteConfig.address}</span>
                            </p>
                            <p>
                                <span className="font-medium text-stone-900">Call us at:</span>{" "}
                                <a href="tel:+19166644490">{siteConfig.phone}</a>
                            </p>
                            <p>
                                <span className="font-medium text-stone-900">Email:</span>{" "}
                                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                            </p>
                            <p>
                                <span className="font-medium text-stone-900">Hours:</span>{" "}
                                Mon - Sunday, 9:00 - 19:00
                            </p>
                            {siteConfig.googleReviewUrl ? <a
                                href={siteConfig.googleReviewUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-6 inline-flex rounded-full border border-stone-900 px-5 py-3 text-sm font-medium text-stone-900 transition hover:bg-stone-900 hover:text-white"
                            >
                                Rate us on Google
                            </a> : <div className="mt-6"><button type="button" disabled className="rounded border border-stone-200 px-5 py-3 text-stone-500">Google reviews — coming soon</button><p className="mt-2 text-sm">Our direct Google review link will be available here.</p></div>}
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-3xl border border-stone-200 bg-stone-200 shadow-sm">
                        <iframe
                            title="Lusso location map"
                            src={`https://www.google.com/maps?q=${encodeURIComponent(siteConfig.address)}&output=embed`}
                            className="h-[360px] w-full border-0"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
            </section>
        </main>
    );
}
