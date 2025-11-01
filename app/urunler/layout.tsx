import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ürünler - Tarım ve Hayvancılık Makineleri | ATK',
  description: 'Yem öğütme, gübre tankeri, pompa sistemleri ve daha fazlası. Tarım ve hayvancılık için profesyonel makine çözümleri.',
  keywords: 'tarım makineleri, hayvancılık ekipmanları, yem öğütme makinesi, gübre tankeri, tornado 55',
  openGraph: {
    title: 'Ürünler - Tarım ve Hayvancılık Makineleri | ATK',
    description: 'Yem öğütme, gübre tankeri, pompa sistemleri ve daha fazlası.',
    type: 'website',
    images: [
      {
        url: '/image-Photoroom.png',
        width: 1200,
        height: 630,
        alt: 'ATK Ürünler',
      },
    ],
  },
};

export default function UrunlerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

