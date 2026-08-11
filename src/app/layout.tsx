import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { JVModal } from "@/components/JVModal";
import { JVFloatingCta } from "@/components/JVFloatingCta";
import { site } from "@/lib/site";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Buy, Sell, Rent & Co-Develop Property in Gurugram & Indore`,
    template: `%s · ${site.name} Real Estate`,
  },
  description: site.description,
  keywords: [
    "Zyntra",
    "real estate Gurugram",
    "real estate Indore",
    "property in Sector 14 Gurugram",
    "property in Vijay Nagar Indore",
    "buy property",
    "sell property",
    "rent property",
    "joint venture real estate",
    "land development partnership",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    title: `${site.name} — Real Estate, Reimagined`,
    description: site.description,
    siteName: site.name,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Real Estate, Reimagined`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${fraunces.variable}`}>
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-forest focus:px-5 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <JVFloatingCta />
        <JVModal />
      </body>
    </html>
  );
}
