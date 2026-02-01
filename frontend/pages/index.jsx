import { Helmet } from 'react-helmet';
import * as React from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Container, 
  Grid, 
  Stack, 
  Chip,
  alpha,
  useTheme
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import CodeIcon from '@mui/icons-material/Code';
import TerminalIcon from '@mui/icons-material/Terminal';
import StorageIcon from '@mui/icons-material/Storage';
import InteractiveBackground from '../components/InteractiveBackground';

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const Typewriter = ({ texts }) => {
  const [index, setIndex] = React.useState(0);
  const [subIndex, setSubIndex] = React.useState(0);
  const [reverse, setReverse] = React.useState(false);
  const [isPaused, setIsPaused] = React.useState(false);

  React.useEffect(() => {
    if (isPaused) return;

    const currentText = texts[index];
    
    // Check for custom break/pause marker "|"
    const parts = currentText.split('|');
    const fullTextWithoutMarkers = currentText.replace('|', '');
    
    // Pause logic for the first sentence after "Hi, I'm Amin Albooyeh,"
    if (index === 0 && !reverse && subIndex === parts[0].length && currentText.includes('|')) {
      setIsPaused(true);
      setTimeout(() => {
        setIsPaused(false);
        setSubIndex((prev) => prev + 1); // Skip the "|" marker index logic-wise
      }, 3000);
      return;
    }

    if (subIndex === fullTextWithoutMarkers.length + (currentText.includes('|') ? 1 : 0) + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, texts, isPaused]);

  return (
    <Box component="span" sx={{ display: 'inline-block' }}>
      {texts[index].substring(0, subIndex).split('|').map((part, i) => (
        <React.Fragment key={i}>
          {part}
          {i < texts[index].substring(0, subIndex).split('|').length - 1 && <br />}
        </React.Fragment>
      ))}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        style={{ marginLeft: '2px', borderLeft: '3px solid #60a5fa' }}
      />
    </Box>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Home() {
  const theme = useTheme();

  const skills = [
    { label: 'Django 4+', icon: <StorageIcon sx={{ fontSize: 16 }} />, color: '#60a5fa' },
    { label: 'Python 3.x', icon: <CodeIcon sx={{ fontSize: 16 }} />, color: '#fbbf24' },
    { label: 'Next.js 15', icon: <TerminalIcon sx={{ fontSize: 16 }} />, color: '#f8fafc' },
    { label: 'Material UI', icon: <CodeIcon sx={{ fontSize: 16 }} />, color: '#007fff' },
  ];

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Amin Albooyeh | Python Developer</title>
        <meta name="description" content="Amin Albooyeh - Experienced software developer in Java and Python (Django). Explore portfolio, projects, and resume." />
      </Helmet>

      <Box sx={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: '#0a0a0a',
      }}>
        <InteractiveBackground />
        
        {/* Animated Background Orbs */}
        <Box sx={{
          position: 'absolute',
          width: '60vw',
          height: '60vw',
          borderRadius: '50%',
          filter: 'blur(120px)',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, rgba(245, 158, 11, 0.05) 100%)',
          top: '-20%',
          right: '-10%',
          zIndex: -1,
          animation: 'pulse 10s infinite alternate ease-in-out',
        }} />

        <Container maxWidth={false} sx={{ px: { xs: 2, md: 8 }, py: { xs: 8, md: 0 } }}>
          <Grid container spacing={8} alignItems="center">
            {/* Left Column: Text Content */}
            <Grid item xs={12} md={7} sx={{ order: { xs: 2, md: 1 } }}>
              <MotionBox
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <MotionTypography 
                  variants={itemVariants}
                  variant="h1" 
                  sx={{ 
                    fontSize: { xs: '2.2rem', md: '4rem' },
                    fontWeight: 900,
                    lineHeight: 1.2,
                    mb: 4,
                    color: '#fff',
                  }}
                >
                  <Box component="span" sx={{ 
                    background: 'linear-gradient(135deg, #fff 0%, #60a5fa 50%, #fbbf24 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 0 30px rgba(96, 165, 250, 0.3)',
                    display: 'block',
                    minHeight: { xs: '120px', md: '200px' }
                  }}>
                    <Typewriter texts={[
                      "Hi, I'm Amin Albooyeh,| a Python Developer", 
                      "I have +8 Years of| Professional Experience"
                    ]} />
                  </Box>
                </MotionTypography>

                <MotionTypography 
                  variants={itemVariants}
                  variant="h6" 
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.6)', 
                    mb: 6, 
                    lineHeight: 1.8, 
                    fontWeight: 400,
                    fontSize: '1.25rem',
                    maxWidth: '800px'
                  }}
                >
                  Architecting robust backends with <b>Django</b> and crafting 
                  seamless interfaces with <b>React</b>. Based in Turin, Italy, 
                  dedicated to building high-performance digital solutions.
                </MotionTypography>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} sx={{ mb: 8 }}>
                  <MotionBox variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      component={Link}
                      href="/projects"
                      variant="contained" 
                      size="large"
                      sx={{ 
                        py: 2, px: 5, 
                        borderRadius: 3,
                        background: '#fff',
                        color: '#000',
                        fontWeight: 700,
                        fontSize: '1.1rem',
                        textTransform: 'none',
                        '&:hover': {
                          background: '#f1f5f9',
                          boxShadow: '0 10px 20px -5px rgba(255,255,255,0.2)'
                        }
                      }}
                    >
                      View Projects
                    </Button>
                  </MotionBox>
                </Stack>
              </MotionBox>
            </Grid>

            {/* Right Column: Visual Element */}
            <Grid item xs={12} md={5} sx={{ order: { xs: 1, md: 2 } }}>
              <MotionBox
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                sx={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  mb: { xs: 4, md: 0 }
                }}
              >
                {/* Profile Image Wrapper - Organic Shape (Static) */}
                <Box sx={{
                  position: 'relative',
                  width: { xs: 280, md: 420 },
                  height: { xs: 280, md: 420 },
                  borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                  zIndex: 2,
                  mb: 4,
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: -20, left: -20, right: -20, bottom: -20,
                    borderRadius: 'inherit',
                    background: 'linear-gradient(45deg, #3b82f633, #fbbf2433)',
                    zIndex: -1,
                    filter: 'blur(35px)',
                  }
                }}>
                  <Box sx={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 'inherit',
                    overflow: 'hidden',
                    border: '2px solid rgba(255,255,255,0.1)',
                    boxShadow: '0 25px 60px rgba(0,0,0,0.6)',
                  }}>
                    <img
                      src="/profile.jpg"
                      alt="Amin Albooyeh"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </Box>
                </Box>

                {/* Decorative Stats - Static */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: '10%',
                    left: '-10%',
                    zIndex: 3,
                    background: 'rgba(15, 23, 42, 0.9)',
                    backdropFilter: 'blur(10px)',
                    p: 2.5,
                    borderRadius: 4,
                    border: '1px solid rgba(255,255,255,0.15)',
                    display: { xs: 'none', md: 'block' },
                    boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                  }}
                >
                  <Typography variant="h5" sx={{ color: '#fbbf24', fontWeight: 900 }}>8+</Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>Years Exp.</Typography>
                </Box>

                {/* Bottom Stats - Static */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: '15%',
                    right: '-10%',
                    zIndex: 3,
                    background: 'rgba(15, 23, 42, 0.9)',
                    backdropFilter: 'blur(10px)',
                    p: 2.5,
                    borderRadius: 4,
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    display: { xs: 'none', md: 'block' },
                    boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                  }}
                >
                  <Typography variant="h5" sx={{ color: '#3b82f6', fontWeight: 900 }}>60+</Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>Projects</Typography>
                </Box>
              </MotionBox>
            </Grid>
          </Grid>
        </Container>

        {/* Scroll Indicator */}
        <Box sx={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
          opacity: 0.7
        }}>
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.4)', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.7rem' }}>Scroll</Typography>
          <Box sx={{
            width: '24px',
            height: '40px',
            borderRadius: '20px',
            border: '2px solid rgba(255,255,255,0.1)',
            position: 'relative'
          }}>
            <motion.div
              animate={{ y: [4, 24, 4] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{
                width: '4px',
                height: '8px',
                background: '#60a5fa',
                borderRadius: '2px',
                position: 'absolute',
                left: 'calc(50% - 2px)',
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* Global CSS for Animations */}
      <style jsx global>{`
        @keyframes pulse {
          0% { opacity: 0.3; transform: scale(1); }
          100% { opacity: 0.6; transform: scale(1.1); }
        }
      `}</style>
    </>
  );
}

