// src/components/Header/Header.jsx
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Header = ({ isDarkMode, setIsDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkStyles = ({ isActive }) => 
    `text-foreground dark:text-dark-foreground hover:text-primary ${isActive ? 'text-primary' : ''}`;

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const linkVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-card dark:bg-dark-card shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-4">
            <img 
              src="/logo_transparent.png"
              alt="HT AUTO Logo" 
              className="w-12 h-12 object-contain"
            />
            <h1 className="text-2xl font-bold text-foreground dark:text-dark-foreground">HT AUTO</h1>
          </Link>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full bg-secondary dark:bg-dark-secondary"
            >
              {isDarkMode ? "🌞" : "🌙"}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-foreground dark:text-dark-foreground"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 justify-center mt-0">
          <NavLink to="/" className={navLinkStyles}>Trang chủ</NavLink>
          <NavLink to="/services" className={navLinkStyles}>Dịch vụ</NavLink>
          <NavLink to="/about" className={navLinkStyles}>Về chúng tôi</NavLink>
          <NavLink to="/contact" className={navLinkStyles}>Liên hệ</NavLink>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="md:hidden overflow-hidden"
            >
              <motion.div className="flex flex-col space-y-4 py-4">
                <motion.div variants={linkVariants}>
                  <NavLink 
                    to="/" 
                    className={navLinkStyles}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Trang chủ
                  </NavLink>
                </motion.div>
                
                <motion.div variants={linkVariants}>
                  <NavLink 
                    to="/services" 
                    className={navLinkStyles}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dịch vụ
                  </NavLink>
                </motion.div>
                
                <motion.div variants={linkVariants}>
                  <NavLink 
                    to="/about" 
                    className={navLinkStyles}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Về chúng tôi
                  </NavLink>
                </motion.div>
                
                <motion.div variants={linkVariants}>
                  <NavLink 
                    to="/contact" 
                    className={navLinkStyles}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Liên hệ
                  </NavLink>
                </motion.div>
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;