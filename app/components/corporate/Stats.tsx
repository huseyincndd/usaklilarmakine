"use client";
import { motion } from "framer-motion";
import { fadeInUp, stagger, useCountUp } from "./motion";
import { useState } from "react";

function CircularProgress({ value, label, delay }: { value: number; label: string; delay: number }) {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const countedValue = useCountUp(value, 1500);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05, rotateY: 10 }}
      className="flex flex-col items-center group cursor-pointer"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="relative w-48 h-48">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="96"
            cy="96"
            r={radius}
            fill="none"
            stroke="rgba(229, 231, 235, 0.3)"
            strokeWidth="12"
          />
          <motion.circle
            cx="96"
            cy="96"
            r={radius}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="12"
            strokeLinecap="round"
            initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
            whileInView={{
              strokeDashoffset: circumference - (value / 100) * circumference,
            }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay, ease: "easeOut" }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22c55e" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            {countedValue}%
          </motion.span>
        </div>
      </div>

      <p className="mt-4 text-gray-700 font-semibold text-center group-hover:text-green-600 transition-colors">
        {label}
      </p>
    </motion.div>
  );
}

export default function Stats() {
  const [flipped, setFlipped] = useState<number | null>(null);

  const stats = [
    { label: "Müşteri Memnuniyeti", value: 98 },
    { label: "Ürün Dayanıklılığı", value: 95 },
    { label: "Verimlilik Artışı", value: 92 },
    { label: "Servis Kalitesi", value: 97 },
  ];

  const cardStats = [
    { front: "+10 Yıl", back: "Deneyim", icon: "📅" },
    { front: "+120", back: "Proje", icon: "⚙️" },
    { front: "+6 Ülke", back: "İhracat", icon: "🌍" },
    { front: "%98", back: "Memnuniyet", icon: "⭐" },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 relative overflow-hidden py-20 lg:py-32">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
        <div className="absolute top-1/3 right-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Rakamlarla ATK
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-2xl mx-auto">
            Müşteri memnuniyeti ve kalite odaklı çalışmalarımızın sonuçları
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, idx) => (
            <CircularProgress key={stat.label} value={stat.value} label={stat.label} delay={idx * 0.15} />
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {cardStats.map((stat, idx) => (
            <motion.div
              key={stat.front}
              variants={fadeInUp}
              onMouseEnter={() => setFlipped(idx)}
              onMouseLeave={() => setFlipped(null)}
              className="relative h-40 cursor-pointer"
              style={{ perspective: "1000px" }}
            >
              <motion.div
                animate={{ rotateY: flipped === idx ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                className="w-full h-full relative"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 p-6 flex flex-col items-center justify-center shadow-xl"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-white">{stat.front}</div>
                </div>

                <div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 flex flex-col items-center justify-center shadow-xl"
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                  <div className="text-2xl font-bold text-white">{stat.back}</div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
