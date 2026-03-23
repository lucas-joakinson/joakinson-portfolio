import { motion } from "framer-motion";
import { Github, ExternalLink, Code2 } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: "Taskify",
      description: t("projects.taskify.desc"),
      techs: ["React","Typescript", "Tailwind CSS", "Mockoon"],
      github: "https://github.com/lucas-joakinson/taskify",
      demo: "https://taskify-demo-lj.vercel.app/",
      image: "images/telalogin.png"
    },
    {
      title: "Dashy_",
      description: t("projects.dashy.desc"),
      techs: ["React","Typescript", "Tailwind CSS", "JSONDummyAPI"],
      github: "https://github.com/lucas-joakinson/Dashy_",
      demo: "https://dashy-lj-dev.vercel.app/",
      image: "images/dashy.png"
    }
  ];

  return (
    <section id={t("section.projects")} className="py-24 px-6">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            {t("projects.title")}
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="overflow-hidden border-border bg-card hover:border-primary/30 transition-all glow-border h-full flex flex-col">
                <div className="aspect-video relative overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-background/20 backdrop-blur-md rounded-full hover:bg-background/40 transition-colors"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-background/20 backdrop-blur-md rounded-full hover:bg-background/40 transition-colors"
                    >
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-primary" />
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 whitespace-pre-line">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techs.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="gap-3 pt-0">
                  <Button asChild variant="outline" size="sm" className="w-full gap-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      {t("projects.cta.github")}
                    </a>
                  </Button>
                  <Button asChild size="sm" className="w-full gap-2">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      {t("projects.cta.demo")}
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
