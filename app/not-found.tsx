'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    // 3 saniye sonra ana sayfaya yönlendir
    const timer = setTimeout(() => {
      router.push('/');
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50/30 to-white flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-4 pt-32 pb-20">
        <div className="text-center max-w-2xl mx-auto">
          {/* Animated Welcome Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight"
            >
              <span className="bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
                Siteye Hoşgeldiniz
              </span>
            </motion.h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 mb-12 font-light"
          >
            Ana sayfaya yönlendiriliyorsunuz...
          </motion.p>

          {/* Animated Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              onClick={() => router.push('/')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-green-700 text-white rounded-lg text-lg font-medium hover:bg-green-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Ana Sayfaya Dön</span>
              <motion.svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ x: [0, 5, 0] }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </motion.svg>
            </motion.button>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 relative"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 bg-green-200/20 rounded-full blur-3xl"></div>
            </div>
            <div className="relative">
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="w-32 h-32 mx-auto border-4 border-green-300/30 rounded-full"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

