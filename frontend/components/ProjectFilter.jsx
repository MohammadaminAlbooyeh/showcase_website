import React, { useState } from 'react';
import {
  Box,
  TextField,
  Chip,
  alpha,
  InputAdornment
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const ProjectFilter = ({ allTags, onSearch, onTagsChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  const handleSearch = (value) => {
    setSearchTerm(value);
    onSearch(value);
  };

  const handleTagClick = (tag) => {
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];
    setSelectedTags(newTags);
    onTagsChange(newTags);
  };

  return (
    <Box sx={{ mb: 6 }}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search projects by title or content..."
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: 'rgba(255, 255, 255, 0.3)' }} />
            </InputAdornment>
          ),
        }}
        sx={{
          mb: 4,
          '& .MuiOutlinedInput-root': {
            backgroundColor: 'rgba(30, 41, 59, 0.4)',
            backdropFilter: 'blur(10px)',
            borderRadius: 3,
            '& fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.1)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(96, 165, 250, 0.4)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#60a5fa',
              borderWidth: '2px',
            },
          },
          '& .MuiInputBase-input': {
            color: '#fff',
            py: 1.8,
            fontSize: '1.1rem',
          },
        }}
      />

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, justifyContent: 'center' }}>
        {allTags.map((tag) => {
          const isActive = selectedTags.includes(tag);
          return (
            <Chip
              key={tag}
              label={tag}
              onClick={() => handleTagClick(tag)}
              sx={{
                px: 2,
                py: 2.5,
                borderRadius: 3,
                fontSize: '0.9rem',
                fontWeight: 600,
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                backgroundColor: isActive
                  ? '#60a5fa'
                  : 'rgba(255, 255, 255, 0.03)',
                color: isActive
                  ? '#0f172a'
                  : 'rgba(255, 255, 255, 0.6)',
                border: '1px solid',
                borderColor: isActive 
                  ? '#60a5fa' 
                  : 'rgba(255, 255, 255, 0.08)',
                '&:hover': {
                  backgroundColor: isActive
                    ? '#3b82f6'
                    : 'rgba(255, 255, 255, 0.08)',
                  borderColor: isActive ? '#3b82f6' : 'rgba(96, 165, 250, 0.3)',
                  transform: 'translateY(-2px)',
                  color: isActive ? '#0f172a' : '#fff',
                },
                '&.MuiChip-root .MuiChip-label': {
                  px: 1,
                }
              }}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default ProjectFilter;