import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ValueProp } from './components/ValueProp';
import { Packages } from './components/Packages';
import { ProjectCalculator } from './components/ProjectCalculator';
import { Showcase } from './components/Showcase';
import { ProcessSteps } from './components/ProcessSteps';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export const App: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(true);

  // Sync dark class on html tag
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-[#060913] text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      {/* Fixed Navigation Header */}
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. O Diferencial: Dev + Design + Marketing */}
        <ValueProp />

        {/* 3. Pacotes de Serviços & Preços Sugeridos */}
        <Packages />

        {/* 4. Simulador Interativo de Orçamento */}
        <ProjectCalculator />

        {/* 5. Vitrine / Portfólio de Projetos */}
        <Showcase />

        {/* 6. Como Funciona / Linha do Tempo */}
        <ProcessSteps />

        {/* 8. Perguntas Frequentes (FAQ) */}
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />
    </div>
  );
};

export default App;
