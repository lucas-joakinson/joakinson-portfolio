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
    "exp.role1": "Suporte Operacional de Sistemas",
    "exp.company1": "Plansul Planejamento e Consultoria",
    "exp.period1": "2024 — Presente",
    "exp.desc1": "Desenvolvimento de interfaces com React e TypeScript em ambiente corporativo. Componentização avançada, integração com APIs RESTful e participação em code reviews.",
    "exp.role2": "Jovem Aprendiz Administrativo",
    "exp.company2": "Plansul Planejamento e Consultoria",
    "exp.period2": "2023 — 2024",
    "exp.desc2": "Tradução de layouts do Figma para código pixel-perfect. Criação de landing pages responsivas e manutenção de projetos existentes com foco em performance.",
    
    // Projects
    "projects.title": "Projetos em Destaque",
    "projects.taskify.desc": `Taskify é uma aplicação de gerenciamento de tarefas baseada em quadro Kanban, desenvolvida para organizar fluxos de trabalho de forma visual e intuitiva.

A aplicação permite criar, mover e gerenciar tarefas entre diferentes estágios utilizando drag and drop, proporcionando uma experiência dinâmica e fluida. Conta também com funcionalidades como busca de tarefas, interface responsiva e uma estrutura baseada em componentes reutilizáveis.`,
    "projects.dashy.desc": `Dashy_ é uma aplicação que combina um dashboard de dados com uma simulação de e-commerce, permitindo a visualização e análise de informações de produtos e usuários.

O sistema apresenta métricas em tempo real, listagem de produtos e filtros dinâmicos de busca, proporcionando uma navegação eficiente e organizada. A arquitetura foi pensada para ser escalável, com foco em componentização e reutilização de código.`,
    "projects.cta.github": "GitHub",
    "projects.cta.demo": "Demo",
    
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
    "exp.role1": "Systems Operational Support",
    "exp.company1": "Plansul Planejamento e Consultoria",
    "exp.period1": "2024 — Present",
    "exp.desc1": "Development of interfaces with React and TypeScript in a corporate environment. Advanced componentization, RESTful API integration, and participation in code reviews.",
    "exp.role2": "Administrative Apprentice",
    "exp.company2": "Plansul Planejamento e Consultoria",
    "exp.period2": "2023 — 2024",
    "exp.desc2": "Translating Figma layouts into pixel-perfect code. Creating responsive landing pages and maintaining existing projects with a focus on performance.",
    
    // Projects
    "projects.title": "Featured Projects",
    "projects.taskify.desc": `Taskify is a task management application based on a Kanban board, designed to organize workflows in a visual and intuitive way.

It allows users to create, move, and manage tasks across different stages using drag-and-drop interactions, delivering a dynamic and smooth user experience. It also includes features such as task search, responsive design, and a component-based architecture.`,
    "projects.dashy.desc": `Dashy_ is an application that combines a data dashboard with an e-commerce simulation, enabling the visualization and analysis of product and user information.

It features real-time metrics, product listings, and dynamic search filters, providing an efficient and structured browsing experience. The architecture is designed to be scalable, focusing on componentization and code reusability.`,
    "projects.cta.github": "GitHub",
    "projects.cta.demo": "Demo",
    
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
