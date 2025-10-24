'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function TechnicalSpecs() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const specifications = [
    {
      label: "Elek Seçenekleri",
      value: "Ø125mm, Ø100mm, Ø70mm, Ø60mm, Ø50mm, Ø40mm",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      )
    },
    {
      label: "Kapasite",
      value: "7-8 ton/saate kadar (Ø125mm elek ile)",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      label: "Motor Gücü",
      value: "55kW Elektrik Motoru",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      label: "Rotor Hızı",
      value: "2000 RPM",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
    {
      label: "Çekiç Sayısı",
      value: "48 adet Hardox Çekiç",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      label: "Özellik",
      value: "Değiştirilebilir Elek Sistemi",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    }
  ];

  const usageAreas = [
    { name: "Kanatlı Altlık" },
    { name: "Sağmal Rasyonlarında" },
    { name: "Besi Rasyonlarında" },
    { name: "Biyogaz & Biyokütle" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Teknik Özellikler
          </h2>
          <div className="h-1 w-24 bg-gray-800 rounded-full mx-auto"></div>
        </div>

        {/* Grid Layout */}
        <div className="space-y-12">
          {/* Row 1: 3 Specifications */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {specifications.slice(0, 3).map((spec, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-white">
                    {spec.icon}
                  </div>
                  <div className="flex-1">
                    <h5 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      {spec.label}
                    </h5>
                    <p className="text-base font-bold text-gray-900 leading-snug">
                      {spec.value}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: Video (full width) */}
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-xl">
              {!isPlaying ? (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
                  <div className="text-center">
                    <div 
                      className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-white/20 transition-all duration-300 cursor-pointer border-2 border-white/20" 
                      onClick={handlePlayPause}
                    >
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              ) : (
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/hrrOUP54GXE?autoplay=1&mute=0&controls=0&showinfo=0&rel=0&loop=1&playlist=hrrOUP54GXE&modestbranding=1&fs=0&cc_load_policy=0&iv_load_policy=3&disablekb=1&start=0&end=15&enablejsapi=0&origin=https://youtube.com"
                  title="Tornado 55 Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>

          {/* Row 3: 3 Specifications */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {specifications.slice(3).map((spec, index) => (
              <div 
                key={index + 3}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-white">
                    {spec.icon}
                  </div>
                  <div className="flex-1">
                    <h5 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      {spec.label}
                    </h5>
                    <p className="text-base font-bold text-gray-900 leading-snug">
                      {spec.value}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 4: Technical Drawing (full width) */}
          <div className="relative w-full">
            <div className="bg-gray-50 rounded-lg p-6 shadow-lg">
              <Image
                src="/image.png"
                alt="Tornado 55 Technical Drawing"
                width={1200}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Usage Areas */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-12 text-white mt-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Kullanım Alanları</h3>
              <div className="h-1 w-16 bg-white rounded-full mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {usageAreas.map((area, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-sm">{area.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
