import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import { LanguageProvider } from "@/lib/i18n";
import { ThemeProvider } from "@/lib/theme";
import { translations } from "@/lib/translations";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const keywords = [
  "Property",
  "Property Services",
  "Property Maintenance",
  "Property Care",
  "Property Repairs",
  "Home Maintenance",
  "Home Improvements",
  "Renovation",
  "Repairs",
  "Maintenance",
  "Painting",
  "Decorating",
  "Plastering",
  "Gib Repairs",
  "Carpentry",
  "Fence",
  "Deck",
  "Weatherboard",
  "Gutter",
  "Roof Maintenance",
  "Pressure Washing",
  "Exterior",
  "Interior",
  "Residential",
  "Commercial",
  "Rental Property",
  "Property Refresh",
  "房产",
  "物业",
  "物业服务",
  "物业维护",
  "物业养护",
  "物业维修",
  "房屋维护",
  "房屋改善",
  "翻新",
  "装修",
  "维修",
  "维护",
  "保养",
  "油漆",
  "室内外装饰",
  "批灰",
  "补墙",
  "Gib石膏板修补",
  "木工",
  "围栏",
  "木平台",
  "挂板外墙",
  "天沟",
  "屋顶维护",
  "高压清洗",
  "室外",
  "室内",
  "住宅",
  "商业",
  "出租房",
  "房屋焕新",
];

export const metadata: Metadata = {
  title: `${siteConfig.name} | Painters in ${translations.en.common.areaServed}`,
  description: translations.en.hero.description,
  keywords,
};

const THEME_INIT_SCRIPT = `
(function () {
  try {
    var stored = localStorage.getItem("jin-painting-theme");
    var isDark =
      stored === "dark" ||
      (stored !== "light" && window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList.toggle("dark", isDark);
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-cream text-charcoal transition-colors duration-200">
        <Script id="theme-init" strategy="beforeInteractive">
          {THEME_INIT_SCRIPT}
        </Script>
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
