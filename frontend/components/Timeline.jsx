import React, { useState } from 'react';
import { Box, Typography, Paper, Grid, Chip, IconButton, Collapse } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { alpha } from '@mui/material/styles';

const timelineData = [
  {
    year: 'Dec 2025 – Present',
    title: 'Freelance Python Software Engineer',
    company: 'Independent · Remote',
    description: 'Architected distributed task queues, real-time applications, and RAG-powered chatbots with 95%+ relevance on domain queries.',
    responsibilities: [
      'Built distributed task queue with FastAPI, Celery, and RabbitMQ for 1000+ concurrent tasks with 40% latency reduction.',
      'Developed real-time chat app with WebSocket supporting 500+ simultaneous users with multi-room presence.',
      'Built RAG-powered chatbot using LLM embeddings and semantic search for 95%+ relevance on domain queries.',
      'Managed full lifecycle of 5+ Python projects with 80%+ test coverage and automated CI/CD.'
    ],
    skills: ['Python 3.10+', 'FastAPI', 'Celery', 'WebSockets', 'PostgreSQL', 'Redis', 'LangChain', 'Docker', 'AWS'],
    color: '#60a5fa'
  },
  {
    year: 'Jul 2024 – Dec 2025',
    title: 'Software Engineer',
    company: 'Quera · Tehran, Iran · Remote',
    description: 'Architected async task pipelines, owned cloud infrastructure on AWS/DigitalOcean, and led code reviews for a 5-engineer team.',
    responsibilities: [
      'Built async task pipeline with FastAPI, Celery, and RabbitMQ for high-volume background jobs.',
      'Managed cloud infrastructure on AWS and DigitalOcean with Docker, Kubernetes, and automated CI/CD.',
      'Deployed Elasticsearch and optimized PostgreSQL/Redis for reduced read latency under peak traffic.',
      'Led weekly architecture reviews and introduced PR conventions that reduced regressions.'
    ],
    skills: ['Python 3', 'FastAPI', 'Django', 'PostgreSQL', 'Redis', 'Elasticsearch', 'Celery', 'RabbitMQ', 'Docker', 'Kubernetes', 'AWS', 'DigitalOcean', 'GitHub Actions'],
    color: '#a78bfa'
  },
  {
    year: 'Nov 2022 – Jun 2024',
    title: 'Software Engineer',
    company: 'Rahpooyan Gostar · Tehran, Iran · Remote',
    description: 'Refactored monolith into microservices, designed ETL workflows, and mentored junior developers.',
    responsibilities: [
      'Refactored monolith into independently deployable REST services, improving deployment cadence.',
      'Built ETL pipelines integrating PostgreSQL, MongoDB, and Redis for unified reporting.',
      'Optimized slow queries with targeted indexing under production load.',
      'Mentored two junior developers through their first production deployments.'
    ],
    skills: ['Python 3', 'Django', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Linux', 'CI/CD'],
    color: '#34d399'
  },
  {
    year: 'Mar 2018 – Dec 2019',
    title: 'Python Software Engineer',
    company: 'Technoarch Softwares · Tehran, Iran',
    description: 'Built RESTful APIs and ETL automation using Django, Flask, and Docker.',
    responsibilities: [
      'Developed REST APIs and microservices with Django and Flask for client-facing products.',
      'Automated ETL data migration across PostgreSQL, MySQL, and MongoDB.',
      'Introduced Docker dev environments and CI/CD pipelines for automated testing.'
    ],
    skills: ['Python', 'Django', 'Flask', 'PostgreSQL', 'MySQL', 'MongoDB', 'Docker', 'Git'],
    color: '#fbbf24'
  },
  {
    year: 'Oct 2016 – Feb 2018',
    title: 'Python Developer',
    company: 'Pishgaman Fanavari Etelaat (ICT) · Tehran, Iran',
    description: 'Developed REST APIs with Flask and maintained 80%+ test coverage using Pytest.',
    responsibilities: [
      'Built REST APIs with Flask using OOP design patterns on an Agile team.',
      'Maintained 80%+ test coverage with Pytest on core API modules.',
      'Managed GitLab workflows and Docker-based development environments.'
    ],
    skills: ['Python 3', 'Django', 'Flask', 'PostgreSQL', 'Docker', 'Pytest', 'Git'],
    color: '#f87171'
  },
  {
    year: 'Aug 2014 – Sep 2016',
    title: 'Data Engineer',
    company: 'Rahkaran Information Systems · Tehran, Iran',
    description: 'Built ETL pipelines with Python to automate reporting and data processing.',
    responsibilities: [
      'Developed ETL pipelines with pandas and numpy for operational data processing.',
      'Cleaned and normalized data from inconsistent source formats for business operations.'
    ],
    skills: ['Python', 'pandas', 'numpy', 'ETL', 'SQL', 'PostgreSQL', 'MySQL', 'MongoDB', 'Git'],
    color: '#fb923c'
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