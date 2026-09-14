import React from 'react';
import { 
  Code2, 
  Palette, 
  TrendingUp, 
  Check, 
  Sparkles 
} from 'lucide-react';
import { VALUE_PILLARS } from '../config/siteConfig';

export const ValueProp: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Code2':
        return <Code2 className="w-5 h-5" />;
      case 'Palette':
        return <Palette className="w-5 h-5" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="diferencial" className="py-24 bg-slate-50 dark:bg-[#060913]/90 border-y border-slate-200 dark:border-blue-900/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Layout Dividido: Imagem + Texto */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-3xl"></div>
            <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200 dark:border-slate-800 shadow-2xl rotate-2 group-hover:rotate-0 transition-transform duration-500 bg-white dark:bg-slate-900">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80" 
                alt="Workspace divertido e produtivo" 
                className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-4 left-4 right-4 p-4 glass-card rounded-xl border-blue-500/30 animate-fly-in">
                <p className="text-white font-bold flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-cyan-400" />
                  Eficiência & Beleza
                </p>
                <p className="text-slate-200 text-sm mt-1">Design de agência, velocidade de código nativo.</p>
              </div>
            </div>
          </div>

          <div className="text-left">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-500 block mb-3">
              // Como Funciona a Parceria
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              A união perfeita entre <span className="text-gradient">código e design</span>.
            </h2>
            <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Você não precisa contratar vários profissionais avulsos nem pagar valores abusivos de agência. Nós unimos um desenvolvimento frontend ultra-eficiente com o olhar artístico de uma equipe de design e marketing.
            </p>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 font-medium">
              O resultado? <span className="text-blue-600 dark:text-blue-400">Sites divertidos, bonitos e que vendem de verdade.</span>
            </p>
          </div>
        </div>

        {/* 3 Pilares limpos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {VALUE_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="group relative overflow-hidden glass-card rounded-2xl p-6 border border-slate-200 dark:border-blue-900/40 flex flex-col justify-between hover:border-blue-500/40 transition-all hover:-translate-y-1 shadow-lg shadow-black/5 dark:shadow-black/40 bg-white/50 dark:bg-slate-900/50"
            >
              <div className="wing-sweep"></div>
              <div>
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${pillar.color} border flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  {getIcon(pillar.iconName)}
                </div>

                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 block mb-1">
                  {pillar.subtitle}
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-blue-900/30 space-y-2 relative z-10">
                {pillar.benefits.map((b) => (
                  <div key={b} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                    <Check className="w-3.5 h-3.5 text-blue-500 dark:text-cyan-400 shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
