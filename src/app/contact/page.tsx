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
                    <div className="lusso-dark-card rounded-3xl p-8">
                        <h2 className="font-serif text-3xl font-semibold text-[#f4e9da]">
                            Visit Us
                        </h2>

                        <div className="mt-6 space-y-4 text-[#e3d5c6]">
                            <p>
                                <strong className="text-[#f4e9da]">Address:</strong>{" "}
                                <span>{siteConfig.address}</span>
                            </p>
                            <p>
                                <span className="font-medium text-[#f4e9da]">Call us at:</span>{" "}
                                <a href="tel:+19166644490">{siteConfig.phone}</a>
                            </p>
                            <p>
                                <span className="font-medium text-[#f4e9da]">Email:</span>{" "}
                                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                            </p>
                            <p>
                                <span className="font-medium text-[#f4e9da]">Hours:</span>{" "}
                                Mon - Sunday, 9:00 - 19:00
                            </p>
                            {siteConfig.googleReviewUrl ? <a
                                href={siteConfig.googleReviewUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-6 inline-flex rounded-full border border-[#e3cdb3] px-5 py-3 text-sm font-medium text-[#f4e9da] transition hover:bg-[#e3cdb3] hover:text-[#302923]"
                            >
                                Rate us on Google
                            </a> : <div className="mt-6"><button type="button" disabled className="rounded border border-white/20 px-5 py-3 text-[#c9b8a8]">Google reviews — coming soon</button><p className="mt-2 text-sm text-[#c9b8a8]">Our direct Google review link will be available here.</p></div>}
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
