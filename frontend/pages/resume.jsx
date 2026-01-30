
import React from 'react';
import { Box, Container, Typography, Button, Stack, Divider } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import Timeline from '../components/Timeline';
import { motion } from 'framer-motion';

export default function Resume() {
  return (
    <Box sx={{ pt: 12, pb: 8, minHeight: '100vh', background: 'var(--color-bg)' }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ mb: 10, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 900, 
                mb: 2, 
                background: 'linear-gradient(45deg, #fff 30%, #60a5fa 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Resume
            </Typography>
            <Typography variant="h6" sx={{ color: 'text.secondary', maxWidth: '600px', mx: 'auto', mb: 4 }}>
              A combination of academic foundation and professional experience in building modern digital solutions.
            </Typography>
            
            <Button
              variant="contained"
              startIcon={<DownloadIcon />}
              href="/resume.pdf"
              target="_blank"
              sx={{
                background: 'linear-gradient(45deg, #60a5fa 30%, #3b82f6 90%)',
                color: '#fff',
                px: 4,
                py: 1.5,
                borderRadius: '12px',
                fontWeight: 700,
                textTransform: 'none',
                fontSize: '1.1rem',
                boxShadow: '0 4px 14px 0 rgba(0, 118, 255, 0.39)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #3b82f6 30%, #2563eb 90%)',
                }
              }}
            >
              Download Full CV
            </Button>
          </motion.div>
        </Box>

        {/* Experience & Education Timeline */}
        <Box sx={{ mb: 12 }}>
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 6, color: '#fff', textAlign: 'center' }}>
            Professional Journey
          </Typography>
          <Timeline />
        </Box>
      </Container>
    </Box>
  );
}

