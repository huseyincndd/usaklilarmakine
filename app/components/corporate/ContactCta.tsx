"use client";
import Link from "next/link";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { fadeInUp, stagger } from "./motion";
import { useRef, useState, useEffect } from "react";

interface DotPosition {
  left: number;
  top: number;
  duration: number;
  delay: number;
}

export default function ContactCta() {
  const buttonRef1 = useRef<HTMLAnchorElement>(null);
  const buttonRef2 = useRef<HTMLAnchorElement>(null);
  const [dotPositions, setDotPositions] = useState<DotPosition[]>([]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    // Rastgele pozisyonları sadece client-side'da oluştur
    setDotPositions(
      Array.from({ length: 20 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 3 + Math.random() * 2,
        delay: Math.random() * 2,
      }))
    );
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section className="relative overflow-hidden bg-gray-900" onMouseMove={handleMouseMove}>
      <div
        className="absolute inset-0 bg-center bg-cover opacity-20"
        style={{
          backgroundImage:
            'url(https://www.deere.com/assets/images/region-4/industries/agriculture/small-grains/r4f085887-rrd-1366x768.jpg)',
        }}
      />

      <div className="absolute inset-0">
        <svg className="w-full h-full">
          <defs>
            <radialGradient id="blob-gradient">
              <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
            </radialGradient>
          </defs>
          <motion.circle
            cx={useTransform(mouseX, (x) => x)}
            cy={useTransform(mouseY, (y) => y)}
            r="200"
            fill="url(#blob-gradient)"
            style={{ pointerEvents: "none" }}
          />
        </svg>
      </div>

      <div className="absolute inset-0">
        {dotPositions.map((dot, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-green-500/20 rounded-full"
            style={{
              left: `${dot.left}%`,
              top: `${dot.top}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: dot.duration,
              repeat: Infinity,
              delay: dot.delay,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-block px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-semibold backdrop-blur-sm">
                Bize Ulaşın
              </span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6"
            >
              Mühendislikten gelen güç,{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                sahada karşılığını bulur
              </span>
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-xl text-gray-300 mb-8 leading-relaxed">
              Ürünlerimizi inceleyin veya bizimle iletişime geçin. Ekibimiz size yardımcı olmaktan mutluluk duyacaktır.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Link
                ref={buttonRef1}
                href="/urunler"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <span className="relative z-10">Ürünleri Gör</span>
                <motion.svg
                  className="w-5 h-5 relative z-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>
              </Link>

              <Link
                ref={buttonRef2}
                href="/iletisim"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:border-white/50"
              >
                <span className="relative z-10">İletişime Geç</span>
                <svg className="w-5 h-5 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>

          <motion.div
            variants={fadeInUp}
            className="relative"
          >
            <div className="relative rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 p-8 lg:p-12">
              <div className="space-y-6">
              {[
                { 
                  icon: (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ), 
                  label: "Telefon", 
                  value: "+90 (xxx) xxx xx xx" 
                },
                { 
                  icon: (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ), 
                  label: "E-posta", 
                  value: "info@atk.com.tr" 
                },
                { 
                  icon: (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ), 
                  label: "Adres", 
                  value: "Aydın, Türkiye" 
                },
              ].map((item, idx) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                  >
                    <div className="text-green-400">{item.icon}</div>
                    <div>
                      <div className="text-sm text-gray-400 uppercase tracking-wider">{item.label}</div>
                      <div className="text-lg text-white font-semibold">{item.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="absolute -top-8 -right-8 w-32 h-32 bg-green-500/30 rounded-full blur-3xl" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-emerald-500/30 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
