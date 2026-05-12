import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  IoHomeOutline, 
  IoGridOutline, 
  IoImageOutline, 
  IoPersonOutline,
  IoMenuOutline,
  IoCloseOutline 
} from 'react-icons/io5';
import Button from '../ui/Button';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home', icon: <IoHomeOutline /> },
    { path: '/workspace', label: 'Workspace', icon: <IoGridOutline /> },
    { path: '/gallery', label: 'Gallery', icon: <IoImageOutline /> },
    { path: '/dashboard', label: 'Dashboard', icon: <IoPersonOutline /> },
  ];

  return (
    <motion.header 
      className={`header ${scrolled ? 'header-scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
    >
      <div className="header-container container">
        <Link to="/" className="header-logo">
          <motion.div
            className="logo-icon"
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.6 }}
          >
            ✦
          </motion.div>
          <span className="logo-text">VIRTUAL STUDIO</span>
        </Link>

        <nav className="header-nav">
          {navItems.map((item, index) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-item ${location.pathname === item.path ? 'nav-item-active' : ''}`}
            >
              <motion.div
                className="nav-item-content"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </motion.div>
              {location.pathname === item.path && (
                <motion.div
                  className="nav-indicator"
                  layoutId="nav-indicator"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <Button variant="ghost" size="sm">Sign In</Button>
          <Button variant="primary" size="sm">Get Started</Button>
        </div>

        <button 
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <IoCloseOutline /> : <IoMenuOutline />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="mobile-menu"
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: mobileMenuOpen ? 1 : 0,
          height: mobileMenuOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <nav className="mobile-nav">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`mobile-nav-item ${location.pathname === item.path ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className="mobile-actions">
          <Button variant="ghost" fullWidth>Sign In</Button>
          <Button variant="primary" fullWidth>Get Started</Button>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;