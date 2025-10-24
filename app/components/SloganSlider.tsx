'use client';

export default function SloganSlider() {
  const slogans = [
    "Profesyoneller İçin Yarının Makinelerini Tasarlıyoruz",
    "Kaliteli Üretim, Güvenilir Çözümler",
    "Türkiye'den Dünyaya Uzanan Teknoloji",
    "Sürdürülebilir Tarım İçin Yenilikçi Çözümler",
    "Modern Teknoloji, Geleneksel Kalite",
    "Tarımda Devrim Yaratıyoruz",
    "Güvenilir Partner, Başarılı Sonuçlar",
    "İnovasyon ve Kalite Bir Arada",
    "Geleceğin Tarımını Bugünden İnşa Ediyoruz",
    "Müşteri Memnuniyeti Önceliğimiz",
    "Yerli Üretim, Uluslararası Standartlar",
    "Teknoloji ve Doğa Uyum İçinde"
  ];

  // Duplicate slogans for seamless loop
  const duplicatedSlogans = [...slogans, ...slogans];

  return (
    <div className="w-full bg-white py-8 overflow-hidden relative">
      {/* Agricultural background image */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
          }}
        ></div>
      </div>
      
      <div className="relative z-10">
        {/* Slider container */}
        <div className="relative overflow-hidden">
          <div className="flex items-center text-gray-800 font-bold text-xl md:text-2xl lg:text-3xl whitespace-nowrap animate-scroll">
            {duplicatedSlogans.map((slogan, index) => (
              <div key={index} className="flex-shrink-0 px-8 text-center">
                {slogan}
              </div>
            ))}
          </div>
        </div>
        
        {/* Gradient overlays for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-20"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-20"></div>
      </div>
    </div>
  );
}
