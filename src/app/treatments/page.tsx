import TreatmentsGrid from "@/components/treatments/TreatmentsGrid";
import PageHeader from "@/components/ui/PageHeader";

export const metadata = {
    title: "Treatments | MedSpa Masoud",
    description: "Explore aesthetic, skin, body, laser, injectable, and wellness treatments.",
};

export default function TreatmentsPage() {
    return (
        <main>
            <PageHeader
                label="Our Services"
                title="Treatments"
                description="Explore our aesthetic and wellness treatments designed to help you look refreshed, confident, and naturally radiant."
            />

            <TreatmentsGrid />
        </main>
    );
}