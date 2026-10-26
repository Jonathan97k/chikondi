import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chikondi Official | Stories, Sound & Purpose",
  description: "Official professional platform showcasing music, scriptwriting, production services, and community care by Chikondi.",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Chikondi Official | Stories, Sound & Purpose",
    description: "Official professional platform showcasing music, scriptwriting, production services, and community care by Chikondi.",
    url: "https://chikondi.official",
    siteName: "Chikondi Official",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Chikondi Official OG Image",
      },
    ],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#E8E4D9] text-[#20251F]">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-[#C9A54D] focus:text-[#20251F] focus:font-bold"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main" className="flex-grow">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
