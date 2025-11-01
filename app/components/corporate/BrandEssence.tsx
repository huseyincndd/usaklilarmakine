"use client";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "./motion";
import { useMousePosition } from "./hooks";
import { useState } from "react";

export default function BrandEssence() {
  const mouse = useMousePosition();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const cards = [
    {
      t: "Bilgi",
      d: "Gerçek teknoloji, bilgiyle başlar.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      t: "Mühendislik",
      d: "Gerçek mühendislik, sahada sınanır.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      t: "Çözüm",
      d: "Gerçek çözüm, işin içinden gelir.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="inline-block">
            <span className="text-sm font-semibold tracking-widest text-green-600 uppercase px-4 py-2 rounded-full bg-green-50 border border-green-200">
              Marka Felsefemiz
            </span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
            ATK: Tarım Teknolojisi ve Bilgi
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Marka adımızın açılımı olan "Agriculture Technology & Knowledge", sadece ne yaptığımızı değil, nasıl
            düşündüğümüzü de yansıtır: Bilgiyle şekillenen teknoloji, sahaya inen mühendislik, verimliliğe dönüşen
            çözümler.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 perspective-1000">
          {cards.map((card, idx) => {
            const isHovered = hoveredCard === card.t;
            return (
              <motion.div
                key={card.t}
                initial={{ opacity: 0, y: 50, rotateX: 25 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
                onMouseEnter={() => setHoveredCard(card.t)}
                onMouseLeave={() => setHoveredCard(null)}
                className="relative group cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotateY: 10, z: 30 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative rounded-2xl bg-white p-8 shadow-xl border border-gray-100 overflow-hidden"
                  style={{
                    transformStyle: "preserve-3d",
                    background: isHovered
                      ? "linear-gradient(135deg, rgba(34, 197, 94, 0.05) 0%, rgba(255, 255, 255, 1) 100%)"
                      : "white",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-green-500 to-emerald-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                  <div className="relative z-10">
                    <motion.div
                      animate={isHovered ? { rotate: 360, scale: 1.1 } : { rotate: 0, scale: 1 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-green-400 to-green-600 text-white shadow-lg mb-4"
                    >
                      {card.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                      {card.t}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{card.d}</p>
                  </div>

                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-green-100 to-transparent rounded-tl-full opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 relative rounded-3xl overflow-hidden shadow-2xl h-96"
        >
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{
              backgroundImage:
                'url(https://www.corkfarmmachinery.ie/wp-content/uploads/2023/12/FC9330RA_WORK_AERIAL_MF-5-1.jpg)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          <div className="absolute inset-0 flex items-end p-8 lg:p-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="max-w-2xl"
            >
              <h3 className="text-3xl font-bold text-white mb-3">Mühendislikten Gelen Güç</h3>
              <p className="text-gray-200 text-lg">
                Sahadaki gerçek ihtiyaçları anlayarak, yenilikçi çözümler üretiyoruz. Her proje, bilgi birikimimizin ve
                teknik uzmanlığımızın bir yansıması.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
