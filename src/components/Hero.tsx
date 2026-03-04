import { motion } from "framer-motion";
import { Github, ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

const useTypewriter = (text: string, speed = 50, delay = 800) => {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return { displayed, done };
};

const Hero = () => {
  const { displayed, done } = useTypewriter(
    "Construindo Interfaces Modernas e Escaláveis",
    45,
    900
  );

  const fullPrefix = "Construindo Interfaces ";
  const fullHighlight = "Modernas e Escaláveis";

  const renderTyped = () => {
    const prefixEnd = fullPrefix.length;
    const highlightEnd = prefixEnd + fullHighlight.length;

    if (displayed.length <= prefixEnd) {
      return <>{displayed}</>;
    } else if (displayed.length <= highlightEnd) {
      return (
        <>
          {displayed.slice(0, prefixEnd)}
          <span className="text-primary">{displayed.slice(prefixEnd)}</span>
        </>
      );
    } else {
      return (
        <>
          {displayed.slice(0, prefixEnd)}
          <span className="text-primary">{displayed.slice(prefixEnd, highlightEnd)}</span>
          {displayed.slice(highlightEnd)}
        </>
      );
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container relative z-10 max-w-4xl text-center px-6 py-20">
      
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block mb-6 px-4 py-1.5 rounded-full border border-border bg-secondary text-primary text-sm font-mono font-medium tracking-wide">
            Frontend Developer
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter mb-4 glow-text bg-clip-text text-transparent bg-gradient-to-b from-foreground via-foreground to-primary/100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Lucas Joakinson
        </motion.h1>

        <motion.h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight mb-8 text-muted-foreground/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {renderTyped()}
          <span className={`inline-block w-[3px] h-[1em] bg-primary ml-1 align-middle ${done ? "animate-pulse" : ""}`} />
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Frontend Developer com experiência corporativa, focado em React,
          componentização, integração com APIs e criação de interfaces
          performáticas.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <a
            href="#projetos"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-base hover:brightness-110 transition-all glow-button"
          >
            Ver Projetos
            <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/lucas-joakinson"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-border bg-secondary text-secondary-foreground font-semibold text-base hover:bg-muted transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
