import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import { IoArrowForward, IoRocketOutline } from 'react-icons/io5';
import './CTASection.css';

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="cta-section">
      <div className="cta-background">
        <div className="cta-gradient-1"></div>
        <div className="cta-gradient-2"></div>
        <div className="cta-grid"></div>
      </div>

      <div className="container">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="cta-icon"
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <IoRocketOutline />
          </motion.div>

          <h2 className="cta-title">
            Ready to Transform Your Space?
          </h2>
          
          <p className="cta-description">
            Join thousands of designers creating stunning interiors with our
            advanced 3D visualization platform. Start your free trial today.
          </p>

          <div className="cta-actions">
            <Button
              variant="primary"
              size="lg"
              icon={<IoArrowForward />}
              iconPosition="right"
              onClick={() => navigate('/workspace')}
            >
              Start Creating Now
            </Button>
            <Button
              variant="secondary"
              size="lg"
            >
              Schedule Demo
            </Button>
          </div>

          <div className="cta-features">
            <div className="cta-feature">
              <span className="feature-icon">✓</span>
              <span>No credit card required</span>
            </div>
            <div className="cta-feature">
              <span className="feature-icon">✓</span>
              <span>Free 14-day trial</span>
            </div>
            <div className="cta-feature">
              <span className="feature-icon">✓</span>
              <span>Cancel anytime</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;