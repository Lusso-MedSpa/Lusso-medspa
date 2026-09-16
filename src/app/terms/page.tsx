import PageHeader from "@/components/ui/PageHeader";
import { siteConfig } from "@/config/site";

export const metadata = {
    title: "Terms | Lusso",
    description: "Terms and conditions for Lussonpm run.",
};

export default function TermsPage() {
    return (
        <main>
            <PageHeader
                label="Legal"
                title="Terms & Conditions"
                description="Please read these terms before using our website or booking services."
                background="luxury-glow"
            />

            <section className="mx-auto max-w-4xl px-6 py-16">
                <div className="space-y-8 rounded-3xl border border-stone-200 bg-white p-8 leading-7 text-stone-600 shadow-sm">
                    <p>
                        By using this website, you agree to the following terms and
                        conditions.
                    </p>

                    <div>
                        <h2 className="font-serif text-2xl font-semibold text-stone-900">
                            Website Information
                        </h2>
                        <p className="mt-3">
                            The information on this website is provided for general
                            informational purposes and should not be considered medical advice.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-serif text-2xl font-semibold text-stone-900">
                            Consultations
                        </h2>
                        <p className="mt-3">
                            Treatment suitability depends on individual needs, medical
                            history, contraindications, and professional assessment during
                            consultation.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-serif text-2xl font-semibold text-stone-900">
                            Appointments & Cancellations
                        </h2>
                        <p className="mt-3">
                            Appointment policies, cancellation rules, deposits, and refunds
                            may vary depending on the selected service or booking platform.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-serif text-2xl font-semibold text-stone-900">
                            Pricing
                        </h2>
                        <p className="mt-3">
                            Prices shown on the website are for informational purposes and may
                            change. Final pricing should be confirmed before treatment.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-serif text-2xl font-semibold text-stone-900">
                            External Links
                        </h2>
                        <p className="mt-3">
                            This website may link to external booking, payment, map, or review
                            platforms. {siteConfig.name} is not responsible for external
                            website content or policies.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-serif text-2xl font-semibold text-stone-900">
                            Contact
                        </h2>
                        <p className="mt-3">
                            For questions about these terms, contact us at {siteConfig.email}.
                        </p>
                    </div>

                    <p className="text-sm text-stone-500">
                        Last updated: {new Date().getFullYear()}
                    </p>
                </div>
            </section>
        </main>
    );
}