import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook } from 'react-icons/fa'; // Add this import

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <div className="pt-24">
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="py-16 px-4 bg-secondary dark:bg-dark-secondary"
      >
        <div className="container mx-auto">
          <motion.h1 
            variants={itemVariants}
            className="text-4xl font-bold text-center mb-12 text-foreground dark:text-dark-foreground"
          >
            Liên Hệ Với Chúng Tôi
          </motion.h1>
          
          {/* Map Section */}
          <motion.div 
            variants={itemVariants}
            className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg mb-12"
          >
            <iframe 
              title="HT Auto Lâm Đồng"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6568.8062132841105!2d108.26233821583253!3d11.77662760656333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317143ae67b7fb2d%3A0xb7a1b2596747502e!2sHT%20AUTO!5e0!3m2!1svi!2sfi!4v1739808545506!5m2!1svi!2sfi"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div 
              variants={itemVariants}
              className="bg-white dark:bg-dark-background p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4 text-foreground dark:text-dark-foreground">
                Thông Tin Liên Hệ
              </h2>
              <div className="space-y-4 text-accent dark:text-dark-accent">
                <p>📍 270 Hùng Vương, Đình Văn, Lâm Hà, Lâm Đồng, Việt Nam</p>
                <p>
                  <a 
                    href="tel:0364947917" 
                    className="hover:text-blue-600 transition-colors"
                  >
                    📞 0364 947 917
                  </a>
                </p>
                <p>✉️ Canhanh190796@gmail.com</p>
                <p>⏰ Thời gian làm việc: 7:00 - 17:30 (T2-CN)</p>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="bg-white dark:bg-dark-background p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4 text-foreground dark:text-dark-foreground">
                Kết Nối Với Chúng Tôi
              </h2>
              <p className="text-accent dark:text-dark-accent mb-4">
                Theo dõi chúng tôi trên mạng xã hội để cập nhật những thông tin mới nhất.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61573098448136"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <FaFacebook />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;