import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaLaptopCode, FaWordpress, FaChrome, FaRobot } from "react-icons/fa";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="section bg-gray-50 dark:bg-dark-background/40 py-16"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-xl mx-auto">
          <motion.h2
            className="section-title text-4xl font-extrabold tracking-tight"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6 md:text-center max-w-lg mx-auto">
              I'm a{" "}
              <span className="text-light-primary dark:text-dark-primary">
                Passionate Developer
              </span>{" "}
              with expertise across multiple domains
            </h3>

            <p className="text-xl text-light-foreground/80 dark:text-dark-foreground/80 mb-12 md:text-center max-w-2xl mx-auto leading-relaxed font-semibold">
              Hello! I'm Gautam Bisht, a versatile developer with over 2 years
              of experience in web development. I specialize in creating
              beautiful, functional, and responsive web applications using
              modern technologies. My passion is to craft digital experiences
              that are both aesthetically pleasing and highly functional.
            </p>

            <div className="space-y-8">
              {/* Frontend Developer Card */}
              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="flex flex-col md:flex-row items-start gap-5 p-5 rounded-xl bg-white dark:bg-gray-900 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-default focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary"
                tabIndex={0}
                role="group"
                aria-labelledby="frontend-dev-title"
              >
                <div className="p-4 bg-light-primary/20 dark:bg-dark-primary/20 rounded-lg text-light-primary dark:text-dark-primary flex-shrink-0">
                  <FaLaptopCode className="text-3xl" aria-hidden="true" />
                </div>
                <div>
                  <h4
                    id="frontend-dev-title"
                    className="text-lg md:text-2xl font-semibold mb-2"
                  >
                    Frontend Developer
                  </h4>
                  <p className="text-light-foreground/80 dark:text-dark-foreground/80 leading-relaxed max-w-prose text-lg font-semibold">
                    I build responsive web applications with React, focusing on
                    performance, accessibility, and user experience. I'm
                    proficient with modern JS frameworks, CSS-in-JS solutions,
                    and state management libraries.
                  </p>
                </div>
              </motion.div>

              {/* WordPress Developer Card */}
              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="flex flex-col md:flex-row items-start gap-5 p-5 rounded-xl bg-white dark:bg-gray-900 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-default focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary"
                tabIndex={0}
                role="group"
                aria-labelledby="wordpress-dev-title"
              >
                <div className="p-4 bg-light-primary/20 dark:bg-dark-primary/20 rounded-lg text-light-primary dark:text-dark-primary flex-shrink-0">
                  <FaWordpress className="text-3xl" aria-hidden="true" />
                </div>
                <div>
                  <h4
                    id="wordpress-dev-title"
                    className="text-lg md:text-2xl font-semibold mb-2"
                  >
                    WordPress Developer
                  </h4>
                  <p className="text-lg  font-semibold text-light-foreground/80 dark:text-dark-foreground/80 leading-relaxed max-w-prose">
                    I create custom WordPress themes and plugins, optimize site
                    performance, and implement e-commerce solutions. I have
                    extensive experience with WooCommerce, Advanced Custom
                    Fields, and Gutenberg blocks.
                  </p>
                </div>
              </motion.div>

              {/* Extension Developer Card */}
              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ duration: 0.3, delay: 0.7 }}
                className="flex flex-col md:flex-row items-start gap-5 p-5 rounded-xl bg-white dark:bg-gray-900 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-default focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary"
                tabIndex={0}
                role="group"
                aria-labelledby="extension-dev-title"
              >
                <div className="p-4 bg-light-primary/20 dark:bg-dark-primary/20 rounded-lg text-light-primary dark:text-dark-primary flex-shrink-0">
                  <FaChrome className="text-3xl" aria-hidden="true" />
                </div>
                <div>
                  <h4
                    id="extension-dev-title"
                    className="text-lg md:text-2xl font-semibold mb-2"
                  >
                    Extension Developer
                  </h4>
                  <p className="text-lg  font-semibold text-light-foreground/80 dark:text-dark-foreground/80 leading-relaxed max-w-prose">
                    I develop Chrome extensions and Tampermonkey scripts that
                    enhance browser functionality and automate tasks. My
                    extensions focus on productivity, accessibility, and
                    improved browsing experiences.
                  </p>
                </div>
              </motion.div>

              {/* AI-Enhanced Development Card */}
              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ duration: 0.3, delay: 0.9 }}
                className="flex flex-col md:flex-row items-start gap-5 p-5 rounded-xl bg-white dark:bg-gray-900 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-default focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary"
                tabIndex={0}
                role="group"
                aria-labelledby="ai-enhanced-dev-title"
              >
                <div className="p-4 bg-light-primary/20 dark:bg-dark-primary/20 rounded-lg text-light-primary dark:text-dark-primary flex-shrink-0">
                  <FaRobot className="text-3xl" aria-hidden="true" />
                </div>
                <div>
                  <h4
                    id="ai-enhanced-dev-title"
                    className="text-lg md:text-2xl font-semibold mb-2"
                  >
                    AI-Enhanced Development
                  </h4>
                  <p className="text-lg  font-semibold text-light-foreground/80 dark:text-dark-foreground/80 leading-relaxed max-w-prose">
                    I leverage AI tools like ChatGPT and Claude to accelerate
                    development, troubleshoot issues, and brainstorm better
                    solutions — enhancing both speed and quality of my work.
                    This allows me to deliver smarter, faster, and more reliable
                    web solutions.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
