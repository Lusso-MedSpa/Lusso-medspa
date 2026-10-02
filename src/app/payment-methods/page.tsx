import FadeIn from "@/components/ui/FadeIn";
import { ArrowUpRight, Check } from "lucide-react";

export default function PaymentMethods() {
    return (
        <main>
            <section className="px-6 py-16 text-center md:py-20">
                <div className="mx-auto max-w-3xl">
                    <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#9b6f63]">Payment Methods</p>
                    <h1 className="mt-3 font-serif text-4xl font-semibold text-stone-900 md:text-5xl">Flexible ways to pay for your care.</h1>
                    <p className="mx-auto mt-5 max-w-2xl leading-7 text-stone-600">Explore financing options available at Lusso MedSpa.</p>
                </div>
            </section>

            <section className="border-y border-[#c9b7a7]/35 bg-[#eadfd5] px-6 py-20 md:py-24">
                <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
                    <FadeIn>
                        <div className="overflow-hidden rounded-[2rem] border border-white/60 bg-[#f4ece5] p-5 shadow-[0_24px_70px_rgba(77,55,43,0.12)]">
                            <img src="https://www.carecredit.com/sites/pc/image/carecredit_button_applynow_prequal_280x100_darkgray_v1.png" alt="CareCredit financing available" className="mx-auto h-auto w-full max-w-xl rounded-2xl object-contain" />
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <div>
                            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#9b6f63]">Financing</p>
                            <h2 className="mt-3 max-w-2xl font-serif text-3xl font-semibold leading-tight text-stone-900 md:text-4xl">Flexible financing options for your care.</h2>
                            <p className="mt-5 max-w-2xl leading-7 text-stone-700">With a CareCredit credit card, you can pay for health and wellness costs over time with promotional financing options that help fit your budget.†</p>
                            <ul className="mt-7 grid gap-4 text-stone-700">
                                {["No annual fee††","Promotional financing options†","Accepted at over 285,000 CareCredit network locations","Earn points on select purchases if approved for the CareCredit Rewards Mastercard†††","0% financing options may be available on qualifying purchases"].map((benefit) => (
                                    <li key={benefit} className="flex items-start gap-3"><span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#d6b7a5]/55 text-[#765448]"><Check className="h-3.5 w-3.5" aria-hidden="true" /></span><span>{benefit}</span></li>
                                ))}
                            </ul>
                            <div className="mt-8"><a href="https://go.carecredit.com/consumer/home?sitecode=CCCALDS2X" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#765448] px-6 py-3 text-sm font-medium text-[#5f443b] transition hover:bg-[#765448] hover:text-white">Learn about CareCredit <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a></div>
                            <p className="mt-6 max-w-2xl text-xs leading-5 text-stone-500">† Subject to credit approval. Promotional financing options and terms vary. †† See CareCredit rates and fees for details. ††† Rewards terms apply.</p>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </main>
    );
}
