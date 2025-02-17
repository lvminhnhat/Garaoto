// src/components/Services/ServiceCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  return (
    <Link to={`/services/${service.id}`}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-card dark:bg-dark-card rounded-lg overflow-hidden shadow-sm cursor-pointer"
      >
        <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
        <div className="p-6">
          <div className="flex items-center mb-4">
            {service.icon}
            <h3 className="text-xl font-bold ml-3 text-foreground dark:text-dark-foreground">
              {service.title}
            </h3>
          </div>
          <p className="text-accent dark:text-dark-accent truncate whitespace-nowrap overflow-hidden">{service.description}</p>
        </div>
      </motion.div>
    </Link>
  );
};

export default ServiceCard;