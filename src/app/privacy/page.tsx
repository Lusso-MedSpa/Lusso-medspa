import PageHeader from "@/components/ui/PageHeader";
import { siteConfig } from "@/config/site";

export const metadata = {
    title: "Privacy Policy | Lusso",
    description: "Privacy policy for Lusso.",
};

export default function PrivacyPage() {
    return (
        <main>
            <PageHeader
                label="Legal"
                title="Privacy Policy"
                description="Learn how we collect, use, and protect your information."
                background="luxury-glow"
            />

            <section className="mx-auto max-w-4xl px-6 py-16">
                <div className="space-y-8 rounded-3xl border border-stone-200 bg-white p-8 leading-7 text-stone-600 shadow-sm">
                    <p>
                        This Privacy Policy explains how {siteConfig.name} collects, uses,
                        and protects information submitted through this website.
                    </p>

                    <div>
                        <h2 className="font-serif text-2xl font-semibold text-stone-900">
                            Information We Collect
                        </h2>
                        <p className="mt-3">
                            We may collect your name, email address, phone number, treatment
                            interest, and any message you submit through our contact or
                            booking forms.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-serif text-2xl font-semibold text-stone-900">
                            How We Use Your Information
                        </h2>
                        <p className="mt-3">
                            We use your information to respond to inquiries, schedule
                            appointments, provide service information, and improve the client
                            experience.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-serif text-2xl font-semibold text-stone-900">
                            Third-Party Services
                        </h2>
                        <p className="mt-3">
                            We may use external services such as booking platforms, email
                            providers, analytics tools, Google Maps, or payment providers.
                            These services may process data according to their own privacy
                            policies.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-serif text-2xl font-semibold text-stone-900">
                            Data Protection
                        </h2>
                        <p className="mt-3">
                            We take reasonable steps to protect submitted information, but no
                            online transmission is completely secure.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-serif text-2xl font-semibold text-stone-900">
                            Contact
                        </h2>
                        <p className="mt-3">
                            For privacy-related questions, contact us at {siteConfig.email}.
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