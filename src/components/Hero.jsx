import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { useTheme } from "../context/ThemeContext";
import { FaX } from "react-icons/fa6";

const Hero = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Gradient Background */}
      {/* <div
        className={`absolute inset-0 z-0 pointer-events-none ${
          isDark
            ? "bg-gradient-to-br from-gray-900 via-gray-800 to-black"
            : "bg-gradient-to-br from-blue-400 via-white to-purple-400"
        }`}
        style={{
          backgroundSize: "400% 400%",
          animation: "gradientShift 15s ease infinite",
        }}
      ></div> */}

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm{" "}
              <span className="text-light-primary dark:text-dark-primary">
                Gautam Bisht
              </span>
            </h1>

            <motion.div
              className="text-2xl md:text-3xl font-medium mb-6 text-light-foreground/90 dark:text-dark-foreground/90 h-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <TypeAnimation
                sequence={[
                  "Frontend Developer",
                  1000,
                  "WordPress Expert",
                  1000,
                  "Extension Builder",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="inline-block"
              />
            </motion.div>

            <motion.p
              className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-light-foreground/80 dark:text-dark-foreground/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Creating beautiful, responsive websites and applications with
              modern technologies and clean code.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-outline">
                Contact Me
              </a>
            </motion.div>

            <motion.div
              className="flex justify-center space-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <a
                href="https://github.com/GautamBisht12"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-light-primary dark:hover:text-dark-primary transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/gautam-bisht-863225277/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-light-primary dark:hover:text-dark-primary transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://x.com/bisht__g?t=6J3Jd8BiNBJe-etW62S1Vg&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-light-primary dark:hover:text-dark-primary transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-light-foreground/30 dark:border-dark-foreground/30 flex justify-center p-1">
          <motion.div
            className="w-1.5 h-1.5 bg-light-primary dark:bg-dark-primary rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
