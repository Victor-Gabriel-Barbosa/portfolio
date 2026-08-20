import type { SkillCategory, TimelineItem } from "@/lib/types"

export const skillCategories: SkillCategory[] = [
  { label: "Frontend & Web", skills: ["TypeScript", "JavaScript", "React", "Next.js", "HTML5", "CSS3"] },
  { label: "Backend & Dados", skills: ["Python", "FastAPI", "PostgreSQL", "MySQL", "Supabase", "Firebase"] },
  { label: "Mobile", skills: ["Kotlin", "Jetpack Compose", "Room", "SwiftUI"] },
  { label: "Ferramentas & IDEs", skills: ["VS Code", "IntelliJ IDEA", "Android Studio", "NetBeans"] },
  { label: "Linguagens de programação", skills: ["Java", "C", "C++", "PHP", "Swift", "React Native"] },
  { label: "DevOps & Cloud", skills: ["Git", "GitHub", "Docker", "Vercel", "Linux", "CI/CD"] },
  
]

export const timeline: TimelineItem[] = [
  {
    period: "2020 — 2022",
    title: "Curso Técnico Integrado em Logística",
    organization: "Instituto Federal do Triângulo Mineiro (IFTM)",
    description:
      "Formação técnica integrada ao ensino médio, com base em fundamentos de logística e gestão de processos.",
    type: "education",
  },
  {
    period: "2023 — Presente",
    title: "Bacharelado em Sistemas de Informação",
    organization: "Universidade Federal de Uberlândia (UFU)",
    description:
      "Formação com foco em desenvolvimento de software, estruturas de dados, banco de dados e engenharia de sistemas. Atualmente no 7º período, com conclusão prevista para 2027.",
    type: "education",
  },
  {
    period: "2024 — 2025",
    title: "Monitor Acadêmico Voluntário",
    organization: "UFU — Campus Monte Carmelo",
    description:
      "Monitoria voluntária em Algoritmos e Programação II e Programação Orientada a Objetos I, auxiliando alunos no aprendizado de lógica de programação e conceitos de POO.",
    type: "experience",
  },
  {
    period: "Fev — Mar 2025",
    title: "Certificação em Programação Swift",
    organization: "Instituto de Pesquisas Eldorado",
    description:
      "Formação de 100 horas em práticas de Cloud Services usando Swift, com ênfase em Serviços Cognitivos.",
    type: "education",
  },
  {
    period: "Fev — Dez 2025",
    title: "Instrutor Voluntário de Desenvolvimento Web",
    organization: "UFU/FACOM — Projeto Jovens Programadores 2025",
    description:
      "Aulas de desenvolvimento web para alunos do ensino fundamental e médio de escolas públicas e particulares de Monte Carmelo e região, totalizando 140 horas.",
    type: "experience",
  },
  {
    period: "2025",
    title: "PromoHubs — Ecossistema de Promoções",
    organization: "Projeto autoral",
    description:
      "Bot de Telegram com OCR de notas fiscais e API REST com scrapers, agregando promoções de Telegram, Kabum e Steam.",
    type: "project",
  },
  {
    period: "2025",
    title: "ChatGPU — IA no Navegador",
    organization: "Projeto autoral",
    description:
      "Chat de IA rodando 100% no navegador via WebLLM (MLC), com aceleração por GPU quando disponível.",
    type: "project",
  },
]

export const stats = [
  { value: "4", label: "Projetos completos publicados" },
  { value: "50", label: "Repositórios no GitHub" },
  { value: "3", label: "Anos cursando Sistemas de Informação" },
]

export const highlights = [
  "Sistemas de Informação",
  "Desenvolvimento Full Stack",
  "Desenvolvimento Mobile",
  "Aplicações Web",
  "Inteligência Artificial",
]

export const socials = {
  github: "https://github.com/Victor-Gabriel-Barbosa",
  linkedin: "https://linkedin.com/in/victor-barbosa",
  email: "victorgabrielbarbosa88@gmail.com",
}
