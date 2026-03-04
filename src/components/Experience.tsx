import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Suporte Operacional de Sistemas",
    company: "Plansul Planejamento e Consultoria",
    period: "2024 — Presente",
    description:
      "Desenvolvimento de interfaces com React e TypeScript em ambiente corporativo. Componentização avançada, integração com APIs RESTful e participação em code reviews.",
    techs: ["React","React Native", "TypeScript", "Tailwind CSS", "REST APIs", "Git", "PostgreSQL"],
  },
  {
    role: "Jovem Aprendiz Administrativo",
    company: "Plansul Planejamento e Consultoria",
    period: "2023 — 2024",
    description:
      "Tradução de layouts do Figma para código pixel-perfect. Criação de landing pages responsivas e manutenção de projetos existentes com foco em performance.",
    techs: ["HTML", "CSS", "JavaScript", "Figma", "React"],
  }
];

const Experience = () => {
  return (
    <section id="experiencia" className="py-24 px-6">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 w-fit bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-200 to-purple-600">
            Experiência Profissional
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-[19px] sm:left-[23px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                className="relative pl-12 sm:pl-14"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className="absolute left-0 top-1 w-[39px] h-[39px] sm:w-[47px] sm:h-[47px] rounded-full bg-secondary border border-border flex items-center justify-center glow-border">
                  <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>

                <div className="p-5 sm:p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors glow-border">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                    <h3 className="text-lg font-semibold">{exp.role}</h3>
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-sm text-primary font-medium mb-3">
                    {exp.company}
                  </p>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.techs.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
