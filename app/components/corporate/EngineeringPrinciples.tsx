"use client";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "./motion";
import { useEffect, useRef, useState } from "react";

export default function EngineeringPrinciples() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const items = [
    {
      title: "Gerçek teknoloji",
      highlight: "bilgiyle başlar",
      body: "Ürün geliştirme yaklaşımımız araştırma, veri ve kullanıcı içgörülerine dayanır.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
    },
    {
      title: "Gerçek mühendislik",
      highlight: "sahada sınanır",
      body: "Her prototip ve iyileştirme, gerçek kullanım koşullarında test edilir.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: "Gerçek çözüm",
      highlight: "işin içinden gelir",
      body: "Makine tasarımlarını, çiftçilerin günlük operasyonlarına somut katkı sağlayacak şekilde kurgularız.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const points = items.map((_, i) => {
      const angle = (i / items.length) * Math.PI * 2 - Math.PI / 2;
      const radius = Math.min(canvas.width, canvas.height) * 0.25;
      return {
        x: canvas.width / 2 + Math.cos(angle) * radius,
        y: canvas.height / 2 + Math.sin(angle) * radius,
      };
    });

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "rgba(34, 197, 94, 0.15)";
      ctx.lineWidth = 2;

      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          ctx.beginPath();
          ctx.moveTo(points[i].x, points[i].y);
          ctx.lineTo(points[j].x, points[j].y);
          ctx.stroke();
        }
      }

      if (hoveredIndex !== null) {
        ctx.strokeStyle = "rgba(34, 197, 94, 0.4)";
        ctx.lineWidth = 3;
        for (let i = 0; i < points.length; i++) {
          if (i !== hoveredIndex) {
            ctx.beginPath();
            ctx.moveTo(points[hoveredIndex].x, points[hoveredIndex].y);
            ctx.lineTo(points[i].x, points[i].y);
            ctx.stroke();
          }
        }
      }
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [hoveredIndex, items.length]);

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-50 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
            Mühendislik İlkelerimiz
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Her adımda, bilgi ve deneyimin gücüyle hareket ediyoruz
          </motion.p>
        </motion.div>

        <div className="relative">
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-8 relative z-10"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ scale: 1.05, rotateZ: 2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative group cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-3xl blur opacity-0 group-hover:opacity-40 transition duration-500" />

                <div className="relative clip-hexagon-wrapper">
                  <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 hover:border-green-200 transition-all duration-500">
                    <div className="text-green-600 mb-4">{item.icon}</div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}{" "}
                      <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                        {item.highlight}
                      </span>
                    </h3>

                    <p className="text-gray-600 leading-relaxed">{item.body}</p>

                    <div className="mt-6 flex items-center text-green-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span>Daha Fazla</span>
                      <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </div>

                <motion.div
                  className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
                  animate={hoveredIndex === idx ? { scale: [1, 1.2, 1], rotate: 360 } : {}}
                  transition={{ duration: 0.6 }}
                >
                  {idx + 1}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
