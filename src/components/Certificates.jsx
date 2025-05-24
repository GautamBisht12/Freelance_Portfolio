import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCertificate, FaEye } from "react-icons/fa";

const Certificates = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Dummy certificate data
  const certificate = {
    id: 1,
    title: "MERN Full-Stack Development",
    issuer: "DuCat",
    date: "Oct 2023",
    description:
      "A comprehensive course covering the MERN stack, including MongoDB, Express.js, React.js, and Node.js.",
    skills: ["React", "Node.js", "Express", "MongoDB", "RESTful APIs"],
    image: "/DuCat.png",
    certificatePDF: "/GautamBisht.pdf",
  };

  const handleViewCertificate = () => {
    window.open(certificate.certificatePDF, "_blank");
  };

  // const handleDownloadCertificate = () => {
  //   const link = document.createElement("a");
  //   link.href = certificate.certificatePDF;
  //   link.download = `${certificate.title.replace(/\s+/g, "_")}_Certificate.pdf`;
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  return (
    <section
      id="certificates"
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
            Certifications
          </motion.h2>
          <motion.p
            className="mt-4 max-w-xl mx-auto text-light-foreground/80 dark:text-dark-foreground/80"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Professional certifications that validate my expertise
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="card overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden rounded-lg">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute top-4 left-4 bg-light-primary/90 dark:bg-dark-primary/90 text-white p-3 rounded-full">
                  <FaCertificate className="text-xl" />
                </div>
              </div>

              <div className="flex flex-col">
                <h3 className="text-2xl font-semibold mb-2">
                  {certificate.title}
                </h3>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg text-light-primary dark:text-dark-primary">
                    {certificate.issuer}
                  </span>
                  <span className="text-sm text-light-foreground/70 dark:text-dark-foreground/70">
                    {certificate.date}
                  </span>
                </div>

                <p className="text-light-foreground/80 dark:text-dark-foreground/80 mb-6">
                  {certificate.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Skills Covered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {certificate.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-light-foreground/5 dark:bg-dark-foreground/5 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleViewCertificate}
                    className="btn btn-primary inline-flex items-center justify-center gap-2 flex-1"
                  >
                    <FaEye />
                    <span>View Certificate</span>
                  </button>
                  {/* <button
                    onClick={handleDownloadCertificate}
                    className="btn bg-green-600 hover:bg-green-700 text-white inline-flex items-center justify-center gap-2 flex-1 transition-colors duration-200"
                  >
                    <FaDownload />
                    <span>Download</span>
                  </button> */}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
