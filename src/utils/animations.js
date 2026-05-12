import { gsap } from 'gsap';

export const fadeIn = (element, options = {}) => {
  return gsap.fromTo(
    element,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
      ...options
    }
  );
};

export const fadeOut = (element, options = {}) => {
  return gsap.to(element, {
    opacity: 0,
    y: -30,
    duration: 0.6,
    ease: 'power3.in',
    ...options
  });
};

export const slideIn = (element, direction = 'left', options = {}) => {
  const directions = {
    left: { x: -100, y: 0 },
    right: { x: 100, y: 0 },
    up: { x: 0, y: -100 },
    down: { x: 0, y: 100 }
  };

  return gsap.fromTo(
    element,
    { opacity: 0, ...directions[direction] },
    {
      opacity: 1,
      x: 0,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
      ...options
    }
  );
};

export const scaleIn = (element, options = {}) => {
  return gsap.fromTo(
    element,
    { opacity: 0, scale: 0.8 },
    {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      ease: 'back.out(1.7)',
      ...options
    }
  );
};

export const staggerAnimation = (elements, animation, options = {}) => {
  const { stagger = 0.1, ...otherOptions } = options;
  
  return gsap.fromTo(
    elements,
    animation.from || {},
    {
      ...animation.to,
      stagger,
      ...otherOptions
    }
  );
};

export const parallaxEffect = (element, speed = 0.5) => {
  return gsap.to(element, {
    y: () => window.scrollY * speed,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  });
};

export const rotateAnimation = (element, options = {}) => {
  return gsap.to(element, {
    rotation: 360,
    duration: 2,
    ease: 'linear',
    repeat: -1,
    ...options
  });
};

export const pulseAnimation = (element, options = {}) => {
  return gsap.to(element, {
    scale: 1.1,
    duration: 1,
    ease: 'power1.inOut',
    yoyo: true,
    repeat: -1,
    ...options
  });
};

export const glowAnimation = (element, color = '#6366f1', options = {}) => {
  return gsap.to(element, {
    boxShadow: `0 0 20px ${color}, 0 0 40px ${color}`,
    duration: 1.5,
    ease: 'power1.inOut',
    yoyo: true,
    repeat: -1,
    ...options
  });
};

export const typewriterEffect = (element, text, options = {}) => {
  const { duration = 2, ...otherOptions } = options;
  
  return gsap.to(element, {
    text: {
      value: text,
      delimiter: ''
    },
    duration,
    ease: 'none',
    ...otherOptions
  });
};

export const morphPath = (element, newPath, options = {}) => {
  return gsap.to(element, {
    attr: { d: newPath },
    duration: 1,
    ease: 'power2.inOut',
    ...options
  });
};

export default {
  fadeIn,
  fadeOut,
  slideIn,
  scaleIn,
  staggerAnimation,
  parallaxEffect,
  rotateAnimation,
  pulseAnimation,
  glowAnimation,
  typewriterEffect,
  morphPath
};