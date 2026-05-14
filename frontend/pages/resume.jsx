import React from 'react';
import { Box, Container, Typography, Button, Stack, Divider } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import Timeline from '../components/Timeline';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const MotionBox = motion.create(Box);

export default function Resume() {
  // Mouse glow effect
  const bgX = useMotionValue(0);
  const bgY = useMotionValue(0);
  const bgSpringX = useSpring(bgX, { damping: 50 });
  const bgSpringY = useSpring(bgY, { damping: 50 });
  const xPx = useTransform(bgSpringX, (val) => `${val}px`);
  const yPx = useTransform(bgSpringY, (val) => `${val}px`);

  React.useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      bgX.set(e.clientX);
      bgY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleGlobalMouseMove);
    return () => window.removeEventListener('mousemove', handleGlobalMouseMove);
  }, [bgX, bgY]);

  return (
    <Box sx={{
      pt: 12,
      pb: 8,
      minHeight: '100vh',
      background: '#0a0a0a',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Dynamic Mouse Glow Effect */}
      <MotionBox
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          background: `radial-gradient(circle at var(--x) var(--y), rgba(59, 130, 246, 0.15) 0%, transparent 40%)`,
          '--x': xPx,
          '--y': yPx,
        }}
        sx={{
          pointerEvents: 'none',
        }}
      />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header Section */}
        <Box sx={{ mb: 10, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 900, 
                mb: 2, 
                background: 'linear-gradient(45deg, #fff 30%, #60a5fa 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Resume
            </Typography>
            <Typography variant="h6" sx={{ color: 'text.secondary', maxWidth: '600px', mx: 'auto', mb: 4 }}>
              A combination of academic foundation and professional experience in building modern digital solutions.
            </Typography>
            
            <Button
              variant="contained"
              startIcon={<DownloadIcon />}
              href="/resume.pdf"
              target="_blank"
              sx={{
                background: 'linear-gradient(45deg, #60a5fa 30%, #3b82f6 90%)',
                color: '#fff',
                px: 4,
                py: 1.5,
                borderRadius: '12px',
                fontWeight: 700,
                textTransform: 'none',
                fontSize: '1.1rem',
                boxShadow: '0 4px 14px 0 rgba(0, 118, 255, 0.39)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #3b82f6 30%, #2563eb 90%)',
                }
              }}
            >
              Download Full CV
            </Button>
          </motion.div>
        </Box>

        {/* Experience & Education Timeline */}
        <Box sx={{ mb: 12 }}>
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 6, color: '#fff', textAlign: 'center' }}>
            Professional Journey
          </Typography>
          <Timeline />
        </Box>
      </Container>
    </Box>
  );
}

