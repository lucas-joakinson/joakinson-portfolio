import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  const contacts = [
    {
      icon: Mail,
      label: t("contact.label.email"),
      value: "lucasjoakinson14@gmail.com",
      href: "mailto:lucasjoakinson14@gmail.com",
    },
    {
      icon: Github,
      label: t("contact.label.github"),
      value: "lucas-joakinson",
      href: "https://github.com/lucas-joakinson",
    },
    {
      icon: Linkedin,
      label: t("contact.label.linkedin"),
      value: "Lucas Joakinson",
      href: "https://linkedin.com/in/lucasjoakinson",
    },
  ];

  return (
    <section id={t("section.contact")} className="py-24 px-6 bg-card/50">
      <div className="container max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title mx-auto">
            {t("contact.title")}
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-4 mx-auto" />
          <p className="text-muted-foreground mb-10">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {contacts.map((contact, i) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-5 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -3 }}
            >
              <contact.icon className="w-5 h-5 text-primary" />
              <div className="text-left">
                <div className="text-xs text-muted-foreground">{contact.label}</div>
                <div className="text-sm font-medium group-hover:text-primary transition-colors">
                  {contact.value}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
