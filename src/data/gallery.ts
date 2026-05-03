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
        image: "/gallery/gallery-1-1.jpg",
    },
    {
        id: 2,
        title: "Skin Care Result",
        category: "Skin & Face",
        image: "/gallery/gallery-2.jpg",
    },
    {
        id: 3,
        title: "Body Treatment",
        category: "Body",
        image: "/gallery/gallery-3.jpg",
    },
    {
        id: 4,
        title: "Laser Treatment Setup",
        category: "Laser",
        image: "/gallery/gallery-4.jpg",
    },
    {
        id: 5,
        title: "Wellness Experience",
        category: "Wellness",
        image: "/gallery/gallery-5.jpg",
    },
    {
        id: 6,
        title: "Luxury Interior",
        category: "Clinic",
        image: "/gallery/gallery-1.jpg",
    },
];