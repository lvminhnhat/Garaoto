// src/components/Services/Services.jsx
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import { servicesData } from '../../data/services';

const Services = () => {
  const randomServices = useMemo(() => {
    const shuffled = [...servicesData].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 3);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-16 px-4 bg-secondary dark:bg-dark-secondary">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 text-foreground dark:text-dark-foreground"
        >
          Dịch Vụ Nổi Bật
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8"
        >
          {randomServices.map((service) => (
            <motion.div 
              key={service.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;