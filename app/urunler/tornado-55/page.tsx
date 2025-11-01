'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Hero Section - Split Screen Layout
function Tornado55Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const stats = [
    { value: "2000", unit: "RPM", label: "Rotor Hızı", icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" },
    { value: "55", unit: "kW", label: "Elektrik Motoru", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
    { value: "48", unit: "Adet", label: "Hardox Çekiç", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" },
    { value: "7-8", unit: "Ton/Saat", label: "Kapasite", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" }
  ];

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-gradient-to-br from-white via-green-50/20 to-white min-h-screen flex items-center">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 100%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 0%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <motion.div style={{ y, opacity }} className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            {/* Bayrak Ürün Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block"
            >
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-2xl text-sm font-bold uppercase shadow-xl inline-flex items-center gap-2">
                <motion.svg 
                  className="w-5 h-5"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </motion.svg>
                Bayrak Ürün
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 bg-clip-text text-transparent">
                  Tornado 55
                </span>
              </h1>
              <div className="h-2 w-40 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-4" />
            </motion.div>

            <motion.p
              className="text-2xl text-gray-600 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Kaba Yem Parçalama ve Öğütme Makinesi
            </motion.p>

            <motion.p
              className="text-lg text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <strong className="text-green-600">2000rpm rotor hızı</strong>, <strong className="text-green-600">55kW elektrik motoru</strong> ve 
              <strong className="text-green-600"> 48 adet Hardox çekiç</strong> ile saman, yonca, mısır sapı gibi kaba 
              yem malzemelerini parçalar ve elek yardımı ile sürekli homojen boyutlandırma sağlar.
            </motion.p>

            {/* Stat Cards - 2x2 Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="relative rounded-2xl bg-gradient-to-br from-white to-green-50/50 p-5 shadow-lg hover:shadow-xl transition-all border-2 border-green-200/50 group cursor-pointer overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-green-100 rounded-full -mr-12 -mt-12 opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                  
                  <div className="relative z-10 flex items-start gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                      </svg>
                    </div>
                    <div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold text-gray-900">{stat.value}</span>
                        <span className="text-sm font-semibold text-green-600">{stat.unit}</span>
                      </div>
                      <div className="text-xs text-gray-600 uppercase font-semibold mt-1">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Link href="/iletisim">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  Teklif Al
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white border-2 border-green-500 text-green-600 font-semibold rounded-xl hover:bg-green-50 transition-all"
              >
                Broşür İndir
              </motion.button>
            </motion.div>
          </div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-3xl blur-3xl group-hover:blur-4xl transition-all duration-500" />
            <motion.div
              whileHover={{ scale: 1.02, rotateY: 5 }}
              style={{ transformStyle: "preserve-3d" }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <Image
                src="/image-Photoroom.png"
                alt="Tornado 55"
                width={800}
                height={600}
                className="w-full h-auto drop-shadow-2xl relative z-10"
                priority
              />
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              className="absolute -top-4 -right-4 bg-white rounded-2xl px-6 py-4 shadow-2xl border-2 border-green-200"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <div className="flex items-center gap-3">
                <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <div className="text-xs text-gray-500 uppercase font-semibold">CE</div>
                  <div className="text-sm font-bold text-gray-800">Sertifikalı</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

// Technical Specs - Bento Grid Layout
function TechnicalSpecsSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  const specs = [
    { label: "Elek Seçenekleri", value: "Ø125mm, Ø100mm, Ø70mm, Ø60mm, Ø50mm, Ø40mm", icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" },
    { label: "Kapasite", value: "7-8 ton/saate kadar (Ø125mm elek ile)", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
    { label: "Motor Gücü", value: "55kW Elektrik Motoru", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
    { label: "Rotor Hızı", value: "2000 RPM", icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" },
    { label: "Çekiç Sayısı", value: "48 adet Hardox Çekiç", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" },
    { label: "Özellik", value: "Değiştirilebilir Elek Sistemi", icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="tech-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="2" fill="#22c55e"/>
              <path d="M 0 30 L 60 30 M 30 0 L 30 60" stroke="#10b981" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tech-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Teknik Özellikler
            </span>
          </h2>
          <div className="h-2 w-40 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto" />
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Spec Cards - 2 rows of 3 */}
          {specs.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -5 }}
              className={`bg-gradient-to-br from-white to-green-50/30 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all border-2 border-green-100 group cursor-pointer ${
                index === 0 || index === 5 ? 'md:col-span-2' : ''
              }`}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={spec.icon} />
                  </svg>
                </motion.div>
                <div className="flex-1">
                  <h5 className="text-sm font-semibold text-green-600 uppercase tracking-wider mb-2">
                    {spec.label}
                  </h5>
                  <p className="text-lg font-bold text-gray-900">
                    {spec.value}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden shadow-2xl border-4 border-green-500/20">
            {!isPlaying ? (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-green-900/50">
                <div className="absolute inset-0 bg-center bg-cover opacity-20"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800')" }}
                />
                <div className="text-center relative z-10">
                  <motion.div
                    className="w-24 h-24 bg-green-500/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer border-4 border-green-400/40 group hover:border-green-400/80 transition-all duration-300"
                    onClick={() => setIsPlaying(true)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(34, 197, 94, 0.3)",
                        "0 0 40px rgba(34, 197, 94, 0.6)",
                        "0 0 20px rgba(34, 197, 94, 0.3)",
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <svg className="w-12 h-12 text-white ml-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </motion.div>
                  <p className="text-white text-xl font-semibold">Videoyu İzle</p>
                </div>
              </div>
            ) : (
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/hrrOUP54GXE?autoplay=1&mute=0&controls=1"
                title="Tornado 55 Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </motion.div>

        {/* Technical Drawing */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-green-50 to-white rounded-3xl p-8 shadow-xl border-2 border-green-100"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Teknik Çizim</h3>
          <Image
            src="/image.png"
            alt="Tornado 55 Teknik Çizim"
            width={1200}
            height={400}
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}

// Advantages Section
function AdvantagesSection() {
  const mainAdvantages = [
    {
      title: "Zamandan Tasarruf",
      description: "Yem hazırlama sürelerini azaltır, zamandan ve harcanan enerjiden tasarruf sağlar.",
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
      title: "Makine Ömrü",
      description: "Yem karma sadece karma işlemi yapacağından makine ömrünü uzatır, bakım maliyetlerini azaltır.",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    },
    {
      title: "Süt Verimine Katkı",
      description: "Homojen boyutlandırma, sindirimi kolaylaştırır, süt verimine pozitif katkı sağlar.",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    }
  ];

  const detailedAdvantages = [
    {
      title: "Muntazam, Tek Tip Parçacık Boyutu",
      description: "Tutarlı besin içeriği, dengeli rasyon ve genel sürü sağlığının iyileşmesi."
    },
    {
      title: "Maliyet Tasarrufu",
      description: "Doğrudan ve uygun maliyetli çözüm sunar. İşletme maliyetlerinden tasarruf."
    },
    {
      title: "Yem Kalitesi",
      description: "İnce öğütülmüş yem ile daha yüksek süt verimi ve iyi performans."
    },
    {
      title: "Verimlilik",
      description: "Boyut küçültme için özel tasarım. Yem bileşenlerini öğütmede çok verimli."
    },
    {
      title: "Çok Yönlülük",
      description: "Saman, yonca, mısır sapı, odun dahil çok çeşitli malzemeleri işler."
    },
    {
      title: "Atık Yönetimi",
      description: "Tarımsal kalıntıları ve organik atıkları değerli yem haline getirir."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-green-50/20 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Sağladığı Avantajlar
            </span>
          </h2>
          <div className="h-2 w-40 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto" />
        </motion.div>

        {/* Main Advantages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {mainAdvantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border-2 border-green-100 hover:border-green-300 group cursor-pointer"
            >
              <motion.div
                className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg mx-auto"
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={advantage.icon} />
                </svg>
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{advantage.title}</h3>
              <p className="text-gray-600 leading-relaxed text-center">{advantage.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Detailed Advantages */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full -ml-40 -mb-40" />

          <h3 className="text-4xl font-bold mb-12 text-center relative z-10">Detaylı Avantajlar</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            {detailedAdvantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border-2 border-white/20 hover:bg-white/15 hover:border-white/40 transition-all cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{advantage.title}</h4>
                    <p className="text-white/90 text-sm leading-relaxed">{advantage.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Usage Areas Section
function UsageAreasSection() {
  const areas = [
    { name: "Kanatlı Altlık", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
    { name: "Sağmal Rasyonlarında", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
    { name: "Besi Rasyonlarında", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
    { name: "Biyogaz & Biyokütle", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-green-500 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-emerald-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">Kullanım Alanları</h2>
          <div className="h-2 w-40 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border-2 border-white/20 hover:border-white/40 transition-all group cursor-pointer text-center"
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={area.icon} />
                </svg>
              </motion.div>
              <h3 className="text-xl font-semibold text-white">{area.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Footer Section
function CTAFooterSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full -ml-40 -mb-40" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-white mb-12"
        >
          <h2 className="text-5xl font-bold mb-6">İlgilendiniz mi?</h2>
          <p className="text-2xl text-white/90 mb-8">
            Tornado 55 hakkında detaylı bilgi almak ve fiyat teklifi için bizimle iletişime geçin
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border-2 border-white/20 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Adınız Soyadınız"
              className="px-6 py-4 rounded-xl bg-white/10 border-2 border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-all backdrop-blur-md"
            />
            <input
              type="email"
              placeholder="E-posta Adresiniz"
              className="px-6 py-4 rounded-xl bg-white/10 border-2 border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-all backdrop-blur-md"
            />
          </div>
          <input
            type="tel"
            placeholder="Telefon Numaranız"
            className="w-full px-6 py-4 rounded-xl bg-white/10 border-2 border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-all backdrop-blur-md mb-4"
          />
          <textarea
            rows={4}
            placeholder="Mesajınız"
            className="w-full px-6 py-4 rounded-xl bg-white/10 border-2 border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-all backdrop-blur-md mb-4"
          />
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-white text-green-600 py-4 px-8 rounded-xl font-bold text-lg shadow-lg hover:bg-gray-50 transition-all"
          >
            Teklif İsteği Gönder
          </motion.button>
        </motion.div>

        {/* Quick Contact Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <motion.a
            href="tel:+902742240035"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-xl text-white hover:bg-white/20 transition-all"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="font-semibold">Hemen Ara</span>
          </motion.a>
          <motion.a
            href="https://wa.me/905321234567"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-xl text-white hover:bg-white/20 transition-all"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span className="font-semibold">WhatsApp</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}

export default function Tornado55Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        <Tornado55Hero />
        <TechnicalSpecsSection />
        <AdvantagesSection />
        <UsageAreasSection />
        <CTAFooterSection />
      </main>

      <Footer />
    </div>
  );
}

