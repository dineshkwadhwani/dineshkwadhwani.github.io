import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Credentials from "@/components/Credentials";
import Testimonials from "@/components/Testimonials";
import Advisory from "@/components/Advisory";
import AISection from "@/components/AISection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Journey />
      <Credentials />
      <Testimonials />
      <Advisory />
      <AISection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
