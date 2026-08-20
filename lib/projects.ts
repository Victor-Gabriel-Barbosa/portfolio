import type { Project } from "@/lib/types"

export const projects: Project[] = [
  {
    slug: "chatgpu",
    title: "ChatGPU",
    description:
      "Chat de IA rodando 100% no navegador via WebLLM (MLC), com aceleração por GPU quando disponível.",
    longDescription:
      "O ChatGPU é uma aplicação de conversação que roda modelos de linguagem inteiramente no navegador, sem enviar dados para servidores externos. Utilizando WebLLM (MLC), o processamento acontece localmente no dispositivo do usuário, com aceleração por GPU quando disponível, garantindo privacidade total e respostas em tempo real.",
    problem:
      "Ferramentas de IA conversacional dependem de servidores remotos, gerando custos de infraestrutura, latência e preocupações com a privacidade dos dados enviados.",
    features: [
      "Execução de modelos de IA 100% no navegador",
      "Aceleração por GPU quando disponível",
      "Streaming de respostas token a token",
      "Histórico de conversas persistido localmente",
      "Seleção entre diferentes modelos de linguagem",
    ],
    technologies: ["TypeScript", "Node.js", "WebLLM"],
    challenges: [
      "Carregar e inicializar modelos de vários gigabytes de forma performática",
      "Gerenciar memória da GPU sem travar a aba do navegador",
      "Oferecer fallback para dispositivos sem suporte a aceleração por GPU",
    ],
    solutions: [
      "Carregamento progressivo com cache local",
      "Isolamento da inferência da thread principal",
      "Detecção de capacidade do dispositivo com mensagens claras ao usuário",
    ],
    results: [
      "Respostas geradas sem custo de servidor",
      "Privacidade total: nenhum dado sai do dispositivo",
      "Latência reduzida após o carregamento inicial do modelo",
    ],
    image: "/chatgpu_home.jpg",
    gallery: [
      { src: "/chatgpu_chat.jpg", alt: "Tela de conversa do ChatGPU" },
      { src: "/chatgpu_models.jpg", alt: "Seleção de modelos de IA" },
      { src: "/chatgpu_settings.jpg", alt: "Painel de configurações" },
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/Victor-Gabriel-Barbosa/chatgpu",
    featured: true,
    year: "2025",
  },
  {
    slug: "promohubs",
    title: "PromoHubs",
    description:
      "Ecossistema com bot de Telegram (OCR de notas fiscais) e API REST com scrapers, agregando promoções de Telegram, Kabum e Steam.",
    longDescription:
      "O PromoHubs é um ecossistema que centraliza a busca por promoções. Um bot de Telegram funciona como camada de interação com o usuário, permitindo o registro de compras a partir do reconhecimento óptico de caracteres (OCR) em notas fiscais. Em paralelo, uma API REST realiza scraping automatizado de canais do Telegram, do Kabum e da Steam, agregando ofertas em um só lugar.",
    problem:
      "Encontrar boas promoções exige acompanhar manualmente diversos canais do Telegram e sites de e-commerce, e não há uma forma simples de registrar e organizar notas fiscais de compras já realizadas.",
    features: [
      "Bot de Telegram como camada de interação com o usuário",
      "OCR de notas fiscais para registro automático de compras",
      "Scraping automatizado de promoções em canais do Telegram",
      "Agregação de ofertas do Kabum e da Steam",
      "API REST para consumo centralizado dos dados",
    ],
    technologies: ["Python", "pyTelegramBotAPI", "Telethon", "FastAPI", "Playwright"],
    challenges: [
      "Extrair dados de notas fiscais com precisão via OCR",
      "Manter scrapers resilientes a mudanças na estrutura dos sites",
      "Orquestrar múltiplas fontes de dados em uma única API",
    ],
    solutions: [
      "Pipeline de OCR dedicado à leitura de notas fiscais",
      "Playwright para automação de navegador mais resiliente",
      "Telethon para leitura de canais do Telegram via API oficial",
    ],
    results: [
      "Centralização de promoções de múltiplas fontes em um único ecossistema",
      "Registro simplificado de compras via bot de Telegram",
      "Base pronta para futuras automações de notificação de ofertas",
    ],
    image: "/promohubs_home.jpg",
    gallery: [
      { src: "/promohubs_produtos.jpg", alt: "Bot de Telegram lendo nota fiscal" },
      { src: "/promohubs_cupom.jpg", alt: "Lista de promoções agregadas" },
      { src: "/promohubs_steam.jpg", alt: "Documentação da API REST" },
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/Victor-Gabriel-Barbosa/FrontendPromohubs",
    featured: true,
    year: "2025",
  },
  {
    slug: "echo",
    title: "Echo",
    description:
      "App Android para registro e compartilhamento de itens perdidos e achados, com mapa interativo, chat em tempo real e notificações push.",
    longDescription:
      "O Echo é um aplicativo Android que ajuda pessoas a registrar e encontrar itens perdidos ou achados. Usuários publicam itens em um mapa interativo, conversam em tempo real com quem encontrou ou perdeu um objeto, e recebem notificações push sobre atualizações relevantes.",
    problem:
      "Itens perdidos raramente voltam para seus donos porque não existe um canal simples e localizado para conectar quem perdeu com quem encontrou um objeto.",
    features: [
      "Registro de itens perdidos e achados",
      "Mapa interativo com a localização dos itens",
      "Chat em tempo real entre usuários",
      "Notificações push de atualizações",
      "Compartilhamento de itens entre usuários",
    ],
    technologies: ["Kotlin", "Firebase", "Maps SDK for Android"],
    challenges: [
      "Exibir e atualizar localizações em tempo real no mapa",
      "Sincronizar mensagens de chat de forma confiável entre dispositivos",
      "Gerenciar notificações push de forma eficiente",
    ],
    solutions: [
      "Integração com Maps SDK for Android para exibição interativa",
      "Firebase para sincronização em tempo real do chat",
      "Firebase Cloud Messaging para notificações push",
    ],
    results: [
      "Conexão facilitada entre quem perde e quem encontra itens",
      "Comunicação direta entre usuários dentro do app",
      "Experiência centrada em geolocalização",
    ],
    image: "/echo_home.jpg",
    gallery: [
      { src: "/echo_login.jpg", alt: "Mapa interativo com itens registrados" },
      { src: "/echo_local.jpg", alt: "Chat em tempo real no Echo" },
      { src: "/echo_chat.jpg", alt: "Notificação push do Echo" },
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/Victor-Gabriel-Barbosa/Echo",
    featured: false,
    year: "2024",
  },
  {
    slug: "indibox",
    title: "IndiBox",
    description:
      "Plataforma web inspirada no itch.io para divulgação e descoberta de jogos indie gratuitos.",
    longDescription:
      "O IndiBox é uma plataforma web inspirada no itch.io, criada para dar visibilidade a desenvolvedores independentes. Criadores publicam seus jogos gratuitos e jogadores descobrem novos títulos indie de forma simples e organizada.",
    problem:
      "Desenvolvedores indie de jogos gratuitos têm dificuldade em ganhar visibilidade fora de grandes plataformas, enquanto jogadores buscam um espaço dedicado à descoberta de jogos independentes.",
    features: [
      "Publicação de jogos indie gratuitos por desenvolvedores",
      "Catálogo para descoberta de novos jogos",
      "Páginas dedicadas para cada jogo",
      "Autenticação e gerenciamento de usuários",
      "Interface inspirada no itch.io",
    ],
    technologies: ["TypeScript", "Next.js", "Supabase"],
    challenges: [
      "Estruturar um catálogo de jogos fácil de navegar e escalável",
      "Gerenciar upload e organização de arquivos e mídias dos jogos",
      "Implementar autenticação e permissões de forma segura",
    ],
    solutions: [
      "Supabase para banco de dados, autenticação e armazenamento",
      "Next.js para renderização eficiente das páginas de catálogo",
      "Estrutura de dados pensada para facilitar buscas e filtros",
    ],
    results: [
      "Espaço dedicado à divulgação de jogos indie gratuitos",
      "Experiência de descoberta similar a plataformas consolidadas",
      "Base pronta para expansão futura da comunidade de jogos",
    ],
    image: "/indibox_home.jpg",
    gallery: [
      { src: "/indibox_biblioteca.jpg", alt: "Catálogo de jogos indie do IndiBox" },
      { src: "/indibox_sobre.jpg", alt: "Página de detalhe de um jogo" },
      { src: "/indibox_dev.jpg", alt: "Painel de publicação para desenvolvedores" },
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/Victor-Gabriel-Barbosa/indibox",
    featured: false,
    year: "2024",
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}
