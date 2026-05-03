import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-serif",
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: "MedSpa Masoud",
    description: "Luxury MedSpa Treatments",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
        <body className="bg-white text-stone-900 antialiased font-sans">
        <Navbar />
        {children}
        <Footer />
        </body>
        </html>
    );
}