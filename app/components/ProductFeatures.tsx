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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Benefits */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Tornado 55'in Sağladığı Avantajlar
          </h3>
          <div className="h-1 w-24 bg-gray-800 rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {mainBenefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center text-white mb-6">
                {benefit.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Detailed Advantages */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-12 text-white">
          <h4 className="text-3xl font-bold mb-12 text-center">
            Detaylı Avantajlar
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {detailedAdvantages.map((advantage, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h5 className="text-lg font-semibold mb-2 text-white">
                      {advantage.title}
                    </h5>
                    <p className="text-gray-300 leading-relaxed text-sm">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

