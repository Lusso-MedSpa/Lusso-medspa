import FAQAccordion from "@/components/faq/FAQAccordion";
import PageHeader from "@/components/ui/PageHeader";

export const metadata = {
    title: "FAQ | Lusso",
    description: "Frequently asked questions about medspa treatments, booking, and safety.",
};

export default function FAQPage() {
    return (
        <main>
            <PageHeader label="Questions" title="Frequently Asked Questions" description="Find answers about booking, treatments, preparation, safety, and
                    aftercare." />

            <FAQAccordion />
        </main>
    );
}