type SectionTitleProps = {
    label?: string;
    title: string;
    description?: string;
};

export default function SectionTitle({
                                         label,
                                         title,
                                         description,
                                     }: SectionTitleProps) {
    return (
        <div className="text-center">
            {label && (
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-rose-500">
                    {label}
                </p>
            )}

            <h2 className="mt-3 font-serif text-3xl font-semibold text-stone-900 md:text-4xl">
                {title}
            </h2>

            {description && (
                <p className="mx-auto mt-4 max-w-2xl text-stone-600">
                    {description}
                </p>
            )}
        </div>
    );
}