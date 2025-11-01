import { getCategoryBySlug } from '../../data/products';
import { notFound } from 'next/navigation';
import CategoryContent from './CategoryContent';

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  return <CategoryContent category={category} />;
}
