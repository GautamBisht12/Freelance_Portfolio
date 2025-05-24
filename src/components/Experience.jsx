import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';

// Import experience data
import { experienceData } from '../data/experienceData';

const Experience = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" ref={ref} className="section">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            Work Experience
          </motion.h2>
          <motion.p 
            className="mt-4 max-w-xl mx-auto text-light-foreground/80 dark:text-dark-foreground/80"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A timeline of my professional journey and accomplishments
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          {experienceData.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline line */}
              {index !== experienceData.length - 1 && (
                <div className="absolute left-8 top-8 bottom-0 w-0.5 bg-light-muted/30 dark:bg-dark-muted/30"></div>
              )}
              
              <div className="flex gap-6">
                {/* Timeline dot */}
                <div className="relative z-10">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-light-primary/10 dark:bg-dark-primary/10 border-2 border-light-primary dark:border-dark-primary">
                    <FaBriefcase className="text-xl text-light-primary dark:text-dark-primary" />
                  </div>
                </div>
                
                <div className="card flex-1">
                  <div 
                    className="flex justify-between items-start cursor-pointer"
                    onClick={() => toggleExpand(experience.id)}
                  >
                    <div>
                      <h3 className="text-xl font-semibold">{experience.role}</h3>
                      <h4 className="text-lg text-light-primary dark:text-dark-primary mb-2">{experience.company}</h4>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-light-foreground/70 dark:text-dark-foreground/70">
                        <div className="flex items-center gap-1">
                          <FaCalendarAlt />
                          <span>{experience.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaMapMarkerAlt />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <button className="p-2 rounded-full hover:bg-light-foreground/5 dark:hover:bg-dark-foreground/5 transition-colors">
                      {expandedId === experience.id ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                  </div>
                  
                  <motion.div 
                    initial={false}
                    animate={{ height: expandedId === experience.id ? 'auto' : 0, opacity: expandedId === experience.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 mt-4 border-t border-gray-100 dark:border-gray-800">
                      <p className="mb-4 text-light-foreground/80 dark:text-dark-foreground/80">
                        {experience.description}
                      </p>
                      
                      <h5 className="font-semibold mb-2">Key Responsibilities:</h5>
                      <ul className="list-disc pl-5 space-y-1 marker:text-light-primary dark:marker:text-dark-primary">
                        {experience.responsibilities.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                      
                      <div className="mt-4 flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span 
                            key={tech} 
                            className="px-3 py-1 bg-light-foreground/5 dark:bg-dark-foreground/5 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;