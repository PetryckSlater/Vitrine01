import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQ_ITEMS, SITE_CONFIG } from '../config/siteConfig';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const whatsappDirect = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    'Olá! Tenho uma dúvida que não vi no FAQ do site vitrine. Poderia me ajudar?'
  )}`;

  return (
    <section id="faq" className="py-24 relative bg-white dark:bg-slate-950/60 border-t border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4 border border-blue-500/20">
            <HelpCircle className="w-3 h-3" /> Tire suas Dúvidas
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Perguntas <span className="text-gradient">Frequentes</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Tudo o que você precisa saber antes de iniciarmos o desenvolvimento do seu projeto.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="glass-card rounded-2xl border border-slate-200 dark:border-slate-800/80 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-blue-400 bg-blue-500/10' : 'text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed border-t border-slate-200 dark:border-slate-800/40 pt-4 animate-in fade-in duration-200">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? */}
        <div className="mt-12 text-center p-8 rounded-2xl glass-card border border-slate-200 dark:border-slate-800">
          <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Ainda tem alguma pergunta específica?</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 max-w-md mx-auto">
            Chame a gente no WhatsApp. Respondemos em poucos minutos para entender a sua ideia.
          </p>
          <a
            href={whatsappDirect}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-slate-900 dark:text-white font-semibold text-sm shadow-lg shadow-blue-500/25 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Tirar Dúvida no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
