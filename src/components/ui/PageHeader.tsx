import type { ReactNode } from "react";

type PageHeaderProps = {
    label: string;
    title: ReactNode;
    description: string;
    background?: string;
};

export default function PageHeader({ label, title, description, background = "luxury-glow" }: PageHeaderProps) {
    return (
        <section className={`${background} px-6 py-20 text-center`}>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-rose-500">
                {label}
            </p>

            <h1 className="mt-4 font-serif text-4xl font-semibold text-stone-900 md:text-5xl">
                {title}
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-stone-600">
                {description}
            </p>
        </section>
    );
}
