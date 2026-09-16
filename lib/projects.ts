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
    demoUrl: "https://chatgpu-nu.vercel.app/",
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
    demoUrl: "https://indibox.vercel.app/",
    githubUrl: "https://github.com/Victor-Gabriel-Barbosa/indibox",
    featured: false,
    year: "2024",
  },
  {
    slug: "livesnap",
    title: "LiveSnap",
    description:
      "Extensão para VS Code que rastreia sites inteiros e captura screenshots em alta resolução de cada página, direto do editor.",
    longDescription:
      "LiveSnap é uma extensão para o Visual Studio Code que rastreia (crawl) um site a partir de uma URL inicial e tira screenshots em alta resolução de cada página visitada, usando o Playwright para controlar um navegador Chromium. Nasceu como um script Python de linha de comando e foi portado para uma extensão nativa em TypeScript, acessível diretamente pela paleta de comandos do VS Code, com suporte a sessão autenticada para rastrear páginas que exigem login.",
    problem:
      "Documentar visualmente um site inteiro — para portfólio, QA visual ou registro de mudanças — normalmente exige abrir e capturar cada página manualmente, um processo lento e repetitivo, especialmente em sites com muitas rotas.",
    features: [
      "Rastreamento automático a partir de uma URL inicial, seguindo os links da página",
      "Screenshots em alta resolução da página inteira ou apenas do viewport",
      "Controle de domínio, restringindo ou liberando o rastreamento externo",
      "Limite de páginas e profundidade configuráveis",
      "Sessão autenticada com perfil persistente do Chromium",
      "Progresso em tempo real, cancelável, com log detalhado",
    ],
    technologies: ["TypeScript", "Playwright", "VS Code Extension API", "Node.js", "esbuild"],
    challenges: [
      "Rastrear páginas que exigem autenticação sem comprometer a experiência do usuário",
      "Lidar com conteúdo de carregamento tardio (lazy loading) antes da captura",
      "Evitar rastreamentos descontrolados em sites muito grandes",
    ],
    solutions: [
      "Perfil persistente do Chromium para reaproveitar sessões autenticadas (cookies, localStorage, IndexedDB)",
      "Scroll automático até o final da página antes de cada captura",
      "Limites configuráveis de profundidade e número máximo de páginas, com progresso cancelável",
    ],
    results: [
      "Publicada no VS Code Marketplace, disponível para instalação direta pelo editor",
      "Fluxo de captura sem sair do VS Code, com log detalhado no canal de saída",
      "Suporte a sites que exigem login, ampliando os casos de uso do rastreamento",
    ],
    image: "/livesnap_home.jpg",
    gallery: [
      { src: "/livesnap_progress.jpg", alt: "Barra de progresso do rastreamento" },
      { src: "/livesnap_settings.jpg", alt: "Configuração interativa via paleta de comandos" },
      { src: "/livesnap_output.jpg", alt: "Log no canal de saída do LiveSnap" },
    ],
    demoUrl: "https://marketplace.visualstudio.com/items?itemName=VictorGabrielBarbosa.livesnap",
    githubUrl: "https://github.com/Victor-Gabriel-Barbosa/livesnap",
    featured: true,
    year: "2025",
  },
  {
    slug: "musicz",
    title: "Musicz",
    description:
      "Aplicação web de streaming de música com Next.js, consumindo a API da Deezer, com playlists, curtidas, quiz musical e sincronização em nuvem.",
    longDescription:
      "Musicz é uma aplicação de streaming construída com Next.js e TypeScript que usa o catálogo público da Deezer para descobrir, ouvir e gerenciar músicas. Oferece playlists personalizadas, sistema de curtidas, um quiz musical interativo, tema claro/escuro e funciona como PWA instalável, com autenticação e sincronização de dados na nuvem via Firebase.",
    problem:
      "Ouvir e organizar música a partir de um catálogo público exige ferramentas que unam busca, biblioteca pessoal e sincronização entre dispositivos — algo que APIs abertas como a da Deezer não oferecem prontas para o usuário final.",
    features: [
      "Player com fila de reprodução, seek e controle de volume",
      "Busca de músicas, álbuns, artistas e playlists com debounce",
      "Biblioteca pessoal com criação, edição e exclusão de playlists",
      "Quiz musical com 10 rodadas geradas a partir do chart da Deezer",
      "Autenticação por email/senha e Google via Firebase Auth",
      "PWA instalável, com tema claro/escuro",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Firebase", "Deezer API"],
    challenges: [
      "Consumir a API pública da Deezer contornando restrições de CORS",
      "Sincronizar playlists e curtidas em tempo real entre dispositivos",
      "Manter a experiência funcional para usuários sem conta",
    ],
    solutions: [
      "Proxy interno em Next.js para intermediar as chamadas à API da Deezer",
      "Firestore para sincronização em tempo real de playlists e curtidas de usuários logados",
      "Fallback em localStorage para quem navega sem autenticação",
    ],
    results: [
      "Aplicação instalável como PWA, no desktop e no celular",
      "Quiz musical interativo com pontuação acumulada",
      "Sincronização em nuvem funcionando junto com uso offline via localStorage",
    ],
    image: "/musicz_home.jpg",
    gallery: [
      { src: "/musicz_player.jpg", alt: "Player de música do Musicz" },
      { src: "/musicz_quiz.jpg", alt: "Quiz musical interativo" },
      { src: "/musicz_library.jpg", alt: "Biblioteca de playlists do usuário" },
    ],
    demoUrl: "https://musicz-delta.vercel.app/",
    githubUrl: "https://github.com/Victor-Gabriel-Barbosa/Musicz",
    featured: true,
    year: "2025",
  },
  {
    slug: "pinboard",
    title: "Pinboard",
    description:
      "Pinterest Clone com backend em Java, permitindo criar, organizar em boards e pesquisar pins — projeto final de POO2.",
    longDescription:
      "Pinboard é o projeto final da disciplina de Programação Orientada a Objetos II (POO2), uma aplicação inspirada no Pinterest com backend em Java. Permite criar contas, publicar pins com imagem, descrição e tags, organizá-los em boards, salvar pins de outros usuários e pesquisar por tags, título ou descrição.",
    problem:
      "Como projeto de conclusão de disciplina, o desafio era aplicar conceitos de orientação a objetos em uma aplicação real e completa, cobrindo desde a modelagem de domínio em Java até a integração com frontend e persistência de dados, inspirada em uma plataforma de curadoria visual como o Pinterest.",
    features: [
      "Criação de conta e login",
      "Criação, visualização, edição e exclusão de pins",
      "Organização de pins em pastas (boards)",
      "Salvar pins de outros usuários",
      "Pesquisa de pins por tags, título ou descrição",
    ],
    technologies: ["Java", "Supabase", "HTML", "CSS"],
    challenges: [
      "Modelar o domínio (usuários, pins, boards) seguindo boas práticas de orientação a objetos",
      "Integrar o backend em Java com um frontend e um banco de dados para persistência",
      "Implementar busca de pins por múltiplos critérios (tags, título, descrição)",
    ],
    solutions: [
      "Arquitetura em camadas aplicando princípios de POO discutidos na disciplina",
      "Modelagem de entidades dedicadas para pins, boards e usuários",
      "Persistência de dados integrada ao backend para suportar as operações de CRUD",
    ],
    results: [
      "Aplicação publicada e acessível publicamente",
      "Projeto final aprovado na disciplina de POO2",
      "Fluxo completo de criação, organização e descoberta de pins",
    ],
    image: "https://github.com/user-attachments/assets/e9ed72e5-f600-4ed6-935b-6a12a6c11d13",
    gallery: [
      { src: "https://github.com/user-attachments/assets/3a0f67d0-f6a0-4e70-91fb-2816a611141d", alt: "Feed de pins do Pinboard" },
      { src: "https://github.com/user-attachments/assets/2ca6f614-d3ce-4558-b38f-08953165e77c", alt: "Detalhe de um pin" },
      { src: "https://github.com/user-attachments/assets/c3d6e8e4-43ef-4a8e-adf9-de24bfafe7ac", alt: "Organização de pins em boards" },
    ],
    demoUrl: "https://pinboard-dw09.onrender.com/",
    githubUrl: "#",
    featured: false,
    year: "2025",
  },
  {
    slug: "promogram-web",
    title: "Promogram Web",
    description:
      "Frontend Angular do Promogram, agregador de ofertas de produtos e cupons de desconto das principais lojas do Brasil.",
    longDescription:
      "Promogram Web é o frontend em Angular do Promogram, um agregador de ofertas de produtos e cupons de desconto das principais lojas do Brasil. Consome a API do Promogram Backend para exibir promoções sempre atualizadas, com busca, cópia de cupons em um clique e tema claro/escuro.",
    problem:
      "Encontrar as melhores ofertas e cupons de desconto exige checar várias lojas separadamente; o Promogram centraliza essas promoções em um só lugar, sempre atualizadas a partir da API do Promogram Backend.",
    features: [
      "Vitrine de produtos e cupons em destaque na página inicial",
      "Listagem completa de produtos com busca por nome",
      "Listagem completa de cupons com busca por nome/código",
      "Cópia de cupons de desconto em um clique",
      "Tema claro/escuro",
    ],
    technologies: ["Angular", "TypeScript", "Angular Material", "Tailwind CSS", "RxJS", "Vitest"],
    challenges: [
      "Manter a lista de ofertas sempre atualizada consumindo a API do Promogram Backend",
      "Combinar RxJS e signals do Angular de forma consistente no fluxo de dados",
      "Garantir uma experiência de busca fluida em produtos e cupons",
    ],
    solutions: [
      "Uso de toSignal para integrar streams RxJS ao sistema de signals do Angular",
      "Componentes standalone organizados por página e por serviço de dados",
      "Skeleton loaders para manter a interface responsiva durante o carregamento",
    ],
    results: [
      "Aplicação em produção na Vercel, consumindo a API em tempo real",
      "Cobertura de testes unitários com Vitest",
      "Interface com tema claro/escuro em toda a aplicação",
    ],
    image: "/promogram_home.jpg",
    gallery: [
      { src: "/promogram_produtos.jpg", alt: "Listagem de produtos com busca" },
      { src: "/promogram_cupons.jpg", alt: "Listagem de cupons com botão de copiar" },
      { src: "/promogram_dark.jpg", alt: "Tema escuro do Promogram Web" },
    ],
    demoUrl: "https://promogram-web.vercel.app",
    githubUrl: "https://github.com/Victor-Gabriel-Barbosa/promogram-web",
    featured: true,
    year: "2025",
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}