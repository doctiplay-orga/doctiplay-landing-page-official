import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Modes from './components/Modes';
import Features from './components/Features';
import Research from './components/Research';
import PartnershipDrawer from './components/PartnershipDrawer';
import ContactDrawer from './components/ContactDrawer';
import Footer from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';

const AppContent: React.FC = () => {
  const [isPartnershipOpen, setIsPartnershipOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isBetaOrderOpen, setIsBetaOrderOpen] = useState(false);

  useEffect(() => {
    // Check for query param to open Contact Drawer
    const params = new URLSearchParams(window.location.search);
    if (params.get('open_contact') === 'true') {
      setIsContactOpen(true);
    }

    // Scroll reveal: animate each element once, then stop observing it
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-slate-50">
      <PartnershipDrawer
        isOpen={isPartnershipOpen}
        onClose={() => setIsPartnershipOpen(false)}
      />
      <PartnershipDrawer
        isOpen={isBetaOrderOpen}
        onClose={() => setIsBetaOrderOpen(false)}
        title="Commander la Version Beta"
      />
      <ContactDrawer
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
      <Navbar onOpenContact={() => setIsContactOpen(true)} />
      <main className="flex-grow">
        <Hero
          onOpenPartnership={() => setIsPartnershipOpen(true)}
          onOpenContact={() => setIsContactOpen(true)}
        />
        <Modes onOpenBetaOrder={() => setIsBetaOrderOpen(true)} />
        <Features />
        <Research onOpenPartnership={() => setIsPartnershipOpen(true)} />
      </main>
      <Footer
        onOpenPartnership={() => setIsPartnershipOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;