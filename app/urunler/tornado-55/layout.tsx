import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tornado 55 - Yem Öğütme Makinesi | ATK',
  description: '55kW güç, 2000 RPM rotor hızı ve 48 Hardox çekiç ile 7-8 ton/saat kapasiteli profesyonel yem öğütme ve boyutlandırma makinesi. CE sertifikalı.',
  keywords: 'tornado 55, yem öğütme makinesi, kaba yem parçalama, hardox çekiç, tarım makineleri, hayvancılık ekipmanları',
  openGraph: {
    title: 'Tornado 55 - Yem Öğütme Makinesi | ATK',
    description: '55kW güç, 2000 RPM rotor hızı ile profesyonel yem öğütme çözümü.',
    type: 'website',
    images: [
      {
        url: '/image-Photoroom.png',
        width: 1200,
        height: 630,
        alt: 'Tornado 55 Yem Öğütme Makinesi',
      },
    ],
  },
};

export default function Tornado55Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

