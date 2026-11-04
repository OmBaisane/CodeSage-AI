import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CodeSage AI — Precision Code Intelligence",
  description:
    "Evidence-backed AI code analysis & deterministic verification platform.",
  icons: {
    icon: "/brand/favicon/favicon-32x32.png",
    shortcut: "/brand/favicon/favicon.ico",
    apple: "/brand/favicon/apple-touch-icon.png",
  },
  manifest: "/brand/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-[#09090B] text-[#F8FAFC]`}
      >
        {children}
      </body>
    </html>
  );
}
