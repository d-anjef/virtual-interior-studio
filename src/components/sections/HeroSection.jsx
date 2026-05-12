import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import { IoArrowForward, IoPlayCircle } from 'react-icons/io5';
import './HeroSection.css';

const HeroSection = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-title-word', {
        y: 100,
        opacity: 0,
        rotationX: -90,
        stagger: 0.1,
        duration: 1.2,
        ease: 'power4.out',
        delay: 0.3
      });

      gsap.from('.hero-subtitle', {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 1.2,
        ease: 'power3.out'
      });

      gsap.from('.hero-actions', {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 1.5,
        ease: 'power3.out'
      });

      // Floating orbs animation
      gsap.to('.hero-orb', {
        y: '+=30',
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: {
          each: 0.3,
          from: 'random'
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="hero-section">
      <motion.div 
        className="hero-content"
        style={{ y, opacity }}
      >
        <div className="hero-background">
          <div className="hero-orb hero-orb-1"></div>
          <div className="hero-orb hero-orb-2"></div>
          <div className="hero-orb hero-orb-3"></div>
          <div className="hero-grid"></div>
        </div>

        <div className="container">
          <div className="hero-text">
            <motion.div className="hero-badge">
              <span className="badge-dot"></span>
              <span>The Future of Interior Design</span>
            </motion.div>

            <h1 className="hero-title">
              <span className="hero-title-word">Design</span>{' '}
              <span className="hero-title-word gradient-text">Your Dream</span>{' '}
              <span className="hero-title-word">Space</span>
            </h1>

            <p className="hero-subtitle">
              Experience the next generation of virtual interior design with our
              immersive 3D workspace. Create, visualize, and transform spaces
              with cinematic precision and luxury aesthetics.
            </p>

            <div className="hero-actions">
              <Button 
                variant="primary" 
                size="lg"
                icon={<IoArrowForward />}
                iconPosition="right"
                onClick={() => navigate('/workspace')}
              >
                Start Creating
              </Button>
              <Button 
                variant="ghost" 
                size="lg"
                icon={<IoPlayCircle />}
              >
                Watch Demo
              </Button>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <motion.div 
                  className="stat-number"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.8, duration: 0.6 }}
                >
                  10K+
                </motion.div>
                <div className="stat-label">Projects Created</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <motion.div 
                  className="stat-number"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2, duration: 0.6 }}
                >
                  500+
                </motion.div>
                <div className="stat-label">Furniture Items</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <motion.div 
                  className="stat-number"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.2, duration: 0.6 }}
                >
                  98%
                </motion.div>
                <div className="stat-label">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="hero-scroll-indicator">
        <motion.div
          className="scroll-line"
          animate={{ height: ['0%', '100%'] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </section>
  );
};

export default HeroSection;