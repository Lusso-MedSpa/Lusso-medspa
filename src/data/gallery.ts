export type GalleryImage = {
    id: number;
    title: string;
    category: string;
    image: string;
};

export const galleryImages: GalleryImage[] = [
    {
        id: 1,
        title: "Facial Treatment Room",
        category: "Clinic",
        image: "/gallery/gallery-1.jpg",
    },
    {
        id: 6,
        title: "Luxury Interior",
        category: "Clinic",
        image: "/gallery/gallery-6.jpg",
    },
];
