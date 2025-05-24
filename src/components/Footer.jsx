import { Link } from "react-scroll";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-dark-background/80 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div>
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="text-2xl font-bold cursor-pointer"
            >
              <span className="text-light-primary dark:text-dark-primary">
                BiSHT
              </span>
            </Link>
            <p className="mt-4 text-light-foreground/70 dark:text-dark-foreground/70">
              A passionate developer creating beautiful digital experiences with
              clean, efficient code and modern tech stacks.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                "About",
                "Projects",
                "Skills",
                "Experience",
                "Certificates",
              ].map((link) => (
                <li key={link}>
                  <Link
                    to={link.toLowerCase()}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="text-light-foreground/70 dark:text-dark-foreground/70 hover:text-light-primary dark:hover:text-dark-primary transition-colors cursor-pointer"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-light-foreground/70 dark:text-dark-foreground/70">
                <span className="font-medium">Email:</span>{" "}
                <a
                  href="mailto:bishtwork@gmailcom"
                  className="hover:text-light-primary dark:hover:text-dark-primary transition-colors"
                >
                  bishtwork@gmail.com
                </a>
              </li>
              {/* <li className="text-light-foreground/70 dark:text-dark-foreground/70">
                <span className="font-medium">Phone:</span>{' '}
                <a href="tel:+15551234567" className="hover:text-light-primary dark:hover:text-dark-primary transition-colors">
                  +1 (555) 123-4567
                </a>
              </li> */}
              <li className="text-light-foreground/70 dark:text-dark-foreground/70">
                <span className="font-medium">Location:</span> Ghaziabad -
                201014, India
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center">
          <p className="text-light-foreground/70 dark:text-dark-foreground/70 flex items-center justify-center gap-1">
            &copy; {currentYear} BiSHT. All rights reserved. Made with{" "}
            <FaHeart className="text-red-500" /> by Gautam Bisht
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
