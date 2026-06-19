import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import Advantages from '@/components/landing/Advantages';
import Services from '@/components/landing/Services';
import Access from '@/components/landing/Access';
import Steps from '@/components/landing/Steps';
import Prices from '@/components/landing/Prices';
import Gallery from '@/components/landing/Gallery';
import Faq from '@/components/landing/Faq';
import Contact from '@/components/landing/Contact';
import Footer from '@/components/landing/Footer';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-white antialiased">
      <Header />
      <main>
        <Hero />
        <Advantages />
        <Services />
        <Access />
        <Steps />
        <Prices />
        <Gallery />
        <Faq />
        <Contact />
      </main>
      <Footer />

      <a
        href="https://wa.me/79000000000"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-whatsapp text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
        aria-label="WhatsApp"
      >
        <Icon name="MessageCircle" size={26} />
      </a>
    </div>
  );
};

export default Index;