import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { VisionMission } from './components/VisionMission';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from './components/ui/BackToTop';
import { SectionSeparator } from './components/ui/SectionSeparator';
import { Section } from './components/ui/Section';
import { SecurityPlanner } from './components/SecurityPlanner';

export default function App() {
  return (
    <div className="relative min-h-screen bg-white text-[#333333] selection:bg-[#C8102E] selection:text-white font-sans">
      {/* Dynamic Sticky Header Navigation */}
      <Navbar />

      {/* Main Corporate Sections */}
      <main id="main-content">
        <Hero />
        <SectionSeparator dark={false} bgColor="bg-white" />
        
        <About />
        <SectionSeparator dark={false} bgColor="bg-[#F8F9FA]" />

        <WhyChooseUs />
        <SectionSeparator dark={true} bgColor="bg-[#111111]" />
        
        <VisionMission />
        <SectionSeparator dark={false} bgColor="bg-white" />
        
        <Services />
        <SectionSeparator dark={true} bgColor="bg-[#111111]" />

        <Section id="planner" className="bg-slate-50 border-b border-slate-200/80" title="RESOURCE PROJECTIONS" subtitle="Use our interactive compliance engine to run live security simulations.">
          <SecurityPlanner />
        </Section>
        <SectionSeparator dark={false} bgColor="bg-[#FAFBF9]" />
        
        <FAQ />
        <SectionSeparator dark={false} bgColor="bg-white" />
        
        <Contact />
      </main>

      {/* Corporate footer details */}
      <Footer />

      {/* Back to top scroll widget */}
      <BackToTop />
    </div>
  );
}
