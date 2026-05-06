import React, { useState } from 'react';
import { Box, Typography, Paper, Grid, Chip, IconButton, Collapse } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { alpha } from '@mui/material/styles';

const timelineData = [
  {
    year: 'Jul 2024 – Dec 2025',
    title: 'Software Engineer (Python)',
    company: 'Quera · Tehran, Iran · Remote',
    description: 'Architected async task pipeline using FastAPI, Celery, and RabbitMQ to process high-volume background jobs; decoupled ingestion from execution across distributed workers.',
    responsibilities: [
      'Architected async task pipeline using FastAPI, Celery, and RabbitMQ to process high-volume background jobs; decoupled ingestion from execution across distributed workers, eliminating blocking bottlenecks under concurrent load.',
      'Owned cloud infrastructure across AWS and DigitalOcean: containerised all services with Docker, orchestrated with Kubernetes, and automated deployments via GitHub Actions and GitLab CI — reducing manual release steps to zero.',
      'Deployed Elasticsearch for full-text search across the platform; tuned PostgreSQL query execution plans and Redis caching strategies to cut read latency under peak traffic.',
      'Ran weekly architecture reviews and served as primary code reviewer for a 5-engineer team; introduced PR conventions that reduced post-merge regressions.'
    ],
    skills: ['Python 3', 'FastAPI', 'Django', 'PostgreSQL', 'Redis', 'Elasticsearch', 'Celery', 'RabbitMQ', 'Docker', 'Kubernetes', 'AWS', 'DigitalOcean', 'GitHub Actions'],
    color: '#60a5fa'
  },
  {
    year: 'Nov 2022 – Jun 2024',
    title: 'Software Engineer (Python)',
    company: 'Rahpooyan Gostar · Tehran, Iran · Remote',
    description: 'Rebuilt backend of internal service platform from a monolith into independently deployable REST services, improving deployment cadence and isolating failure impact.',
    responsibilities: [
      'Rebuilt backend of internal service platform from a monolith into independently deployable REST services, improving deployment cadence and isolating failure impact across teams.',
      'Designed ETL workflows integrating PostgreSQL, MongoDB, and Redis to consolidate operational data from three source systems into a unified reporting layer.',
      'Profiled and resolved slow queries across PostgreSQL and MongoDB under production load; introduced targeted indexing that cleared throughput bottlenecks flagged by ops.',
      'Led weekly technical reviews and brought two junior developers through their first solo production deployments.'
    ],
    skills: ['Python 3', 'Django', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Linux', 'CI/CD'],
    color: '#a78bfa'
  },
  {
    year: 'Mar 2018 – Dec 2019',
    title: 'Python Software Engineer',
    company: 'Technoarch Softwares · Tehran, Iran',
    description: 'Built RESTful APIs and microservice components with Django and Flask for client-facing products.',
    responsibilities: [
      'Built RESTful APIs and microservice components with Django and Flask for client-facing products.',
      'Wrote ETL automation scripts to extract, clean, and load data across PostgreSQL, MySQL, and MongoDB, replacing previously manual migration steps done in spreadsheets.',
      'Introduced Docker-based local development environments and contributed to CI/CD pipeline configuration for automated test execution on every push.'
    ],
    skills: ['Python', 'Django', 'Flask', 'PostgreSQL', 'MySQL', 'MongoDB', 'Docker', 'Git'],
    color: '#34d399'
  },
  {
    year: 'Oct 2016 – Feb 2018',
    title: 'Python Developer',
    company: 'Pishgaman Fanavari Etelaat (ICT) · Tehran, Iran',
    description: 'Developed REST APIs with Flask using OOP design patterns on an Agile team shipping fortnightly releases.',
    responsibilities: [
      'Developed REST APIs with Flask using OOP design patterns on an Agile team shipping fortnightly releases.',
      'Wrote unit and integration tests with Pytest; maintained test coverage above 80% on core API modules.',
      'Managed source control workflows via GitLab and containerised development environments with Docker.'
    ],
    skills: ['Python 3', 'Flask', 'PostgreSQL', 'Docker', 'Pytest', 'GitLab'],
    color: '#fbbf24'
  },
  {
    year: 'Aug 2014 – Sep 2016',
    title: 'Data Engineer (Junior)',
    company: 'Rahkaran Information Systems · Tehran, Iran',
    description: 'Built ETL pipelines with Python (pandas, numpy) to extract and load operational datasets into PostgreSQL and MySQL, automating reporting tasks previously handled manually.',
    responsibilities: [
      'Built ETL pipelines with Python (pandas, numpy) to extract and load operational datasets into PostgreSQL and MySQL, automating reporting tasks previously handled manually.',
      'Cleaned and normalised data from inconsistent source formats, producing structured outputs consumed by business operations teams.'
    ],
    skills: ['Python', 'pandas', 'numpy', 'SQL', 'PostgreSQL', 'MySQL', 'Git'],
    color: '#f87171'
  },
  {
    year: 'Sep 2012 – Jun 2014',
    title: 'Field / Mud Engineer',
    company: 'National Iranian Drilling Company (NIDC) · Ahvaz, Iran',
    description: 'Monitored drilling fluid systems on active rigs and logged operational metrics into SQL-backed reporting tools.',
    responsibilities: [
      'Monitored drilling fluid systems on active rigs and logged operational metrics into SQL-backed reporting tools; maintained data accuracy under high-pressure field conditions.'
    ],
    skills: ['Excel', 'AutoCAD', 'SQL'],
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