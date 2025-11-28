export interface Product {
  id: number;
  name: string;
  slug: string;
  specs: string[];
  image: string;
  description?: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  isFlagship: boolean;
  productCount: number;
  image: string;
  products: Product[];
  seoTitle?: string;
  seoDescription?: string;
}

export const categories: Category[] = [
  {
    id: 1,
    name: "Tornado 55",
    slug: "tornado-55",
    description: "Kaba Yem Parçalama Öğütme Makinesi",
    isFlagship: true,
    productCount: 1,
    image: "https://villaqrmenu.b-cdn.net/usaklilarmakine/image-Photoroom.png",
    seoTitle: "Tornado 55 - Yem Öğütme Makinesi | ATK",
    seoDescription: "55kW güç, 2000 RPM rotor hızı ve 48 Hardox çekiç ile 7-8 ton/saat kapasiteli profesyonel yem öğütme makinesi.",
    products: [
      {
        id: 101,
        name: "Tornado 55",
        slug: "tornado-55",
        image: "/image-Photoroom.png",
        description: "2000rpm rotor hızı, 55kW elektrik motoru ve 48 adet Hardox çekiç ile kaba yem malzemelerini parçalar",
        specs: [
          "2000 RPM Rotor Hızı",
          "55kW Elektrik Motoru",
          "48 Hardox Çekiç",
          "7-8 Ton/Saat Kapasite",
          "Değiştirilebilir Elek Sistemi",
          "CE Sertifikalı"
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Sıvı Gübre Tankeri",
    slug: "sivi-gubre-tankeri",
    description: "Profesyonel sıvı gübre dağıtım çözümü",
    isFlagship: false,
    productCount: 4,
    // image: "https://fimaks.com/wp-content/uploads/2025/05/FST-12000.jpg",
    image: "",
    seoTitle: "Sıvı Gübre Tankeri - 5, 10, 15, 20 Ton | ATK",
    seoDescription: "Farklı kapasite seçenekleriyle sıvı gübre tankeri. Dayanıklı yapı, homojen dağıtım sistemi.",
    products: [
      {
        id: 201,
        name: "5 Ton Sıvı Gübre Tankeri",
        slug: "5-ton-sivi-gubre-tankeri",
        // image: "https://fimaks.com/wp-content/uploads/2017/10/SIVI-GÜBRE-TANKI-6-TON.jpg",
        image: "",
        specs: [
          "5 Ton Kapasite",
          "Paslanmaz Çelik Tank",
          "Hidrolik Pompa Sistemi",
          "Homojen Dağıtım",
          "Ayarlanabilir Dağıtım Hızı"
        ]
      },
      {
        id: 202,
        name: "10 Ton Sıvı Gübre Tankeri",
        slug: "10-ton-sivi-gubre-tankeri",
        // image: "https://fimaks.com/wp-content/uploads/2017/10/SIVI-GÜBRE-TANKI-10-TON.jpg",
        image: "",
        specs: [
          "10 Ton Kapasite",
          "Paslanmaz Çelik Tank",
          "Hidrolik Pompa Sistemi",
          "Homojen Dağıtım",
          "Geniş Çalışma Alanı"
        ]
      },
      {
        id: 203,
        name: "15 Ton Sıvı Gübre Tankeri",
        slug: "15-ton-sivi-gubre-tankeri",
        // image: "https://fimaks.com/wp-content/uploads/2022/03/Basliksiz-1.jpg",
        image: "",
        specs: [
          "15 Ton Kapasite",
          "Yüksek Mukavemetli Tank",
          "Güçlü Pompa Sistemi",
          "GPS Destekli Dağıtım",
          "Otomatik Seviye Kontrolü"
        ]
      },
      {
        id: 204,
        name: "20 Ton Sıvı Gübre Tankeri",
        slug: "20-ton-sivi-gubre-tankeri",
        // image: "https://fimaks.com/wp-content/uploads/2017/10/SIVI-GÜBRE-TANKI-20-TON.jpg",
        image: "",
        specs: [
          "20 Ton Kapasite",
          "Endüstriyel Sınıf Tank",
          "Yüksek Basınç Sistemi",
          "Tam Otomasyon",
          "Uzaktan Kontrol"
        ]
      }
    ]
  },
  {
    id: 3,
    name: "Katı Gübre Serpme Römorku",
    slug: "kati-gubre-serpme-romorku",
    description: "Verimli katı gübre dağıtım sistemi",
    isFlagship: false,
    productCount: 4,
    // image: "https://fimaks.com/wp-content/uploads/2017/10/GUBRE-ROMORKU-10-TON-300x300.jpg",
    image: "",
    seoTitle: "Katı Gübre Serpme Römorku - 5, 10, 15, 20 m³ | ATK",
    seoDescription: "Farklı hacim seçenekleriyle katı gübre serpme römorku. Eşit dağıtım, dayanıklı yapı.",
    products: [
      {
        id: 301,
        name: "5 m³ Katı Gübre Serpme Römorku",
        slug: "5-m3-kati-gubre-serpme-romorku",
        // image: "https://fimaks.com/wp-content/uploads/2017/10/GUBRE-ROMORKU-5-TON-300x300.jpg",
        image: "",
        specs: [
          "5 m³ Hacim",
          "Çift Diskli Serpme",
          "Ayarlanabilir Serpme Genişliği",
          "Yüksek Mukavemet",
          "Kolay Bakım"
        ]
      },
      {
        id: 302,
        name: "10 m³ Katı Gübre Serpme Römorku",
        slug: "10-m3-kati-gubre-serpme-romorku",
        // image: "https://fimaks.com/wp-content/uploads/2017/10/GUBRE-ROMORKU-10-TON-300x300.jpg",
        image: "",
        specs: [
          "10 m³ Hacim",
          "Hidrolik Serpme Sistemi",
          "Geniş Serpme Aralığı",
          "Galvanizli Şase",
          "Otomatik Dozaj"
        ]
      },
      {
        id: 303,
        name: "15 m³ Katı Gübre Serpme Römorku",
        slug: "15-m3-kati-gubre-serpme-romorku",
        // image: "https://fimaks.com/wp-content/uploads/2017/10/GUBRE-ROMORKU-18-TON-300x300.jpg",
        image: "",
        specs: [
          "15 m³ Hacim",
          "Güçlü Serpme Motoru",
          "Hassas Dağıtım",
          "Yüksek Dayanıklılık",
          "GPS Entegrasyonu"
        ]
      },
      {
        id: 304,
        name: "20 m³ Katı Gübre Serpme Römorku",
        slug: "20-m3-kati-gubre-serpme-romorku",
        // image: "https://fimaks.com/wp-content/uploads/2017/10/GUBRE-ROMORKU-25-TON-300x300.jpg",
        image: "",
        specs: [
          "20 m³ Hacim",
          "Endüstriyel Kapasıte",
          "Çift Tahrikli Sistem",
          "Akıllı Kontrol Paneli",
          "Yüksek Verimlilik"
        ]
      }
    ]
  },
  {
    id: 4,
    name: "Elektrikli-Traktör Tahrikli Pompa",
    slug: "elektrikli-traktor-tahrikli-pompa",
    description: "Çok amaçlı pompa sistemleri",
    isFlagship: false,
    productCount: 3,
    image: "https://www.pennacchiopompe.com/wp-content/uploads/2020/04/Telescopica-prove-in-campo-.jpg",
    seoTitle: "Elektrikli ve Traktör Tahrikli Pompalar | ATK",
    seoDescription: "Yüksek basınçlı, yüksek debili pompalar ve gübre karıştırıcısı. Profesyonel çözümler.",
    products: [
      {
        id: 401,
        name: "Yüksek Basınçlı Pompa",
        slug: "yuksek-basincli-pompa",
        image: "https://www.pennacchiopompe.com/wp-content/uploads/photo-gallery/sollevamento_acque/20200611_201525.jpg?bwg=1594630453",
        specs: [
          "150 Bar Basınç",
          "Elektrik veya Traktör Tahriki",
          "Paslanmaz Gövde",
          "Uzun Ömürlü",
          "Kolay Montaj"
        ]
      },
      {
        id: 402,
        name: "Yüksek Debili Pompa",
        slug: "yuksek-debili-pompa",
        image: "https://www.pennacchiopompe.com/wp-content/uploads/photo-gallery/sollevamento_acque/IMG-20200709-WA0000.jpg?bwg=1594630453",
        specs: [
          "500 L/dk Debi",
          "Çift Tahrik Seçeneği",
          "Yüksek Verimlilik",
          "Sessiz Çalışma",
          "Düşük Bakım"
        ]
      },
      {
        id: 403,
        name: "Gübre Karıştırıcısı",
        slug: "gubre-karistiricisi",
        image: "https://www.pennacchiopompe.com/wp-content/uploads/photo-gallery/sollevamento_acque/20200623_183059.jpg?bwg=1594630453",
        specs: [
          "Homojen Karıştırma",
          "Güçlü Motor",
          "Paslanmaz Pervane",
          "Otomatik Çalışma",
          "Enerji Tasarruflu"
        ]
      }
    ]
  },
  {
    id: 5,
    name: "Devirmeli Krom Suluk",
    slug: "devirmeli-krom-suluk",
    description: "Hayvan besleme için pratik suluk sistemi",
    isFlagship: false,
    productCount: 1,
    image: "https://villaqrmenu.b-cdn.net/usaklilarmakine/devirmelisuluk.jpg",
    seoTitle: "Devirmeli Krom Suluk - Hayvan Besleme | ATK",
    seoDescription: "Paslanmaz krom suluk sistemi. Hijyenik, dayanıklı, kolay temizlik.",
    products: [
      {
        id: 501,
        name: "Devirmeli Krom Suluk",
        slug: "devirmeli-krom-suluk",
        image: "https://villaqrmenu.b-cdn.net/usaklilarmakine/devirmelisuluk.jpg",
        specs: [
          "Paslanmaz Krom Kaplama",
          "Devirmeli Sistem",
          "Kolay Temizleme",
          "Hijyenik Tasarım",
          "Uzun Ömürlü",
          "Çeşitli Boyutlar"
        ]
      }
    ]
  },
  {
    id: 6,
    name: "Zincirli Gübre Sıyırıcısı",
    slug: "zincirli-gubre-siyiricisi",
    description: "Otomatik gübre temizleme sistemi",
    isFlagship: false,
    productCount: 1,
    image: "https://villaqrmenu.b-cdn.net/usaklilarmakine/Zincirli%20G%C3%BCbre%20S%C4%B1y%C4%B1r%C4%B1c%C4%B1s%C4%B1.png",
    seoTitle: "Zincirli Gübre Sıyırıcısı - Otomatik Temizlik | ATK",
    seoDescription: "Ahır temizliğinde verimli çözüm. Otomatik gübre sıyırma sistemi.",
    products: [
      {
        id: 601,
        name: "Zincirli Gübre Sıyırıcısı",
        slug: "zincirli-gubre-siyiricisi",
        image: "https://villaqrmenu.b-cdn.net/usaklilarmakine/Zincirli%20G%C3%BCbre%20S%C4%B1y%C4%B1r%C4%B1c%C4%B1s%C4%B1.png",
        specs: [
          "Otomatik Çalışma",
          "Dayanıklı Zincir",
          "Elektrik Motorlu",
          "Ayarlanabilir Hız",
          "Sessiz Çalışma",
          "Kolay Kurulum"
        ]
      }
    ]
  },
  {
    id: 7,
    name: "Kanal Açma Makinesi",
    slug: "kanal-acma-makinesi",
    description: "Tarımsal sulama kanalları için",
    isFlagship: false,
    productCount: 1,
    image: "https://s7d2.scene7.com/is/image/Caterpillar/CM20160729-41678-08576",
    seoTitle: "Kanal Açma Makinesi - Sulama Sistemi | ATK",
    seoDescription: "Verimli kanal açma çözümü. Tarımsal sulama için profesyonel makine.",
    products: [
      {
        id: 701,
        name: "Kanal Açma Makinesi",
        slug: "kanal-acma-makinesi",
        image: "https://s7d2.scene7.com/is/image/Caterpillar/CM20160729-41678-08576",
        specs: [
          "Traktör Tahrikli",
          "Ayarlanabilir Derinlik",
          "Güçlü Kazıma",
          "Hızlı İşlem",
          "Dayanıklı Yapı",
          "Kolay Kullanım"
        ]
      }
    ]
  },
  {
    id: 8,
    name: "Silaj Kesme Frezesi",
    slug: "silaj-kesme-frezesi",
    description: "Silaj hazırlama makinesi",
    isFlagship: false,
    productCount: 1,
    image: "https://villaqrmenu.b-cdn.net/usaklilarmakine/Silaj-Kesme-Frezesi.png",
    seoTitle: "Silaj Kesme Frezesi - Yem Hazırlama | ATK",
    seoDescription: "Profesyonel silaj kesme çözümü. Verimli yem hazırlama makinesi.",
    products: [
      {
        id: 801,
        name: "Silaj Kesme Frezesi",
        slug: "silaj-kesme-frezesi",
        image: "https://villaqrmenu.b-cdn.net/usaklilarmakine/Silaj-Kesme-Frezesi.png",
        specs: [
          "Hidrolik Tahrik",
          "Keskin Bıçaklar",
          "Yüksek Kapasite",
          "Homojen Kesim",
          "Güvenli Çalışma",
          "Kolay Bakım"
        ]
      }
    ]
  }
];

// Helper functions
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(cat => cat.slug === slug);
}

export function getProductBySlug(categorySlug: string, productSlug: string): Product | undefined {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return undefined;
  return category.products.find(prod => prod.slug === productSlug);
}

export function getAllCategorySlugs(): string[] {
  return categories.map(cat => cat.slug);
}

