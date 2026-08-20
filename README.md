<div align="center">

<img src="https://raw.githubusercontent.com/Victor-Gabriel-Barbosa/portfolio/main/public/foto_perfil.jpg" width="120" style="border-radius:50%" alt="Victor Gabriel" />

# Victor Gabriel — Portfólio

### Transformando ideias em produtos, código e experiências.

Portfólio profissional desenvolvido com **Next.js 16**, **React 19** e **TypeScript**, apresentando projetos, stack e trajetória de um desenvolvedor Full Stack em formação.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Deploy](https://img.shields.io/badge/deploy-Vercel-black?logo=vercel&logoColor=white)](https://portfolio-victor-gabriel.vercel.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

**[🔗 Acessar o portfólio ao vivo](https://portfolio-victor-gabriel.vercel.app/)**

</div>

---

## 📋 Índice

- [Sobre o projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Estrutura do projeto](#-estrutura-do-projeto)
- [Como executar localmente](#-como-executar-localmente)
- [Scripts disponíveis](#-scripts-disponíveis)
- [Projetos em destaque](#-projetos-em-destaque)
- [Sobre o autor](#-sobre-o-autor)
- [Roadmap](#-roadmap)
- [Contato](#-contato)
- [Licença](#-licença)

---

## ✨ Sobre o projeto

Este repositório contém o código-fonte do meu portfólio pessoal, uma aplicação **single-page** construída com o App Router do Next.js. O site reúne, em uma navegação fluida por âncoras, minha apresentação, projetos desenvolvidos, stack técnica, trajetória acadêmica/profissional e um canal de contato direto.

O foco do projeto foi unir **boa experiência de uso** (animações sutis, tema claro/escuro, layout responsivo) com **código organizado e tipado**, separando claramente conteúdo (`lib/`), interface (`components/`) e páginas (`app/`).

## 🧭 Seções do site

| Seção | Descrição |
| --- | --- |
| **Início** | Apresentação com animação de digitação, CTA para projetos/contato e links sociais |
| **Sobre** | Bio resumida, destaques de atuação e números (projetos, repositórios, tempo de curso) |
| **Projetos** | Grid de projetos com case studies completos (problema, features, desafios, soluções e resultados) |
| **Skills** | Tecnologias organizadas por categoria (Frontend, Backend, Mobile, Ferramentas) |
| **Trajetória** | Linha do tempo com formação acadêmica, monitorias, certificações e projetos autorais |
| **Contato** | Formulário validado + links diretos para e-mail, GitHub e LinkedIn |

## 🚀 Funcionalidades

- 🌗 Alternância de tema **claro/escuro** com persistência (`next-themes`)
- ⌨️ Animação de **digitação** rotativa no hero
- 🌠 Efeito de fundo animado (**meteoros**) na seção inicial
- 🎬 Animações de **entrada ao rolar** a página (`reveal on scroll`)
- 🗂️ Páginas de **case study** por projeto, com galeria de imagens
- 📝 Formulário de contato com **validação client-side** e feedback via toast (`sonner`)
- 📱 Layout **100% responsivo**, do mobile ao desktop
- 🔍 **SEO** otimizado com metadata estruturada e Open Graph
- 📊 Métricas de uso em produção via **Vercel Analytics**

## 🛠 Tecnologias

**Core**
- [Next.js 16](https://nextjs.org/) — App Router
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)

**UI & Estilização**
- [Tailwind CSS 4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) (estilo `base-nova`, sobre [Base UI](https://base-ui.com/))
- Componentes [Magic UI](https://magicui.design/) — `Meteors`, `TypingAnimation`, `Backlight`, `AnimatedThemeToggler`
- [lucide-react](https://lucide.dev/) — ícones
- [next-themes](https://github.com/pacocoursey/next-themes) — tema claro/escuro

**Animações & UX**
- [Motion](https://motion.dev/) (Framer Motion)
- [Sonner](https://sonner.emilkowal.ski/) — notificações toast

**Infraestrutura**
- [Vercel](https://vercel.com/) — hospedagem e deploy contínuo
- [@vercel/analytics](https://vercel.com/docs/analytics) — analytics de produção

## 📁 Estrutura do projeto

```
portfolio/
├── app/
│   ├── globals.css             # tema, tokens de cor e estilos globais
│   ├── layout.tsx              # layout raiz, fontes e metadata
│   └── page.tsx                # composição das seções da home
├── components/
│   ├── sections/               # hero, about, projects, skills, experience, contact
│   ├── ui/                     # componentes shadcn/ui + Magic UI
│   ├── contact-form.tsx        # formulário de contato com validação
│   ├── project-card.tsx        # card de projeto no grid
│   ├── project-details.tsx     # case study completo do projeto
│   └── navbar.tsx / footer.tsx # barra de navegação e rodapé
├── lib/
│   ├── content.ts              # skills, timeline, stats e links sociais
│   ├── projects.ts             # dados dos projetos em destaque
│   ├── types.ts                # tipagens compartilhadas
│   └── utils.ts
├── public/                     # imagens dos projetos e assets estáticos
├── components.json             # configuração do shadcn/ui
└── package.json
```

## 💻 Como executar localmente

**Pré-requisitos:** [Node.js 20.9+](https://nodejs.org/) (exigido pelo Next.js 16) e npm (ou pnpm/yarn, se preferir).

```bash
# 1. Clone o repositório
git clone https://github.com/Victor-Gabriel-Barbosa/portfolio.git
cd portfolio

# 2. Instale as dependências
npm install

# 3. Rode o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) para ver o resultado.

## 📦 Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor local em modo desenvolvimento |
| `npm run build` | Gera a build de produção otimizada |
| `npm run start` | Serve a build de produção já gerada |

## 🏆 Projetos em destaque

Alguns dos projetos apresentados no portfólio:

<table>
<tr>
<td width="50%">
<img src="https://raw.githubusercontent.com/Victor-Gabriel-Barbosa/portfolio/main/public/chatgpu_home.jpg" width="100%" alt="ChatGPU" /><br/>
<strong>ChatGPU</strong> — Chat de IA rodando 100% no navegador via WebLLM (MLC), com aceleração por GPU quando disponível.<br/>
<sub>TypeScript · Node.js · WebLLM</sub><br/>
<a href="https://github.com/Victor-Gabriel-Barbosa/chatgpu">🔗 código-fonte</a>
</td>
<td width="50%">
<img src="https://raw.githubusercontent.com/Victor-Gabriel-Barbosa/portfolio/main/public/promohubs_home.jpg" width="100%" alt="PromoHubs" /><br/>
<strong>PromoHubs</strong> — Ecossistema com bot de Telegram (OCR de notas fiscais) e API REST com scrapers, agregando promoções de Telegram, Kabum e Steam.<br/>
<sub>Python · FastAPI · Telethon · Playwright</sub><br/>
<a href="https://github.com/Victor-Gabriel-Barbosa/FrontendPromohubs">🔗 código-fonte</a>
</td>
</tr>
<tr>
<td width="50%">
<img src="https://raw.githubusercontent.com/Victor-Gabriel-Barbosa/portfolio/main/public/echo_home.jpg" width="100%" alt="Echo" /><br/>
<strong>Echo</strong> — App Android para registro e compartilhamento de itens perdidos e achados, com mapa interativo, chat em tempo real e notificações push.<br/>
<sub>Kotlin · Firebase · Maps SDK</sub><br/>
<a href="https://github.com/Victor-Gabriel-Barbosa/Echo">🔗 código-fonte</a>
</td>
<td width="50%">
<img src="https://raw.githubusercontent.com/Victor-Gabriel-Barbosa/portfolio/main/public/indibox_home.jpg" width="100%" alt="IndiBox" /><br/>
<strong>IndiBox</strong> — Plataforma web inspirada no itch.io para divulgação e descoberta de jogos indie gratuitos.<br/>
<sub>TypeScript · Next.js · Supabase</sub><br/>
<a href="https://github.com/Victor-Gabriel-Barbosa/indibox">🔗 código-fonte</a>
</td>
</tr>
</table>

> Os case studies completos (problema, funcionalidades, desafios, soluções e resultados) estão disponíveis no [portfólio](https://portfolio-victor-gabriel.vercel.app/#projetos).

## 👤 Sobre o autor

Estudante de **Sistemas de Informação** na Universidade Federal de Uberlândia (UFU), com foco em desenvolvimento **Full Stack** e interesse crescente em **Inteligência Artificial aplicada**.

- 🎓 Bacharelado em Sistemas de Informação — UFU (2023–presente)
- 👨‍🏫 Monitor voluntário de Algoritmos/POO e instrutor voluntário de desenvolvimento web para escolas públicas (140h)
- 📜 Certificação em Cloud Services com Swift — Instituto de Pesquisas Eldorado
- 🧩 Stack: TypeScript, JavaScript, React, Next.js, Python, FastAPI, Kotlin, entre outras

## 📌 Roadmap

Ideias para próximas iterações do projeto:

- [x] Integrar envio real de mensagens no formulário de contato (ex.: Resend ou uma API Route)
- [ ] Adicionar testes automatizados de componentes
- [ ] Disponibilizar versão em inglês (i18n)

## 📫 Contato

Estou aberto a oportunidades, projetos e colaborações.

- 📧 **E-mail:** [victorgabrielbarbosa88@gmail.com](mailto:victorgabrielbarbosa88@gmail.com)
- 💼 **LinkedIn:** [linkedin.com/in/victor-barbosa](https://linkedin.com/in/victor-barbosa)
- 🐙 **GitHub:** [github.com/Victor-Gabriel-Barbosa](https://github.com/Victor-Gabriel-Barbosa)
- 🌐 **Portfólio:** [portfolio-victor-gabriel.vercel.app](https://portfolio-victor-gabriel.vercel.app/)

## 📄 Licença

Este projeto está sob a licença **MIT** — veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

---

<div align="center">
<sub>Feito com 💙 por <a href="https://github.com/Victor-Gabriel-Barbosa">Victor Gabriel</a></sub>
</div>
