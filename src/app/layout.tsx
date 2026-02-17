import type { Metadata } from "next";
import { Syne, DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne-var",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans-var",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk-var",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Throwbaq — Never Deal With a Return Again",
  description:
    "Throwbaq connects you with local runners who pick up, pack, and return your online purchases — so you never visit the post office again.",
  openGraph: {
    title: "Throwbaq — Never Deal With a Return Again",
    description:
      "Throwbaq connects you with local runners who pick up, pack, and return your online purchases — so you never visit the post office again.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${syne.variable} ${dmSans.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
