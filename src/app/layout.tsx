import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Build It Real — Web Design Studio from India",
  description:
    "We design and develop high-performance websites for ambitious brands. A bespoke web design studio based in India.",
  keywords: ["web design", "web development", "India", "design studio", "UI/UX", "Build It Real"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="bg-cream text-ink antialiased font-sans grain">
        {children}
      </body>
    </html>
  );
}
