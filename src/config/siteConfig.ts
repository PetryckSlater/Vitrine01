import type { ServicePackage, ProjectCase, ValuePillar, CalculatorOption } from '../types';

export const SITE_CONFIG = {
  // Marca e Identidade
  brandName: "Slater Smart Solutions",
  brandFullName: "Slater Smart Solutions",
  tagline: "Desenvolvimento de Sites e Sistemas Web",
  shortDescription: "Desenvolvimento frontend de alta performance somado a design profissional e estratégia de vendas. Sem enrolação.",
  
  // Contatos
  whatsappNumber: "5511999999999", // Coloque seu número aqui (com DDD)
  whatsappMessageDefault: "E aí! Vim pelo site da Slater Smart Solutions e quero tirar uma ideia do papel. Podemos conversar?",
  email: "contato@slatersmartsolutions.com",
  location: "Brasil • Atendimento 100% Remoto",
  
  // Redes Sociais
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    whatsapp: "https://wa.me/5511999999999"
  },

  // Métricas rápidas
  stats: [
    { value: "+40", label: "Projetos Entregues" },
    { value: "99%", label: "Clientes Satisfeitos" },
    { value: "< 1s", label: "Carregamento Médio" },
    { value: "100%", label: "Projetos no Prazo" }
  ],

  // Diferenciais rápidos
  highlights: [
    "Entrega ágil e sem enrolação",
    "Design exclusivo no Figma com agência parceira",
    "Código frontend moderno em React",
    "100% otimizado para celulares"
  ]
};

// Os 3 Pilares da Parceria
export const VALUE_PILLARS: ValuePillar[] = [
  {
    title: "Frontend de Alta Performance",
    subtitle: "Desenvolvimento Especializado",
    description: "Interfaces fluidas e modernas em React e TypeScript. Zero travamentos, código limpo e carregamento instantâneo no celular.",
    iconName: "Code2",
    benefits: [
      "Carregamento em menos de 1 segundo",
      "100% adaptado para qualquer celular",
      "Código limpo, organizado e sem gambiarras"
    ],
    color: "from-blue-500/20 to-cyan-500/20 border-blue-500/30 text-blue-400"
  },
  {
    title: "Design UI/UX Exclusivo",
    subtitle: "Parceria com Estúdio de Design",
    description: "Nada de templates prontos da internet. Layouts criados no Figma pensados para transmitir autoridade e confiança imediata.",
    iconName: "Palette",
    benefits: [
      "Protótipo no Figma para você aprovar antes de codar",
      "Visual moderno, limpo e profissional",
      "Experiência de uso fluida para o cliente"
    ],
    color: "from-sky-500/20 to-cyan-500/20 border-sky-500/30 text-sky-400"
  },
  {
    title: "Estratégia & Conversão",
    subtitle: "Foco em Vendas",
    description: "Site bonito que não vende não serve para nada. Estruturamos textos persuasivos, botões no lugar certo e SEO para o Google.",
    iconName: "TrendingUp",
    benefits: [
      "Copywriting focado em quebra de objeções",
      "Botões diretos para seu WhatsApp",
      "Otimizado para anúncios (Google e Meta)"
    ],
    color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-400"
  }
];

// Pacotes de Serviços
export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: "landing-page",
    name: "Landing Page",
    badge: "Mais Rápido",
    description: "Página única de alto impacto focada em vender um serviço/produto específico ou rodar anúncios.",
    popular: false,
    priceFrom: "R$ 990",
    deliveryTime: "5 a 7 dias úteis",
    idealFor: "Autônomos, lançamentos, produtos digitais e campanhas de anúncios.",
    features: [
      "Página única de alta conversão (One-Page)",
      "Design exclusivo feito no Figma",
      "Textos persuasivos focados em venda",
      "Botão de WhatsApp e formulário de contato",
      "Carregamento ultra-rápido no celular",
      "Pixel do Facebook e Google Analytics configurados"
    ],
    ctaText: "Pedir Landing Page"
  },
  {
    id: "site-institucional",
    name: "Site Institucional",
    badge: "Mais Pedido",
    description: "Estrutura completa com várias páginas para posicionar sua empresa com autoridade máxima.",
    popular: true,
    priceFrom: "R$ 1.950",
    deliveryTime: "10 a 15 dias úteis",
    idealFor: "Empresas, clínicas, consultorias, escritórios e comércios locais.",
    features: [
      "Estrutura multi-páginas (Início, Sobre, Serviços, Portfólio, Contato)",
      "Design UI/UX sob medida no Figma",
      "Otimização de SEO para aparecer no Google",
      "Painel simples para você mesmo editar textos e imagens",
      "Integração com Google Maps e avaliações",
      "Suporte e garantia após a entrega"
    ],
    ctaText: "Pedir Site Institucional"
  },
  {
    id: "sistema-web",
    name: "Sistema Web Sob Medida",
    badge: "Avançado",
    description: "Aplicações web completas, painéis administrativos, dashboards com login ou MVP de sistemas.",
    popular: false,
    priceFrom: "Sob Consulta",
    deliveryTime: "A combinar",
    idealFor: "Quem precisa automatizar tarefas, criar portais para clientes ou lançar uma startup.",
    features: [
      "Frontend moderno em React e TypeScript",
      "Painel com login, controle de usuários e permissões",
      "Integração com bancos de dados e APIs externas",
      "Dashboards interativos e relatórios em tempo real",
      "Integração com pagamentos (PIX, Cartão, Boleto)",
      "Código limpo, seguro e pronto para crescer"
    ],
    ctaText: "Falar sobre Meu Sistema"
  }
];

// Opções do Simulador Interativo
export const CALCULATOR_BASE_TYPES: CalculatorOption[] = [
  {
    id: "landing",
    label: "Landing Page de Conversão",
    description: "Página única, rápida e direta ao ponto para vender ou capturar leads.",
    price: 990,
    days: 7
  },
  {
    id: "institucional",
    label: "Site Institucional Completo",
    description: "Estrutura multi-páginas para autoridade de marca e presença no Google.",
    price: 1950,
    days: 15
  },
  {
    id: "sistema",
    label: "Sistema Web / Dashboard / Web App",
    description: "Aplicação interativa com login, dados dinâmicos e regras de negócio.",
    price: 3800,
    days: 30
  }
];

export const CALCULATOR_ADDONS: CalculatorOption[] = [
  {
    id: "branding",
    label: "Identidade Visual & Branding (Agência Parceira)",
    description: "Criação de logotipo, paleta de cores, tipografia e manual de marca.",
    price: 650,
    days: 4
  },
  {
    id: "copywriting",
    label: "Copywriting Profissional & Argumentação de Vendas",
    description: "Redação persuasiva de todos os textos focada em quebra de objeções.",
    price: 450,
    days: 3
  },
  {
    id: "seo-local",
    label: "SEO Avançado & Google Meu Negócio",
    description: "Indexação nas primeiras posições e otimização para buscas locais.",
    price: 400,
    days: 2
  },
  {
    id: "cms-admin",
    label: "Painel Administrativo para Edição de Conteúdo",
    description: "Você mesmo poderá trocar textos, fotos e posts sem mexer em código.",
    price: 500,
    days: 4
  },
  {
    id: "marketing-setup",
    label: "Setup Completo de Tráfego & Tags de Anúncio",
    description: "Google Tag Manager, Pixel Meta, Google Analytics 4 e eventos de conversão.",
    price: 350,
    days: 2
  }
];

// Casos de Sucesso / Vitrine de Projetos
export const SHOWCASE_PROJECTS: ProjectCase[] = [
  {
    id: "project-estapresente",
    title: "EStAPresente",
    category: "sistema",
    categoryLabel: "Sistema Web Sob Medida",
    description: "Sistema completo para gerenciamento de eventos, controle de salas de reuniões e venda de tickets para eventos pagos, garantindo uma gestão fluida para os organizadores e participantes.",
    tags: ["React", "Node.js", "Gestão de Tickets", "Pagamentos"],
    metrics: [
      { label: "Gestão Integrada", value: "100%" },
      { label: "Performance", value: "Alta" }
    ],
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80",
    highlights: [
      "Painel de controle para criação e edição de eventos pagos",
      "Controle de acesso e emissão de tickets seguros",
      "Interface otimizada para check-in rápido de participantes"
    ]
  },
  {
    id: "project-oab",
    title: "Sistema OAB",
    category: "sistema",
    categoryLabel: "Plataforma Institucional",
    description: "Plataforma institucional desenvolvida para atender as necessidades de gestão e organização de fluxos específicos, com foco em segurança, acessibilidade e performance.",
    tags: ["React", "TypeScript", "Segurança", "Performance"],
    metrics: [
      { label: "Acessibilidade", value: "Nota A" },
      { label: "Segurança", value: "Máxima" }
    ],
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1000&q=80",
    highlights: [
      "Desenvolvimento focado em segurança de dados sensíveis",
      "Acessibilidade garantida para todos os usuários",
      "Arquitetura escalável para alto volume de acessos simultâneos"
    ]
  }
];

// Etapas do Processo
export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Briefing & Diagnóstico Estratégico",
    description: "Entendemos a fundo o seu modelo de negócio, seu público-alvo, seus objetivos comerciais e a melhor estratégia para se destacar da concorrência."
  },
  {
    step: "02",
    title: "Design UI/UX & Prototipação no Figma",
    description: "Nossa agência parceira cria um design exclusivo e moderno. Você visualiza e aprova exatamente como o site vai ficar antes de escrevermos uma única linha de código."
  },
  {
    step: "03",
    title: "Desenvolvimento Frontend de Elite",
    description: "Transformamos o design aprovado em código limpo, ultra-rápido, responsivo e seguro com as melhores tecnologias do mercado (React, TypeScript, Tailwind)."
  },
  {
    step: "04",
    title: "Testes, Lançamento & Suporte",
    description: "Configuramos domínio, hospedagem, SEO, tags de marketing e colocamos seu projeto no ar com garantia de funcionamento e suporte dedicado."
  }
];

// Perguntas Frequentes (FAQ)
export const FAQ_ITEMS = [
  {
    question: "Como funciona a parceria com a empresa de design e marketing?",
    answer: "Você tem o melhor dos dois mundos sem a burocracia de lidar com várias pessoas separadas. O desenvolvedor cuida de toda a engenharia de código, performance técnica e integrações, enquanto a equipe parceira cuida da identidade visual, protótipo profissional no Figma, copy persuasiva e estratégias de marketing/SEO. O resultado é um produto final completo e pronto para vender."
  },
  {
    question: "Quanto tempo leva para o meu site ou sistema ficar pronto?",
    answer: "Depende do pacote escolhido: uma Landing Page costuma levar entre 5 e 10 dias úteis; um Site Institucional Completo entre 15 e 20 dias úteis; e Sistemas Web sob medida a partir de 30 dias, variando conforme a quantidade de telas e integrações necessárias. Definimos o cronograma exato antes de iniciar."
  },
  {
    question: "O site vai funcionar bem no celular e carregar rápido?",
    answer: "Com certeza! Adotamos o conceito 'Mobile-First': seu site é construído e testado primeiro para smartphones, garantindo que botões, textos e imagens fiquem perfeitos em qualquer tamanho de tela, com carregamento instantâneo em menos de 1 segundo."
  },
  {
    question: "Preciso pagar alguma mensalidade obrigatória?",
    answer: "Não! O desenvolvimento do site é um valor único acordado no fechamento. Você é o único dono do seu projeto. Os únicos custos recorrentes são os normais da internet: registro de domínio (cerca de R$ 40/ano no Registro.br) e hospedagem (muitas vezes gratuita ou a partir de R$ 20/mês). Se quiser suporte ou manutenções mensais opcionais, temos planos dedicados."
  },
  {
    question: "Quais são as formas e condições de pagamento?",
    answer: "Trabalhamos normalmente com sinal de 50% para início e 50% na entrega e aprovação final, além de opções de parcelamento no cartão de crédito via link de pagamento seguro ou PIX com desconto."
  },
  {
    question: "Vocês me ajudam a colocar o site no ar (domínio e hospedagem)?",
    answer: "Sim, fazemos todo o processo de deploy, apontamento de DNS do domínio, certificados SSL de segurança (cadeado verde HTTPS) e deixamos tudo 100% funcionando para você sem nenhuma dor de cabeça técnica."
  }
];
