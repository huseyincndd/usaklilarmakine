"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Milestones() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const items = [
    { 
      year: "2015", 
      text: "ATK markasının temelleri ve ilk prototipler",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    { 
      year: "2018", 
      text: "Saha testleri ve seri üretime geçiş",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    { 
      year: "2021", 
      text: "Ürün gamında verim ve dayanıklılık odaklı yenilemeler",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    { 
      year: "2024", 
      text: "Yeni nesil kontrol ve ergonomi iyileştirmeleri",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
  ];

  return (
    <section ref={sectionRef} className="bg-white relative overflow-hidden py-20 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-blue-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-4">Dönüm Noktaları</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Yolculuğumuzun önemli kilometre taşları</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2 hidden md:block">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-green-500 to-emerald-500 origin-top"
            />
          </div>

          <div className="space-y-12 md:space-y-24">
            {items.map((item, idx) => {
              const isLeft = idx % 2 === 0;

              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="relative grid md:grid-cols-2 gap-8 items-center"
                >
                  {isLeft ? (
                    <>
                      <motion.div
                        whileHover={{ scale: 1.02, x: -10 }}
                        className="md:text-right"
                      >
                        <div className="inline-block md:block">
                          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 relative overflow-hidden group cursor-pointer">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative z-10">
                              <div className="flex items-center gap-3 mb-3 md:justify-end">
                                <div className="text-green-600">{item.icon}</div>
                                <span className="text-3xl font-bold text-green-600">{item.year}</span>
                              </div>
                              <p className="text-gray-700 text-lg">{item.text}</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      <div className="hidden md:flex items-center justify-center">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: idx * 0.1 + 0.3 }}
                          className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg relative z-10"
                        >
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-4 h-4 rounded-full bg-white"
                          />
                        </motion.div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="hidden md:flex items-center justify-center">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: idx * 0.1 + 0.3 }}
                          className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg relative z-10"
                        >
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-4 h-4 rounded-full bg-white"
                          />
                        </motion.div>
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.02, x: 10 }}
                        className="md:text-left"
                      >
                        <div className="inline-block md:block">
                          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 relative overflow-hidden group cursor-pointer">
                            <div className="absolute top-0 left-0 w-32 h-32 bg-green-100 rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative z-10">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="text-green-600">{item.icon}</div>
                                <span className="text-3xl font-bold text-green-600">{item.year}</span>
                              </div>
                              <p className="text-gray-700 text-lg">{item.text}</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
