import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../ui/GlassCard';
import { 
  IoCubeOutline, 
  IoColorPaletteOutline, 
  IoCloudUploadOutline,
  IoSparklesOutline 
} from 'react-icons/io5';
import './FeaturesSection.css';

const FeaturesSection = () => {
  const features = [
    {
      icon: <IoCubeOutline />,
      title: '3D Visualization',
      description: 'Create stunning 3D room designs with our advanced rendering engine'
    },
    {
      icon: <IoColorPaletteOutline />,
      title: 'Color Customization',
      description: 'Choose from thousands of colors and materials for your space'
    },
    {
      icon: <IoCloudUploadOutline />,
      title: 'Cloud Sync',
      description: 'Access your projects anywhere with automatic cloud synchronization'
    },
    {
      icon: <IoSparklesOutline />,
      title: 'AI Assistant',
      description: 'Get intelligent design suggestions powered by AI technology'
    }
  ];

  return (
    <section className="features-section">
      <div className="container">
        <motion.div 
          className="features-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Powerful Features</h2>
          <p>Everything you need to create your dream interior</p>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <GlassCard key={index} hover glow delay={index * 0.1}>
              <div className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;