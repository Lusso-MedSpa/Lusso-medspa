import Image from "next/image";
import { notFound } from "next/navigation";
import { packages } from "@/data/packages";
import CTAButton from "@/components/ui/CTAButton";
import FadeIn from "@/components/ui/FadeIn";
import { siteConfig } from "@/config/site";

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function PackageDetailPage({ params }: Props) {
    const { slug } = await params;

    const item = packages.find((pkg) => pkg.slug === slug);

    if (!item) {
        notFound();
    }

    return (
        <main>
            <section className="luxury-glow mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2">
                <FadeIn>
                    <div className="relative min-h-[420px] overflow-hidden rounded-3xl bg-stone-200 shadow-sm">
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                            priority
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />

                        {item.status === "coming-soon" && (
                            <span className="absolute right-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-medium text-stone-900 shadow-sm backdrop-blur">
                Coming Soon
              </span>
                        )}
                    </div>
                </FadeIn>

                <FadeIn delay={0.1} className="flex flex-col justify-center">
                    <p className="text-sm font-medium uppercase tracking-[0.3em] text-rose-500">
                        {item.category}
                    </p>

                    <h1 className="mt-4 font-serif text-4xl font-semibold text-stone-900 md:text-5xl">
                        {item.title}
                    </h1>

                    <p className="mt-5 text-lg leading-8 text-stone-600">
                        {item.description}
                    </p>

                    <div className="mt-6 w-fit rounded-full border border-stone-200 bg-white px-5 py-2 text-sm font-medium text-stone-700 shadow-sm">
                        Sessions: {item.sessions} . {item.price}
                    </div>

                    <div className="mt-8 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
                        <h2 className="font-serif text-2xl font-semibold text-stone-900">
                            Includes
                        </h2>

                        <ul className="mt-4 space-y-3 text-stone-600">
                            {item.includes.map((service) => (
                                <li key={service} className="flex gap-3">
                                    <span className="text-rose-500">✓</span>
                                    <span>{service}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-8">
                        <CTAButton href={siteConfig.bookingUrl} external>
                            {item.status === "coming-soon" ? "Ask for Details" : "Book Package"}
                        </CTAButton>
                    </div>
                </FadeIn>
            </section>
        </main>
    );
}