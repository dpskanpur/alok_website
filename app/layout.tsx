import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://alok.dev"),
  title: {
    default: "Alok Kumar Singh — Engineering Leader (Cloud Platform & Security)",
    template: "%s | Alok Kumar Singh",
  },
  description: "Engineering Leader & Practice Builder at SADA (An Insight Company) driving enterprise Cloud Platform, Zero-Trust Security, and Agentic AI automation.",
  keywords: [
    "Alok Kumar Singh",
    "Engineering Leader",
    "Director of Platform Engineering",
    "Practice Leader",
    "Google Cloud Platform",
    "GCP Architect",
    "Cloud Security Engineer",
    "SRE Leader",
    "SADA",
    "Agentic AI",
    "FinOps",
    "Enterprise Cloud Migration"
  ],
  authors: [{ name: "Alok Kumar Singh", url: "https://www.linkedin.com/in/aks2103/" }],
  creator: "Alok Kumar Singh",
  publisher: "Alok Kumar Singh",
  alternates: {
    canonical: "https://alok.dev",
  },
  openGraph: {
    title: "Alok Kumar Singh — Engineering Leader (Cloud Platform & Security)",
    description: "Engineering Leader & Practice Builder at SADA driving high-performing teams across Google Cloud, Zero-Trust Security, and Agentic Automation.",
    url: "https://alok.dev",
    siteName: "Alok Kumar Singh — Portfolio & Leadership Practice",
    locale: "en_US",
    type: "profile",
    images: [
      {
        url: "/images/alok.jpg",
        width: 800,
        height: 800,
        alt: "Alok Kumar Singh — Engineering Leader",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alok Kumar Singh — Engineering Leader (Cloud Platform & Security)",
    description: "Engineering Leader & Practice Builder at SADA driving high-performing teams across Cloud Platform, Security, and Agentic Automation.",
    images: ["/images/alok.jpg"],
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Alok Kumar Singh",
  url: "https://alok.dev",
  image: "https://alok.dev/images/alok.jpg",
  jobTitle: "Manager, Platform Engineering & Security",
  worksFor: {
    "@type": "Organization",
    name: "SADA, An Insight Company",
    url: "https://sada.com"
  },
  sameAs: [
    "https://www.linkedin.com/in/aks2103/",
    "https://flowcv.com/resume/fl37r5sdsr"
  ],
  knowsAbout: [
    "Google Cloud Platform",
    "Kubernetes / GKE",
    "Cloud Security & Zero-Trust",
    "Site Reliability Engineering (SRE)",
    "Agentic AI Automation",
    "FinOps",
    "Engineering Practice Leadership"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white text-black font-sans antialiased selection:bg-black selection:text-white">
        {children}
      </body>
    </html>
  );
}
