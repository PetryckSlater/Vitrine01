import React from 'react';
import { MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const WhatsAppButton: React.FC = () => {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    SITE_CONFIG.whatsappMessageDefault
  )}`;

  return (
    <aside aria-label="Atendimento rápido" className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Tooltip on hover */}
      <span className="hidden sm:inline-block mr-3 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-xs font-semibold text-slate-900 dark:text-white shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        Fale conosco agora mesmo! ⚡
      </span>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Iniciar conversa no WhatsApp"
        className="relative w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-900 dark:text-white flex items-center justify-center shadow-2xl shadow-emerald-500/40 transition-all duration-300 hover:scale-110 active:scale-95"
      >
        {/* Pulsing indicator ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-25" />
        <MessageCircle className="w-7 h-7 fill-white" />
      </a>
    </aside>
  );
};
