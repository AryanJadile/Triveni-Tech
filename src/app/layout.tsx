import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContactButton from "@/components/layout/FloatingContactButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Triveni Tech - Digital Solutions",
  description: "Web Development, App Development, and Digital Marketing Services.",
  keywords: ["Triveni Tech", "Web Development", "App Development", "Digital Marketing", "Software Agency", "Pune", "IT Services"],
  openGraph: {
    title: "Triveni Tech - Digital Solutions",
    description: "Transforming Ideas into Digital Reality. We build scalable web applications, mobile apps, and digital strategies.",
    url: "https://triveni.tech",
    siteName: "Triveni Tech",
    images: [
      {
        url: "/img/logo.jpg",
        width: 800,
        height: 600,
        alt: "Triveni Tech Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Triveni Tech - Digital Solutions",
    description: "Web Development, App Development, and Digital Marketing Services.",
    images: ["/img/logo.jpg"],
  },
  icons: {
    icon: '/img/favicon_logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
