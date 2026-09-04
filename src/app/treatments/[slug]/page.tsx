import Image from "next/image";
import { notFound } from "next/navigation";
import { treatments } from "@/data/treatments";
import CTAButton from "@/components/ui/CTAButton";
import { siteConfig } from "@/config/site";

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

export function generateStaticParams() {
    return treatments.map((treatment) => ({ slug: treatment.slug }));
}

export default async function TreatmentDetailPage({ params }: Props) {
    const { slug } = await params;

    const treatment = treatments.find((item) => item.slug === slug);

    if (!treatment) {
        notFound();
    }

    return (
        <main>
            <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2">
                <div className="relative min-h-[420px] overflow-hidden rounded-3xl bg-stone-200">
                    <Image
                        src={treatment.image}
                        alt={treatment.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="flex flex-col justify-center">
                    <p className="text-sm font-medium uppercase tracking-[0.3em] text-rose-500">
                        {treatment.category}
                    </p>

                    <h1 className="mt-4 text-4xl font-semibold text-stone-900 md:text-5xl">
                        {treatment.title}
                    </h1>

                    <p className="mt-5 text-lg leading-8 text-stone-600">
                        {treatment.description}
                    </p>

                    

                    <div className="mt-8">
                        <h2 className="text-xl font-semibold">Consultation focus</h2>

                        <ul className="mt-4 space-y-3 text-stone-600">
                            {treatment.benefits.map((benefit) => (
                                <li key={benefit}>✓ {benefit}</li>
                            ))}
                        </ul>
                    </div>

                    <p className="mt-6 text-sm leading-6 text-stone-600">Treatment requires an individual clinical assessment. Results vary; risks, alternatives and aftercare will be discussed before consent.</p>
                    <CTAButton href={treatment.slug === "exosome-therapy" ? "/contact" : siteConfig.bookingUrl} external={treatment.slug !== "exosome-therapy"}>Request a Consultation</CTAButton>
                </div>
            </section>
        </main>
    );
}
