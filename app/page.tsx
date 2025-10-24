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
