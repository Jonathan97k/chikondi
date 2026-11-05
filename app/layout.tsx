import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import PWARegister from "@/components/PWARegister";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TOKHA CREATIONS | Music, Film & Creative Production",
  description: "The creative home of Chikondi: music, films, writing, production and community work.",
  manifest: "/manifest.json",
  icons: { icon: "/favicon.ico", shortcut: "/favicon.svg", apple: "/apple-touch-icon.png" },
  openGraph: {
    title: "TOKHA CREATIONS | Music, Film & Creative Production",
    description: "Explore the music, films, writing and creative work of Chikondi.",
    siteName: "TOKHA CREATIONS",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "TOKHA CREATIONS" }],
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#20251F",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#E8E4D9] text-[#20251F]">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-[#C9A54D] focus:text-[#20251F] focus:font-bold">Skip to main content</a>
        <PWARegister />
        <SiteHeader />
        <main id="main" className="flex-grow">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}