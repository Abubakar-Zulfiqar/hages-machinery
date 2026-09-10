import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://haigesmachinery.com"),
  title: "Haiges Machinery | Premium Commercial Laundry Equipment & Service | WI, IL, IN",
  description:
    "Haiges Machinery is the Midwest's premier commercial & industrial laundry equipment distributor. 5-generation family legacy since 1967 providing turnkey laundry design, new & reconditioned equipment, OEM parts, and certified service across Illinois, Wisconsin, and Indiana with nationwide shipping.",
  keywords: [
    "commercial laundry equipment",
    "industrial washers",
    "commercial dryers",
    "laundromat development",
    "Haiges Machinery",
    "commercial laundry repair Illinois",
    "laundry equipment distributor Wisconsin",
    "industrial dry cleaning presses Indiana",
    "reconditioned commercial laundry equipment",
    "OEM laundry parts",
    "on-premise laundry design",
  ],
  authors: [{ name: "Haiges Machinery, Inc." }],
  creator: "Haiges Machinery, Inc.",
  publisher: "Haiges Machinery, Inc.",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    title: "Haiges Machinery | Commercial & Industrial Laundry Solutions",
    description:
      "Midwest leader in commercial laundry systems, equipment sales, factory-certified repair, and nationwide reconditioned equipment shipping since 1967.",
    url: "https://haigesmachinery.com",
    siteName: "Haiges Machinery",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/haiges-logo.png",
        width: 1200,
        height: 630,
        alt: "Haiges Machinery Commercial Laundry Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Haiges Machinery | Commercial Laundry Systems",
    description:
      "Turnkey commercial laundry solutions, certified maintenance, and heavy equipment distribution across WI, IL, & IN.",
    images: ["/haiges-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "EquipmentSupplier"],
    "name": "Haiges Machinery, Inc.",
    "image": "https://haigesmachinery.com/haiges-logo.png",
    "telephone": "+1-800-542-2828",
    "emergencyTelephone": "+1-847-669-3300",
    "email": "info@haigesmachinery.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "11314 E. Main Street",
      "addressLocality": "Huntley",
      "addressRegion": "IL",
      "postalCode": "60142",
      "addressCountry": "US",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 42.1686395,
      "longitude": -88.4175398,
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:00",
        "closes": "15:30",
      },
    ],
    "areaServed": [
      { "@type": "State", "name": "Illinois" },
      { "@type": "State", "name": "Wisconsin" },
      { "@type": "State", "name": "Indiana" },
      { "@type": "Country", "name": "United States" },
    ],
    "priceRange": "$$$$",
    "foundingDate": "1967",
    "description":
      "Premier distributor of commercial laundry, dry cleaning, and industrial finishing machinery in the Midwest with nationwide reconditioned equipment shipping.",
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#fafbfc] text-slate-900 min-h-screen font-sans selection:bg-red-600 selection:text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
