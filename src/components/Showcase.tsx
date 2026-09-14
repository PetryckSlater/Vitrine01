import React, { useState } from 'react';
import { 
  ExternalLink, 
  CheckCircle2, 
  X, 
  MessageCircle
} from 'lucide-react';
import { SHOWCASE_PROJECTS, SITE_CONFIG } from '../config/siteConfig';
import type { ProjectCase } from '../types';

export const Showcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectCase | null>(null);

  const dynamicCategories = Array.from(new Set(SHOWCASE_PROJECTS.map(p => p.category)));
  
  const categoryLabels: Record<string, string> = {
    landing: 'Landing Pages',
    institucional: 'Sites Institucionais',
    sistema: 'Sistemas & Web Apps',
  };

  const categories = [
    { id: 'all', label: 'Todos os Projetos' },
    ...dynamicCategories.map(cat => ({
      id: cat,
      label: categoryLabels[cat] || cat
    }))
  ];

  const filteredProjects = activeCategory === 'all'
    ? SHOWCASE_PROJECTS
    : SHOWCASE_PROJECTS.filter((p) => p.category === activeCategory);

  const openWhatsAppForProject = (projectTitle: string) => {
    const text = `Olá! Vi o projeto *${projectTitle}* na vitrine e gostaria de fazer algo semelhante para o meu negócio. Podemos conversar?`;
    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="vitrine" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-400 block mb-2">
            // Vitrine & Portfólio
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Alguns projetos e <span className="text-gradient">conceitos entregues</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Exemplos de landing pages, sites e sistemas construídos com foco em velocidade, visual marcante e usabilidade.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-slate-900 dark:text-white shadow-lg shadow-blue-600/30 scale-105'
                  : 'bg-slate-100 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:text-slate-200 hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800/80 hover:border-blue-500/50 transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1.5 shadow-xl shadow-black/40 relative"
            >
              <div className="wing-sweep z-20 pointer-events-none"></div>
              <div>
                {/* Image Container */}
                <div className="relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 dark:from-[#060913] dark:via-[#060913]/40 to-transparent" />
                  
                  {/* Category Pill */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#0b1222]/90 backdrop-blur-md text-[11px] font-semibold text-blue-300 border border-blue-800/40 z-10">
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Metrics Badge */}
                  <div className="grid grid-cols-2 gap-2 mb-4 p-2.5 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-900/30">
                    {project.metrics.map((m, idx) => (
                      <div key={idx} className="text-center">
                        <span className="text-[11px] text-slate-600 dark:text-slate-400 block">{m.label}</span>
                        <span className="text-xs font-bold text-blue-300">{m.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950/30 text-blue-200 border border-blue-200 dark:border-blue-900/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-2.5 px-4 rounded-xl bg-blue-100 dark:bg-blue-950/30 hover:bg-blue-900/40 border border-blue-200 dark:border-blue-900/50 text-slate-800 dark:text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors group-hover:border-blue-500/50"
                >
                  <span>Ver Detalhes do Projeto</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative w-full max-w-2xl bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
              {/* Modal Image */}
              <div className="relative aspect-video w-full bg-white dark:bg-slate-950 overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-slate-900 dark:text-white hover:bg-black/80 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-3 left-3 px-3 py-1 rounded-md bg-black/70 backdrop-blur-md text-xs font-semibold text-blue-400">
                  {selectedProject.categoryLabel}
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto space-y-4">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{selectedProject.title}</h3>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Highlights */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-600 dark:text-slate-400 mb-2">
                    Destaques & Entregáveis:
                  </h4>
                  <div className="space-y-2">
                    {selectedProject.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-600 dark:text-slate-400 mb-2">
                    Tecnologias Utilizadas:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((t) => (
                      <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-md bg-white dark:bg-slate-950 text-blue-400 border border-slate-200 dark:border-slate-800">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Gostou desse projeto?</p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">Construa um similar para o seu negócio</p>
                  </div>
                  <button
                    onClick={() => openWhatsAppForProject(selectedProject.title)}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-slate-900 dark:text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Quero um projeto similar</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
