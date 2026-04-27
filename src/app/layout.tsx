import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "Systems Over Goals – AI-Powered Tools for Sustainable Success",
    template: "%s | Systems Over Goals",
  },
  description:
    "Discover AI-powered tools and resources that help you replace fleeting goals with consistent systems for lasting personal and professional success.",
  metadataBase: new URL("https://systemsovergoals.com"),
  openGraph: {
    type: "website",
    siteName: "Systems Over Goals",
    locale: "en_US",
    images: [
      {
        url: "/goalstosystems.jpg",
        width: 1200,
        height: 630,
        alt: "Systems Over Goals – AI-Powered Tools for Sustainable Success",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/goalstosystems.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "RW1NRDKO5lmHCTPufCCDeBjEa14t_4qyO4hmovpZfOQ",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-[var(--font-inter)] bg-white text-slate-800 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
