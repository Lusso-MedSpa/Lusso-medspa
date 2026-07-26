import TreatmentCard from "@/components/treatments/TreatmentCard";
import { treatments } from "@/data/treatments";
import Image from "next/image";
import CTAButton from "@/components/ui/CTAButton";
import FadeIn from "@/components/ui/FadeIn";
import { siteConfig } from "@/config/site";

export default function Home() {
    const featuredTreatments = treatments.slice(0, 3);

    return (
        <main>
            <section className="relative flex h-[90vh] items-center justify-center overflow-hidden">
                <Image
                    src="/hero.jpg"
                    alt="Lusso"
                    fill
                    priority
                    className="object-cover scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/60 backdrop-blur-[1px]" />

                <FadeIn className="relative z-10 max-w-3xl px-6 text-center text-white">
                    <p className="mb-4 text-sm uppercase tracking-[0.4em] text-rose-200">
                        Luxury Aesthetic Clinic
                    </p>

                    <h1 className="font-serif text-5xl leading-tight md:text-7xl">
                        Timeless Beauty,
                        <br />
                        Modern Techniques
                    </h1>

                    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <CTAButton href={siteConfig.bookingUrl} variant="light" external>
                            Book Appointment
                        </CTAButton>

                        <CTAButton href="/treatments" variant="outline">
                            Explore Treatments
                        </CTAButton>
                    </div>
                </FadeIn>
            </section>

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

            <section className="bg-stone-180 py-20">
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
                            "Certified Specialists",
                            "Modern Technology",
                            "Personalized Plans",
                        ].map((item, index) => (
                            <FadeIn key={item} delay={index * 0.1}>
                                <div className="rounded-3xl border border-white/70 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
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

            <section className="px-6 py-20 text-center">
                <FadeIn>
                    <div>
                        <h2 className="mt-3 font-serif text-3xl font-semibold text-stone-900 md:text-4xl">
                            Ready to Start Your Transformation?
                        </h2>

                        <p className="mx-auto mt-4 max-w-xl text-stone-600">
                            Book your consultation today and discover the best treatment plan
                            for you.
                        </p>

                        <div className="mt-8">
                            <CTAButton href={siteConfig.bookingUrl} external>Book Now</CTAButton>
                        </div>
                    </div>
                </FadeIn>
            </section>
        </main>
    );
}