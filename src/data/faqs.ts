export type FAQ = {
    question: string;
    answer: string;
};

export type FAQGroup = {
    category: string;
    items: FAQ[];
};

export const faqGroups: FAQGroup[] = [
    {
        category: "Booking",
        items: [
            {
                question: "How do I book an appointment?",
                answer:
                    "You can book through the contact page or by using the Book Now button.",
            },
            {
                question: "Can I reschedule my appointment?",
                answer:
                    "Yes. Clients should contact the clinic as early as possible to reschedule their appointment.",
            },
        ],
    },
    {
        category: "Treatments",
        items: [
            {
                question: "How do I know which treatment is right for me?",
                answer:
                    "A consultation helps identify the best treatment based on your skin, goals, and comfort level.",
            },
            {
                question: "Are treatments personalized?",
                answer:
                    "Yes. Each treatment plan is adapted to the client’s needs, goals, and treatment history.",
            },
        ],
    },
    {
        category: "Safety",
        items: [
            {
                question: "Are the treatments safe?",
                answer:
                    "Treatments should be performed by trained professionals after reviewing client needs and possible contraindications.",
            },
            {
                question: "Is there downtime after treatments?",
                answer:
                    "Downtime depends on the treatment. Some treatments have little to no downtime, while others may require aftercare.",
            },
        ],
    },
];