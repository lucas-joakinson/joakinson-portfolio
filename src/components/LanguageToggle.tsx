import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 p-1 bg-secondary rounded-lg border border-border">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage("pt")}
        className={`px-2 h-7 text-[10px] font-bold transition-all ${
          language === "pt"
            ? "bg-background text-primary shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        PT
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage("en")}
        className={`px-2 h-7 text-[10px] font-bold transition-all ${
          language === "en"
            ? "bg-background text-primary shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        EN
      </Button>
    </div>
  );
};
