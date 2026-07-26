import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";

export const metadata = {
    title: "About | Lusso",
    description: "Learn more about Lusso, our philosophy, and our approach to aesthetic care.",
};

export default function AboutPage() {
    return (
        <main>
            <PageHeader label="About Us" title="Beauty With Precision & Care" description="A modern medspa experience focused on natural results, personalized
                    care, and client confidence." />

            <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2">
                <div className="relative min-h-[480px] overflow-hidden rounded-3xl bg-stone-200">
                    <Image
                        src="/about1.jpg"
                        alt="MedSpa interior"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                    />
                </div>

                <div className="flex flex-col justify-center">
                    <p className="text-sm font-medium uppercase tracking-[0.3em] text-rose-500">
                        Our Philosophy
                    </p>

                    <h2 className="mt-4 font-serif text-3xl font-semibold text-stone-900 md:text-4xl">
                        Natural Results, Modern Techniques
                    </h2>

                    <p className="mt-5 leading-8 text-stone-600">
                        MedSpa Masoud is built around a simple idea: aesthetic care should
                        enhance your natural features, not change who you are. Every
                        treatment is planned with attention to your goals, comfort, and
                        individual needs.
                    </p>

                    <p className="mt-4 leading-8 text-stone-600">
                        From skin-focused treatments to body and wellness services, our
                        approach combines modern technology with a calm, professional, and
                        client-centered experience.
                    </p>
                </div>
            </section>

            <section className="bg-stone-180 px-6 py-20">
                <div className="mx-auto max-w-7xl text-center">
                    <p className="text-sm font-medium uppercase tracking-[0.3em] text-rose-500">
                        Values
                    </p>

                    <h2 className="mt-3 font-serif text-3xl font-semibold text-stone-900 md:text-4xl">
                        What We Focus On
                    </h2>

                    <div className="mt-12 grid gap-8 md:grid-cols-3">
                        {[
                            {
                                title: "Personalized Care",
                                text: "Every client receives a treatment plan based on their own needs and goals.",
                            },
                            {
                                title: "Professional Standards",
                                text: "Treatments are approached with safety, clarity, and attention to detail.",
                            },
                            {
                                title: "Natural Confidence",
                                text: "Our goal is to help clients feel refreshed, confident, and comfortable.",
                            },
                        ].map((item) => (
                            <div key={item.title} className="rounded-3xl bg-white p-8 shadow-sm">
                                <h3 className="font-serif text-2xl font-semibold text-stone-900">
                                    {item.title}
                                </h3>
                                <p className="mt-4 text-sm leading-7 text-stone-600">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}