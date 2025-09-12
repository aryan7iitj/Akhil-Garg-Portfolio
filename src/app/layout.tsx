import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dr. Akhil Garg - Associate Professor & Battery Technology Expert",
  description: "Associate Professor at Xi'an Jiaotong-Liverpool University specializing in battery thermal management, AI-driven optimization, and electric vehicle technologies",
  keywords: ["Battery Technology", "Thermal Management", "AI Optimization", "Electric Vehicles", "Research", "Professor", "Energy Storage"],
  authors: [{ name: "Dr. Akhil Garg" }],
  creator: "Dr. Akhil Garg",
  openGraph: {
    title: "Dr. Akhil Garg - Associate Professor & Battery Technology Expert",
    description: "Associate Professor at Xi'an Jiaotong-Liverpool University specializing in battery thermal management, AI-driven optimization, and electric vehicle technologies",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Akhil Garg - Associate Professor & Battery Technology Expert",
    description: "Associate Professor at Xi'an Jiaotong-Liverpool University specializing in battery thermal management, AI-driven optimization, and electric vehicle technologies",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
