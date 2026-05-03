import Image from "next/image";
import { galleryImages } from "@/data/gallery";
import PageHeader from "@/components/ui/PageHeader";
import FadeIn from "@/components/ui/FadeIn";

export const metadata = {
    title: "Gallery | MedSpa Masoud",
    description:
        "Explore MedSpa Masoud treatment spaces, aesthetic results, and luxury clinic details.",
};

export default function GalleryPage() {
    return (
        <main>
            <PageHeader
                label="Gallery"
                title="Our Space & Results"
                description="A visual look at our treatment environment, aesthetic care, and client-focused experience."
            />

            <section className="luxury-glow mx-auto max-w-7xl px-6 py-16">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {galleryImages.map((item, index) => (
                        <FadeIn key={item.id} delay={index * 0.05}>
                            <div className="group relative overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl">

                                {/* glow */}
                                <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                                    <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-rose-200/40 blur-3xl" />
                                </div>

                                <div className="relative h-80 overflow-hidden bg-stone-200">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover transition duration-700 group-hover:scale-110 group-hover:brightness-105"
                                    />

                                    {/* overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                                </div>

                                <div className="relative p-5">
                                    <p className="text-xs font-medium uppercase tracking-[0.25em] text-rose-500">
                                        {item.category}
                                    </p>

                                    <h2 className="mt-2 font-serif text-xl font-semibold text-stone-900 transition group-hover:text-rose-500">
                                        {item.title}
                                    </h2>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </section>
        </main>
    );
}