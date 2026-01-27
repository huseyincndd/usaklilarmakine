import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Haberler",
  description: "ATK Uşaklılar Makine blog sayfası. Tarım teknolojileri, makine bakımı, sektör haberleri ve uzman görüşleri. Tarım makineleri hakkında en güncel bilgilere ulaşın.",
  keywords: [
    "tarım haberleri",
    "tarım makineleri bakımı",
    "tarım teknolojileri",
    "ATK blog",
    "makine bakımı ipuçları",
    "tarım sektörü",
    "yem öğütme makinesi",
    "tarım 4.0"
  ],
  openGraph: {
    title: 'Blog & Haberler | ATK Uşaklılar Makine',
    description: 'Tarım teknolojileri, makine bakımı, sektör haberleri ve uzman görüşleri. Tarım makineleri hakkında en güncel bilgilere ulaşın.',
    url: 'https://www.usaklilarmakine.com/blog',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
