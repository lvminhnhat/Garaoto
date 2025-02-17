import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="pt-24 bg-secondary dark:bg-dark-secondary">
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-extrabold text-center mb-12 text-foreground dark:text-dark-foreground"
          >
            Về Chúng Tôi
          </motion.h1>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-white dark:bg-gray-900 rounded-xl shadow-xl p-10 text-gray-800 dark:text-gray-200"
          >
            <motion.div className="space-y-6">
              <motion.p variants={itemVariants} className="text-lg leading-relaxed">
                Chào mừng quý khách đến với <span className="font-semibold text-blue-600 dark:text-blue-400">Gara Ô tô HT</span> - nơi mang đến dịch vụ sửa chữa và bảo dưỡng ô tô hàng đầu tại Lâm Đồng.
              </motion.p>

              <motion.div variants={itemVariants}>
                <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">
                  Sứ Mệnh Của Chúng Tôi
                </h2>
                <p className="text-lg">Tận tâm mang đến dịch vụ tốt nhất, đảm bảo an toàn và hiệu suất tối ưu cho mọi chiếc xe của khách hàng.</p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">
                  Tại Sao Chọn Chúng Tôi?
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                  <li><span className="font-semibold">Đội ngũ chuyên nghiệp:</span> Kỹ thuật viên dày dặn kinh nghiệm, được đào tạo bài bản.</li>
                  <li><span className="font-semibold">Trang thiết bị hiện đại:</span> Hệ thống máy móc tiên tiến, đảm bảo sửa chữa chính xác.</li>
                  <li><span className="font-semibold">Dịch vụ tận tâm:</span> Luôn đặt khách hàng lên hàng đầu, tư vấn minh bạch.</li>
                  <li><span className="font-semibold">Giá cả hợp lý:</span> Chi phí minh bạch, không phụ phí ẩn.</li>
                </ul>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">
                  Cam Kết Của Chúng Tôi
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
                    <p className="font-semibold">✔ Chất lượng sửa chữa đảm bảo</p>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
                    <p className="font-semibold">✔ Bảo hành dài hạn</p>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
                    <p className="font-semibold">✔ Hỗ trợ khách hàng 24/7</p>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
                    <p className="font-semibold">✔ Phụ tùng chính hãng 100%</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
