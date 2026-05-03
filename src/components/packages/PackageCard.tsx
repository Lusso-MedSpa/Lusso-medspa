import Image from "next/image";
import Link from "next/link";
import type { SpaPackage } from "@/data/packages";

type Props = {
    item: SpaPackage;
};

export default function PackageCard({ item }: Props) {
    return (
        <Link
            href={`/packages/${item.slug}`}
            className="group relative overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
            {/* glow effect */}
            <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-rose-200/40 blur-3xl" />
            </div>

            <div className="relative h-64 overflow-hidden bg-stone-200">
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-110 group-hover:brightness-105"
                />

                {/* gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                {item.status === "coming-soon" && (
                    <span className="absolute right-4 top-4 rounded-full bg-white/90 px-4 py-2 text-xs font-medium text-stone-900 shadow-sm backdrop-blur">
            Coming Soon
          </span>
                )}
            </div>

            <div className="relative p-6">
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-rose-500">
                    {item.category}
                </p>

                <h3 className="mt-3 font-serif text-2xl font-semibold text-stone-900 transition group-hover:text-rose-500">
                    {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-stone-600">
                    {item.description}
                </p>

                <div className="mt-5 flex items-center justify-between">
          <span className="text-sm text-stone-500">
            {item.sessions} · {item.price}
          </span>

                    <span className="text-sm font-medium text-stone-900 transition group-hover:text-rose-500">
            View Package →
          </span>
                </div>
            </div>
        </Link>
    );
}