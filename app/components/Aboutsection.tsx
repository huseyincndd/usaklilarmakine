"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// --- İkonlar ---
const PhoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// --- Ana Bileşen ---
const AboutSection = ({ noBg = false }: { noBg?: boolean }) => {
  return (
    <section className={`relative py-8 lg:py-16 ${noBg ? 'bg-transparent' : 'bg-white'} overflow-hidden`}>
      {/* Unified Background Elements */}
      {!noBg && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-white" />
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              viewport={{ once: true }}
            />
            <motion.div
              className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
              viewport={{ once: true }}
            />
          </div>
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-1/3 left-1/4 w-32 h-32 bg-emerald-200/30 rounded-full blur-2xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-emerald-200/30 rounded-full blur-2xl"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </div>
        </>
      )}

      <div className="container mx-auto px-4 lg:px-8 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Sol Taraf - Görsel Alanı */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[700px] order-2 lg:order-1">
            {/* Top-Left Pattern Panel */}
            <motion.div
              className="absolute top-4 left-4 lg:top-10 lg:left-0 w-20 h-20 sm:w-24 sm:h-24 lg:w-48 lg:h-48 bg-emerald-100/50 rounded-2xl z-20 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-0.5 sm:gap-1">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-10 text-emerald-700 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-2 h-2 sm:w-3 sm:h-3 lg:w-6 lg:h-6">
                      <path d="M19 5L5 19M5 5L19 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Rear Image Panel (Top-Right - Background Layer) */}
            <motion.div
              className="absolute top-2 right-2 sm:top-4 sm:right-4 lg:top-8 lg:right-8 w-[65%] h-[50%] sm:w-[70%] sm:h-[55%] lg:w-[70%] lg:h-[55%] rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl z-10"
              initial={{ opacity: 0, x: 100, y: -50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <img 
                src="https://www.rosta.com/ro-wAssets/img/agriculture-machinery/timber-and-agriculture.png" 
                alt="Modern tarım makineleri üretim süreci" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Front Image Panel (Bottom-Left - Foreground Layer) */}
            <motion.div
              className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 lg:bottom-8 lg:left-8 w-[70%] h-[55%] sm:w-[75%] sm:h-[60%] lg:w-[75%] lg:h-[60%] rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl z-30"
              initial={{ opacity: 0, x: -100, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <img 
                src="https://cdn.britannica.com/50/202950-050-DFF457E3/Farm-tractor-pesticides-crops.jpg" 
                alt="Endüstriyel tarım makinesi detayı" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Sağ Taraf - Metin İçeriği */}
          <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
            {/* Ana Başlık */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight"
            >
              Teknoloji ve kaliteyle{" "}
              <span className="text-emerald-700">her makineyi mükemmelleştiriyoruz.</span>
            </motion.h2>

            {/* Açıklama */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-base sm:text-base text-gray-700 leading-relaxed max-w-lg"
            >
              Uşaklılar Makine, 20 yılı aşkın deneyimiyle tarım makineleri sektöründe özgün, yenilikçi ve yüksek kaliteli ürünler sunan öncü bir makine üreticisidir. Kurulduğu günden bu yana, teknolojik mükemmeliyet ve kaliteden ödün vermeden her projeye değer katıyoruz.
            </motion.p>

            {/* Özellikler Listesi */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 text-sm">Kapsamlı üretim süreci: Tasarımdan üretim ve kalite kontrolüne, teslimata kadar tüm aşamalarda aktif rol alıyoruz.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 text-sm">Her yerde güvenilir hizmet: Türkiye'nin 81 ilinde ve uluslararası pazarlarda makineleri titizlikle üretiyoruz.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 text-sm">Teknoloji ve vizyon: Modern teknolojiyi yenilikçi yaklaşımlarla birleştirerek çiftçilere unutulmaz deneyimler sunuyoruz.</p>
              </div>
            </motion.div>

            {/* Vurgu Satırı */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-800 text-sm sm:text-base font-semibold">20+ Yıllık Deneyim | Global Etki ve Güvenilir Makineler</p>
            </motion.div>

            {/* İstatistikler */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6 pt-6"
            >
              <div className="text-center">
                <div className="text-2xl lg:text-2xl font-bold text-gray-900 mb-1">20+</div>
                <p className="text-gray-600 text-sm">Yıllık Deneyim</p>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-2xl font-bold text-gray-900 mb-1">81</div>
                <p className="text-gray-600 text-sm">İlde Hizmet</p>
              </div>
            </motion.div>

            {/* Kapanış Paragrafı */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
              className="text-gray-700 text-sm leading-relaxed max-w-xl"
            >
              Uşaklılar Makine olarak, her makineyi sadece üretmekle kalmıyor, çiftçilere dokunan, kalıcı ve verimli bir deneyim yaratmayı misyon ediniyoruz. Ulusal ve uluslararası alanda yürüttüğümüz çalışmalarla, sektörde güvenilir ve saygın bir lider konumundayız.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;