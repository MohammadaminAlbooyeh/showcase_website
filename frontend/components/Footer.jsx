import { Box, Container, Grid, Typography, IconButton, Link, Divider, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        background: 'rgba(15, 23, 42, 0.95)',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        mt: 'auto',
        textAlign: 'center'
      }}
    >
      <Container maxWidth="lg">
        <Stack 
          direction="row" 
          spacing={3} 
          justifyContent="center" 
          sx={{ mb: 4 }}
        >
          {[
            { icon: <GitHubIcon />, href: 'https://github.com/MohammadaminAlbooyeh' },
            { icon: <LinkedInIcon />, href: '#' },
            { icon: <TwitterIcon />, href: '#' },
            { icon: <EmailIcon />, href: 'mailto:hello@amin.dev' },
          ].map((social, idx) => (
            <IconButton
              key={idx}
              component={motion.a}
              href={social.href}
              target="_blank"
              whileHover={{ y: -5, color: '#60a5fa' }}
              sx={{ 
                color: 'text.secondary', 
                p: 1.5,
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                '&:hover': {
                  background: 'rgba(96, 165, 250, 0.1)',
                  borderColor: 'rgba(96, 165, 250, 0.3)'
                }
              }}
            >
              {social.icon}
            </IconButton>
          ))}
        </Stack>

        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
          <Typography variant="caption" sx={{ color: 'text.secondary', opacity: 0.6 }}>
            &copy; {new Date().getFullYear()} Amin Albooyeh. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

