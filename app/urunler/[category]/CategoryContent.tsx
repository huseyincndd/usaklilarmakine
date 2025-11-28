'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import type { Category } from '../../data/products';

export default function CategoryContent({ category }: { category: Category }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Mini Hero with Breadcrumb */}
        <section className="bg-gradient-to-br from-green-50 via-emerald-50/30 to-white py-16 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="category-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="1.5" fill="#22c55e"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#category-pattern)" />
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-sm mb-8"
            >
              <Link href="/" className="text-gray-500 hover:text-green-600 transition-colors">
                Ana Sayfa
              </Link>
              <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <Link href="/urunler" className="text-gray-500 hover:text-green-600 transition-colors">
                Ürünler
              </Link>
              <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-green-600 font-semibold">{category.name}</span>
            </motion.nav>

            {/* Category Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {category.isFlagship && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="inline-block mb-4"
                >
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-xl text-xs font-bold uppercase shadow-lg inline-flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Bayrak Ürün
                  </span>
                </motion.div>
              )}

              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  {category.name}
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl">
                {category.description}
              </p>
              <div className="h-1.5 w-32 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-6" />
            </motion.div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-24 bg-white relative overflow-hidden">
          {/* Subtle Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-50/10 to-transparent" />

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.products.map((product, index) => {
                // İlk 6 kart (ilk 2 satır) için animate, geri kalan için whileInView
                const isFirstRow = index < 6;
                
                return (
                <motion.article
                  key={product.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isFirstRow && isMounted ? { opacity: 1, y: 0 } : {}}
                  whileInView={!isFirstRow ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={!isFirstRow ? { once: true, margin: "-100px" } : {}}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-green-100 hover:border-green-300 h-full flex flex-col">
                    {/* Product Image */}
                    <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-50 to-green-50/30">
                      {/* Resim yok placeholder - Sıvı Gübre Tankeri ve Katı Gübre Serpme Römorku için */}
                      {(category.slug === 'sivi-gubre-tankeri' || category.slug === 'kati-gubre-serpme-romorku') ? (
                        <>
                          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                            <div className="text-center p-6">
                              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              <p className="text-gray-500 font-semibold text-sm">Resim Yok</p>
                            </div>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                        </>
                      ) : (
                        <>
                          <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                            style={{ backgroundImage: `url(${product.image})` }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                          
                          {/* Hover Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-emerald-500/0 group-hover:from-green-500/10 group-hover:to-emerald-500/10 transition-all duration-500" />
                        </>
                      )}
                    </div>

                    {/* Product Info */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                        {product.name}
                      </h3>

                      {product.description && (
                        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                          {product.description}
                        </p>
                      )}

                      {/* Specs List */}
                      <div className="space-y-2 mb-6 flex-1">
                        {product.specs.slice(0, 4).map((spec, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isFirstRow && isMounted ? { opacity: 1, x: 0 } : {}}
                            whileInView={!isFirstRow ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.4, delay: index * 0.1 + 0.6 + idx * 0.05 }}
                            viewport={!isFirstRow ? { once: true, margin: "-50px" } : {}}
                            className="flex items-start gap-2"
                          >
                            <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-gray-700 text-sm">{spec}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      {category.slug === 'tornado-55' ? (
                        <Link href="/urunler/tornado-55" className="block">
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
                          >
                            <span>Detaylı Bilgi</span>
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </motion.button>
                        </Link>
                      ) : (
                        <Link href="/iletisim" className="block">
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-white border-2 border-green-500 text-green-600 py-3 px-6 rounded-xl font-semibold hover:bg-green-50 transition-all flex items-center justify-center gap-2 group"
                          >
                            <span>Fiyat Teklifi Al</span>
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </motion.button>
                        </Link>
                      )}
                    </div>

                    {/* Corner Decoration */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </motion.article>
              );
              })}
            </div>

            {/* Empty State (if no products) */}
            {category.products.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Ürünler Yakında</h3>
                <p className="text-gray-600">Bu kategorideki ürünler çok yakında eklenecek.</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full -ml-40 -mb-40" />
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center text-white"
            >
              <h2 className="text-4xl font-bold mb-6">
                Ürünlerimiz Hakkında Daha Fazla Bilgi İster misiniz?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Size en uygun ürünü seçmenizde yardımcı olmak için buradayız
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/iletisim">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white text-green-600 font-semibold rounded-xl hover:bg-gray-50 transition-all shadow-lg"
                  >
                    İletişime Geç
                  </motion.button>
                </Link>
                <Link href="/urunler">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-xl hover:bg-white/20 transition-all border-2 border-white/30"
                  >
                    Diğer Ürünler
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

