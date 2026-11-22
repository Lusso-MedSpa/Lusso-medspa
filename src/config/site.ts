export const siteConfig = {
    name: "Lusso",
    bookingUrl: "https://lussomedspa.janeapp.com",
    googleReviewUrl: process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL || `https://search.google.com/local/writereview?placeid=${encodeURIComponent(process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID || "ChIJz-cLF9sfm4ARD_OwB5FY5Qc")}`,
    phone: "916-664-4490",
    email: "concierge.lussomedspa@gmail.com",
    address: "1411 Secret Ravine Pkwy, Suite 180, Roseville, CA 95661",
};
