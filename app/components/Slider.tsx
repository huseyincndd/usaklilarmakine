'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: 'https://static.wixstatic.com/media/f34943_bd0dc73a4ebc4bcc836bc141d00ba737~mv2.jpg/v1/fill/w_1800,h_797,al_c,q_85,enc_avif,quality_auto/f34943_bd0dc73a4ebc4bcc836bc141d00ba737~mv2.jpg',
      title: 'Profesyoneller İçin Yarının Makinelerini Tasarlıyoruz',
      subtitle: 'Tarımda yenilikçi teknolojilerle geleceği şekillendiriyoruz'
    },
    {
      id: 2,
      image: '/tornodo2.png',
      title: 'Kaliteli Üretim, Güvenilir Çözümler',
      subtitle: 'Modern tarım makineleri ile verimliliğinizi artırın'
    },
    {
      id: 3,
      image: 'https://static.wixstatic.com/media/f34943_bd0dc73a4ebc4bcc836bc141d00ba737~mv2.jpg/v1/fill/w_1800,h_797,al_c,q_85,enc_avif,quality_auto/f34943_bd0dc73a4ebc4bcc836bc141d00ba737~mv2.jpg',
      title: 'Türkiye\'den Dünyaya Uzanan Teknoloji',
      subtitle: 'Yerli üretim, uluslararası standartlar'
    },
    {
      id: 4,
      image: 'https://static.wixstatic.com/media/f34943_3e57cf6945934ff6ba7628b519d27652~mv2.jpg/v1/fill/w_1800,h_797,al_c,q_85,enc_avif,quality_auto/f34943_3e57cf6945934ff6ba7628b519d27652~mv2.jpg',
      title: 'Sürdürülebilir Tarım İçin Yenilikçi Çözümler',
      subtitle: 'Çevre dostu teknolojilerle doğaya saygılı üretim'
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[850px] overflow-hidden mt-20">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />
          
          {/* Text Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4 max-w-4xl">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-4 leading-tight">
                {slide.title}
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-light opacity-90">
                {slide.subtitle}
              </p>
            </div>
          </div>
        </div>
      ))}


      {/* Dots Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white w-6 sm:w-8'
                : 'bg-white/50 hover:bg-white/75 w-2 sm:w-3'
            }`}
            aria-label={`Slayt ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

