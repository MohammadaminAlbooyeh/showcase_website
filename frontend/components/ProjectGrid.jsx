import { useState, useMemo } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Chip from '@mui/material/Chip';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ProjectCard from './ProjectCard';

const ProjectGrid = ({ projects }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('recent');
  const [selectedTech, setSelectedTech] = useState('all');
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  // Extract unique technologies from all projects
  const technologies = useMemo(() => {
    const techSet = new Set();
    projects.forEach(project => {
      project.technologies.forEach(tech => techSet.add(tech));
    });
    return ['all', ...Array.from(techSet)];
  }, [projects]);

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    return projects
      .filter(project => {
        const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesTech = selectedTech === 'all' || project.technologies.includes(selectedTech);
        return matchesSearch && matchesTech;
      })
      .sort((a, b) => {
        switch (sortBy) {
          case 'recent':
            return new Date(b.date) - new Date(a.date);
          case 'name':
            return a.title.localeCompare(b.title);
          default:
            return 0;
        }
      });
  }, [projects, searchQuery, selectedTech, sortBy]);

  return (
    <Box sx={{ 
      py: { xs: 2, sm: 3, md: 4 },
      px: { xs: 1, sm: 2, md: 3 }
    }}>
      {/* Filters and Sort */}
      <Box sx={{ 
        mb: { xs: 2, sm: 3, md: 4 },
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: { xs: 1, sm: 2 },
        alignItems: { xs: 'stretch', sm: 'center' }
      }}>
        <TextField
          label="Search projects"
          variant="outlined"
          size={isMobile ? "medium" : "small"}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ 
            flexGrow: 1,
            width: { xs: '100%', sm: 'auto' },
            minWidth: { sm: 200 }
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <FormControl 
          size={isMobile ? "medium" : "small"}
          sx={{ 
            width: { xs: '100%', sm: 'auto' },
            minWidth: { sm: 120 }
          }}
        >
          <InputLabel>Sort by</InputLabel>
          <Select
            value={sortBy}
            label="Sort by"
            onChange={(e) => setSortBy(e.target.value)}
          >
            <MenuItem value="recent">Most Recent</MenuItem>
            <MenuItem value="name">Name</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Technology filters */}
      <Box sx={{ 
        mb: { xs: 2, sm: 3, md: 4 },
        display: 'flex',
        gap: 1,
        flexWrap: 'wrap',
        justifyContent: { xs: 'center', sm: 'flex-start' }
      }}>
        {technologies.map((tech) => (
          <Chip
            key={tech}
            label={tech}
            onClick={() => setSelectedTech(tech)}
            variant={selectedTech === tech ? 'filled' : 'outlined'}
            color={selectedTech === tech ? 'primary' : 'default'}
            sx={{ 
              textTransform: 'capitalize',
              fontSize: { xs: '0.875rem', sm: 'inherit' }
            }}
          />
        ))}
      </Box>

      {/* Project Grid */}
      <Grid 
        container 
        spacing={{ xs: 2, sm: 2, md: 3 }}
        columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <Grid 
              item 
              xs={1}
              key={project.id}
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            </Grid>
          ))}
        </AnimatePresence>
      </Grid>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <Box
          sx={{
            textAlign: 'center',
            py: 8,
            color: 'text.secondary',
          }}
        >
          No projects found matching your criteria
        </Box>
      )}
    </Box>
  );
};

export default ProjectGrid;