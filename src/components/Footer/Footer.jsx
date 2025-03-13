// src/components/Footer/Footer.jsx
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt
} from 'react-icons/fa';
import { servicesData } from '../../data/services';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Get 5 random services using useMemo
  const randomServices = useMemo(() => {
    const shuffled = [...servicesData].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 5);
  }, []);

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
                <img 
                src="/logo_transparent.png" // Add your logo image path here
                alt="HT AUTO Logo" 
                loading = "lazy"
                className="w-12 h-12 object-contain"
                />
              <h3 className="text-xl font-bold text-white">HT Auto</h3>
            </div>
            <p className="mb-4">Chuyên nghiệp - Uy tín - Chất lượng là tiêu chí hàng đầu của chúng tôi.</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61573098448136" className="hover:text-primary transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" className="hover:text-primary transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" className="hover:text-primary transition-colors">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Liên Kết Nhanh</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">Trang Chủ</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">Dịch Vụ</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">Về Chúng Tôi</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">Liên Hệ</Link>
              </li>
            </ul>
          </div>

          {/* Services - Updated to use random services */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Dịch Vụ</h3>
            <ul className="space-y-2">
              {randomServices.map((service) => (
                <li key={service.id}>
                  <Link 
                    to={`/services/${service.id}`} 
                    className="hover:text-primary transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Thông Tin Liên Hệ</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-primary" />
                <span>270 Hùng Vương, Đình Văn, Lâm Hà, Lâm Đồng, Việt Nam</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-primary" />
                <a 
                  href="tel:0364947917" 
                  className="hover:text-primary transition-colors"
                >
                  0364 947 917
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-primary" />
                <a 
                  href="mailto:Canhanh190796@gmail.com" 
                  className="hover:text-primary transition-colors"
                >
                  Canhanh190796@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p>&copy; {currentYear} HT AUTO.</p>
            <p>
              Powered by{' '}
              <a 
                href="https://minnyat.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-blue-400 transition-colors"
              >
                Minnyat
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;