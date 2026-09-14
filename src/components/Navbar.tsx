import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, MessageCircle, Moon, Sun, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { RavenIcon } from './RavenIcon';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Serviços', href: '#pacotes' },
    { label: 'Projetos', href: '#vitrine' },
    { label: 'Orçamento', href: '#simulador' },
    { label: 'FAQ', href: '#faq' },
  ];

  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    SITE_CONFIG.whatsappMessageDefault
  )}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-lg shadow-black/20 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Branding */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="relative flex items-center justify-center p-1">
              <div className="absolute inset-0 bg-blue-500/20 blur-[15px] rounded-full -z-10 group-hover:bg-cyan-400/40 transition-all duration-500" />
              <RavenIcon className="w-10 h-10 drop-shadow-[0_2px_10px_rgba(37,99,235,0.6)] group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300" variant="blue" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white group-hover:text-blue-400 transition-colors">
                  {SITE_CONFIG.brandFullName}
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/25">
                  <Sparkles className="w-2.5 h-2.5 text-cyan-400" /> Dev + Design
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 font-medium hidden sm:block">
                Sites & Sistemas Web
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-blue-100 dark:bg-blue-950/30 p-1.5 rounded-full border border-blue-200 dark:border-blue-900/40 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:text-white hover:bg-blue-900/40 rounded-full transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions: Theme toggle & WhatsApp CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Alternar Tema"
              className="p-2.5 rounded-xl bg-blue-100 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/40 text-slate-600 dark:text-slate-400 hover:text-slate-100 hover:border-blue-700/50 transition-colors"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700 dark:text-slate-300" />}
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-slate-900 dark:text-white text-sm font-semibold shadow-lg shadow-blue-600/30 transition-all hover:shadow-blue-500/40 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Alternar Tema"
              className="p-2 rounded-lg bg-blue-100 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/50 text-slate-600 dark:text-slate-400"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700 dark:text-slate-300" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-blue-100 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/50 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:text-white"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-2xl glass-card border border-blue-200 dark:border-blue-900/40 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-base font-medium text-slate-800 dark:text-slate-200 hover:bg-blue-900/30 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-blue-200 dark:border-blue-900/40 mt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-slate-900 dark:text-white font-medium text-sm shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Falar no WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
