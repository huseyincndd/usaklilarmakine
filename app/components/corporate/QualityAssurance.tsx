"use client";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "./motion";
import { useState } from "react";

export default function QualityAssurance() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const items = [
    {
      title: "Dayanıklılık",
      desc: "Ağır saha koşullarında uzun ömürlü performans için tasarlanır.",
      percent: 98,
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Verimlilik",
      desc: "Zaman ve maliyet tasarrufu sağlayan yalın çözümler sunar.",
      percent: 95,
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      title: "Uygunluk",
      desc: "Gerçek kullanıcı ihtiyaçlarına uygun, kolay bakım ve kullanım.",
      percent: 97,
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section className="relative bg-gray-900 overflow-hidden" onMouseMove={handleMouseMove}>
      <div
        className="absolute inset-0 bg-center bg-cover opacity-10"
        style={{
          backgroundImage:
            'url(/tornodo2.png)',
        }}
      />

      <div
        className="pointer-events-none absolute w-96 h-96 rounded-full bg-green-500/30 blur-3xl transition-all duration-300 ease-out"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={stagger}>
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">Kalite ve Güvence</h2>
            <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
              Her makinemiz; malzeme kalitesi, üretim standardı ve sahada kanıtlanmış testlerle güvence altına alınır.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {items.map((i, idx) => (
              <motion.div
                key={i.title}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, rotateY: 5, z: 30 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative group cursor-pointer"
                style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
              >
                <div className="relative rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 p-8 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="text-green-400 mb-4">{i.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors">
                      {i.title}
                    </h3>
                    <p className="text-gray-300 mb-6">{i.desc}</p>

                    <div className="relative w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${i.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: idx * 0.2, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full relative"
                      >
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg" />
                      </motion.div>
                    </div>
                    <div className="mt-2 text-right">
                      <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: idx * 0.2 + 1 }}
                        className="text-green-400 font-bold text-sm"
                      >
                        {i.percent}%
                      </motion.span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeInUp}
            className="mt-16 text-center bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-3">ISO Sertifikalı Üretim</h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Tüm üretim süreçlerimiz uluslararası kalite standartlarına uygun olarak gerçekleştirilir. Müşteri
              memnuniyeti ve ürün kalitesi, önceliklerimizin başında gelir.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
