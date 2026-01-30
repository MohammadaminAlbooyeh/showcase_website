import { useEffect, useRef } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

const InteractiveBackground = () => {
  const theme = useTheme();
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;

      mouseX.set(x);
      mouseY.set(y);

      // Animate gradient position based on mouse movement
      controls.start({
        background: `radial-gradient(
          circle at ${x * 100}% ${y * 100}%,
          ${theme.palette.primary.light}15,
          ${theme.palette.primary.main}05,
          transparent
        )`,
        transition: { duration: 0.5 }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [controls, mouseX, mouseY, theme]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        background: `radial-gradient(
          circle at 50% 50%,
          ${theme.palette.primary.light}15,
          ${theme.palette.primary.main}05,
          transparent
        )`
      }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        zIndex: -1,
      }}
    >
      {/* Animated particles */}
      {Array.from({ length: 20 }).map((_, index) => (
        <motion.div
          key={index}
          style={{
            position: 'absolute',
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            borderRadius: '50%',
            backgroundColor: theme.palette.primary.main,
            opacity: 0.1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: Math.random() * 2,
          }}
        />
      ))}
    </motion.div>
  );
};

export default InteractiveBackground;