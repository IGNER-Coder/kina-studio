import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500"],
});

const DOMAIN = "https://www.kinastudio.co.ke";

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN),

  title: {
    default: "Kina Studio — Web Design & Brand Identity | Nairobi",
    template: "%s | Kina Studio",
  },

  description:
    "Kina Studio is a Nairobi-based web design and brand identity studio building premium digital experiences for African startups and corporates. Go Deep. Grow High.",

  keywords: [
    "web design Nairobi",
    "web design Kenya",
    "brand identity Kenya",
    "web development Nairobi",
    "African web design agency",
    "website design for startups Kenya",
    "branding agency Nairobi",
    "Next.js web design Kenya",
    "Kina Studio",
  ],

  openGraph: {
    title: "Kina Studio — Web Design & Brand Identity | Nairobi",
    description:
      "Premium web design and brand identity for African startups and corporates. Nairobi-based, globally capable.",
    url: DOMAIN,
    siteName: "Kina Studio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kina Studio — Web Design & Brand Identity Nairobi",
      },
    ],
    locale: "en_KE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Kina Studio — Web Design & Brand Identity | Nairobi",
    description:
      "Premium web design and brand identity for African startups and corporates.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  alternates: {
    canonical: DOMAIN,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "LocalBusiness"],
  name: "Kina Studio",
  description:
    "Web design and brand identity studio for African startups and corporates",
  url: DOMAIN,
  logo: `${DOMAIN}/og-image.png`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
  areaServed: ["KE", "Africa"],
  serviceType: ["Web Design", "Brand Identity", "Web Development"],
  priceRange: "KES 45,000 — KES 300,000",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${outfit.variable}`}>
      <head suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-black text-parchment overflow-x-hidden font-sans">
        {children}
      </body>
    </html>
  );
}
