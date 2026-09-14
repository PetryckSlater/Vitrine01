import React from 'react';
import { 
  FileSearch, 
  Palette, 
  Code, 
  Rocket, 
  CheckCircle2
} from 'lucide-react';
import { PROCESS_STEPS } from '../config/siteConfig';

export const ProcessSteps: React.FC = () => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <FileSearch className="w-6 h-6 text-blue-400" />;
      case 1:
        return <Palette className="w-6 h-6 text-sky-400" />;
      case 2:
        return <Code className="w-6 h-6 text-cyan-400" />;
      case 3:
        return <Rocket className="w-6 h-6 text-emerald-400" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section id="processo" className="py-24 relative bg-white dark:bg-slate-950/80 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4 border border-emerald-500/20">
            <CheckCircle2 className="w-3 h-3" /> Metodologia Transparente
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Como funciona do início <span className="text-gradient">ao lançamento</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Processo ágil, sem enrolação técnica e com você participando de cada decisão importante antes de colocarmos seu site no ar.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, index) => (
            <div
              key={step.step}
              className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800/80 relative flex flex-col justify-between hover:border-slate-700 transition-all hover:-translate-y-1"
            >
              {/* Step Number Watermark */}
              <div className="text-5xl font-extrabold text-slate-800/40 absolute top-4 right-4 select-none font-mono">
                {step.step}
              </div>

              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center mb-6 shadow-inner">
                  {getStepIcon(index)}
                </div>

                <span className="text-xs font-mono font-semibold text-blue-400 block mb-1">
                  Passo {step.step}
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800/60 flex items-center gap-1.5 text-xs text-slate-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Etapa com validação contínua</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
