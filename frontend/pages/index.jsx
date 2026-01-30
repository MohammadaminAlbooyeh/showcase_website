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
    <Box component="span" sx={{ display: 'inline-block', minWidth: '20px' }}>
      {texts[index].substring(0, subIndex).replace('|', '')}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        style={{ marginLeft: '2px', borderLeft: '3px solid #60a5fa' }}
      />
    </Box>
  );
};

export default function Home() {
  const theme = useTheme();

  const skills = [
    { label: 'Django 4+', icon: <StorageIcon sx={{ fontSize: 16 }} />, color: '#092e20' },
    { label: 'Python 3.x', icon: <CodeIcon sx={{ fontSize: 16 }} />, color: '#3776ab' },
    { label: 'Next.js 15', icon: <TerminalIcon sx={{ fontSize: 16 }} />, color: '#000000' },
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
        minHeight: 'calc(100vh - 80px)', 
        display: 'flex', 
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <InteractiveBackground />
        
        {/* Animated Background Orbs */}
        <Box sx={{
          position: 'absolute',
          width: '40vw',
          height: '40vw',
          borderRadius: '50%',
          filter: 'blur(100px)',
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(245, 158, 11, 0.1))',
          top: '-10%',
          right: '-10%',
          zIndex: -1,
        }} />

        <Container maxWidth={false} sx={{ px: { xs: 2, md: 8 } }}>
          <Grid container spacing={8} alignItems="center">
            {/* Left Column: Text Content */}
            <Grid item xs={12} md={9}>
              <MotionBox
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Typography 
                  variant="h1" 
                  sx={{ 
                    fontSize: { xs: '2.5rem', md: '4rem' },
                    fontWeight: 900,
                    lineHeight: 1.1,
                    mb: 4,
                    color: '#fff',
                  }}
                >
                  <Box component="span" sx={{ 
                    background: 'linear-gradient(to right, #60a5fa, #fbbf24)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}>
                    <Typewriter texts={[
                      "Hi, I'm Amin Albooyeh,| a Python Developer", 
                      "I have +8 Years of Professional Experience"
                    ]} />
                  </Box>
                </Typography>

                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: 'text.secondary', 
                    mb: 6, 
                    lineHeight: 1.8, 
                    fontWeight: 400,
                    fontSize: '1.25rem'
                  }}
                >
                  I'm Amin, a Full-Stack developer based in <b>Turin, Italy</b>. 
                  Specializing in building high-performance web applications using 
                  Django, Python, and modern React ecosystems.
                </Typography>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} sx={{ mb: 8 }}>
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
                      '&:hover': {
                        background: '#f1f5f9',
                        transform: 'translateY(-3px)',
                        boxShadow: '0 10px 20px -5px rgba(255,255,255,0.2)'
                      }
                    }}
                  >
                    View Projects
                  </Button>
                </Stack>
              </MotionBox>
            </Grid>

            {/* Right Column: Visual Element */}
            <Grid item xs={12} md={3}>
              <MotionBox
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                sx={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                {/* Profile Image Wrapper */}
                <Box sx={{
                  position: 'relative',
                  width: { xs: 220, md: 320 },
                  height: { xs: 220, md: 320 },
                  borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                  overflow: 'hidden',
                  zIndex: 2,
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: '0 50px 100px -20px rgba(0,0,0,0.5)',
                  animation: 'blob 15s infinite alternate ease-in-out',
                  mb: 4,
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

                {/* Skills Chips */}
                <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1, justifyContent: 'center', mb: 2 }}>
                  {skills.map((skill, i) => (
                    <Chip 
                      key={i}
                      icon={skill.icon}
                      label={skill.label}
                      sx={{ 
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        color: 'text.secondary',
                        fontWeight: 600,
                        px: 1,
                        py: 1,
                        borderRadius: 2,
                        fontSize: '0.75rem',
                        '& .MuiChip-icon': { color: skill.color }
                      }}
                    />
                  ))}
                </Stack>

                {/* Decorative Stats/Floating Elements */}
                <MotionBox
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  sx={{
                    position: 'absolute',
                    top: '10%',
                    left: '-5%',
                    zIndex: 3,
                    background: 'rgba(15, 23, 42, 0.8)',
                    backdropFilter: 'blur(10px)',
                    p: 2,
                    borderRadius: 3,
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: { xs: 'none', md: 'block' }
                  }}
                >
                  <Typography variant="h6" sx={{ color: '#f59e0b', fontWeight: 800 }}>8+</Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>Years Exp.</Typography>
                </MotionBox>

                <MotionBox
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  sx={{
                    position: 'absolute',
                    bottom: '15%',
                    right: '-5%',
                    zIndex: 3,
                    background: 'rgba(15, 23, 42, 0.8)',
                    backdropFilter: 'blur(10px)',
                    p: 2,
                    borderRadius: 3,
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: { xs: 'none', md: 'block' }
                  }}
                >
                  <Typography variant="h6" sx={{ color: '#3b82f6', fontWeight: 800 }}>60+</Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>Projects</Typography>
                </MotionBox>
              </MotionBox>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Global CSS for Animations */}
      <style jsx global>{`
        @keyframes blob {
          0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
          33% { border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%; }
          66% { border-radius: 50% 50% 30% 70% / 50% 50% 30% 30%; }
          100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
        }
        @keyframes pulse {
          0% { opacity: 0.3; transform: scale(1); }
          100% { opacity: 0.6; transform: scale(1.1); }
        }
      `}</style>
    </>
  );
}
