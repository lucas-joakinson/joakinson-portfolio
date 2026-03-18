import { motion } from "framer-motion";
import {
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiGit,
  SiFigma,
} from "react-icons/si";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { TbApi } from "react-icons/tb";
import { useLanguage } from "@/contexts/LanguageContext";

const Skills = () => {
  const { t } = useLanguage();

  const skills = [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: t("skills.item.api"), icon: TbApi, color: "#6366F1" },
    { name: t("skills.item.responsive"), icon: HiOutlineDevicePhoneMobile, color: "#22C55E" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#1572B6" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  ];

  return (
    <section id={t("section.skills")} className="py-24 px-6 bg-card/50">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 w-fit bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-200 to-purple-600">
            {t("skills.title")}
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-10" />
        </motion.div>

        <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {skills.map((skill, i) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                className="group relative p-4 sm:p-6 rounded-xl border border-border bg-card text-center hover:border-primary/50 transition-colors cursor-default flex flex-col items-center justify-center min-h-[120px] sm:min-h-[140px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -4 }}
              >
                <Icon
                  className="w-8 h-8 sm:w-10 sm:h-10 mb-3 transition-transform group-hover:scale-110 shrink-0"
                  style={{ color: skill.color }}
                />
                <span className="text-xs sm:text-sm font-semibold tracking-wide break-words max-w-full">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;