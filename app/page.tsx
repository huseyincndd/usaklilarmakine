import type { Metadata } from "next";
import Header from './components/Header';
import Slider from './components/Slider';
import SloganSlider from './components/SloganSlider';
import AboutUs from './components/AboutUs';
import ProductHero from './components/ProductHero';
import TechnicalSpecs from './components/TechnicalSpecs';
import ProductFeatures from './components/ProductFeatures';
import AboutSection from './components/Aboutsection';
import ApproachSection from './components/ApproachSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: "Ana Sayfa",
  description: "ATK Uşaklılar Makine - 20+ yıllık deneyim ile tarım ve hayvancılık sektörüne özel, yüksek kaliteli ve dayanıklı makine çözümleri. Balya makineleri, diskaro, pulluk, kültivatör ve daha fazlası.",
  openGraph: {
    title: 'ATK Uşaklılar Makine | Tarım Makineleri Üreticisi',
    description: 'ATK Uşaklılar Makine - 20+ yıllık deneyim ile tarım ve hayvancılık sektörüne özel, yüksek kaliteli ve dayanıklı makine çözümleri.',
    url: 'https://www.usaklilarmakine.com',
    images: [
      {
        url: '/image.png',
        width: 1200,
        height: 630,
        alt: 'ATK Uşaklılar Makine',
      }
    ],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Slider />
      <SloganSlider />
      <AboutSection />
      <ApproachSection />
      <ProductHero />
      <TechnicalSpecs />
      <ProductFeatures />
      <FAQSection />
      <Footer />
    </div>
  );
}
