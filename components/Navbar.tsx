import React, { useState, useEffect } from 'react';
import { Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../utils/translations';
import Logo from './Logo';

interface NavbarProps {
  onOpenContact: () => void;
}

const LANGS: Language[] = ['en', 'fr', 'es', 'ar'];

const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.navbar.sim, href: '#simulation' },
    { label: t.navbar.modes, href: '#modes' },
    { label: t.navbar.expertise, href: '#expertise' },
    { label: t.navbar.research, href: '#recherche' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const elem = document.getElementById(href.replace('#', ''));
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] transition-[background-color,box-shadow,border-color] duration-300 border-b ${
        scrolled
          ? 'bg-white/85 backdrop-blur-md border-slate-200 shadow-[0_1px_0_rgba(15,23,42,0.03)]'
          : 'bg-transparent border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 sm:h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8" aria-label="Main">
        <a
          href="#simulation"
          onClick={(e) => handleNavClick(e, '#simulation')}
          className="flex shrink-0 items-center"
          aria-label="Doctiplay"
        >
          <Logo className="h-6 sm:h-7 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div
            className="flex items-center rounded-lg border border-slate-200 bg-white p-0.5"
            role="group"
            aria-label="Language"
          >
            {LANGS.map((lng) => (
              <button
                key={lng}
                onClick={() => setLanguage(lng)}
                aria-pressed={language === lng}
                className={`rounded-md px-2.5 py-1 text-xs font-semibold uppercase transition-colors ${
                  language === lng ? 'bg-primary text-white' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {lng}
              </button>
            ))}
          </div>
          <button
            onClick={onOpenContact}
            className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary"
          >
            <Mail className="h-4 w-4" />
            {t.hero_extended.btn_contact_us}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;