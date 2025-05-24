import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaWordpress,
  FaNpm,
  FaGitAlt,
  FaChrome,
} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiTampermonkey,
} from "react-icons/si";

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skills = [
    { name: "HTML5", icon: <FaHtml5 />, color: "text-[#e34f26]" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "text-[#1572b6]" },
    { name: "JavaScript", icon: <FaJs />, color: "text-[#f7df1e]" },
    { name: "React", icon: <FaReact />, color: "text-[#61dafb]" },
    { name: "TailwindCSS", icon: <SiTailwindcss />, color: "text-[#38b2ac]" },
    { name: "Node.js", icon: <FaNodeJs />, color: "text-[#339933]" },
    {
      name: "Express",
      icon: <SiExpress />,
      color: "text-gray-600 dark:text-gray-300",
    },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-[#47a248]" },

    { name: "WordPress", icon: <FaWordpress />, color: "text-[#21759b]" },
    { name: "Git", icon: <FaGitAlt />, color: "text-[#f05032]" },
    { name: "NPM", icon: <FaNpm />, color: "text-[#cb3837]" },

    { name: "VS Code", icon: <VscVscode />, color: "text-[#007acc]" },

    { name: "Tampermonkey", icon: <SiTampermonkey />, color: "text-[#000000]" },
    { name: "Chrome Extensions", icon: <FaChrome />, color: "text-[#4285f4]" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="section bg-gray-50 dark:bg-dark-background/40"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Skills
          </motion.h2>
          <motion.p
            className="mt-4 max-w-xl mx-auto text-light-foreground/80 dark:text-dark-foreground/80"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A comprehensive list of technologies and tools I work with
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={item}
              className="card flex flex-col items-center justify-center py-8 hover:shadow-lg group"
            >
              <div
                className={`text-4xl md:text-5xl mb-4 ${skill.color} group-hover:scale-110 transition-transform duration-300`}
              >
                {skill.icon}
              </div>
              <h3 className="text-sm font-medium">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
