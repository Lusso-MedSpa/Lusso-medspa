export const siteConfig = {
    name: "Lusso",
    bookingUrl: "https://www.vagaro.com/Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVBpgEiYRImt6aFIGilzZE7hrUmlhoox/g3ROoTslYjB3XmIYGnCC/7zBqkDeIx3UITIweHLyumc34UNHTGYETjsqiU/prE408I6s4E7WbmCI6PLN1/czIztaA/oHgbVoXTpfjHa5ryzya5SoyZQJMueyZMwmpy2I7c1w9OJhGm9Yz9wkGn1/cbx2Lbtc5bxYRK00CIBEjrttjtD9OgJmroOhESbnTWW77x8k6SAVxFjms/P0Ri4CEJbmNn/clCOnkYdUceVaFZYMuATu4gm944XvZ99iVS08TzVcoVfmRQThJllbPr/BD3+/dzW2bpmHdu6Nn16RZoK5/3/T089u56ogukoITV+a0vsd/iFD3mHLJX2zOnxVT90vIxjROIucpUNSPz2O9r4d2rBbD+ky6QZB3j3yItxadb7uwDlaFMXOYE7DOt7QAHDarQOTQuMDqQ7wqd4xZVwRmy8kLwCfyKI=",
    googleReviewUrl: process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL || `https://search.google.com/local/writereview?placeid=${encodeURIComponent(process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID || "ChIJz-cLF9sfm4ARD_OwB5FY5Qc")}`,
    phone: "916-664-4490",
    email: "concierge.lussomedspa@gmail.com",
    address: "1411 Secret Ravine Pkwy, Suite 180, Roseville, CA 95661",
};
