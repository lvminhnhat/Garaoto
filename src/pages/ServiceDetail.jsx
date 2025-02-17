// src/pages/ServiceDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { servicesData } from '../data/services';

const ServiceDetail = () => {
  const { id } = useParams(); // Lấy tham số 'id' từ URL
  const service = servicesData.find((item) => item.id === parseInt(id)); // Tìm dịch vụ theo ID

  if (!service) {
    return <div className="text-center text-2xl font-bold">Dịch vụ không tồn tại</div>;
  }

  return (
    <div className="pt-24">
      <section className="py-16 px-4 bg-secondary dark:bg-dark-secondary">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8 text-foreground dark:text-dark-foreground">
            Chi Tiết Dịch Vụ
          </h1>
          <div className="bg-white dark:bg-dark-background rounded-lg shadow-lg overflow-hidden p-6">
            <img 
              src={service.image} 
              alt={service.title}
              className="w-full h-64 object-cover mb-6"
            />
            <div className="flex items-center mb-4">
              {service.icon}
              <h2 className="text-2xl font-semibold ml-3 text-foreground dark:text-dark-foreground">
                {service.title}
              </h2>
            </div>
            <p className="text-accent dark:text-dark-accent mb-4">{service.description}</p>
            <div className="prose dark:prose-invert max-w-none text-foreground dark:text-dark-foreground">
              {service.content}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;