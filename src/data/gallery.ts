export type GalleryImage = {
    id: number;
    title: string;
    category: string;
    image: string;
};

export const galleryImages: GalleryImage[] = [
    { id: 1, title: "Lusso MedSpa Interior", category: "Clinic", image: "/gallery/clinic.jpg" },
    { id: 2, title: "Reception Desk", category: "Clinic", image: "/gallery/reception.jpg" },
    { id: 3, title: "Waiting Area", category: "Clinic", image: "/gallery/waiting_area.jpg" },
    { id: 4, title: "Treatment Room One", category: "Treatment Rooms", image: "/gallery/treatment_room1.jpg" },
    { id: 5, title: "Treatment Room Two", category: "Treatment Rooms", image: "/gallery/treatment_room2.jpg" },
    { id: 6, title: "Treatment Room Three", category: "Treatment Rooms", image: "/gallery/treatment_room3.jpg" },
];
