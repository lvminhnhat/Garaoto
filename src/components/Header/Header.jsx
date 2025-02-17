// src/components/Header/Header.jsx
import { Link, NavLink } from 'react-router-dom';

const Header = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <header className="fixed w-full top-0 z-50 bg-card dark:bg-dark-card shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-4">
          <img 
            src="/logo_transparent.png" // Add your logo image path here
            alt="HT AUTO Logo" 
            className="w-12 h-12 object-contain"
          />
          <h1 className="text-2xl font-bold text-foreground dark:text-dark-foreground">HT AUTO</h1>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `text-foreground dark:text-dark-foreground hover:text-primary ${isActive ? 'text-primary' : ''}`
            }
          >
            Trang chủ
          </NavLink>
          <NavLink 
            to="/services" 
            className={({ isActive }) => 
              `text-foreground dark:text-dark-foreground hover:text-primary ${isActive ? 'text-primary' : ''}`
            }
          >
            Dịch vụ
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `text-foreground dark:text-dark-foreground hover:text-primary ${isActive ? 'text-primary' : ''}`
            }
          >
            Về chúng tôi
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `text-foreground dark:text-dark-foreground hover:text-primary ${isActive ? 'text-primary' : ''}`
            }
          >
            Liên hệ
          </NavLink>
        </nav>
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="p-2 rounded-full bg-secondary dark:bg-dark-secondary"
        >
          {isDarkMode ? "🌞" : "🌙"}
        </button>
      </div>
    </header>
  );
};

export default Header;