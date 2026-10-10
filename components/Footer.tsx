import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Mail, Handshake } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  onOpenPartnership: () => void;
  onOpenContact: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenPartnership, onOpenContact }) => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
          <div className="max-w-md">
            <a href="#simulation" aria-label="Doctiplay" className="inline-block">
              <Logo className="h-8 sm:h-9 w-auto" />
            </a>
            <p className="mt-5 text-base leading-relaxed text-slate-600">{t.footer.tagline}</p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <button
              onClick={onOpenContact}
              className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-start transition duration-200 hover:border-primary hover:shadow-sm"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs font-medium text-slate-500">{t.footer.contact_label}</span>
                <span className="block text-sm font-semibold text-slate-900">{t.footer.contact_action}</span>
              </span>
            </button>

            <button
              onClick={onOpenPartnership}
              className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-start transition duration-200 hover:border-primary hover:shadow-sm"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Handshake className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs font-medium text-slate-500">{t.footer.partnership_label}</span>
                <span className="block text-sm font-semibold text-slate-900">{t.footer.partnership_action}</span>
              </span>
            </button>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-start sm:justify-between">
          <p className="max-w-2xl leading-relaxed">{t.footer.disclaimer}</p>
          <p className="shrink-0 font-medium">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
