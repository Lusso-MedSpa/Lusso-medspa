import TreatmentCard from "@/components/treatments/TreatmentCard";
import { treatments } from "@/data/treatments";
import Image from "next/image";
import CTAButton from "@/components/ui/CTAButton";
import FadeIn from "@/components/ui/FadeIn";
import { siteConfig } from "@/config/site";

export default function Home() {
    const featuredSlugs = [
        "botox-treatment",
        "dermal-fillers",
        "prp-prf",
        "laser-hair-removal",
        "co2-fractional-laser",
        "skinvive",
    ];
    const featuredTreatments = featuredSlugs
        .map((slug) => treatments.find((treatment) => treatment.slug === slug))
        .filter((treatment): treatment is (typeof treatments)[number] => Boolean(treatment));

    return (
        <main className="lusso-home">
            <section className="lusso-hero">
                <div className="lusso-hero-copy">
                    <h1>A little refinement.<br/><em>Entirely you.</em></h1>
                    <p className="lusso-hero-description">Thoughtful aesthetic care, shaped around your features and your goals. Explore your options with a personal consultation in Roseville.</p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <CTAButton href={siteConfig.bookingUrl} external>Request an Appointment</CTAButton>
                        <CTAButton href="/treatments">Explore Treatments</CTAButton>
                    </div>
                </div>
                <div className="lusso-hero-artwork" aria-hidden="true">
                    <div className="lusso-hero-artwork-frame">
                        <Image src="/lusso-logo-light.png" alt="" width={1696} height={1248} priority />
                    </div>
                </div>
            </section>
            <div className="lusso-contact-strip">
                <a href="tel:+19166644490"><strong>Call us at:</strong> {siteConfig.phone}</a>
                <a href={`mailto:${siteConfig.email}`}><strong>Email:</strong> {siteConfig.email}</a>
                <a href="/contact">Roseville · Visit the studio ↗</a>
            </div>

            <section className="luxury-glow mx-auto max-w-7xl px-6 py-20">
                <FadeIn>
                    <div className="mb-10 text-center">
                        <p className="text-sm font-medium uppercase tracking-[0.3em] text-rose-500">
                            Services
                        </p>

                        <h2 className="mt-3 font-serif text-3xl font-semibold text-stone-900 md:text-4xl">
                            Popular Treatments
                        </h2>
                    </div>
                </FadeIn>

                <div className="grid gap-8 md:grid-cols-3">
                    {featuredTreatments.map((treatment, index) => (
                        <FadeIn key={treatment.slug} delay={index * 0.1}>
                            <TreatmentCard treatment={treatment} />
                        </FadeIn>
                    ))}
                </div>
            </section>

            <section className="lusso-philosophy py-20">
                <div className="mx-auto max-w-6xl px-6 text-center">
                    <FadeIn>
                        <div>
                            <p className="text-sm font-medium uppercase tracking-[0.3em] text-rose-500">
                                Why Us
                            </p>

                            <h2 className="mt-3 font-serif text-3xl font-semibold text-stone-900 md:text-4xl">
                                Personalized Care, Natural Results
                            </h2>
                        </div>
                    </FadeIn>

                    <div className="mt-12 grid gap-8 md:grid-cols-3">
                        {[
                            "A Thoughtful Consultation",
                            "Care with Intention",
                            "A Plan Made for You",
                        ].map((item, index) => (
                            <FadeIn key={item} delay={index * 0.1}>
                                <div className="rounded-3xl border border-white/70 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
                                    <span className="lusso-step-number">{String(index + 1).padStart(2, "0")}</span>
                                    <h3 className="font-serif text-2xl font-semibold text-stone-900">
                                        {item}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-stone-600">
                                        Every treatment is planned carefully to match your goals,
                                        comfort, and natural features.
                                    </p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            <section className="lusso-invitation px-6 py-20 text-center">
                <FadeIn>
                    <div>
                        <h2 className="mt-3 font-serif text-3xl font-semibold text-stone-900 md:text-4xl">
                            Let’s talk about your goals.
                        </h2>

                        <p className="mx-auto mt-4 max-w-xl text-stone-600">
                            Book your consultation today and discover the best treatment plan
                            for you.
                        </p>

                        <div className="mt-8">
                            <CTAButton href={siteConfig.bookingUrl} external>Consultation</CTAButton>
                        </div>
                    </div>
                </FadeIn>
            </section>
        </main>
    );
}
