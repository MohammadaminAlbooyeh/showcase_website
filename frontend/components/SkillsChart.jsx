import React, { useState, useEffect } from 'react';
import {
  Box,
  Chip,
  Typography,
  Paper,
  Grid,
  LinearProgress,
  Fade,
  Button,
  ButtonGroup,
  useTheme,
  alpha
} from '@mui/material';
import { keyframes } from '@mui/material/styles';

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const scaleIn = keyframes`
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
`;

const skillsData = {
  "Frontend": [
    { name: "React", level: 90, color: "#61DAFB" },
    { name: "JavaScript", level: 85, color: "#F7DF1E" },
    { name: "TypeScript", level: 80, color: "#007ACC" },
    { name: "HTML/CSS", level: 95, color: "#E34F26" },
    { name: "Material UI", level: 85, color: "#0081CB" },
    { name: "Next.js", level: 75, color: "#000000" }
  ],
  "Backend": [
    { name: "Node.js", level: 85, color: "#339933" },
    { name: "Python", level: 80, color: "#3776AB" },
    { name: "Django", level: 75, color: "#092E20" },
    { name: "Express", level: 85, color: "#000000" },
    { name: "RESTful APIs", level: 90, color: "#FF6C37" }
  ],
  "Database": [
    { name: "MongoDB", level: 85, color: "#47A248" },
    { name: "PostgreSQL", level: 80, color: "#336791" },
    { name: "MySQL", level: 75, color: "#4479A1" },
    { name: "Redis", level: 70, color: "#DC382D" }
  ],
  "DevOps": [
    { name: "Docker", level: 80, color: "#2496ED" },
    { name: "Git", level: 90, color: "#F05032" },
    { name: "AWS", level: 75, color: "#FF9900" },
    { name: "CI/CD", level: 75, color: "#2088FF" }
  ]
};

const SkillsChart = () => {
  const [selectedCategory, setSelectedCategory] = useState("Frontend");
  const [animate, setAnimate] = useState(true);
  const theme = useTheme();

  useEffect(() => {
    setAnimate(false);
    const timer = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Box sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <ButtonGroup
          variant="outlined"
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 1,
            justifyContent: 'center',
            '& .MuiButton-root': {
              borderColor: 'var(--color-primary)',
              color: 'var(--color-primary)',
              '&.active': {
                bgcolor: 'var(--color-accent)',
                color: 'var(--color-bg)',
                borderColor: 'var(--color-accent)',
                '&:hover': {
                  bgcolor: 'var(--color-accent)',
                  opacity: 0.9,
                }
              }
            }
          }}
        >
          {Object.keys(skillsData).map((category) => (
            <Button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={selectedCategory === category ? 'active' : ''}
            >
              {category}
            </Button>
          ))}
        </ButtonGroup>
      </Box>

      <Grid container spacing={3}>
        {skillsData[selectedCategory].map((skill, index) => (
          <Fade 
            key={skill.name} 
            in={animate} 
            timeout={300 + index * 100}
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            <Grid size={12}>
              <Box
                sx={{
                  animation: `${slideIn} 0.5s ease-out forwards`,
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: skill.color,
                      fontWeight: 500,
                      minWidth: 120,
                    }}
                  >
                    {skill.name}
                  </Typography>
                  <Box sx={{ flexGrow: 1, ml: 2 }}>
                    <LinearProgress
                      variant="determinate"
                      value={animate ? skill.level : 0}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: alpha(skill.color, 0.1),
                        animation: `${scaleIn} 1s ease-out`,
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: skill.color,
                          transition: 'transform 1s ease-out',
                        },
                      }}
                    />
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      ml: 2,
                      minWidth: 40,
                      color: skill.color,
                      fontWeight: 500,
                    }}
                  >
                    {skill.level}%
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Fade>
        ))}
      </Grid>
    </Box>
  );
};

export default SkillsChart;