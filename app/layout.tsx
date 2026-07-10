import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | Painters in ${siteConfig.areaServed}`,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-charcoal">{children}</body>
    </html>
  );
}
