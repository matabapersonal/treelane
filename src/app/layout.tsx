import type { Metadata } from "next";
import { Source_Sans_3, Lora } from "next/font/google";
import "./globals.css";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/lib/site";

const sans = Source_Sans_3({
  variable: "--font-sans-base",
  subsets: ["latin"],
  display: "swap",
});

const serif = Lora({
  variable: "--font-serif-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: {
    default: `${site.name} | Senior Care in Federal Way, WA`,
    template: `%s | ${site.name}, Federal Way, WA`,
  },
  description:
    "Compassionate, licensed adult family home in Federal Way's Twin Lakes neighborhood. Personalized senior care for up to 6 residents. Schedule a tour today.",
  keywords: [
    "adult family home Federal Way",
    "senior care Federal Way WA",
    "dementia care Federal Way",
    "Twin Lakes adult family home",
  ],
  openGraph: {
    title: `${site.name} | Senior Care in Federal Way, WA`,
    description:
      "Compassionate, licensed adult family home in Federal Way's Twin Lakes neighborhood.",
    url: `https://${site.domain}`,
    siteName: site.name,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
