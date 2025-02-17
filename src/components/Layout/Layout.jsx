// src/components/Layout/Layout.jsx
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <div className="min-h-screen bg-background dark:bg-dark-background">
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;