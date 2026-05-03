import Image from "next/image";
import Link from "next/link";
import type { Treatment } from "@/data/treatments";

type Props = {
    treatment: Treatment;
};

export default function TreatmentCard({ treatment }: Props) {
    return (
        <Link
            href={`/treatments/${treatment.slug}`}
            className="group relative overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
            {/* subtle glow on hover */}
            <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-rose-200/40 blur-3xl" />
            </div>

            <div className="relative h-64 overflow-hidden bg-stone-200">
                <Image
                    src={treatment.image}
                    alt={treatment.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-110 group-hover:brightness-105"
                />
            </div>

            <div className="relative p-6">
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-rose-500">
                    {treatment.category}
                </p>

                <h3 className="mt-3 font-serif text-2xl font-semibold text-stone-900 transition group-hover:text-rose-500">
                    {treatment.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-stone-600">
                    {treatment.description}
                </p>

                <div className="mt-5 flex items-center justify-between">
          <span className="text-sm text-stone-500">
            {treatment.duration} . {treatment.price}
          </span>

                    <span className="text-sm font-medium text-stone-900 transition group-hover:text-rose-500">
            Learn More →
          </span>
                </div>
            </div>
        </Link>
    );
}