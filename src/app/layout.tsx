import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jakir Hossain Medical College & Research Institute | MBBS Admissions West Bengal",
  description: "Jakir Hossain Medical College & Research Institute (JHMCRI) in Miapur, Murshidabad is a premier medical college in West Bengal under PPP mode, offering NMC approved MBBS education, 350+ bed hospital, and advanced clinical training.",
  keywords: [
    "Jakir Hossain Medical College",
    "JHMCRI",
    "MBBS Admissions West Bengal 2026",
    "Medical College Murshidabad",
    "NEET UG West Bengal Counselling",
    "Shibham Education Trust",
    "WBUHS Affiliated Medical College",
    "NMC Approved Medical College Bengal"
  ],
  authors: [{ name: "Jakir Hossain Medical College & Research Institute" }],
  openGraph: {
    title: "Jakir Hossain Medical College | MBBS Admissions West Bengal",
    description: "Jakir Hossain Medical College in Miapur, Murshidabad offering quality MBBS education, 350+ bed hospital, and excellent clinical facilities.",
    url: "https://jhmcri.com",
    siteName: "Jakir Hossain Medical College And Research Institute",
    images: [
      {
        url: "https://jhmcri.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-25-at-7.30.20-PM-1024x676.jpeg",
        width: 1024,
        height: 676,
        alt: "Jakir Hossain Medical College Campus",
      },
    ],
    locale: "en_US",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
