import PackageCard from "@/components/packages/PackageCard";
import { packages } from "@/data/packages";
import PageHeader from "@/components/ui/PageHeader";
import FadeIn from "@/components/ui/FadeIn";

export const metadata = {
    title: "Packages | MedSpa Masoud",
    description: "Explore luxury medspa packages for skin, body, and wellness.",
};

export default function PackagesPage() {
    return (
        <main>
            <PageHeader
                label="Curated Plans"
                title="Packages"
                description="Treatment packages designed to combine care, consistency, and visible progress through personalized aesthetic plans."
            />

            <section className="luxury-glow mx-auto max-w-7xl px-6 py-16">
                <div className="grid gap-8 md:grid-cols-3">
                    {packages.map((item, index) => (
                        <FadeIn key={item.slug} delay={index * 0.08}>
                            <PackageCard item={item} />
                        </FadeIn>
                    ))}
                </div>
            </section>
        </main>
    );
}