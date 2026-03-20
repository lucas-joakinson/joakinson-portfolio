import { motion } from "framer-motion";
import { Code2, Layers, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  const highlights = [
    { icon: Code2, text: t("about.highlight1") },
    { icon: Layers, text: t("about.highlight2") },
    { icon: Zap, text: t("about.highlight3") },
  ];

  return (
    <section id={t("section.about")} className="py-24 px-6">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            {t("about.title")}
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-8" />

          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            {t("about.description1")}
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            {t("about.description2")}
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
