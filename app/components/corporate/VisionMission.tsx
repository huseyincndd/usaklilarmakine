"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { fadeInUp, stagger } from "./motion";
import { useState } from "react";

export default function VisionMission() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouseX(e.clientX - rect.left);
    setMouseY(e.clientY - rect.top);
  };

  return (
    <section className="bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(34, 197, 94, 0.05)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="grid lg:grid-cols-12 gap-8"
        >
          <motion.div
            variants={fadeInUp}
            onMouseMove={handleMouseMove}
            className="lg:col-span-7 order-2 lg:order-1 relative rounded-3xl overflow-hidden shadow-2xl h-[600px] group cursor-pointer"
          >
            <div
              className="absolute inset-0 bg-center bg-cover transition-transform duration-700 group-hover:scale-110"
            style={{
              backgroundImage:
                'url(https://ik.imagekit.io/efarm/website/combine_harvesting_in_sunset_4ff3ab43db.jpg?tr=w-1600)',
              transform: `translate(${mouseX * 0.02}px, ${mouseY * 0.02}px)`,
            }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-green-900/40 via-transparent to-black/60" />

            <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6"
              >
                <h3 className="text-2xl font-bold text-white mb-2">Sahada, Gerçek Koşullarda</h3>
                <p className="text-gray-200">
                  Her makinemiz, gerçek tarım ve hayvancılık koşullarında test edilerek geliştirilir.
                </p>
              </motion.div>
            </div>

            <div className="absolute top-8 right-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-20 h-20 rounded-full border-4 border-white/30 border-t-white flex items-center justify-center backdrop-blur"
              >
                <span className="text-white font-bold">ATK</span>
              </motion.div>
            </div>
          </motion.div>

          <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
            {[
              {
                tag: "Vizyonumuz",
                title: "Lider Marka Olmak",
                desc: "Hayvancılık ve tarım makineleri sektöründe yenilikçi, dayanıklı ve verimli çözümler sunarak çiftçilerin ve işletmelerin üretkenliğini artıran lider bir marka olmak.",
                color: "from-blue-500 to-cyan-500",
              },
              {
                tag: "Misyonumuz",
                title: "Verimlilik Sağlamak",
                desc: "Çiftçilerin işlerini kolaylaştırmak, zaman ve maliyet tasarrufu sağlamak için yenilikçi ve dayanıklı makineler üretmek. Müşterilerimize en yüksek verimi sunan çözümlerle sürdürülebilir ve kârlı tarımın öncüsü olmak.",
                color: "from-green-500 to-emerald-500",
              },
            ].map((item, idx) => (
              <motion.div
                key={item.tag}
                initial={{ opacity: 0, x: 50, rotateY: -15 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.2, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.02, x: -5 }}
                className="relative group cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500" />

                <div className="relative rounded-2xl bg-white border border-gray-200 p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-10 rounded-bl-full`}
                  />

                  <div className="relative z-10">
                    <span
                      className={`inline-block text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-gradient-to-r ${item.color} text-white mb-4`}
                    >
                      {item.tag}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>

                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-green-400 to-emerald-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: idx * 0.2 + 0.5 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
