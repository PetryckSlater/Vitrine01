import React from 'react';
import { 
  Clock, 
  Sparkles, 
  MessageCircle, 
  Check, 
  ShieldCheck
} from 'lucide-react';
import { SERVICE_PACKAGES, SITE_CONFIG } from '../config/siteConfig';

export const Packages: React.FC = () => {
  const getPackageWhatsAppUrl = (packageName: string) => {
    const text = `Olá! Estava navegando no site vitrine e gostaria de saber mais sobre o pacote *${packageName}*. Podemos conversar sobre meu projeto?`;
    return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="pacotes" className="py-24 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[500px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-400 block mb-2">
            // Nossos Pacotes
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Escolha o pacote ideal para <span className="text-gradient">a sua necessidade</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Preços transparentes, prazos claros e sem taxas escondidas. Se precisar de algo diferente, montamos sob medida.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {SERVICE_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`group overflow-hidden rounded-2xl p-8 flex flex-col justify-between relative transition-all duration-300 ${
                pkg.popular
                  ? 'bg-gradient-to-b from-blue-50 via-white to-slate-50 dark:from-[#0e1b38] dark:via-[#091124] dark:to-[#060913] border-2 border-blue-500/70 shadow-2xl shadow-blue-600/25 scale-[1.02] lg:-translate-y-2'
                  : 'glass-card border border-slate-200 dark:border-blue-900/40 hover:border-blue-500/40'
              }`}
            >
              <div className="wing-sweep"></div>
              {/* Badge */}
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-slate-900 dark:text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-blue-600/40 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-200" />
                  {pkg.badge || 'Mais Escolhido'}
                </div>
              )}

              {!pkg.popular && pkg.badge && (
                <div className="inline-block self-start px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/40 text-blue-300 border border-blue-800/40 text-xs font-semibold uppercase tracking-wider mb-3">
                  {pkg.badge}
                </div>
              )}

              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{pkg.name}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 min-h-[40px] mb-6 leading-relaxed">
                  {pkg.description}
                </p>

                {/* Price Box */}
                <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/40 mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">A partir de</span>
                    <span className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      {pkg.priceFrom}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 mt-2">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Entrega estimada: <strong className="text-slate-800 dark:text-slate-200">{pkg.deliveryTime}</strong></span>
                  </div>
                </div>

                {/* Ideal For */}
                <div className="mb-6 p-3 rounded-lg bg-blue-500/5 border border-blue-500/15 text-xs text-slate-700 dark:text-slate-300">
                  <strong className="text-blue-400 block mb-1">Ideal para:</strong>
                  {pkg.idealFor}
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                    O que está incluso:
                  </p>
                  {pkg.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 mt-0.5 text-cyan-400">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-snug">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Package CTA */}
              <div>
                <a
                  href={getPackageWhatsAppUrl(pkg.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 px-6 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-slate-900 dark:text-white shadow-blue-600/30 hover:shadow-blue-500/45'
                      : 'bg-blue-100 dark:bg-blue-950/30 hover:bg-blue-900/40 text-slate-900 dark:text-white border border-blue-800/40 hover:border-blue-600/50'
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{pkg.ctaText}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Support Note */}
        <div className="mt-12 p-6 rounded-2xl glass-card border border-blue-200 dark:border-blue-900/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-blue-500/10 text-cyan-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white text-base">Não encontrou o que precisa ou tem um projeto único?</h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                Podemos montar uma proposta 100% personalizada para a realidade técnica e comercial da sua empresa.
              </p>
            </div>
          </div>
          <a
            href="#simulador"
            className="px-5 py-2.5 rounded-xl bg-blue-100 dark:bg-blue-950/40 hover:bg-blue-900/50 text-slate-900 dark:text-white text-sm font-semibold border border-blue-800/50 hover:border-blue-600/50 transition-colors shrink-0"
          >
            Abrir Simulador Interativo
          </a>
        </div>
      </div>
    </section>
  );
};
