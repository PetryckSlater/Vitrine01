import React from 'react';
import { 
  ArrowRight, 
  MessageCircle, 
  Zap, 
  ShieldCheck, 
  Smartphone,
  Palette
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { RavenIcon } from './RavenIcon';

export const Hero: React.FC = () => {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    SITE_CONFIG.whatsappMessageDefault
  )}`;

  return (
    <section className="relative pt-32 pb-16 md:pt-38 md:pb-24 overflow-hidden">
      {/* Ambient Glow Azul Cobalto & Ciano */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo do Corvo em Destaque Livre (Sem Caixa) */}
        <div className="relative mb-8 inline-block animate-float-raven">
          <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto flex items-center justify-center relative group">
            {/* Aura/Glow orgânica atrás do corvo */}
            <div className="absolute inset-0 bg-blue-500/20 blur-[50px] rounded-full -z-10 group-hover:bg-cyan-400/30 group-hover:blur-[60px] transition-all duration-700" />
            
            {/* O Corvo livre com drop-shadow neon */}
            <RavenIcon 
              className="w-full h-full drop-shadow-[0_10px_25px_rgba(37,99,235,0.6)] group-hover:drop-shadow-[0_0_40px_rgba(56,189,248,0.9)] group-hover:scale-110 transition-all duration-500" 
              variant="blue" 
            />
          </div>
        </div>

        {/* Badge estilizado */}
        <div className="block mb-6 animate-fly-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-950/40 border border-blue-500/30 text-xs font-semibold text-slate-800 dark:text-slate-200 shadow-lg shadow-blue-950/50">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-slate-900 dark:text-white font-bold tracking-wide">Slater Smart Solutions</span>
            <span className="text-blue-400/60">|</span>
            <span className="text-blue-300">Dev Frontend + Design & Marketing</span>
          </div>
        </div>

        {/* Headline com gradiente azul/ciano */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight max-w-4xl mx-auto animate-fly-in animation-delay-100">
          Desenvolvimento de <span className="text-gradient">sites e sistemas</span> que colocam seu negócio em outro nível.
        </h1>

        {/* Subtítulo direto */}
        <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed animate-fly-in animation-delay-200">
          Unimos frontend moderno de alta performance, interfaces exclusivas no Figma e foco real em vendas. 
          Pacotes sob medida para a fase atual do seu projeto.
        </p>

        {/* CTAs rápidos */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 animate-fly-in animation-delay-300">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-slate-900 dark:text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all hover:shadow-blue-500/40 hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            <div className="wing-sweep"></div>
            <MessageCircle className="w-4 h-4" />
            <span>Falar com o Dev no WhatsApp</span>
          </a>

          <a
            href="#pacotes"
            className="group relative overflow-hidden w-full sm:w-auto px-7 py-3.5 rounded-xl bg-blue-100 dark:bg-blue-950/30 hover:bg-blue-900/40 border border-blue-200 dark:border-blue-900/50 hover:border-blue-600/50 text-slate-800 dark:text-slate-200 font-semibold text-sm transition-all flex items-center justify-center gap-2"
          >
            <div className="wing-sweep"></div>
            <span>Ver Pacotes & Preços</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 4 Destaques Simples com visual tech cobalt */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 text-left">
          <div className="group relative overflow-hidden p-4 rounded-xl bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/40 hover:border-blue-500/40 transition-colors flex items-center gap-3 animate-fly-in animation-delay-200">
            <div className="wing-sweep"></div>
            <div className="p-2 rounded-lg bg-blue-500/10 text-cyan-400 shrink-0 group-hover:scale-110 transition-transform">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 dark:text-white">Carregamento &lt; 1s</p>
              <p className="text-[11px] text-slate-600 dark:text-slate-400">Zero lentidão</p>
            </div>
          </div>

          <div className="group relative overflow-hidden p-4 rounded-xl bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/40 hover:border-blue-500/40 transition-colors flex items-center gap-3 animate-fly-in animation-delay-300">
            <div className="wing-sweep"></div>
            <div className="p-2 rounded-lg bg-indigo-500/10 text-blue-400 shrink-0 group-hover:scale-110 transition-transform">
              <Palette className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 dark:text-white">Design no Figma</p>
              <p className="text-[11px] text-slate-600 dark:text-slate-400">Parceria de design</p>
            </div>
          </div>

          <div className="group relative overflow-hidden p-4 rounded-xl bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/40 hover:border-blue-500/40 transition-colors flex items-center gap-3 animate-fly-in animation-delay-400">
            <div className="wing-sweep"></div>
            <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0 group-hover:scale-110 transition-transform">
              <Smartphone className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 dark:text-white">100% Mobile</p>
              <p className="text-[11px] text-slate-600 dark:text-slate-400">Perfeito no celular</p>
            </div>
          </div>

          <div className="group relative overflow-hidden p-4 rounded-xl bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/40 hover:border-blue-500/40 transition-colors flex items-center gap-3 animate-fly-in animation-delay-500">
            <div className="wing-sweep"></div>
            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-300 shrink-0 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 dark:text-white">Garantia & Suporte</p>
              <p className="text-[11px] text-slate-600 dark:text-slate-400">Pós-entrega incluso</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
