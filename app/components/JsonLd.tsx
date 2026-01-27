import Script from 'next/script';

export function OrganizationJsonLd() {
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ATK Uşaklılar Makine',
    alternateName: 'Uşaklılar Makine',
    url: 'https://www.usaklilarmakine.com',
    logo: 'https://www.usaklilarmakine.com/image.png',
    description: 'Uşaklılar Makine, 20 yıl aşkın deneyimiyle tarım makineleri sektöründe özgün, yenilikçi ve yüksek kaliteli ürünler sunan öncü bir makine üreticisidir.',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'info@usaklilarmakine.com',
      contactType: 'customer service',
      areaServed: 'TR',
      availableLanguage: 'Turkish'
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Aydın',
      addressCountry: 'TR'
    },
    sameAs: [
      'https://www.instagram.com/usaklilarmakine',
      'https://www.youtube.com/@UsaklilarMakine'
    ]
  };

  return (
    <Script
      id="organization-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationData),
      }}
    />
  );
}

export function BreadcrumbJsonLd({ items }: { items: Array<{ name: string; url: string }> }) {
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <Script
      id="breadcrumb-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbData),
      }}
    />
  );
}

export function ProductJsonLd({ 
  name, 
  description, 
  image, 
  brand = 'ATK Uşaklılar Makine',
  category = 'Tarım Makineleri'
}: { 
  name: string; 
  description: string; 
  image: string;
  brand?: string;
  category?: string;
}) {
  const productData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image,
    brand: {
      '@type': 'Brand',
      name: brand,
    },
    category,
    manufacturer: {
      '@type': 'Organization',
      name: 'ATK Uşaklılar Makine',
    },
  };

  return (
    <Script
      id="product-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(productData),
      }}
    />
  );
}

export function WebPageJsonLd({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  const webPageData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url,
    isPartOf: {
      '@type': 'WebSite',
      name: 'ATK Uşaklılar Makine',
      url: 'https://www.usaklilarmakine.com',
    },
  };

  return (
    <Script
      id="webpage-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(webPageData),
      }}
    />
  );
}
