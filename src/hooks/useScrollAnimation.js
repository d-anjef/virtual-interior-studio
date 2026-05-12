import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useScrollAnimation = (options = {}) => {
  const elementRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const {
      start = 'top 80%',
      end = 'bottom 20%',
      scrub = false,
      markers = false,
      onEnter,
      onLeave,
      animation
    } = options;

    const scrollTrigger = ScrollTrigger.create({
      trigger: element,
      start,
      end,
      scrub,
      markers,
      onEnter: () => {
        setIsInView(true);
        onEnter?.();
      },
      onLeave: () => {
        setIsInView(false);
        onLeave?.();
      },
      onEnterBack: () => {
        setIsInView(true);
      },
      onLeaveBack: () => {
        setIsInView(false);
      }
    });

    // Apply custom animation if provided
    if (animation) {
      gsap.fromTo(
        element,
        animation.from || {},
        {
          ...animation.to,
          scrollTrigger: {
            trigger: element,
            start,
            end,
            scrub,
            markers
          }
        }
      );
    }

    return () => {
      scrollTrigger.kill();
    };
  }, [options]);

  return { elementRef, isInView };
};

export default useScrollAnimation;