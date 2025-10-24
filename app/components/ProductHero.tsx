import Image from 'next/image';

export default function ProductHero() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <Image
              src="/image-Photoroom.png"
              alt="Tornado 55 - Yem Öğütme Makinesi"
              width={1000}
              height={750}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="bg-gray-800 text-white px-4 py-2 rounded text-sm font-semibold uppercase tracking-wider">
                Bayrak Ürün
              </span>
            </div>
            
            <h2 className="text-5xl font-bold text-gray-900 leading-tight">
              Tornado 55
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Yem Öğütme ve Boyutlandırma Makinesi
            </p>

            <div className="h-1 w-24 bg-gray-800 rounded-full"></div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Tornado 55, <strong>2000rpm rotor hızı</strong>, <strong>55kW elektrik motoru</strong> ve 
              <strong> 48 adet Hardox çekiç</strong> sayesinde saman, yonca, mısır sapı gibi kaba 
              yem malzemelerini parçalar. Elek yardımı ile sürekli ve homojen olarak malzemeyi 
              boyutlandırır.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-gray-800">
                <div className="text-3xl font-bold text-gray-900">2000</div>
                <div className="text-sm text-gray-600 uppercase">RPM Rotor Hızı</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-gray-800">
                <div className="text-3xl font-bold text-gray-900">55kW</div>
                <div className="text-sm text-gray-600 uppercase">Elektrik Motoru</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-gray-800">
                <div className="text-3xl font-bold text-gray-900">48</div>
                <div className="text-sm text-gray-600 uppercase">Hardox Çekiç</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-gray-800">
                <div className="text-3xl font-bold text-gray-900">7-8</div>
                <div className="text-sm text-gray-600 uppercase">Ton/Saat</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

