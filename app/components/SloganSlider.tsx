'use client';

import { motion } from 'framer-motion';

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
    <div className="w-full bg-gradient-to-r from-green-50 via-white to-green-50 py-12 overflow-hidden relative">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
          }}
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-0 left-1/4 w-32 h-32 bg-green-200/20 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/3 w-40 h-40 bg-emerald-200/20 rounded-full blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <div className="relative z-10">
        {/* Top accent line */}
        <motion.div 
          className="h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent mb-6"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
        />

        {/* Slider container */}
        <div className="relative overflow-hidden">
          <div className="flex items-center text-gray-800 font-bold text-xl md:text-2xl lg:text-3xl whitespace-nowrap animate-scroll">
            {duplicatedSlogans.map((slogan, index) => (
              <motion.div 
                key={index} 
                className="flex-shrink-0 px-8 text-center"
                whileHover={{ 
                  scale: 1.05,
                  color: '#16a34a',
                  transition: { duration: 0.2 }
                }}
              >
                <span className="inline-flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {slogan}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Bottom accent line */}
        <motion.div 
          className="h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mt-6"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        />
        
        {/* Gradient overlays for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-20"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-20"></div>
      </div>
    </div>
  );
}
