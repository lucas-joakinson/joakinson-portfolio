import { motion } from "framer-motion";
import { Code2, Layers, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    { icon: Code2, text: "Código limpo e componentizado" },
    { icon: Layers, text: "Figma → Código pixel-perfect" },
    { icon: Zap, text: "Performance e acessibilidade" },
  ];

  return (
    <section id="sobre" className="py-24 px-6">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 w-fit bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-200 to-purple-600">
            Sobre mim
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-8" />

          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Sou desenvolvedor Frontend com experiência em ambiente corporativo,
            trabalhando com <strong className="text-foreground">React, JavaScript e TypeScript</strong> para criar
            interfaces modernas, escaláveis e com foco em performance.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            Tenho facilidade em transformar layouts do Figma em código fiel ao design,
            prezando por organização e componentização. Também possuo conhecimentos em 
            <strong className="text-foreground"> SQL e desenvolvimento backend</strong>.
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border glow-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
