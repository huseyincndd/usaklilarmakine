"use client";
import { motion } from "framer-motion";

export default function ValuesStrip() {
  const items = [
    { 
      t: "Yenilikçilik", 
      d: "Sürekli gelişim ve AR-GE", 
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    { 
      t: "Dayanıklılık", 
      d: "Uzun ömür, düşük bakım", 
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    { 
      t: "Verimlilik", 
      d: "Zaman ve maliyet kazanımı", 
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    { 
      t: "Kullanıcı Odaklılık", 
      d: "Gerçek ihtiyaçlara çözüm", 
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
  ];

  const duplicatedItems = [...items, ...items, ...items];

  return (
    <section className="bg-gradient-to-r from-gray-900 via-green-900 to-gray-900 relative overflow-hidden py-16">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#22c55e10_1px,transparent_1px),linear-gradient(to_bottom,#22c55e10_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative flex overflow-hidden">
        <motion.div
          animate={{
            x: [0, -1920],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          className="flex gap-6 px-6"
        >
          {duplicatedItems.map((it, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.1, rotateZ: 3 }}
              className="relative min-w-[280px] rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 p-6 group cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-500/20 rounded-full blur-2xl group-hover:bg-green-400/40 transition-all duration-500" />

              <div className="relative z-10">
                <div className="text-green-400 mb-3">{it.icon}</div>
                <div className="text-lg font-bold text-white mb-1 group-hover:text-green-300 transition-colors">
                  {it.t}
                </div>
                <div className="text-sm text-gray-300">{it.d}</div>
              </div>

              <div className="absolute inset-0 border-2 border-green-400/0 group-hover:border-green-400/50 rounded-2xl transition-all duration-500" style={{ boxShadow: "0 0 20px rgba(34, 197, 94, 0)" }} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="mt-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-gray-300 text-sm tracking-wider uppercase"
        >
          • Değerlerimiz •
        </motion.p>
      </div>
    </section>
  );
}
