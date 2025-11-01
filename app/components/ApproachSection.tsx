"use client";

import React from 'react';
import { motion } from 'framer-motion';

const ApproachSection = () => {
  const approachItems = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Misyonumuz",
      description: "Uşaklılar Makine olarak, tarım makineleri sektöründe özgün ve yüksek kaliteli ürünler üreterek çiftçilere ve tarım sektörüne değer katmayı amaçlıyoruz. Her projede teknolojik vizyonu yenilikçi yaklaşımlarla birleştiriyor, tasarımdan üretime kadar tüm süreçleri titizlikle yönetiyoruz. Amacımız, ulusal ve uluslararası arenada iz bırakan, güvenilir ve verimli makineler ortaya koymaktır."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15.09 8.26L22 9L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Değerlerimiz",
      description: "Uşaklılar Makine olarak kaliteyi, güveni, teknolojiyi, sürdürülebilirliği ve müşteri memnuniyetini temel değerlerimiz olarak benimsiyoruz. Her projede özgün ve yenilikçi çözümler sunarken, üretim mükemmeliyeti ve yüksek kalite standartlarından ödün vermiyoruz. Müşterilerimizle kurduğumuz ilişkilerde şeffaflık ve güven önceliğimizdir. Gelişen teknolojileri ve dijital çözümleri üretim süreçlerimizle entegre ederek, hem sektöre hem tarımsal üretime değer katan projeler üretmeyi hedefliyoruz."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: "Vizyonumuz",
      description: "Uşaklılar Makine olarak, tarım makineleri alanında sektörün öncüsü olmayı sürdürüyoruz. Gelişen teknoloji ve yenilikçi yaklaşımlarımızla ulusal ve uluslararası pazarlarda başarılı iş birlikleri kurarak, kalıcı bir üretim standardı oluşturmayı hedefliyoruz. Makine üretiminde sınırları zorlayarak ve teknolojiyi yaratıcı mühendislikle birleştirerek, her projeyi unutulmaz bir deneyime dönüştürmek ve global üretim standartlarını yükseltmek vizyonumuzun merkezindedir."
    }
  ];

  const images = [
    "https://www.deere.com/assets/images/region-4/industries/agriculture/small-grains/r4f085887-rrd-1366x768.jpg",
    "https://ik.imagekit.io/efarm/website/combine_harvesting_in_sunset_4ff3ab43db.jpg?tr=w-1600",
    "https://www.corkfarmmachinery.ie/wp-content/uploads/2023/12/FC9330RA_WORK_AERIAL_MF-5-1.jpg"
  ];

  return (
    <section className="relative pt-0 pb-12 lg:pb-16 overflow-hidden bg-gradient-to-b from-white via-green-50/20 to-white">
      {/* Background decorations */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-green-200/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 bg-emerald-200/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto text-left lg:text-center"
          >
            Mükemmelliğe ulaşmak için yaratıcı <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">yaklaşımımız</span>
          </motion.h3>
          <motion.div 
            className="h-1.5 w-32 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto mt-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-white border-2 border-green-100 hover:border-green-300 rounded-3xl p-8 lg:p-10 relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
          >
            {/* Animated gradient background */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-green-50 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-500" />
            
            <motion.div 
              className="text-white mb-6 relative z-10"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl shadow-lg">
                {approachItems[0].icon}
              </div>
            </motion.div>
            <h4 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 relative z-10 group-hover:text-green-600 transition-colors">
              {approachItems[0].title}
            </h4>
            <p className="text-gray-700 leading-relaxed relative z-10">
              {approachItems[0].description}
            </p>
          </motion.div>

          {/* Middle Column - Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden rounded-3xl shadow-xl group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
            <img
              src={images[0]}
              alt="Tarım makinesi üretimi"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </motion.div>

          {/* Right Column - Value Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-white border-2 border-green-100 hover:border-green-300 rounded-3xl p-8 lg:p-10 relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
          >
            {/* Animated gradient background */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-green-50 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-500" />
            
            <motion.div 
              className="text-white mb-6 relative z-10"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl shadow-lg">
                {approachItems[1].icon}
              </div>
            </motion.div>
            <h4 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 relative z-10 group-hover:text-green-600 transition-colors">
              {approachItems[1].title}
            </h4>
            <p className="text-gray-700 leading-relaxed relative z-10">
              {approachItems[1].description}
            </p>
          </motion.div>

          {/* Bottom Row - Image, Vision Card, Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden rounded-3xl shadow-xl group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
            <img
              src={images[1]}
              alt="Endüstriyel makine detayı"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-white border-2 border-green-100 hover:border-green-300 rounded-3xl p-8 lg:p-10 relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
          >
            {/* Animated gradient background */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-green-50 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-500" />
            
            <motion.div 
              className="text-white mb-6 relative z-10"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl shadow-lg">
                {approachItems[2].icon}
              </div>
            </motion.div>
            <h4 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 relative z-10 group-hover:text-green-600 transition-colors">
              {approachItems[2].title}
            </h4>
            <p className="text-gray-700 leading-relaxed relative z-10">
              {approachItems[2].description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden rounded-3xl shadow-xl group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
            <img
              src={images[2]}
              alt="Modern tarım teknolojisi"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
