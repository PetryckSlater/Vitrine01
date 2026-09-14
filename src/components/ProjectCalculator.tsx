import React, { useState } from 'react';
import { 
  Calculator, 
  Check, 
  Clock, 
  MessageCircle, 
  Sparkles, 
  ArrowRight,
  Flame
} from 'lucide-react';
import { 
  CALCULATOR_BASE_TYPES, 
  CALCULATOR_ADDONS, 
  SITE_CONFIG 
} from '../config/siteConfig';

export const ProjectCalculator: React.FC = () => {
  const [selectedBaseId, setSelectedBaseId] = useState<string>(CALCULATOR_BASE_TYPES[1].id);
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['copywriting', 'seo-local']);
  const [isUrgent, setIsUrgent] = useState<boolean>(false);

  const toggleAddon = (addonId: string) => {
    setSelectedAddons((prev) =>
      prev.includes(addonId)
        ? prev.filter((id) => id !== addonId)
        : [...prev, addonId]
    );
  };

  const selectedBase = CALCULATOR_BASE_TYPES.find((b) => b.id === selectedBaseId) || CALCULATOR_BASE_TYPES[0];
  const activeAddonsList = CALCULATOR_ADDONS.filter((a) => selectedAddons.includes(a.id));

  // Calculations
  const addonsTotal = activeAddonsList.reduce((acc, curr) => acc + curr.price, 0);
  const rawTotalPrice = selectedBase.price + addonsTotal;
  const totalPrice = isUrgent ? Math.round(rawTotalPrice * 1.25) : rawTotalPrice;

  const addonsDays = activeAddonsList.reduce((acc, curr) => acc + curr.days, 0);
  const totalDays = isUrgent 
    ? Math.max(5, Math.round((selectedBase.days + addonsDays) * 0.7)) 
    : selectedBase.days + addonsDays;

  // Build formatted WhatsApp message
  const handleSendToWhatsApp = () => {
    const addonsNames = activeAddonsList.length > 0 
      ? activeAddonsList.map(a => `• ${a.label}`).join('\n') 
      : 'Nenhum adicional selecionado';

    const urgencyText = isUrgent ? '🚀 Prioridade / Prazo Urgente (+25%)' : '📅 Cronograma Normal';

    const message = 
`👋 Fala pessoal da Slater Smart Solutions! Fiz uma simulação de projeto no site:

📌 *Projeto:* ${selectedBase.label}
⚙️ *Opcionais:*
${addonsNames}

⏱️ *Prazo:* ~${totalDays} dias úteis (${urgencyText})
💰 *Valor Estimado:* R$ ${totalPrice.toLocaleString('pt-BR')}

Podemos trocar uma ideia para fechar?`;

    const url = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="simulador" className="py-20 relative overflow-hidden bg-white dark:bg-slate-950/70 border-t border-slate-900">
      {/* Glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-400 block mb-2">
            // Simulação Rápida
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Monte seu projeto e veja a <span className="text-gradient">estimativa na hora</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Escolha o formato e os adicionais que precisa. Se curtir, mande a simulação direto pro nosso WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls: Step 1, 2, 3 */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Base Type */}
            <div className="glass-card rounded-2xl p-6 border border-blue-200 dark:border-blue-900/40">
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-slate-900 dark:text-white flex items-center justify-center text-xs">1</span>
                Selecione o Tipo de Projeto
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {CALCULATOR_BASE_TYPES.map((type) => {
                  const isSelected = selectedBaseId === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setSelectedBaseId(type.id)}
                      className={`text-left p-4 rounded-xl border transition-all flex flex-col justify-between ${
                        isSelected
                          ? 'bg-blue-100 dark:bg-blue-950/40 border-blue-500 text-slate-900 dark:text-white shadow-md shadow-blue-600/20'
                          : 'bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900/40 text-slate-600 dark:text-slate-400 hover:border-blue-700/50 hover:text-slate-800 dark:text-slate-200'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-mono font-medium text-cyan-400">Base</span>
                          {isSelected && <Check className="w-4 h-4 text-cyan-400" />}
                        </div>
                        <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">{type.label}</h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">{type.description}</p>
                      </div>
                      <div className="mt-4 pt-2 border-t border-blue-200 dark:border-blue-900/40 text-xs font-semibold text-slate-800 dark:text-slate-200">
                        A partir de R$ {type.price.toLocaleString('pt-BR')}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Add-ons */}
            <div className="glass-card rounded-2xl p-6 border border-blue-200 dark:border-blue-900/40">
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-slate-900 dark:text-white flex items-center justify-center text-xs">2</span>
                Adicionais Estratégicos (Design, Marketing & Recursos)
              </h3>

              <div className="space-y-3">
                {CALCULATOR_ADDONS.map((addon) => {
                  const isSelected = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3.5 sm:p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between gap-3 ${
                        isSelected
                          ? 'bg-blue-100 dark:bg-blue-950/40 border-blue-500/60 shadow-sm'
                          : 'bg-blue-950/15 border-blue-900/30 hover:border-blue-700/40'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-5 h-5 rounded-md mt-0.5 flex items-center justify-center transition-colors ${
                            isSelected ? 'bg-blue-600 text-slate-900 dark:text-white' : 'border border-blue-800 bg-blue-100 dark:bg-blue-950/40'
                          }`}
                        >
                          {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-900 dark:text-white">{addon.label}</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400">{addon.description}</p>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-xs font-bold text-cyan-300 block">
                          + R$ {addon.price.toLocaleString('pt-BR')}
                        </span>
                        <span className="text-[11px] text-slate-500">+{addon.days} dias</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Priority */}
            <div className="glass-card rounded-2xl p-5 border border-blue-200 dark:border-blue-900/40 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`p-2.5 rounded-xl ${isUrgent ? 'bg-amber-500/20 text-amber-400' : 'bg-blue-100 dark:bg-blue-950/40 text-slate-600 dark:text-slate-400'}`}>
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Precisa com Urgência / Prazo Prioritário?</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Reduz o prazo em até 30% com alocação prioritária da equipe (+25% no valor).
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsUrgent(!isUrgent)}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                  isUrgent ? 'bg-blue-600' : 'bg-slate-800'
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                    isUrgent ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Sticky Summary / Estimate Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border-2 border-blue-500/50 shadow-2xl shadow-blue-600/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between pb-4 border-b border-blue-200 dark:border-blue-900/40 mb-6">
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-cyan-400">
                    Resumo da Estimativa
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">Sua Solução Personalizada</h4>
                </div>
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-cyan-400">
                  <Calculator className="w-5 h-5" />
                </div>
              </div>

              {/* Inclusions summary */}
              <div className="space-y-3 mb-6 text-sm">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-600 dark:text-slate-400">Projeto Base:</span>
                  <span className="font-semibold text-slate-900 dark:text-white">{selectedBase.label}</span>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-600 dark:text-slate-400">Adicionais Ativos:</span>
                  <span className="font-semibold text-cyan-400">{activeAddonsList.length} selecionado(s)</span>
                </div>

                {activeAddonsList.map((addon) => (
                  <div key={addon.id} className="text-xs text-slate-600 dark:text-slate-400 flex items-center gap-1.5 pl-2 border-l border-blue-200 dark:border-blue-900/50">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block" />
                    <span className="truncate">{addon.label}</span>
                  </div>
                ))}

                <div className="flex justify-between items-center text-xs pt-2 border-t border-blue-200 dark:border-blue-900/40">
                  <span className="text-slate-600 dark:text-slate-400">Prazo Estimado:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" /> ~{totalDays} dias úteis
                  </span>
                </div>

                {isUrgent && (
                  <div className="flex justify-between items-center text-xs text-amber-400">
                    <span>Taxa de Entrega Urgente:</span>
                    <span className="font-semibold">+ 25%</span>
                  </div>
                )}
              </div>

              {/* Total Investment Display */}
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 mb-6">
                <span className="text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1">
                  Investimento Estimado:
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    R$ {totalPrice.toLocaleString('pt-BR')}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  *Podendo ser parcelado no cartão de crédito ou 50% entrada + 50% na entrega.
                </p>
              </div>

              {/* Send to WhatsApp CTA */}
              <button
                type="button"
                onClick={handleSendToWhatsApp}
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-500 text-slate-900 dark:text-white font-bold text-sm shadow-xl shadow-emerald-600/25 transition-all hover:shadow-emerald-600/40 hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Receber Proposta no WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-slate-600 dark:text-slate-400 text-center">
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>Você não assume nenhum compromisso ao simular.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
