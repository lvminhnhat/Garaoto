// src/components/Hero/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="pt-24 pb-12 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative h-[600px] rounded-lg overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
            alt="Gara Ô tô Chuyên Nghiệp"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
            <div className="text-white ml-12 max-w-2xl">
              <h2 className="text-5xl font-bold mb-6">Dịch Vụ Sửa Chữa Ô Tô Chuyên Nghiệp</h2>
              <p className="text-xl mb-8">Tin tưởng gửi gắm xế yêu của bạn với đội ngũ kỹ thuật viên của chúng tôi</p>
              <Link 
                to="/contact" 
                className="bg-primary text-white px-8 py-3 rounded-md hover:bg-blue-600 transition"
              >
                Đặt Lịch Ngay
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;