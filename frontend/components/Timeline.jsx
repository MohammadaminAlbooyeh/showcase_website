import React, { useState } from 'react';
import { Box, Typography, Paper, Grid, Chip, IconButton, Collapse } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { alpha } from '@mui/material/styles';

const timelineData = [
  {
    year: '2023 - Present',
    title: 'Senior Python developer',
    company: 'Tech Solutions Inc.',
    description: 'Lead developer for high-scale Django applications and AI integrations.',
    responsibilities: [
      'Architected and implemented microservices using Django REST Framework.',
      'Optimized database queries reducing latency by 40%.',
      'Integrated OpenAI APIs for automated content generation features.',
      'Mentored junior developers and established CI/CD best practices.'
    ],
    skills: ['Django', 'Python', 'React', 'PostgreSQL', 'Docker'],
    color: '#60a5fa'
  },
  {
    year: '2021 - 2023',
    title: 'Full Stack Developer',
    company: 'Digital Wave Agency',
    description: 'Specialized in building end-to-end web solutions for global clients.',
    responsibilities: [
      'Developed 15+ custom web applications from scratch.',
      'Implemented real-time features using WebSockets and Django Channels.',
      'Managed cloud infrastructure on AWS (EC2, S3, RDS).',
      'Built responsive and accessible UIs using React and Material UI.'
    ],
    skills: ['Python', 'React', 'Next.js', 'Redis', 'AWS'],
    color: '#fbbf24'
  },
  {
    year: '2019 - 2021',
    title: 'Backend Developer',
    company: 'Innovation Lab',
    description: 'Focused on robust API development and system architecture.',
    responsibilities: [
      'Designed and maintained complex RESTful APIs.',
      'Automated data scraping and processing pipelines.',
      'Collaborated with designers to ensure seamless frontend-backend integration.',
      'Performed regular security audits and performance tuning.'
    ],
    skills: ['Python', 'Django', 'SQLAlchemy', 'Postgres', 'Git'],
    color: '#4ade80'
  }
];

const TimelineItem = ({ item, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <Box
      sx={{
        mb: 8,
        position: 'relative',
        display: 'flex',
        justifyContent: isEven ? 'flex-start' : 'flex-end',
        width: '100%',
        flexDirection: { xs: 'column', md: 'row' },
      }}
    >
      {/* Timeline Dot */}
      <Box
        sx={{
          position: 'absolute',
          left: { xs: '20px', md: '50%' },
          top: '30px',
          transform: 'translateX(-50%)',
          width: '16px',
          height: '16px',
          borderRadius: '50%',
          background: item.color,
          border: '4px solid #0a0a0a',
          boxShadow: `0 0 15px ${item.color}`,
          zIndex: 2,
        }}
      />

      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        style={{ width: '100%', maxWidth: '45%' }}
      >
        <Paper
          onClick={() => setIsExpanded(!isExpanded)}
          sx={{
            p: 3,
            borderRadius: 4,
            background: 'rgba(30, 41, 59, 0.4)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            cursor: 'pointer',
            ml: { xs: 6, md: 0 },
            mr: { xs: 0, md: 0 },
            width: { xs: 'calc(100% - 60px)', md: '100%' },
            '&:hover': {
              borderColor: `${item.color}66`,
              transform: 'translateY(-5px)',
              background: 'rgba(30, 41, 59, 0.6)',
            }
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
            <Typography variant="caption" sx={{ color: item.color, fontWeight: 800, letterSpacing: 1.5 }}>
              {item.year}
            </Typography>
            <IconButton 
              size="small" 
              sx={{ 
                color: 'rgba(255,255,255,0.3)',
                transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s'
              }}
            >
              <ExpandMoreIcon />
            </IconButton>
          </Box>

          <Typography variant="h5" sx={{ fontWeight: 800, color: '#fff', mb: 0.5 }}>
            {item.title}
          </Typography>
          <Typography variant="subtitle2" sx={{ color: 'rgba(255,255,255,0.5)', mb: 2, fontWeight: 600 }}>
            {item.company}
          </Typography>

          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 2, lineHeight: 1.6 }}>
            {item.description}
          </Typography>

          <Collapse in={isExpanded}>
            <Box sx={{ mt: 2, pt: 2, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
              <Typography variant="subtitle2" sx={{ color: '#fff', mb: 1.5, fontWeight: 700 }}>
                Key Responsibilities:
              </Typography>
              <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
                {item.responsibilities.map((resp, i) => (
                  <li key={i} style={{ marginBottom: '8px' }}>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                      {resp}
                    </Typography>
                  </li>
                ))}
              </ul>
            </Box>
          </Collapse>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 3 }}>
            {item.skills.map((skill) => (
              <Chip
                key={skill}
                label={skill}
                size="small"
                sx={{
                  height: 22,
                  fontSize: '0.65rem',
                  background: 'rgba(255,255,255,0.03)',
                  color: 'rgba(255,255,255,0.5)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  fontWeight: 600
                }}
              />
            ))}
          </Box>
        </Paper>
      </motion.div>
    </Box>
  );
};

const Timeline = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        py: 4,
        '&::before': {
          content: '""',
          position: 'absolute',
          left: { xs: '20px', md: '50%' },
          transform: { md: 'translateX(-50%)' },
          width: '2px',
          height: '100%',
          background: 'linear-gradient(to bottom, transparent, rgba(96, 165, 250, 0.3), transparent)',
        }
      }}
    >
      {timelineData.map((item, index) => (
        <TimelineItem key={index} item={item} index={index} />
      ))}
    </Box>
  );
};

export default Timeline;