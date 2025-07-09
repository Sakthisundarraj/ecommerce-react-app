import React, { useEffect, useRef, useState } from 'react';

const ScrollAnimation = ({ children, animation = 'fadeInUp', delay = 0, threshold = 0.1 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  const getAnimationClass = () => {
    if (!isVisible) return '';
    
    const baseClass = `animate-${animation}`;
    const delayClass = delay > 0 ? `stagger-${Math.ceil(delay * 10)}` : '';
    
    return `${baseClass} ${delayClass}`.trim();
  };

  return (
    <div ref={ref} className={getAnimationClass()}>
      {children}
    </div>
  );
};

export default ScrollAnimation; 