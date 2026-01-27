import Header from "../components/Header";
import Footer from "../components/Footer";
import CorporateHero from "../components/corporate/CorporateHero";
import BrandEssence from "../components/corporate/BrandEssence";
import VisionMission from "../components/corporate/VisionMission";
import EngineeringPrinciples from "../components/corporate/EngineeringPrinciples";
import ValuesStrip from "../components/corporate/ValuesStrip";
import QualityAssurance from "../components/corporate/QualityAssurance";
import Sustainability from "../components/corporate/Sustainability";
import Milestones from "../components/corporate/Milestones";
import Stats from "../components/corporate/Stats";
import ContactCta from "../components/corporate/ContactCta";

export const metadata = {
  title: "Kurumsal | ATK – Uşaklılar Makine",
  description:
    "ATK, Uşaklılar Makine'nin mühendislik gücü ve sahadaki bilgi birikimiyle tarım ve hayvancılık için yenilikçi, dayanıklı ve verimli çözümler sunar. Vizyon, misyon, değerlerimiz ve 20+ yıllık deneyimimiz.",
  keywords: [
    "hakkımızda",
    "ATK",
    "Uşaklılar Makine",
    "kurumsal",
    "vizyon",
    "misyon",
    "tarım makineleri üreticisi",
    "kalite güvencesi",
    "sürdürülebilirlik",
    "mühendislik"
  ],
  openGraph: {
    title: 'Kurumsal | ATK – Uşaklılar Makine',
    description: "ATK, Uşaklılar Makine'nin mühendislik gücü ve sahadaki bilgi birikimiyle tarım ve hayvancılık için yenilikçi, dayanıklı ve verimli çözümler sunar.",
    url: 'https://www.usaklilarmakine.com/kurumsal',
  },
};

export default function KurumsalPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">{/* offset for fixed header */}
        <CorporateHero />
        <BrandEssence />
        <VisionMission />
        <EngineeringPrinciples />
        <ValuesStrip />
        <QualityAssurance />
        <Sustainability />
        <Milestones />
        <Stats />
        <ContactCta />
      </main>
      <Footer />
    </div>
  );
}

