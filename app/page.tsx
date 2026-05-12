import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";
import Cursor from "@/components/ui/Cursor";
import RevealObserver from "@/components/ui/RevealObserver";
import WhatsAppBubble from "@/components/ui/WhatsAppBubble";

export default function Home() {
  return (
    <>
      <Cursor />
      <RevealObserver />
      <WhatsAppBubble />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
