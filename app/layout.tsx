import type { Metadata } from "next";
import { Bebas_Neue, Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import "./tamil-normalize.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { LanguageProvider } from "@/i18n/LanguageContext";

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const barlow = Barlow({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  weight: ['400', '600', '700'],
  subsets: ["latin"],
  variable: "--font-barlow-cond",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sri Senthur Velan Welding Works | Fabrication Services",
  description: "Expert welding and fabrication of grill gates, house gates, ladders, railings & custom metal works. Serving Sernthamaram, Surandai and nearby areas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${barlow.variable} ${barlowCondensed.variable} antialiased`}
    >
      <body>
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
          <ScrollReveal />
        </LanguageProvider>
      </body>
    </html>
  );
}
