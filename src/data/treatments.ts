export type Treatment = {
 slug: string;
 title: string;
 category: string;
 description: string;
 highlight?: string;
 image: string;
 detailImage?: string;
 imageFit?: "cover" | "contain";
 detailImageFit?: "cover" | "contain";
 benefits: string[];
};
export const treatmentCategories = [
  "All",
  "Injectables & Regenerative Treatments",
  "PRP / PRF Treatments",
  "Skin Rejuvenation",
  "Laser Treatments"
];
export const treatments: Treatment[] = [
  {
    "slug": "botox-treatment",
    "title": "Botox® / Dysport®",
    "category": "Injectables & Regenerative Treatments",
    "description": "Prescription injectables that temporarily soften expression lines by relaxing selected facial muscles. Your clinician will assess suitability and discuss risks and expected results.",
    "image": "/treatments/botox.jpg",
    "benefits": [
      "Expression lines",
      "Individualized assessment"
    ]
  },
  {
    "slug": "dermal-fillers",
    "title": "Dermal Fillers (Hyaluronic Acid)",
    "category": "Injectables & Regenerative Treatments",
    "description": "Hyaluronic acid fillers can restore volume and enhance facial contours. Product selection and placement are tailored to your anatomy and goals.",
    "image": "/treatments/botox.jpg",
    "benefits": [
      "Facial volume",
      "Balanced contours"
    ]
  },
  {
    "slug": "skinvive",
    "title": "Skinvive™",
    "category": "Injectables & Regenerative Treatments",
    "description": "An injectable hyaluronic acid treatment used to improve cheek skin smoothness. A consultation determines whether it is appropriate for your skin.",
    "image": "/treatments/facial.jpg",
    "benefits": [
      "Cheek smoothness",
      "Skin quality"
    ]
  },
  {
    "slug": "redensity",
    "title": "Redensity",
    "category": "Injectables & Regenerative Treatments",
    "description": "Discuss hyaluronic acid treatment options with your clinician. The specific product, intended use and suitability will be confirmed before treatment.",
    "image": "/treatments/facial.jpg",
    "benefits": [
      "Product consultation",
      "Personalized planning"
    ]
  },
  {
    "slug": "biostimulators",
    "title": "Biostimulators (Sculptra®, Radiesse®, and More)",
    "category": "Injectables & Regenerative Treatments",
    "description": "Explore collagen-stimulating injectable options for selected volume and skin-quality concerns. Results develop differently depending on the product and treatment plan.",
    "image": "/treatments/botox.jpg",
    "benefits": [
      "Volume concerns",
      "Collagen-focused options"
    ]
  },
  {
    "slug": "prp-prf",
    "title": "PRP & PRF",
    "category": "PRP / PRF Treatments",
    "description": "PRP and PRF use a small sample of your own blood to prepare platelet-rich components that may support clinician-directed skin or hair treatment plans. A consultation is required to review your goals, suitability, evidence, and risks.",
    "image": "/treatments/facial.jpg",
    "benefits": [
      "Skin and hair consultation",
      "Personalized regenerative planning"
    ]
  },
  {
    "slug": "hair-prf",
    "title": "Hair PRF",
    "category": "PRP / PRF Treatments",
    "description": "Platelet-rich fibrin prepared from your own blood may be considered for selected hair concerns. Evidence and results vary; an assessment helps identify the underlying cause.",
    "image": "/treatments/facial.jpg",
    "benefits": [
      "Hair assessment",
      "Treatment suitability"
    ]
  },
  {
    "slug": "under-eye-prf",
    "title": "Under-Eye PRF",
    "category": "PRP / PRF Treatments",
    "description": "A clinician-led discussion of platelet-rich fibrin for under-eye concerns. Suitability, limitations and potential risks are reviewed before a personalized plan.",
    "image": "/treatments/facial.jpg",
    "benefits": [
      "Under-eye concerns",
      "Individual assessment"
    ]
  },
  {
    "slug": "full-face-prf",
    "title": "Full Face PRF",
    "category": "PRP / PRF Treatments",
    "description": "Platelet-rich fibrin may be used within an individualized facial treatment plan. Your clinician will explain the evidence, potential benefits and risks.",
    "image": "/treatments/facial.jpg",
    "benefits": [
      "Skin-quality concerns",
      "Individualized care"
    ]
  },
  {
    "slug": "vampire-facial",
    "title": "Vampire Facial® (PRP/PRF Microneedling)",
    "category": "PRP / PRF Treatments",
    "description": "Discuss microneedling with platelet-based preparations for skin texture and scar concerns. Evidence, device compatibility and suitability require clinical review.",
    "image": "/treatments/facial.jpg",
    "benefits": [
      "Texture concerns",
      "Scar assessment"
    ]
  },
  {
    "slug": "microneedling-prf",
    "title": "Microneedling with PRF",
    "category": "PRP / PRF Treatments",
    "description": "A consultation-led approach to microneedling and platelet-rich fibrin. Your provider will explain the proposed method, aftercare and realistic expectations.",
    "image": "/treatments/facial.jpg",
    "benefits": [
      "Skin texture",
      "Aftercare planning"
    ]
  },
  {
    "slug": "microneedling-ha",
    "title": "Microneedling with Hyaluronic Acid (HA)",
    "category": "PRP / PRF Treatments",
    "description": "Explore microneedling and hydration-focused skin care. Your clinician will confirm suitable products and explain the risks and limitations of the proposed combination.",
    "image": "/treatments/facial.jpg",
    "benefits": [
      "Texture assessment",
      "Hydration-focused care"
    ]
  },
  {
    "slug": "exosome-therapy",
    "title": "Exosome Therapy",
    "category": "Skin Rejuvenation",
    "description": "There are currently no FDA-approved exosome products. This topic requires medical and regulatory review and is not available for routine booking through this website.",
    "image": "/treatments/facial.jpg",
    "benefits": [
      "Clinical evidence review",
      "Regulatory safety discussion"
    ]
  },
  {
    "slug": "pdo-thread-lift",
    "title": "PDO Thread Lift",
    "category": "Skin Rejuvenation",
    "description": "A minimally invasive option for selected facial laxity concerns. A clinician will discuss suitability, potential complications and realistic lifting expectations.",
    "image": "/treatments/facial.jpg",
    "benefits": [
      "Facial laxity",
      "Treatment consultation"
    ]
  },
  {
    "slug": "laser-hair-removal",
    "title": "Laser Hair Removal — Motus PRO",
    "category": "Laser Treatments",
    "description": "Motus PRO combines Alexandrite 755 nm and Nd:YAG 1064 nm wavelengths. Its Moveo HR mode uses repeated passes to gradually heat unwanted hair, while contact delivery supports a comfortable treatment experience across a range of skin tones. Individual sensitivity can vary.",
    "highlight": "This is pain free.",
    "image": "/treatments/motuspro.jpeg",
    "detailImage": "/treatments/motus.jpeg",
    "detailImageFit": "contain",
    "benefits": [
      "Unwanted hair",
      "Personalized laser assessment"
    ]
  },
  {
    "slug": "ipl-photofacial",
    "title": "IPL Photofacial",
    "category": "Laser Treatments",
    "description": "Intense pulsed light may help address selected pigmentation and redness concerns. Your provider will assess skin type and suitability before treatment.",
    "image": "/treatments/laser.jpg",
    "benefits": [
      "Pigmentation concerns",
      "Redness assessment"
    ]
  },
  {
    "slug": "co2-fractional-laser",
    "title": "CO₂ Fractional Laser / CoolPeel® — Tetra PRO",
    "category": "Laser Treatments",
    "description": "Tetra PRO is a customizable CO₂ resurfacing platform. Fractional CO₂ settings may address texture, fine lines, sun damage, enlarged pores, and acne-scar concerns, while CoolPeel® offers superficial resurfacing designed to limit unnecessary thermal damage and minimize downtime. Treatment intensity and recovery vary.",
    "image": "/treatments/tetrapro.jpeg",
    "imageFit": "contain",
    "detailImageFit": "contain",
    "benefits": [
      "Skin texture",
      "Acne-scar concerns"
    ]
  }
];
