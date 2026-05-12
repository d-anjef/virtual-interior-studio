import React from 'react';
import { motion } from 'framer-motion';
import { 
  IoHomeOutline, 
  IoGridOutline, 
  IoColorPaletteOutline,
  IoLayersOutline,
  IoSettingsOutline,
  IoSaveOutline 
} from 'react-icons/io5';
import './FloatingDock.css';

const FloatingDock = ({ activeTab, onTabChange }) => {
  const dockItems = [
    { id: 'home', icon: <IoHomeOutline />, label: 'Home', color: '#6366f1' },
    { id: 'furniture', icon: <IoGridOutline />, label: 'Furniture', color: '#8b5cf6' },
    { id: 'colors', icon: <IoColorPaletteOutline />, label: 'Colors', color: '#ec4899' },
    { id: 'layers', icon: <IoLayersOutline />, label: 'Layers', color: '#14b8a6' },
    { id: 'settings', icon: <IoSettingsOutline />, label: 'Settings', color: '#f59e0b' },
    { id: 'save', icon: <IoSaveOutline />, label: 'Save', color: '#10b981' },
  ];

  return (
    <motion.div 
      className="floating-dock"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
    >
      <div className="dock-container">
        {dockItems.map((item, index) => (
          <motion.button
            key={item.id}
            className={`dock-item ${activeTab === item.id ? 'dock-item-active' : ''}`}
            onClick={() => onTabChange(item.id)}
            whileHover={{ y: -8, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.05 }}
            style={{ '--item-color': item.color }}
          >
            <div className="dock-item-icon">
              {item.icon}
            </div>
            <motion.span
              className="dock-item-tooltip"
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: 0 }}
            >
              {item.label}
            </motion.span>
            {activeTab === item.id && (
              <motion.div
                className="dock-item-indicator"
                layoutId="dock-indicator"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default FloatingDock;