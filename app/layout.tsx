import type { Metadata } from "next";
import { Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

// Manrope + IBM Plex Mono — both ship Cyrillic + Cyrillic-Ext subsets,
// which Mongolian (ү / ө) requires. Geist (latin-only) would break the text.
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  weight: ["400", "500", "600"],
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Neuro Scan MRI — AI тусламжтай MRI оношилгоо",
  description:
    "Улаанбаатар хотын дэвшилтэт MRI оношилгооны төв. Эрт илрүүлэлт, өндөр нарийвчлал, 24 цагийн дотор хариу. AI-аар сайжруулсан оношилгоо.",
  metadataBase: new URL("https://neuro-scan-mri.vercel.app"),
  openGraph: {
    title: "Neuro Scan MRI — AI тусламжтай MRI оношилгоо",
    description:
      "Эрт илрүүлэлт. Өндөр нарийвчлал. Танд итгэл. AI-аар сайжруулсан MRI оношилгоо.",
    locale: "mn_MN",
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
      lang="mn"
      data-scroll-behavior="smooth"
      className={`${manrope.variable} ${plexMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-bg text-text">{children}</body>
    </html>
  );
}
