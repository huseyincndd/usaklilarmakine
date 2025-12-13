import { MetadataRoute } from 'next'
import { categories } from './data/products'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.sitenizin-adresi.com' // Burayı kendi sitenizin adresiyle değiştirin
  
  // Ana sayfalar
  const mainPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/urunler`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/kurumsal`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/iletisim`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
  ]

  // Kategori sayfaları
  const categoryPages = categories.map((category) => ({
    url: `${baseUrl}/urunler/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Ürün sayfaları
  const productPages = categories.flatMap((category) =>
    category.products.map((product) => ({
      url: `${baseUrl}/urunler/${category.slug}/${product.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  )

  // Özel ürün sayfası - tornado-55
  const specialPages = [
    {
      url: `${baseUrl}/urunler/tornado-55`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ]

  return [...mainPages, ...categoryPages, ...productPages, ...specialPages]
}

