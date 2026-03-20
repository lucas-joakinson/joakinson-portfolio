import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  const { t } = useLanguage();

  const navItems = [
    { label: t("nav.about"), href: `#${t("section.about")}` },
    { label: t("nav.experience"), href: `#${t("section.experience")}` },
    { label: t("nav.projects"), href: `#${t("section.projects")}` },
    { label: t("nav.skills"), href: `#${t("section.skills")}` },
    { label: t("nav.contact"), href: `#${t("section.contact")}` },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container max-w-6xl flex items-center justify-between h-16 px-6">
        <a
          href="https://instagram.com/lucasjoakinsonart"
          target="_blank"
          className="flex items-center font-bold text-xl tracking-tight"
        >
          <span className="text-primary font-mono">{">_"}</span>

          <span className="bg-gradient-to-r ml-2 from-primary via-purple-400 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_6px_rgba(168,85,247,0.4)]">
            Lucas Joakinson
          </span>
          <span className="animate-pulse text-primary font-mono">_</span>
        </a>
        
        <div className="flex items-center gap-4 sm:gap-8">
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LanguageToggle />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
