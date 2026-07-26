import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Playfair_Display, Inter, Geist } from "next/font/google";
import PageTransition from "@/components/ui/PageTransition";
import { cn } from "@/lib/utils";

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-serif",
});

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
    title: "Lusso",
    description: "Luxury MedSpa Treatments",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" data-scroll-behavior="smooth" className={cn(playfair.variable, "font-sans", geist.variable)}>
        <body className="bg-white text-stone-900 antialiased font-sans">
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
        </body>
        </html>
    );
}