// src/components/Contact/ContactInfo.jsx
import React from 'react';
import { FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <section className="py-16 px-4 bg-secondary dark:bg-dark-secondary">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex items-center space-x-4">
            <FaPhone className="text-2xl text-primary" />
            <div>
              <h3 className="font-bold text-foreground dark:text-dark-foreground">Phone</h3>
              <p className="text-accent dark:text-dark-accent">(555) 123-4567</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-2xl text-primary" />
            <div>
              <h3 className="font-bold text-foreground dark:text-dark-foreground">Email</h3>
              <p className="text-accent dark:text-dark-accent">info@autopro.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaClock className="text-2xl text-primary" />
            <div>
              <h3 className="font-bold text-foreground dark:text-dark-foreground">Hours</h3>
              <p className="text-accent dark:text-dark-accent">Mon-Fri: 8AM-6PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;