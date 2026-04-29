import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Github, 
  ExternalLink, 
  Code2, 
  Layers, 
  Database, 
  Server, 
  Layout, 
  ShieldCheck, 
  FileSpreadsheet, 
  Smartphone,
  Zap,
  Box,
  Lock,
  Search,
  ChevronRight,
  Maximize2
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";

interface Tech {
  name: string;
  icon: React.ReactNode;
}

interface Credentials {
  username: string;
  password: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  techs: Tech[];
  github: string;
  githubBackend?: string;
  demo: string;
  image: string;
  images: string[];
  featured?: boolean;
  credentials?: Credentials;
}

const Projects = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "estoque",
      title: "Gerenciador de Estoque",
      description: t("projects.estoque.desc"),
      shortDescription: "Sistema corporativo de controle patrimonial e gestão de ativos.",
      featured: true,
      credentials: {
        username: "tester",
        password: "123456"
      },
      techs: [
        { name: "React 18", icon: <Layout className="w-3 h-3" /> },
        { name: "TypeScript", icon: <Box className="w-3 h-3" /> },
        { name: "Node.js", icon: <Server className="w-3 h-3" /> },
        { name: "Fastify", icon: <Zap className="w-3 h-3" /> },
        { name: "Prisma ORM", icon: <Layers className="w-3 h-3" /> },
        { name: "PostgreSQL", icon: <Database className="w-3 h-3" /> },
        { name: "Zod", icon: <ShieldCheck className="w-3 h-3" /> },
        { name: "Tailwind CSS", icon: <Layout className="w-3 h-3" /> },
        { name: "TanStack Query", icon: <Zap className="w-3 h-3" /> },
        { name: "Excel JS", icon: <FileSpreadsheet className="w-3 h-3" /> },
        { name: "RBAC", icon: <Lock className="w-3 h-3" /> },
      ],
      github: "https://github.com/lucas-joakinson/frontend-estoque",
      githubBackend: "https://github.com/lucas-joakinson/backend-estoque",
      demo: "https://estoque-lj-dev.vercel.app/",
      image: "images/Estoque/Dashboard.png",
      images: [
        "images/Estoque/Dashboard.png",
        "images/Estoque/Gestão Ativos.png",
        "images/Estoque/Gestão de Usuários.png"
      ]
    },
    {
      id: "taskify",
      title: "Taskify",
      description: t("projects.taskify.desc"),
      shortDescription: "Gerenciamento de tarefas intuitivo com sistema Kanban.",
      techs: [
        { name: "React", icon: <Layout className="w-3 h-3" /> },
        { name: "TypeScript", icon: <Box className="w-3 h-3" /> },
        { name: "Tailwind CSS", icon: <Layout className="w-3 h-3" /> },
        { name: "Framer Motion", icon: <Zap className="w-3 h-3" /> },
        { name: "Drag & Drop", icon: <Layers className="w-3 h-3" /> },
      ],
      github: "https://github.com/lucas-joakinson/taskify",
      demo: "https://taskify-demo-lj.vercel.app/",
      image: "images/Taskify/Screenshot_2.png",
      images: [
        "images/Taskify/Screenshot_2.png",
        "images/Taskify/Screenshot_3.png",
        "images/Taskify/Screenshot_4.png"
      ]
    },
    {
      id: "dashy",
      title: "Dashy_",
      description: t("projects.dashy.desc"),
      shortDescription: "Dashboard analítico integrado a um ecossistema de e-commerce.",
      techs: [
        { name: "React", icon: <Layout className="w-3 h-3" /> },
        { name: "TypeScript", icon: <Box className="w-3 h-3" /> },
        { name: "Tailwind CSS", icon: <Layout className="w-3 h-3" /> },
        { name: "Recharts", icon: <Zap className="w-3 h-3" /> },
        { name: "Context API", icon: <Layers className="w-3 h-3" /> },
      ],
      github: "https://github.com/lucas-joakinson/Dashy_",
      demo: "https://dashy-lj-dev.vercel.app/",
      image: "images/Dashy/Dashboard.png",
      images: [
        "images/Dashy/Dashboard.png",
        "images/Dashy/Produtos.png",
        "images/Dashy/Info Produto.png"
      ]
    }
  ];

  return (
    <section id={t("section.projects")} className="py-24 px-6 relative overflow-hidden">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16"
        >
          <h2 className="section-title mb-4">
            {t("projects.title")}
          </h2>
          <div className="w-20 h-1.5 bg-primary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={project.featured ? "sm:col-span-2 lg:col-span-1" : ""}
            >
              <Card 
                className={`group cursor-pointer overflow-hidden border-border bg-card/50 hover:border-primary/50 transition-all duration-300 relative h-full flex flex-col ${project.featured ? "ring-2 ring-primary/20" : ""}`}
                onClick={() => setSelectedProject(project)}
              >
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-primary text-primary-foreground font-semibold px-3 py-1 shadow-lg animate-pulse">
                      {t("projects.featured")}
                    </Badge>
                  </div>
                )}
                
                <div className="aspect-[16/10] relative overflow-hidden bg-muted flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-contain w-full h-full transition-transform duration-700 group-hover:scale-105 p-4"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="bg-primary text-primary-foreground p-3 rounded-full shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <Maximize2 className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <Code2 className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-bold tracking-tight">{project.title}</h3>
                  </div>
                  
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.techs.slice(0, 3).map((tech) => (
                      <span
                        key={tech.name}
                        className="text-[10px] px-2 py-1 rounded-md bg-secondary/50 text-secondary-foreground font-mono flex items-center gap-1.5"
                      >
                        {tech.icon}
                        {tech.name}
                      </span>
                    ))}
                    {project.techs.length > 3 && (
                      <span className="text-[10px] px-2 py-1 rounded-md bg-secondary/30 text-muted-foreground font-mono">
                        +{project.techs.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="w-[95vw] max-w-4xl p-0 overflow-hidden border-primary/20 bg-card/95 backdrop-blur-xl max-h-[95vh]">
          <DialogDescription className="sr-only">
            {selectedProject?.title} project details
          </DialogDescription>
          <AnimatePresence>
            {selectedProject && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col h-[95vh] max-h-[95vh]"
              >
                <div className="relative group flex-shrink-0">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {selectedProject.images.map((img, idx) => (
                        <CarouselItem key={idx}>
                          <div className="aspect-video w-full overflow-hidden bg-muted flex items-center justify-center">
                            <img
                              src={img}
                              alt={`${selectedProject.title} screenshot ${idx + 1}`}
                              className="w-full h-full object-contain p-2"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <div className="absolute bottom-4 right-4 flex gap-2">
                      <CarouselPrevious className="relative left-0 translate-y-0 h-8 w-8" />
                      <CarouselNext className="relative right-0 translate-y-0 h-8 w-8" />
                    </div>
                  </Carousel>
                </div>

                <div className="p-4 sm:p-6 overflow-y-auto custom-scrollbar flex-1 min-h-0">
                  <DialogHeader className="mb-4 sm:mb-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Code2 className="w-6 h-6 text-primary" />
                        </div>
                        <DialogTitle className="text-2xl sm:text-3xl font-bold">
                          {selectedProject.title}
                        </DialogTitle>
                      </div>
                      <div className="flex gap-1.5 sm:gap-2 flex-wrap">
                        <Button asChild size="sm" variant="outline" className="gap-2">
                          <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" />
                            Frontend
                          </a>
                        </Button>
                        {selectedProject.githubBackend && (
                          <Button asChild size="sm" variant="outline" className="gap-2">
                            <a href={selectedProject.githubBackend} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4" />
                              Backend
                            </a>
                        </Button>
                        )}
                        <Button asChild size="sm" className="gap-2">
                          <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                            Demo
                          </a>
                        </Button>
                      </div>
                    </div>
                  </DialogHeader>

                  <div className="grid grid-cols-1 gap-6 sm:gap-8">
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
                          {t("nav.about")}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                          {selectedProject.description}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {selectedProject.credentials && (
                        <div className="p-4 rounded-xl border-2 border-amber-500/30 bg-amber-500/5">
                          <div className="flex items-center gap-2 mb-3">
                            <Lock className="w-4 h-4 text-amber-600" />
                            <span className="text-sm font-semibold text-amber-700">Credenciais de Teste</span>
                          </div>
                          <div className="space-y-2 text-sm">
                            <div>
                              <span className="text-muted-foreground">Usuário: </span>
                              <span className="font-mono font-semibold text-foreground">{selectedProject.credentials.username}</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Senha: </span>
                              <span className="font-mono font-semibold text-foreground">{selectedProject.credentials.password}</span>
                            </div>
                          </div>
                        </div>
                      )}

                      <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
                          {t("projects.modal.techs")}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.techs.map((tech) => (
                            <Badge 
                              key={tech.name} 
                              variant="secondary" 
                              className="px-2.5 py-1 flex items-center gap-2 bg-secondary/50 hover:bg-secondary transition-colors"
                            >
                              <span className="text-primary">{tech.icon}</span>
                              <span className="text-[11px] font-medium">{tech.name}</span>
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                        <div className="flex items-center gap-3 mb-2">
                          <Zap className="w-4 h-4 text-primary" />
                          <span className="text-sm font-semibold">{t("projects.featured")}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {selectedProject.shortDescription}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
