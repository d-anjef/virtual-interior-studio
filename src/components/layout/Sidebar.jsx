import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  IoClose,
  IoHomeOutline,
  IoGridOutline,
  IoColorPaletteOutline,
  IoLayersOutline,
  IoSettingsOutline
} from 'react-icons/io5';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose, activePanel, onPanelChange }) => {
  const panels = [
    { id: 'home', icon: <IoHomeOutline />, label: 'Home' },
    { id: 'furniture', icon: <IoGridOutline />, label: 'Furniture' },
    { id: 'colors', icon: <IoColorPaletteOutline />, label: 'Colors' },
    { id: 'layers', icon: <IoLayersOutline />, label: 'Layers' },
    { id: 'settings', icon: <IoSettingsOutline />, label: 'Settings' }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="sidebar-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          <motion.aside
            className="sidebar"
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <div className="sidebar-header">
              <h2>Workspace</h2>
              <button className="close-btn" onClick={onClose}>
                <IoClose />
              </button>
            </div>

            <nav className="sidebar-nav">
              {panels.map((panel) => (
                <button
                  key={panel.id}
                  className={`sidebar-nav-item ${activePanel === panel.id ? 'active' : ''}`}
                  onClick={() => {
                    onPanelChange(panel.id);
                    onClose();
                  }}
                >
                  <span className="nav-icon">{panel.icon}</span>
                  <span className="nav-label">{panel.label}</span>
                </button>
              ))}
            </nav>

            <div className="sidebar-footer">
              <p className="version">Version 1.0.0</p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;