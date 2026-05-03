export type SpaPackage = {
    slug: string;
    title: string;
    category: string;
    description: string;
    sessions: string;
    price: string;
    image: string;
    includes: string[];
    status: "available" | "coming-soon";
};

export const packages: SpaPackage[] = [
    {
        slug: "glow-reset-package",
        title: "Glow Reset Package",
        category: "Skin & Face",
        description:
            "A curated package focused on refreshing dull skin, improving texture, and restoring a healthy glow.",
        sessions: "3 sessions",
        price: "$299",
        image: "/packages/glow.jpg",
        includes: ["Facial Rejuvenation", "Chemical Peel", "Skin Consultation"],
        status: "available",
    },
    {
        slug: "body-confidence-package",
        title: "Body Confidence Package",
        category: "Body",
        description:
            "A body-focused treatment plan designed for contouring, shaping, and confidence support.",
        sessions: "4 sessions",
        price: "$299",
        image: "/packages/body-package.jpg",
        includes: ["Body Sculpting", "Progress Review", "Personalized Plan"],
        status: "available",
    },
    {
        slug: "luxury-wellness-package",
        title: "Luxury Wellness Package",
        category: "Wellness",
        description:
            "A future wellness package combining relaxation, hydration, and beauty support.",
        sessions: "Coming soon",
        price: "Price TBA",
        image: "/packages/wellness.jpg",
        includes: ["IV Therapy", "Wellness Consultation", "Recovery Support"],
        status: "coming-soon",
    },
];