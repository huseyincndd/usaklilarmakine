import type { Metadata } from 'next';
import { getCategoryBySlug, getAllCategorySlugs } from '../../data/products';

export function generateStaticParams() {
  return getAllCategorySlugs().map((slug) => ({
    category: slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    return {
      title: 'Kategori Bulunamadı | ATK',
    };
  }

  return {
    title: category.seoTitle || `${category.name} | ATK`,
    description: category.seoDescription || category.description,
    keywords: `${category.name}, tarım makineleri, hayvancılık ekipmanları`,
    openGraph: {
      title: category.seoTitle || `${category.name} | ATK`,
      description: category.seoDescription || category.description,
      type: 'website',
      images: [
        {
          url: category.image,
          width: 1200,
          height: 630,
          alt: category.name,
        },
      ],
    },
  };
}

export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

