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

const skills = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Consumo de APIs", icon: TbApi, color: "#6366F1" },
  { name: "Responsividade", icon: HiOutlineDevicePhoneMobile, color: "#22C55E" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#1572B6" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
];

const Skills = () => {
  return (
    <section id="especialidades" className="py-24 px-6 bg-card/50">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            <span className="text-primary">Especialidades</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-10" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {skills.map((skill, i) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                className="group relative p-6 rounded-xl border border-border bg-card text-center hover:border-primary/50 transition-colors cursor-default"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -4 }}
              >
                <Icon
                  className="w-10 h-10 mx-auto mb-3 transition-transform group-hover:scale-110"
                  style={{ color: skill.color }}
                />
                <span className="text-sm font-semibold tracking-wide">
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