import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim",
  description: "ATK Uşaklılar Makine ile iletişime geçin. Tarım makineleri, fiyat teklifi, teknik destek ve servis hizmetleri için 7/24 ulaşın. Adres: Organize Sanayi Bölgesi, Aydın, Türkiye.",
  keywords: [
    "iletişim",
    "ATK Uşaklılar",
    "tarım makineleri iletişim",
    "fiyat teklifi",
    "teknik destek",
    "servis",
    "Aydın tarım makineleri"
  ],
  openGraph: {
    title: 'İletişim | ATK Uşaklılar Makine',
    description: 'ATK Uşaklılar Makine ile iletişime geçin. Tarım makineleri, fiyat teklifi, teknik destek ve servis hizmetleri için 7/24 ulaşın.',
    url: 'https://www.usaklilarmakine.com/iletisim',
  },
};

export default function IletisimLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
