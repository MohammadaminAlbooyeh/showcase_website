import * as React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import AnimatedProjectIcon from '../components/AnimatedProjectIcon';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'To-Do List',
      description: 'A task management application to help organize and track daily tasks efficiently.',
      color: '#00ff73',
      link: '#',
      icon: '✓',
    },
    {
      id: 2,
      title: 'Budgetly App',
      description: 'A budget management application to track expenses, income, and financial goals.',
      color: '#3b82f6',
      link: '#',
      icon: '$',
    },
    {
      id: 3,
      title: 'Fraud Detection',
      description: 'A machine learning system using NumPy for detecting fraudulent transactions and patterns.',
      color: '#ff3b54',
      link: '#',
      icon: '🔍',
    },
    {
      id: 4,
      title: 'Color Detection',
      description: 'An image processing application that identifies and analyzes colors in images using computer vision.',
      color: '#ff6b35',
      link: '#',
      icon: '🎨',
    },
    {
      id: 5,
      title: 'Fitness Tracker',
      description: 'A comprehensive fitness tracking application to monitor workouts, calories, and health metrics.',
      color: '#10b981',
      link: '#',
      icon: '💪',
    },
    {
      id: 6,
      title: 'Support ChatBot',
      description: 'An AI-powered chatbot for websites providing instant customer support and automated responses.',
      color: '#8b5cf6',
      link: '#',
      icon: '💬',
    },
    {
      id: 7,
      title: 'Face Detection',
      description: 'A real-time face detection system using OpenCV for identifying and tracking faces in images and video.',
      color: '#06b6d4',
      link: '#',
      icon: '👤',
    },
    {
      id: 8,
      title: 'Web Scraper',
      description: 'An automated web scraping tool to extract and process data from websites efficiently.',
      color: '#f59e0b',
      link: '#',
      icon: '🕷️',
    },
    {
      id: 9,
      title: 'Financial Data Dashboard',
      description: 'An interactive dashboard for visualizing financial data, market trends, and analytics with real-time updates.',
      color: '#0ea5e9',
      link: '#',
      icon: '📊',
    },
    {
      id: 10,
      title: 'Income and Expense',
      description: 'A personal finance tracker to monitor income, expenses, and manage monthly budgets effectively.',
      color: '#ec4899',
      link: '#',
      icon: '💰',
    },
    {
      id: 11,
      title: 'Weather Check',
      description: 'A real-time weather application providing forecasts, current conditions, and weather alerts for any location.',
      color: '#14b8a6',
      link: '#',
      icon: '🌤️',
    },
    {
      id: 12,
      title: 'Calorie Tracker App',
      description: 'A nutrition tracking application to monitor daily calorie intake, macros, and achieve health goals.',
      color: '#f97316',
      link: '#',
      icon: '🍎',
    },
    {
      id: 13,
      title: 'Basic Image Processing',
      description: 'An image manipulation tool using NumPy for filtering, transformations, and enhancement operations.',
      color: '#a855f7',
      link: '#',
      icon: '🖼️',
    },
  ];

  return (
    <Box sx={{ py: 4, px: 3, width: '100%' }}>
    
      <Typography
        variant="h1"
        component="h1"
        sx={{
          mb: 4,
          textAlign: 'center',
          fontWeight: 700,
          fontSize: {
            xs: '2rem',
            sm: '2.5rem',
            md: '3rem',
          },
        }}
      >
        My Projects
      </Typography>
      
      <Box sx={{ maxWidth: '1600px', margin: '0 auto', width: '100%' }}>
        <Grid container spacing={3} sx={{ width: '100%', margin: 0 }}>
          {projects.map(project => (
            <Grid item xs={12} sm={6} md={4} key={project.id} sx={{ 
              display: 'flex',
              flexBasis: '33.333333%',
              maxWidth: '33.333333%',
              '@media (max-width: 900px)': {
                flexBasis: '50%',
                maxWidth: '50%',
              },
              '@media (max-width: 600px)': {
                flexBasis: '100%',
                maxWidth: '100%',
              }
            }}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  borderRadius: 2,
                  backgroundColor: 'rgba(30, 41, 59, 0.5)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(246, 59, 72, 0.1)',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(160, 240, 10, 0.2)',
                    borderColor: 'rgba(59, 246, 84, 0.3)',
                  },
                }}
              >
                <Box
                  onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
                  sx={{ cursor: 'pointer', p: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                  <Box sx={{ 
                    width: '100px', 
                    height: '70px', 
                    borderRadius: '12px', 
                    background: project.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem'
                  }}>
                    {project.icon}
                  </Box>
                </Box>
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography
                  variant="h6"
                  component="h2"
                  sx={{
                    fontWeight: 700,
                    color: project.color,
                    mb: 1,
                    transition: 'color 0.3s ease',
                  }}
                >
                  {project.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#cbd5e1',
                    lineHeight: 1.6,
                    flexGrow: 1,
                  }}
                >
                  {project.description}
                </Typography>
              </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}