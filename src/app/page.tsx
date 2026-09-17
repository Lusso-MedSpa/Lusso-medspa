import TreatmentCard from "@/components/treatments/TreatmentCard";
import { treatments } from "@/data/treatments";
import Image from "next/image";
import CTAButton from "@/components/ui/CTAButton";
import FadeIn from "@/components/ui/FadeIn";
import { siteConfig } from "@/config/site";
import { ArrowUpRight, Check } from "lucide-react";

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
                    <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
                        <CTAButton href="/treatments">Explore Treatments</CTAButton>
                        <CTAButton href={siteConfig.bookingUrl} external>Request an Appointment</CTAButton>
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
                <a href="/contact">Roseville · Visit the studio <ArrowUpRight className="inline h-4 w-4 align-[-2px]" aria-hidden="true" /></a>
            </div>

            <section className="luxury-glow mx-auto max-w-7xl px-6 py-20">
                <FadeIn>
                    <div className="mb-10 text-center">
                        <p className="text-sm font-medium uppercase tracking-[0.3em] text-rose-500">Services</p>
                        <h2 className="mt-3 font-serif text-3xl font-semibold text-stone-900 md:text-4xl">Popular Treatments</h2>
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

            <section className="border-y border-[#c9b7a7]/35 bg-[#eadfd5] px-6 py-20 md:py-24">
                <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
                    <FadeIn>
                        <div className="overflow-hidden rounded-[2rem] border border-white/60 bg-[#f4ece5] p-5 shadow-[0_24px_70px_rgba(77,55,43,0.12)]">
                            <img
                                src="https://www.carecredit.com/sites/pc/image/carecredit_button_applynow_prequal_280x100_darkgray_v1.png"
                                alt="CareCredit financing available"
                                className="mx-auto h-auto w-full max-w-xl rounded-2xl object-contain"
                            />
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <div>
                            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#9b6f63]">Financing</p>
                            <h2 className="mt-3 max-w-2xl font-serif text-3xl font-semibold leading-tight text-stone-900 md:text-4xl">Flexible financing options for your care.</h2>
                            <p className="mt-5 max-w-2xl leading-7 text-stone-700">With a CareCredit credit card, you can pay for health and wellness costs over time with promotional financing options that help fit your budget.†</p>
                            <ul className="mt-7 grid gap-4 text-stone-700">
                                {[
                                    "No annual fee††",
                                    "Promotional financing options†",
                                    "Accepted at over 285,000 CareCredit network locations",
                                    "Earn points on select purchases if approved for the CareCredit Rewards Mastercard†††",
                                    "0% financing options may be available on qualifying purchases",
                                ].map((benefit) => (
                                    <li key={benefit} className="flex items-start gap-3">
                                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#d6b7a5]/55 text-[#765448]">
                                            <Check className="h-3.5 w-3.5" aria-hidden="true" />
                                        </span>
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8">
                                <a href="https://www.carecredit.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#765448] px-6 py-3 text-sm font-medium text-[#5f443b] transition hover:bg-[#765448] hover:text-white">
                                    Learn about CareCredit <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                                </a>
                            </div>
                            <p className="mt-6 max-w-2xl text-xs leading-5 text-stone-500">† Subject to credit approval. Promotional financing options and terms vary. †† See CareCredit rates and fees for details. ††† Rewards terms apply.</p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <section className="lusso-philosophy py-20">
                <div className="mx-auto max-w-6xl px-6 text-center">
                    <FadeIn>
                        <div>
                            <p className="text-sm font-medium uppercase tracking-[0.3em] text-rose-500">Why Us</p>
                            <h2 className="mt-3 font-serif text-3xl font-semibold text-stone-900 md:text-4xl">Personalized Care, Natural Results</h2>
                        </div>
                    </FadeIn>
                    <div className="mt-12 grid gap-8 md:grid-cols-3">
                        {["A Thoughtful Consultation", "Care with Intention", "A Plan Made for You"].map((item, index) => (
                            <FadeIn key={item} delay={index * 0.1}>
                                <div className="rounded-3xl border border-white/70 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
                                    <span className="lusso-step-number">{String(index + 1).padStart(2, "0")}</span>
                                    <h3 className="font-serif text-2xl font-semibold text-stone-900">{item}</h3>
                                    <p className="mt-3 text-sm leading-6 text-stone-600">Every treatment is planned carefully to match your goals, comfort, and natural features.</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            <section className="lusso-invitation px-6 py-20 text-center">
                <FadeIn>
                    <div>
                        <h2 className="mt-3 font-serif text-3xl font-semibold text-stone-900 md:text-4xl">Let’s talk about your goals.</h2>
                        <p className="mx-auto mt-4 max-w-xl text-stone-600">Book your consultation today and discover the best treatment plan for you.</p>
                        <div className="mt-8"><CTAButton href={siteConfig.bookingUrl} external>Consultation</CTAButton></div>
                    </div>
                </FadeIn>
            </section>
        </main>
    );
}
