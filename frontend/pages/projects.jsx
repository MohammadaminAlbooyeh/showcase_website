import * as React from 'react';
import { Grid, Card, CardContent, Typography, Box, Container, Chip, Tooltip, Zoom } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import LaunchIcon from '@mui/icons-material/Launch';
import ProjectFilter from '../components/ProjectFilter';

const MotionCard = motion(Card);
const MotionTypography = motion(Typography);
const MotionBox = motion(Box);

const ProjectCard = ({ project, itemVariants }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    if (isHovered && videoRef.current) {
      videoRef.current.play().catch(err => console.log("Video play interrupted"));
    } else if (!isHovered && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isHovered]);

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Card
        component={motion.div}
        variants={itemVariants}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ 
          y: -10,
          transition: { duration: 0.2 }
        }}
        sx={{
          width: '100%',
          height: '580px',
          minHeight: '580px',
          maxHeight: '580px',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: 4,
          background: 'rgba(30, 41, 59, 0.4)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
          overflow: 'hidden',
          cursor: 'pointer',
          position: 'relative',
          '&:hover': {
            borderColor: `${project.color}66`,
            boxShadow: `0 20px 40px -20px ${project.color}44`,
          },
        }}
        onClick={() => window.open(project.link, '_blank')}
      >
        {/* Media Section: Video or Icon */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          background: isHovered && project.video ? '#000' : `linear-gradient(135deg, ${project.color}20 0%, transparent 100%)`,
          height: 200,
          flexShrink: 0,
          transition: 'background 0.3s ease'
        }}>
          {/* Static Icon State */}
          <AnimatePresence>
            {!isHovered && (
              <MotionBox
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 1
                }}
              >
                <Box 
                  className="project-icon"
                  sx={{ 
                    width: 90, 
                    height: 90, 
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${project.color}40, ${project.color}20)`,
                    border: `2px solid ${project.color}60`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '3rem',
                    boxShadow: `0 15px 35px -10px ${project.color}50`,
                    transition: 'all 0.3s ease',
                  }}
                >
                  <span>{project.icon}</span>
                </Box>
              </MotionBox>
            )}
          </AnimatePresence>

          {/* Video Mockup State (Shown on Hover) */}
          {project.video && (
            <video
              ref={videoRef}
              src={project.video}
              muted
              loop
              playsInline
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: isHovered ? 1 : 0,
                transition: 'opacity 0.5s ease',
              }}
            />
          )}

          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 150,
            height: 150,
            borderRadius: '50%',
            background: project.color,
            opacity: 0.1,
            filter: 'blur(40px)',
          }} />
        </Box>

        <CardContent sx={{ 
          p: 4, 
          display: 'flex', 
          flexDirection: 'column',
          flexGrow: 1,
          height: 380,
          boxSizing: 'border-box'
        }}>
          <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', gap: 1, height: 48, overflow: 'hidden' }}>
            {project.tags?.map(tag => (
              <Chip 
                key={tag} 
                label={tag} 
                size="small" 
                sx={{ 
                  fontSize: '0.65rem', 
                  height: 20,
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: 'text.secondary'
                }} 
              />
            ))}
          </Box>

          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              mb: 1.5,
              height: 36,
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitLineClamp: 1,
              WebkitBoxOrient: 'vertical',
              color: '#fff'
            }}
          >
            {project.title}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              lineHeight: 1.7,
              height: 105,
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitLineClamp: 4,
              WebkitBoxOrient: 'vertical',
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
            <Typography variant="caption" sx={{ color: project.color, fontWeight: 800, letterSpacing: 1, textTransform: 'uppercase' }}>
              View Details
            </Typography>
            <LaunchIcon sx={{ fontSize: 18, color: 'text.secondary', opacity: 0.5 }} />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default function Projects() {
  const [activeTags, setActiveTags] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState('');

  const projects = [
    {
      id: 1,
      title: 'To-Do List',
      description: 'A task management application to help organize and track daily tasks efficiently. Features incluyen task prioritization and status tracking.',
      color: '#00ff73',
      link: '#',
      icon: '✓',
      tags: ['React', 'Local Storage'],
      video: '/videos/todo.mp4' // Placeholder path
    },
    {
      id: 2,
      title: 'Budgetly App',
      description: 'A budget management application to track expenses, income, and financial goals with visual charts.',
      color: '#3b82f6',
      link: '#',
      icon: '$',
      tags: ['Next.js', 'Intermediate Project'],
      video: '/videos/budget.mp4'
    },
    {
      id: 3,
      title: 'Fraud Detection',
      description: 'A machine learning system using NumPy for detecting fraudulent transactions and patterns in banking data. Advanced data cleaning and analysis.',
      color: '#ff3b54',
      link: '#',
      icon: '🔍',
      tags: ['Python', 'Data Processing', 'ML'],
      video: '/videos/fraud.mp4'
    },
    {
      id: 4,
      title: 'Color Detection',
      description: 'An image processing application that identifies and analyzes colors in images using computer vision techniques.',
      color: '#ff6b35',
      link: '#',
      icon: '🎨',
      tags: ['OpenCV', 'Data Processing'],
      video: '/videos/color.mp4'
    },
    {
      id: 5,
      title: 'Fitness Tracker',
      description: 'A comprehensive fitness tracking application to monitor workouts, calories, and health metrics daily.',
      color: '#10b981',
      link: '#',
      icon: '💪',
      tags: ['React Native', 'Firebase'],
      video: '/videos/fitness.mp4'
    },
    {
      id: 6,
      title: 'Support ChatBot',
      description: 'An AI-powered chatbot for websites providing instant customer support and automated intelligent responses with asynchronous processing.',
      color: '#8b5cf6',
      link: '#',
      icon: '💬',
      tags: ['NLP', 'Asyncio', 'Node.js'],
      video: '/videos/chatbot.mp4'
    },
    {
      id: 7,
      title: 'Face Detection',
      description: 'A real-time face detection system using OpenCV for identifying and tracking faces in images and video streams. Optimized for performance.',
      color: '#06b6d4',
      link: '#',
      icon: '👤',
      tags: ['OpenCV', 'Intermediate Project'],
      video: '/videos/face.mp4'
    },
    {
      id: 8,
      title: 'Web Scraper Pro',
      description: 'An automated web scraping tool using asynchronous requests to extract and process data from complex websites at high speed.',
      color: '#f59e0b',
      link: '#',
      icon: '🕷️',
      tags: ['Python', 'Asyncio', 'Data Processing'],
      video: '/videos/scraper.mp4'
    },
    {
      id: 9,
      title: 'Financial Dashboard',
      description: 'An interactive dashboard for visualizing financial data, market trends, and analytics with real-time updates and complex data processing.',
      color: '#0ea5e9',
      link: '#',
      icon: '📊',
      tags: ['React', 'Data Processing', 'Intermediate Project'],
      video: '/videos/dashboard.mp4'
    },
    {
      id: 10,
      title: 'Income Tracker',
      description: 'A personal finance tracker to monitor income, expenses, and manage monthly budgets effectively.',
      color: '#ec4899',
      link: '#',
      icon: '💰',
      tags: ['Vue', 'Intermediate Project'],
      video: '/videos/income.mp4'
    },
    {
      id: 11,
      title: 'Weather Check',
      description: 'A real-time weather application providing forecasts, current conditions, and weather alerts globaly using async API calls.',
      color: '#14b8a6',
      link: '#',
      icon: '🌤️',
      tags: ['API', 'Asyncio'],
      video: '/videos/weather.mp4'
    },
    {
      id: 12,
      title: 'Calorie Tracker',
      description: 'A nutrition tracking application to monitor daily calorie intake, macros, and achieve health goals.',
      color: '#f97316',
      link: '#',
      icon: '🍎',
      tags: ['PWA', 'JavaScript'],
      video: '/videos/calorie.mp4'
    },
    {
      id: 13,
      title: 'Advanced Image Tool',
      description: 'An image manipulation tool using NumPy for complex pixel transformations and high-performance data processing.',
      color: '#a855f7',
      link: '#',
      icon: '🖼️',
      tags: ['NumPy', 'Data Processing', 'Intermediate Project'],
      video: '/videos/image-tool.mp4'
    },
    {
      id: 14,
      title: 'Async Downloader',
      description: 'A high-performance asynchronous file downloader that handles multiple downloads concurrently with progress tracking and error handling.',
      color: '#3b82f6',
      link: '#',
      icon: '⬇️',
      tags: ['Python', 'Asyncio', 'Data Processing'],
      video: '/videos/async-downloader.mp4'
    },
    {
      id: 15,
      title: 'Salary Calculator',
      description: 'An interactive salary calculator that computes take-home pay, taxes, and benefits based on various parameters and locations.',
      color: '#10b981',
      link: '#',
      icon: '💰',
      tags: ['JavaScript', 'Intermediate Project'],
      video: '/videos/salary-calculator.mp4'
    },
    {
      id: 16,
      title: 'LeetCode Solutions',
      description: 'A comprehensive collection of optimized solutions to LeetCode problems with detailed explanations and time/space complexity analysis.',
      color: '#ff3b54',
      link: '#',
      icon: '🧠',
      tags: ['Python', 'Algorithms', 'Data Structures'],
      video: '/videos/leetcode-solutions.mp4'
    },
    {
      id: 17,
      title: 'Notebook App',
      description: 'A feature-rich notebook application for creating, organizing, and sharing interactive notes with code execution capabilities.',
      color: '#8b5cf6',
      link: '#',
      icon: '📓',
      tags: ['React', 'Intermediate Project', 'Productivity'],
      video: '/videos/notebook-app.mp4'
    },
    {
      id: 18,
      title: 'Auto Fill Google Form',
      description: 'An automation tool that intelligently fills Google Forms with predefined data, supporting various form types and validation rules.',
      color: '#f59e0b',
      link: '#',
      icon: '📝',
      tags: ['Python', 'Automation', 'Selenium'],
      video: '/videos/auto-fill-form.mp4'
    },
    {
      id: 19,
      title: 'Matrix Operation Engine',
      description: 'A high-performance matrix computation engine implementing various linear algebra operations with optimized algorithms.',
      color: '#06b6d4',
      link: '#',
      icon: '🔢',
      tags: ['NumPy', 'Data Processing', 'Mathematics'],
      video: '/videos/matrix-engine.mp4'
    },
  ];

  const filterCategories = ['Data Processing', 'Asyncio', 'Intermediate Project', 'Algorithms', 'Automation', 'Mathematics'];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTags = activeTags.length === 0 || 
                       activeTags.every(tag => project.tags.includes(tag));
    return matchesSearch && matchesTags;
  });


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
            sx={{ color: 'text.secondary', fontWeight: 400, maxWidth: '600px', mx: 'auto', mb: 4 }}
          >
            A collection of projects exploring web development, data science, and artificial intelligence.
          </MotionTypography>

          <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
            <ProjectFilter 
              allTags={filterCategories} 
              onSearch={setSearchQuery} 
              onTagsChange={setActiveTags} 
            />
          </Box>
        </Box>

        <AnimatePresence mode="wait">
          <Box
            key={activeTags.join(',') + searchQuery}
            component={motion.div}
            variants={container}
            initial="hidden"
            animate="show"
            sx={{ 
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(3, 1fr)'
              },
              gap: 4,
              width: '100%'
            }}
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} itemVariants={item} />
            ))}
          </Box>
        </AnimatePresence>
      </Container>
    </Box>
  );
}
