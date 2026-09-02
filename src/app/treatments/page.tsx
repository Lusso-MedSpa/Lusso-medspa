import TreatmentsGrid from "@/components/treatments/TreatmentsGrid";
import PageHeader from "@/components/ui/PageHeader";

export const metadata = {
    title: "Treatments | Lusso",
    description: "Explore injectables, PRP / PRF, skin rejuvenation and laser treatments in Roseville.",
};

export default function TreatmentsPage() {
    return (
        <main>
            <PageHeader
                label="Our Services"
                title="Treatments"
                description="Explore four treatment collections. Your consultation helps determine what is appropriate for your skin, features and goals."
            />

            <TreatmentsGrid />
        </main>
    );
}