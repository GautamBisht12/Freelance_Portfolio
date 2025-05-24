import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronUp } from 'react-icons/fa';

const ScrollToTop = ({ scrollY }) => {
  const isVisible = scrollY > 300;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 rounded-full bg-light-primary dark:bg-dark-primary text-white shadow-lg hover:bg-light-primary/90 dark:hover:bg-dark-primary/90 z-50"
          aria-label="Scroll to top"
        >
          <FaChevronUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;