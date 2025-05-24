import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaReact,
  FaWordpress,
  FaJsSquare,
  FaChrome,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

// Import project data
import { projectData } from "../data/projectData";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Filter projects based on active category
  const filteredProjects =
    activeCategory === "all"
      ? projectData
      : projectData.filter((project) => project.category === activeCategory);

  const categories = [
    { id: "all", name: "All Projects", icon: null },
    { id: "react", name: "React", icon: <FaReact /> },
    { id: "wordpress", name: "WordPress", icon: <FaWordpress /> },
    { id: "javascript", name: "JavaScript", icon: <FaJsSquare /> },
    { id: "extension", name: "Extensions", icon: <FaChrome /> },
  ];

  return (
    <section id="projects" ref={ref} className="section">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Projects
          </motion.h2>
          <motion.p
            className="mt-4 max-w-xl mx-auto text-light-foreground/80 dark:text-dark-foreground/80 md:text-xl"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Check out some of my recent work across different technologies and
            platforms.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Categories Sidebar */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-white dark:bg-dark-background/60 rounded-xl shadow-md p-4 sticky top-24">
              <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
                Categories
              </h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.id}>
                    <button
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                        activeCategory === category.id
                          ? "bg-light-primary/10 text-light-primary dark:bg-dark-primary/10 dark:text-dark-primary font-medium"
                          : "hover:bg-light-foreground/5 dark:hover:bg-dark-foreground/5"
                      }`}
                    >
                      {category.icon && (
                        <span className="text-xl">{category.icon}</span>
                      )}
                      <span>{category.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="lg:col-span-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="card group"
                  >
                    <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 w-full flex justify-between items-center">
                          <span className="text-white font-medium">
                            {project.title}
                          </span>
                          <div className="flex gap-2">
                            {project.repoUrl && (
                              <a
                                href={project.repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors text-white"
                              >
                                <FaGithub />
                              </a>
                            )}
                            {project.liveUrl && (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors text-white"
                              >
                                <FaExternalLinkAlt />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-light-foreground/70 dark:text-dark-foreground/70 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-light-foreground/5 dark:bg-dark-foreground/5 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
