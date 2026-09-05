import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://alokksingh.com"),
  title: {
    default: "Alok Kumar Singh — Engineering Leader (Cloud Platform, Security & AI)",
    template: "%s | Alok Kumar Singh",
  },
  description: "Engineering Leader & Practice Builder at SADA (An Insight Company) leading 30+ engineers across Google Cloud, AWS, Azure, Zero-Trust Security, and Agentic AI automation.",
  keywords: [
    "Alok Kumar Singh",
    "Engineering Leader",
    "Director of Platform Engineering",
    "Practice Leader",
    "Google Cloud Platform",
    "AWS",
    "Microsoft Azure",
    "Multi-Cloud Architecture",
    "GCP Architect",
    "Cloud Security Engineer",
    "SRE Leader",
    "SADA",
    "Agentic AI",
    "FinOps",
    "Enterprise Cloud Modernization",
    "Zero-Trust Architecture"
  ],
  authors: [{ name: "Alok Kumar Singh", url: "https://www.linkedin.com/in/aks2103/" }],
  creator: "Alok Kumar Singh",
  publisher: "Alok Kumar Singh",
  alternates: {
    canonical: "https://alokksingh.com",
  },
  openGraph: {
    title: "Alok Kumar Singh — Engineering Leader (Cloud Platform, Security & AI)",
    description: "Engineering Leader & Practice Builder leading cross-functional practices across Google Cloud, AWS, Azure, Zero-Trust Security, and Agentic Automation.",
    url: "https://alokksingh.com",
    siteName: "Alok Kumar Singh — Practice Leadership & Architecture",
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
    title: "Alok Kumar Singh — Engineering Leader (Cloud Platform, Security & AI)",
    description: "Engineering Leader & Practice Builder leading cross-functional practices across Google Cloud, AWS, Azure, Security, and Agentic Automation.",
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
  url: "https://alokksingh.com",
  image: "https://alokksingh.com/images/alok.jpg",
  jobTitle: "Practice Leader / Manager, Platform Engineering & Security",
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
    "Google Cloud Platform (GCP)",
    "Amazon Web Services (AWS)",
    "Microsoft Azure",
    "Multi-Cloud Engineering",
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
      <body 
        suppressHydrationWarning
        className="min-h-screen bg-white text-black font-sans antialiased selection:bg-black selection:text-white"
      >
        {children}
      </body>
    </html>
  );
}
