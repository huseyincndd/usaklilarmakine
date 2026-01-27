import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { OrganizationJsonLd } from "./components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.usaklilarmakine.com'),
  title: {
    default: "ATK Uşaklılar Makine | Tarım Makineleri & Ekipmanları",
    template: "%s | ATK Uşaklılar Makine"
  },
  description: "Uşaklılar Makine, 20 yıl aşkın deneyimiyle tarım makineleri sektöründe özgün, yenilikçi ve yüksek kaliteli ürünler sunan öncü bir makine üreticisidir. Balya makineleri, diskaro, pulluk, kültivatör ve daha fazlası.",
  keywords: [
    "tarım makineleri",
    "balya makinesi",
    "diskaro",
    "pulluk",
    "kültivatör",
    "tarım ekipmanları",
    "ATK",
    "Uşaklılar Makine",
    "tarım teknolojisi",
    "toprak işleme",
    "saman balyası",
    "tarım aletleri",
    "traktör ekipmanları",
    "hayvancılık ekipmanları"
  ],
  authors: [{ name: "ATK Uşaklılar Makine" }],
  creator: "ATK Uşaklılar Makine",
  publisher: "ATK Uşaklılar Makine",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://www.usaklilarmakine.com',
    siteName: 'ATK Uşaklılar Makine',
    title: 'ATK Uşaklılar Makine | Tarım Makineleri & Ekipmanları',
    description: 'Uşaklılar Makine, 20 yıl aşkın deneyimiyle tarım makineleri sektöründe özgün, yenilikçi ve yüksek kaliteli ürünler sunan öncü bir makine üreticisidir.',
    images: [
      {
        url: '/image.png',
        width: 1200,
        height: 630,
        alt: 'ATK Uşaklılar Makine - Tarım Makineleri',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ATK Uşaklılar Makine | Tarım Makineleri & Ekipmanları',
    description: 'Uşaklılar Makine, 20 yıl aşkın deneyimiyle tarım makineleri sektöründe özgün, yenilikçi ve yüksek kaliteli ürünler sunan öncü bir makine üreticisidir.',
    images: ['/image.png'],
  },
  verification: {
    google: 'google-site-verification-code', // Google Search Console'dan alacağınız kod
  },
  alternates: {
    canonical: 'https://www.usaklilarmakine.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <OrganizationJsonLd />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
