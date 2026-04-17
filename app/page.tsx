import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Integrations from "@/components/Integrations";
import FeatureSplit from "@/components/FeatureSplit";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-slate-900">
      <Nav />
      <Hero />
      <TrustBar />
      <Stats />
      <Services />
      <FeatureSplit />
      <CaseStudies />
      <Process />
      <Integrations />
      <Testimonials />
      <Pricing />
      <Faq />
      <CtaBanner />
      <Footer />
    </main>
  );
}
