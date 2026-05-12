import React from 'react';
import { motion } from 'framer-motion';
import './GlassCard.css';

const GlassCard = ({ 
  children, 
  className = '', 
  hover = true,
  glow = false,
  onClick,
  style,
  delay = 0
}) => {
  return (
    <motion.div
      className={`glass-card ${hover ? 'glass-card-hover' : ''} ${glow ? 'glass-card-glow' : ''} ${className}`}
      onClick={onClick}
      style={style}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={hover ? { y: -5, transition: { duration: 0.3 } } : {}}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;