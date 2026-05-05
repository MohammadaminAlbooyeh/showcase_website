import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import OptimizedImage from './OptimizedImage';

const MotionCard = motion.create(Card);

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const hoverControls = isMobile ? {
    // On mobile, show controls on tap
    onClick: () => setIsHovered(!isHovered)
  } : {
    // On desktop, show controls on hover
    onHoverStart: () => setIsHovered(true),
    onHoverEnd: () => setIsHovered(false)
  };

  return (
    <MotionCard
      whileHover={!isMobile ? { 
        scale: 1.02,
        boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
      } : {}}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      {...hoverControls}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        '&:active': {
          transform: isMobile ? 'scale(0.98)' : 'none',
          transition: 'transform 0.2s'
        }
      }}
    >
      <Box sx={{ 
        position: 'relative', 
        paddingTop: { xs: '75%', sm: '66.67%', md: '56.25%' } // Mobile: 4:3, Tablet: 3:2, Desktop: 16:9
      }}>
        <OptimizedImage
          src={project.image}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          priority={true}
        />
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgcolor: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: { xs: 3, sm: 2 },
          }}
        >
          {project.github && (
            <IconButton
              component="a"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ 
                color: 'white',
                width: { xs: '48px', sm: '40px' },
                height: { xs: '48px', sm: '40px' }
              }}
            >
              <GitHubIcon sx={{ fontSize: { xs: '24px', sm: '20px' } }} />
            </IconButton>
          )}
          {project.demo && (
            <IconButton
              component="a"
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ 
                color: 'white',
                width: { xs: '48px', sm: '40px' },
                height: { xs: '48px', sm: '40px' }
              }}
            >
              <LaunchIcon sx={{ fontSize: { xs: '24px', sm: '20px' } }} />
            </IconButton>
          )}
        </Box>
      </Box>

      <CardContent sx={{ 
        flexGrow: 1, 
        display: 'flex', 
        flexDirection: 'column',
        p: { xs: 2, sm: 2, md: 3 }
      }}>
        <Typography 
          variant="h6" 
          component="h3" 
          gutterBottom
          sx={{
            fontSize: { xs: '1.125rem', sm: '1.25rem' },
            lineHeight: 1.4
          }}
        >
          {project.title}
        </Typography>
        <Typography 
          variant="body2" 
          color="text.secondary" 
          sx={{ 
            mb: 2,
            fontSize: { xs: '0.875rem', sm: '0.875rem' },
            lineHeight: 1.6
          }}
        >
          {project.description}
        </Typography>
        <Box sx={{ 
          mt: 'auto', 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: { xs: 1, sm: 0.5 }
        }}>
          {project.technologies.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              size={isMobile ? "medium" : "small"}
              sx={{
                bgcolor: 'primary.main',
                color: 'white',
                '&:hover': {
                  bgcolor: 'primary.dark',
                },
              }}
            />
          ))}
        </Box>
      </CardContent>
    </MotionCard>
  );
};

export default ProjectCard;