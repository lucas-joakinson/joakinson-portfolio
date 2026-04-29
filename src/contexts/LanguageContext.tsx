import React, { createContext, useContext, useState } from "react";

type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    // Navbar
    "nav.about": "Sobre",
    "nav.experience": "Experiência",
    "nav.projects": "Projetos",
    "nav.skills": "Especialidades",
    "nav.contact": "Contato",
    "section.about": "sobre",
    "section.experience": "experiencia",
    "section.projects": "projetos",
    "section.skills": "especialidades",
    "section.contact": "contato",
    
    // Hero
    "hero.role": "Frontend Developer",
    "hero.title": "Lucas Joakinson",
    "hero.subtitle.prefix": "Construindo Interfaces ",
    "hero.subtitle.highlight": "Modernas e Escaláveis",
    "hero.description": "Frontend Developer com experiência corporativa, focado em React, componentização, integração com APIs e criação de interfaces performáticas.",
    "hero.cta.projects": "Ver Projetos",
    "hero.cta.github": "GitHub",
    
    // About
    "about.title": "Sobre mim",
    "about.description1": "Sou desenvolvedor Frontend com experiência em ambiente corporativo, trabalhando com React, JavaScript e TypeScript para criar interfaces modernas, escaláveis e com foco em performance.",
    "about.description2": "Tenho facilidade em transformar layouts do Figma em código fiel ao design, prezando por organização e componentização. Também possuo conhecimentos em SQL e desenvolvimento backend.",
    "about.highlight1": "Código limpo e componentizado",
    "about.highlight2": "Figma → Código pixel-perfect",
    "about.highlight3": "Performance e acessibilidade",
    
    // Experience
    "exp.title": "Experiência Profissional",
    "exp.role1": "Desenvolvedor Front-End (atuação interna)",
    "exp.company1": "Plansul Planejamento e Consultoria",
    "exp.period1": "2024 — Presente",
    "exp.desc1": "Desenvolvimento de interfaces com React e TypeScript em ambiente corporativo. Componentização avançada, integração com APIs RESTful e participação em code reviews.",
    "exp.role2": "Jovem Aprendiz Administrativo",
    "exp.company2": "Plansul Planejamento e Consultoria",
    "exp.period2": "2023 — 2024",
    "exp.desc2": "Tradução de layouts do Figma para código pixel-perfect. Criação de landing pages responsivas e manutenção de projetos existentes com foco em performance.",
    
    // Projects
    "projects.title": "Projetos em Destaque",
    "projects.estoque.desc": `Sistema full-stack de gestão de patrimônio com autenticação segura e RBAC granular. Frontend em React + TypeScript com TanStack Query para cache de dados, backend em Fastify com Prisma ORM e PostgreSQL. Importação em massa via Excel JS, auditoria completa com logs de operações, validação com Zod e interface responsiva com Tailwind CSS.`,
    "projects.taskify.desc": `App de gerenciamento de tarefas com drag-and-drop funcional e animações fluidas. Implementado com React, TypeScript e Framer Motion para transições suaves. Responsivo e otimizado para performance em qualquer dispositivo, com interface intuitiva usando Tailwind CSS.`,
    "projects.dashy.desc": `Dashboard analítico para e-commerce com gráficos interativos e filtros dinâmicos. Desenvolvido com React, TypeScript e Recharts para visualização de dados em tempo real. Context API para gerenciamento de estado e Tailwind CSS para interface responsiva e moderna.`,
    "projects.cta.github": "GitHub",
    "projects.cta.demo": "Demo",
    "projects.modal.techs": "Tecnologias",
    "projects.modal.visit": "Visitar Projeto",
    "projects.modal.gallery": "Galeria",
    "projects.featured": "Destaque",
    
    // Skills
    "skills.title": "Especialidades",
    "skills.item.api": "Consumo de APIs",
    "skills.item.responsive": "Responsividade",
    
    // Contact
    "contact.title": "Contato",
    "contact.subtitle": "Vamos conversar? Entre em contato por qualquer um dos canais abaixo!",
    "contact.label.email": "Email",
    "contact.label.github": "GitHub",
    "contact.label.linkedin": "LinkedIn",
    
    // Footer
    "footer.built": "Desenvolvido com",
  },
  en: {
    // Navbar
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",
    "section.about": "about",
    "section.experience": "experience",
    "section.projects": "projects",
    "section.skills": "skills",
    "section.contact": "contact",
    
    // Hero
    "hero.role": "Frontend Developer",
    "hero.title": "Lucas Joakinson",
    "hero.subtitle.prefix": "Building Modern and ",
    "hero.subtitle.highlight": "Scalable Interfaces",
    "hero.description": "Frontend Developer with corporate experience, focused on React, componentization, API integration, and creating high-performance interfaces.",
    "hero.cta.projects": "View Projects",
    "hero.cta.github": "GitHub",
    
    // About
    "about.title": "About me",
    "about.description1": "I am a Frontend developer with corporate experience, working with React, JavaScript, and TypeScript to create modern, scalable, and performance-focused interfaces.",
    "about.description2": "I excel at transforming Figma layouts into code that is faithful to the design, prioritizing organization and componentization. I also have knowledge in SQL and backend development.",
    "about.highlight1": "Clean and componentized code",
    "about.highlight2": "Figma → Pixel-perfect code",
    "about.highlight3": "Performance and accessibility",
    
    // Experience
    "exp.title": "Professional Experience",
    "exp.role1": "Front-End Developer (internal role)",
    "exp.company1": "Plansul Planejamento e Consultoria",
    "exp.period1": "2024 — Present",
    "exp.desc1": "Development of interfaces with React and TypeScript in a corporate environment. Advanced componentization, RESTful API integration, and participation in code reviews.",
    "exp.role2": "Administrative Apprentice",
    "exp.company2": "Plansul Planejamento e Consultoria",
    "exp.period2": "2023 — 2024",
    "exp.desc2": "Translating Figma layouts into pixel-perfect code. Creating responsive landing pages and maintaining existing projects with a focus on performance.",
    
    // Projects
    "projects.title": "Featured Projects",
    "projects.estoque.desc": `Full-stack asset management system with secure authentication and granular RBAC. React + TypeScript frontend with TanStack Query for data caching, Fastify backend with Prisma ORM and PostgreSQL. Bulk Excel imports with Excel JS, complete audit logs, Zod validation, and responsive UI with Tailwind CSS.`,
    "projects.taskify.desc": `Task management app with functional drag-and-drop and smooth animations. Built with React, TypeScript, and Framer Motion for seamless transitions. Responsive and performance-optimized across all devices with intuitive UI using Tailwind CSS.`,
    "projects.dashy.desc": `Analytical e-commerce dashboard with interactive charts and dynamic filters. Built with React, TypeScript, and Recharts for real-time data visualization. Context API for state management and Tailwind CSS for responsive, modern interface.`,
    "projects.cta.github": "GitHub",
    "projects.cta.demo": "Demo",
    "projects.modal.techs": "Technologies",
    "projects.modal.visit": "Visit Project",
    "projects.modal.gallery": "Gallery",
    "projects.featured": "Featured",
    
    // Skills
    "skills.title": "Skills",
    "skills.item.api": "API Consumption",
    "skills.item.responsive": "Responsiveness",
    
    // Contact
    "contact.title": "Contact",
    "contact.subtitle": "Let's talk? Get in touch through any of the channels below!",
    "contact.label.email": "Email",
    "contact.label.github": "GitHub",
    "contact.label.linkedin": "LinkedIn",
    
    // Footer
    "footer.built": "Built with",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("pt");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations["pt"]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
