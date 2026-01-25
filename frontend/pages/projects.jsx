import * as React from 'react';
import { Grid, Card, CardContent, Typography, Box, Container, Chip, Tooltip, Zoom } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import LaunchIcon from '@mui/icons-material/Launch';

const MotionCard = motion(Card);
const MotionTypography = motion(Typography);

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'To-Do List',
      description: 'A task management application to help organize and track daily tasks efficiently. Features incluyen task prioritization and status tracking.',
      color: '#00ff73',
      link: '#',
      icon: '✓',
      tags: ['React', 'Local Storage']
    },
    {
      id: 2,
      title: 'Budgetly App',
      description: 'A budget management application to track expenses, income, and financial goals with visual charts.',
      color: '#3b82f6',
      link: '#',
      icon: '$',
      tags: ['Next.js', 'Chart.js']
    },
    {
      id: 3,
      title: 'Fraud Detection',
      description: 'A machine learning system using NumPy for detecting fraudulent transactions and patterns in banking data.',
      color: '#ff3b54',
      link: '#',
      icon: '🔍',
      tags: ['Python', 'NumPy', 'ML']
    },
    {
      id: 4,
      title: 'Color Detection',
      description: 'An image processing application that identifies and analyzes colors in images using computer vision techniques.',
      color: '#ff6b35',
      link: '#',
      icon: '🎨',
      tags: ['OpenCV', 'Python']
    },
    {
      id: 5,
      title: 'Fitness Tracker',
      description: 'A comprehensive fitness tracking application to monitor workouts, calories, and health metrics daily.',
      color: '#10b981',
      link: '#',
      icon: '💪',
      tags: ['React Native', 'Firebase']
    },
    {
      id: 6,
      title: 'Support ChatBot',
      description: 'An AI-powered chatbot for websites providing instant customer support and automated intelligent responses.',
      color: '#8b5cf6',
      link: '#',
      icon: '💬',
      tags: ['NLP', 'Node.js']
    },
    {
      id: 7,
      title: 'Face Detection',
      description: 'A real-time face detection system using OpenCV for identifying and tracking faces in images and video streams.',
      color: '#06b6d4',
      link: '#',
      icon: '👤',
      tags: ['OpenCV', 'AI']
    },
    {
      id: 8,
      title: 'Web Scraper',
      description: 'An automated web scraping tool to extract and process data from complex websites efficiently.',
      color: '#f59e0b',
      link: '#',
      icon: '🕷️',
      tags: ['Python', 'BeautifulSoup']
    },
    {
      id: 9,
      title: 'Financial Dashboard',
      description: 'An interactive dashboard for visualizing financial data, market trends, and analytics with real-time updates.',
      color: '#0ea5e9',
      link: '#',
      icon: '📊',
      tags: ['React', 'D3.js']
    },
    {
      id: 10,
      title: 'Income Tracker',
      description: 'A personal finance tracker to monitor income, expenses, and manage monthly budgets effectively.',
      color: '#ec4899',
      link: '#',
      icon: '💰',
      tags: ['Vue', 'Express']
    },
    {
      id: 11,
      title: 'Weather Check',
      description: 'A real-time weather application providing forecasts, current conditions, and weather alerts globaly.',
      color: '#14b8a6',
      link: '#',
      icon: '🌤️',
      tags: ['API', 'Leaflet']
    },
    {
      id: 12,
      title: 'Calorie Tracker',
      description: 'A nutrition tracking application to monitor daily calorie intake, macros, and achieve health goals.',
      color: '#f97316',
      link: '#',
      icon: '🍎',
      tags: ['PWA', 'JavaScript']
    },
    {
      id: 13,
      title: 'Basic Image Processing',
      description: 'An image manipulation tool using NumPy for filtering, transformations, and enhancement operations.',
      color: '#a855f7',
      link: '#',
      icon: '🖼️',
      tags: ['NumPy', 'Python']
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <Box sx={{ 
      py: { xs: 6, md: 10 }, 
      minHeight: '100vh',
      background: 'radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)',
    }}>
      <Container maxWidth={false} sx={{ px: { xs: 2, md: 8 } }}>
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <MotionTypography
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '2.5rem', md: '4rem' },
              background: 'linear-gradient(to bottom, #fff 30%, #94a3b8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2
            }}
          >
            Portfolio
          </MotionTypography>
          <MotionTypography
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            variant="h6"
            sx={{ color: 'text.secondary', fontWeight: 400, maxWidth: '600px', mx: 'auto' }}
          >
            A collection of projects exploring web development, data science, and artificial intelligence.
          </MotionTypography>
        </Box>

        <AnimatePresence>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
          >
            <Grid container spacing={4}>
              {projects.map((project, index) => (
                <Grid item xs={12} sm={6} lg={4} key={project.id}>
                  <motion.div variants={item}>
                    <MotionCard
                      whileHover={{ 
                        y: -10,
                        transition: { duration: 0.2 }
                      }}
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        borderRadius: 4,
                        background: 'rgba(30, 41, 59, 0.4)',
                        backdropFilter: 'blur(12px)',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        '&:hover': {
                          borderColor: `${project.color}44`,
                          boxShadow: `0 20px 40px -20px ${project.color}33`,
                        },
                      }}
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      <Box sx={{ 
                        p: 4, 
                        display: 'flex', 
                        justifyContent: 'center', 
                        position: 'relative',
                        overflow: 'hidden',
                        background: `linear-gradient(135deg, ${project.color}15 0%, transparent 100%)`,
                      }}>
                        <Box sx={{ 
                          width: 80, 
                          height: 80, 
                          borderRadius: 3, 
                          background: `linear-gradient(135deg, ${project.color}, ${project.color}88)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '2.5rem',
                          boxShadow: `0 10px 20px -5px ${project.color}66`,
                          zIndex: 1
                        }}>
                          {project.icon}
                        </Box>
                        
                        {/* Decorative elements */}
                        <Box sx={{
                          position: 'absolute',
                          top: -20,
                          right: -20,
                          width: 100,
                          height: 100,
                          borderRadius: '50%',
                          background: project.color,
                          opacity: 0.03,
                        }} />
                      </Box>

                      <CardContent sx={{ p: 4, pt: 2, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                        <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {project.tags?.map(tag => (
                            <Chip 
                              key={tag} 
                              label={tag} 
                              size="small" 
                              sx={{ 
                                fontSize: '0.65rem', 
                                height: 20,
                                background: 'rgba(255, 255, 255, 0.05)',
                                color: 'text.secondary',
                                borderRadius: 1
                              }} 
                            />
                          ))}
                        </Box>

                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 700,
                            mb: 1.5,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1
                          }}
                        >
                          {project.title}
                        </Typography>

                        <Typography
                          variant="body2"
                          sx={{
                            color: 'text.secondary',
                            lineHeight: 1.7,
                            mb: 4,
                            flexGrow: 1
                          }}
                        >
                          {project.description}
                        </Typography>

                        <Box sx={{ 
                          mt: 'auto',
                          pt: 3,
                          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between'
                        }}>
                          <Typography variant="caption" sx={{ color: project.color, fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase' }}>
                            Case Study
                          </Typography>
                          <LaunchIcon sx={{ fontSize: 18, color: 'text.secondary', opacity: 0.5 }} />
                        </Box>
                      </CardContent>
                    </MotionCard>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </AnimatePresence>
      </Container>
    </Box>
  );
}
