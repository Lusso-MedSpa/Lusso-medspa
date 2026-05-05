export type Treatment = {
    slug: string;
    title: string;
    category: string;
    description: string;
    duration: string;
    image: string;
    benefits: string[];
};

export const treatmentCategories = [
    "All",
    "Skin & Face",
    "Body",
    "Laser",
    "Injectables",
    "Wellness",
];

export const treatments: Treatment[] = [
    {
        slug: "facial-rejuvenation",
        title: "Facial Rejuvenation",
        category: "Skin & Face",
        description:
            "A personalized facial treatment designed to hydrate, refresh, and improve overall skin texture.",
        duration: "60 min",
        image: "/treatments/facial.jpg",
        benefits: ["Hydrated skin", "Improved glow", "Smoother texture"],
    },
    {
        slug: "chemical-peel",
        title: "Chemical Peel",
        category: "Skin & Face",
        description:
            "A resurfacing treatment that helps improve dullness, uneven tone, and visible skin texture.",
        duration: "45 min",
        image: "/treatments/peel.jpg",
        benefits: ["Brighter skin", "Improved tone", "Refined texture"],
    },
    {
        slug: "body-sculpting",
        title: "Body Sculpting",
        category: "Body",
        description:
            "Non-invasive body contouring focused on shaping and toning targeted areas.",
        duration: "45 min",
        image: "/treatments/body.jpg",
        benefits: ["Body contouring", "Targeted shaping", "No surgery"],
    },
    {
        slug: "laser-therapy",
        title: "Laser Therapy",
        category: "Laser",
        description:
            "Advanced laser treatment for skin clarity, tone improvement, and rejuvenation.",
        duration: "30 min",
        image: "/treatments/laser.jpg",
        benefits: ["Even skin tone", "Skin clarity", "Modern technology"],
    },
    {
        slug: "botox-treatment",
        title: "Botox Treatment",
        category: "Injectables",
        description:
            "Aesthetic injectable treatment designed to soften the appearance of expression lines.",
        duration: "30 min",
        image: "/treatments/botox.jpg",
        benefits: ["Softer lines", "Natural look", "Quick appointment"],
    },
    {
        slug: "iv-therapy",
        title: "IV Therapy",
        category: "Wellness",
        description:
            "Wellness-focused treatment designed to support hydration and overall vitality.",
        duration: "45 min",
        image: "/treatments/iv.jpg",
        benefits: ["Hydration support", "Energy support", "Wellness boost"],
    },
];