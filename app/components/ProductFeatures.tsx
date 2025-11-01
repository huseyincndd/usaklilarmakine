'use client';

import { motion } from 'framer-motion';

export default function ProductFeatures() {
  const mainBenefits = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Zamandan Tasarruf",
      description: "Yem hazırlama sürelerini azaltır, zamandan ve harcanan enerjiden tasarruf sağlar."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Makine Ömrü",
      description: "Yem karma sadece karma işlemi yapacağından makine ömrünü uzatır, bakım ve servis maliyetlerini azaltır."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Süt Verimine Katkı",
      description: "Homojen boyutlandırma, daha lezzetli rasyolara imkan verir. Sindirimi ve hazmı kolaylaştırır, süt verimine pozitif katkı sağlar."
    }
  ];

  const detailedAdvantages = [
    {
      title: "Muntazam, Tek Tip Parçacık Boyutu",
      description: "Yem karmaya kıyasla daha tutarlı ve tek tip parça boyutu sağlar. Bu boyutlandırma sayesinde her hayvan her lokmada tutarlı besin içeriğine sahip, dengeli yem rasyosu ile beslenerek genel sürü sağlığı ve süt performansının daha iyi olmasını sağlar."
    },
    {
      title: "Maliyet Tasarrufu",
      description: "Tornado 55 boyut küçültme için doğrudan ve uygun maliyetli bir çözüm sunar. Çiftçiler öğütücüye yatırım yaparak yem karma işletme maliyetlerinden potansiyel olarak tasarruf edebilir."
    },
    {
      title: "Yem Kalitesi",
      description: "Optimum parçacık boyutuna sahip ince öğütülmüş yem üretilebildiği için hayvanların daha sindirilebilir ve daha besleyici rasyo tüketmesini sağlar. Bu daha yüksek süt verimine, daha iyi yem tüketme oranlarına ve sürünün genel performansının artmasına yol açar."
    },
    {
      title: "Verimlilik",
      description: "Boyut küçültme için özel olarak tasarlanmış olup, aynı düzeyde öğütme kapasitesine sahip olmayan yem karmalara kıyasla yem bileşenlerini öğütmede daha verimli ve etkilidir."
    },
    {
      title: "Çok Yönlülük",
      description: "Saman, yonca, mısır sapı vb. kaba yem malzemeleri ve odun da dahil olmak üzere çok çeşitli malzemeleri işleyebilir. Bu çok yönlülük çiftçilerin yerel olarak mevcut malzemeleri kullanmasına olanak tanıyarak yem maliyetlerini ve ticari olarak satın alınan yeme bağımlılığı azaltır."
    },
    {
      title: "Atık Yönetimi",
      description: "Tarımsal kalıntıları ve diğer organik atık malzemeleri işlemek için kullanılabilir. Çiftçilerin, hayvanları için değerli yem veya yataklık malzemesi üretirken atıkları daha etkili bir şekilde yönetmelerine sebep olur."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Hexagonal pattern background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexagons" width="60" height="52" patternUnits="userSpaceOnUse" patternTransform="scale(1.5)">
              <polygon points="30,0 52,13 52,39 30,52 8,39 8,13" fill="none" stroke="#10b981" strokeWidth="1"/>
              <circle cx="30" cy="26" r="2" fill="#22c55e"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      {/* Animated diagonal lines */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-300 to-transparent"
        animate={{
          y: [0, 100, 200, 300, 400, 500],
          opacity: [0, 1, 1, 1, 1, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent"
        animate={{
          y: [0, 100, 200, 300, 400, 500],
          opacity: [0, 1, 1, 1, 1, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
          delay: 3
        }}
      />

      {/* Corner accent decorations */}
      <motion.div
        className="absolute top-10 right-10 w-24 h-24"
        animate={{
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-green-200" fill="none">
          <circle cx="50" cy="50" r="45" strokeWidth="2" strokeDasharray="5,5"/>
          <circle cx="50" cy="50" r="30" strokeWidth="1.5" strokeDasharray="3,3"/>
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-10 w-32 h-32"
        animate={{
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-emerald-200" fill="none">
          <rect x="10" y="10" width="80" height="80" strokeWidth="2" strokeDasharray="10,5"/>
          <rect x="25" y="25" width="50" height="50" strokeWidth="1.5" strokeDasharray="5,3"/>
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Benefits */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-4xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Tornado 55'in Sağladığı Avantajlar
            </span>
          </motion.h3>
          <motion.div 
            className="h-1.5 w-32 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {mainBenefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-green-100 hover:border-green-300 group cursor-pointer relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -8 }}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-green-50 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-500" />
              <motion.div 
                className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg relative z-10"
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                {benefit.icon}
              </motion.div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">
                {benefit.title}
              </h4>
              <p className="text-gray-600 leading-relaxed relative z-10">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Detailed Advantages */}
        <motion.div 
          className="bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -mr-40 -mt-40" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32" />
          
          <motion.h4 
            className="text-4xl font-bold mb-16 text-center relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Detaylı Avantajlar
          </motion.h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            {detailedAdvantages.map((advantage, index) => (
              <motion.div 
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border-2 border-white/20 hover:bg-white/15 hover:border-white/40 transition-all duration-300 cursor-pointer group"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-start space-x-4">
                  <motion.div 
                    className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mt-1 group-hover:bg-white/30 transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <div className="flex-1">
                    <h5 className="text-xl font-semibold mb-3 text-white">
                      {advantage.title}
                    </h5>
                    <p className="text-white/90 leading-relaxed text-sm">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


