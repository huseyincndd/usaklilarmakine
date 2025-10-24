import Image from 'next/image';

export default function AboutUs() {
  return (
    <section className="py-20 bg-white h-[80vh] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Content */}
          <div className="space-y-8 flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              Biz Kimiz?
            </h2>
            
            <div className="h-1 w-20 bg-gray-800 rounded-full"></div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-base">
                Uşaklılar Makine, geçmişinden aldığı ilham ve cesaretle geleceğin tarım 
                dünyasına yön veren, yalnızca "Profesyonellerin Tercihi" olabilecek 
                makineler üreten, lider ruhlu bir markadır. Türkiye genelinde Uşaklılar 
                Makine'nin izlerini bulabilir, sektörün çıtasını nasıl yükselttiğimizi 
                yakından görebilirsiniz.
              </p>

              <p className="text-base">
                Biz, kuralları koyan bir ekip olarak, takım oyununu kendi tarımızda 
                oynarız. Üretim tesislerimizden çıkan her ürün, bu büyük oyunun bir 
                parçasıdır. Sınırları zorlayan yenilikçi ruhumuzla çalışanlarımız, 
                sektöre değer katan çözümler sunma motivasyonuyla durmadan ilerler. 
                Çünkü biz, sadece makine üretmekle kalmaz; geleceği şekillendiririz.
              </p>
            </div>

            <div className="pt-6">
              <button className="bg-gray-800 text-white px-8 py-3 rounded hover:bg-gray-900 transition-colors duration-300 uppercase tracking-wider text-sm font-semibold">
                Hakkımızda
              </button>
            </div>
          </div>

          {/* Image - Absolute positioned at bottom */}
          <div className="relative lg:absolute lg:bottom-0 lg:right-0 lg:w-1/2 lg:h-full">
            <div className="absolute bottom-0 right-0 w-full">
              <Image
                src="https://static.wixstatic.com/media/f34943_807cfe94927e467cbfde62f9fb155c26~mv2.png/v1/fill/w_820,h_725,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/BIZ%20KIMIZ%20GORSEL.png"
                alt="Biz Kimiz"
                width={800}
                height={700}
                className="w-4/5 h-auto ml-4 -mb-8"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

