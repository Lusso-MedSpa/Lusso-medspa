export type GalleryImage = {
    id: number;
    title: string;
    category: string;
    image: string;
};

export const galleryImages: GalleryImage[] = [
    { id: 1, title: "Reception and Waiting Area", category: "Clinic", image: "/gallery/IMG_5541.JPG" },
    { id: 2, title: "Reception Desk", category: "Clinic", image: "/gallery/IMG_5535.JPG" },
    { id: 3, title: "Treatment Room", category: "Clinic", image: "/gallery/IMG_5544.JPG" },
    { id: 4, title: "Aesthetic Treatment Suite", category: "Clinic", image: "/gallery/IMG_5545.JPG" },
    { id: 5, title: "Lusso MedSpa Interior", category: "Clinic", image: "/gallery/IMG_5543.JPG" },
];
