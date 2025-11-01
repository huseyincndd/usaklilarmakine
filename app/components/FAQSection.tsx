"use client";

import { motion } from 'framer-motion';

const FAQSection = () => {
  const faqs = [
    {
      question: "Uşaklılar Makine hangi alanlarda hizmet veriyor?",
      answer: "Tarım makineleri, yem öğütme makineleri, biyogaz ve biyokütle sistemlerinde kapsamlı çözümler sunuyoruz. Tasarımdan üretim ve kalite kontrolüne, teslimattan servis hizmetlerine kadar tüm aşamalarda aktif rol alıyoruz."
    },
    {
      question: "Makine teslim süreleri ne kadar?",
      answer: "Makine teslim süresi model ve özelliklerine göre değişir. Standart makineler genellikle 2-4 hafta, özel tasarım makineler ise 4-8 hafta arasında teslim edilir."
    },
    {
      question: "Türkiye'nin hangi bölgelerinde hizmet veriyorsunuz?",
      answer: "Türkiye'nin 81 ilinde makinelerimizi satıyor ve servis hizmeti veriyoruz. Kurulumdan bakım ve onarıma kadar tüm aşamalarda titizlikle çalışıyoruz."
    },
    {
      question: "Uluslararası projeler üretiyor musunuz?",
      answer: "Evet, ulusal ve uluslararası pazarlarda makinelerimizi satıyor, global projelerde yer alıyor ve ihracat yapıyoruz."
    },
    {
      question: "Yem öğütme makinelerinde sunduğunuz hizmetler nelerdir?",
      answer: "Tornado serisi yem öğütme makinelerinde; kurulum, kalibrasyon, operatör eğitimi, bakım planlaması ve yedek parça tedariki hizmetleri sağlıyoruz."
    },
    {
      question: "Makine üretiminde hangi aşamalarda yer alıyorsunuz?",
      answer: "Tasarım, mühendislik, üretim, kalite kontrol, test ve doğrulama dahil tüm aşamalarda aktif rol alıyoruz. Her projede yüksek kalite ve teknolojik mükemmeliyeti ön planda tutuyoruz."
    },
    {
      question: "Çiftçiler için özel makine tasarımları yapıyor musunuz?",
      answer: "Evet, çiftçilerin özel ihtiyaçlarına göre özel makine tasarımları ve modifikasyonlar yapıyoruz. Konseptten teslimata kadar tüm süreçte aktif destek sağlıyoruz."
    },
    {
      question: "Makinelerinizde kalite ve standartlar nasıl korunuyor?",
      answer: "Her aşamada üretim mükemmeliyeti ve yüksek kalite standartlarını uygular, deneyimli mühendislik ekibimizle makinelerin kusursuz çalışmasını sağlarız."
    },
    {
      question: "Servis ve bakım hizmetleriniz neleri kapsıyor?",
      answer: "Periyodik bakım, yedek parça tedariki, teknik destek, operatör eğitimi ve acil müdahale dahil olmak üzere tüm servis süreçlerini yönetiyoruz."
    },
    {
      question: "Makine seçimi süreciniz nasıl ilerliyor?",
      answer: "Çiftçinin ihtiyaçları, tarla büyüklüğü ve üretim kapasitesi doğrultusunda makine seçimi, teknik danışmanlık ve kurulum planlaması aşamalarını titizlikle yürütüyoruz."
    },
    {
      question: "Kurulum ve eğitim konusunda destek veriyor musunuz?",
      answer: "Evet, Türkiye'nin 81 ilinde ve uluslararası lokasyonlarda makine kurulumu, operatör eğitimi ve teknik danışmanlık konusunda hizmet sağlıyoruz."
    },
    {
      question: "Uşaklılar Makine'ı diğer makine üreticilerinden farklı kılan nedir?",
      answer: "20+ yıllık deneyim, yenilikçi teknoloji, ulusal ve uluslararası projelerdeki başarımız ve yüksek kalite standartlarımızla her makineyi çiftçilere güvenilir bir çözüm olarak sunuyoruz."
    }
  ];

  return (
    <section className="pt-12 pb-20 relative bg-gradient-to-b from-white via-green-50/20 to-white overflow-hidden">
      {/* Background decorations */}
      <motion.div
        className="absolute top-40 left-10 w-96 h-96 bg-green-200/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-40 right-10 w-80 h-80 bg-emerald-200/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          className="text-left lg:text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
           {/* Main title */}
           <h2 className="text-4xl lg:text-5xl font-bold mb-6">
             <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Sıkça Sorulan Sorular</span>
             <span className="text-gray-600"> – </span>
             <span className="text-gray-800">Uşaklılar Makine</span>
           </h2>
           <motion.div 
            className="h-1.5 w-32 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto lg:mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {faqs.slice(0, 6).map((faq, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-green-100 hover:border-green-300 group cursor-pointer"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex gap-4">
                  {/* Question Mark Icon */}
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-white font-bold text-lg">?</span>
                  </motion.div>
                  
                  {/* Question and Answer */}
                  <div className="flex-1">
                    <h3 className="text-gray-900 font-bold text-lg mb-3 group-hover:text-green-600 transition-colors">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {faqs.slice(6, 12).map((faq, index) => (
              <motion.div 
                key={index + 6}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-green-100 hover:border-green-300 group cursor-pointer"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex gap-4">
                  {/* Question Mark Icon */}
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-white font-bold text-lg">?</span>
                  </motion.div>
                  
                  {/* Question and Answer */}
                  <div className="flex-1">
                    <h3 className="text-gray-900 font-bold text-lg mb-3 group-hover:text-green-600 transition-colors">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
