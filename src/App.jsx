import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/kontro.css';

import NavbarKontro from './components/NavbarKontro';
import HeroSection from './components/HeroSection';
import ProblemsSection from './components/ProblemsSection';
import HowItWorksSection from './components/HowItWorksSection';
import BenefitsSection from './components/BenefitsSection';
import MonitorSection from './components/MonitorSection';
import PricingSection from './components/PricingSection';
import UseCasesSection from './components/UseCasesSection';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <NavbarKontro />
      <main>
        <HeroSection />
        <ProblemsSection />
        <HowItWorksSection />
        <BenefitsSection />
        <MonitorSection />
        <PricingSection />
        <UseCasesSection />
        <TestimonialsSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
