import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ürünler",
  description: "ATK Uşaklılar Makine ürün kataloğu: Balya makineleri, diskaro, pulluk, kültivatör, gübre dağıtıcı, sap parçalayıcı ve daha fazlası. CE sertifikalı, yüksek kaliteli tarım makineleri.",
  keywords: [
    "balya makinesi",
    "diskaro",
    "pulluk",
    "kültivatör",
    "gübre dağıtıcı",
    "sap parçalayıcı",
    "tarım makineleri",
    "traktör ekipmanları",
    "toprak işleme makineleri",
    "ATK ürünler"
  ],
  openGraph: {
    title: 'Ürünler | ATK Uşaklılar Makine',
    description: 'ATK Uşaklılar Makine ürün kataloğu: Balya makineleri, diskaro, pulluk, kültivatör ve daha fazlası. CE sertifikalı, yüksek kaliteli tarım makineleri.',
    url: 'https://www.usaklilarmakine.com/urunler',
  },
};

export default function UrunlerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
