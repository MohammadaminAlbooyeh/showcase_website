import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import LinearProgress from '@mui/material/LinearProgress';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const pages = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Resume', href: '/resume' },
  { label: 'Contact', href: '/contactus' },
];

export default function NavBar() {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navRef = React.useRef(null);
  const [focusedIndex, setFocusedIndex] = React.useState(-1);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle keyboard navigation
  const handleKeyPress = (e, index) => {
    switch (e.key) {
      case 'Escape':
        if (mobileOpen) {
          setMobileOpen(false);
        }
        break;
      case 'ArrowRight':
      case 'ArrowDown':
        e.preventDefault();
        setFocusedIndex((prevIndex) => {
          const newIndex = prevIndex < pages.length - 1 ? prevIndex + 1 : 0;
          focusNavItem(newIndex);
          return newIndex;
        });
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault();
        setFocusedIndex((prevIndex) => {
          const newIndex = prevIndex > 0 ? prevIndex - 1 : pages.length - 1;
          focusNavItem(newIndex);
          return newIndex;
        });
        break;
      case 'Home':
        e.preventDefault();
        setFocusedIndex(0);
        focusNavItem(0);
        break;
      case 'End':
        e.preventDefault();
        setFocusedIndex(pages.length - 1);
        focusNavItem(pages.length - 1);
        break;
    }
  };

  const focusNavItem = (index) => {
    const navItems = navRef.current?.querySelectorAll('button, a[role="menuitem"]');
    if (navItems?.[index]) {
      navItems[index].focus();
    }
  };

  React.useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => {
      setIsLoading(false);
      setMobileOpen(false); // Close mobile menu on navigation
    };

    // Add event listeners for navigation and keyboard events
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
    window.addEventListener('keydown', handleKeyPress);

    // Focus management for mobile menu
    if (mobileOpen && navRef.current) {
      const focusableElements = navRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements.length > 0) {
        focusableElements[0].focus();
      }
    }

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
      window.removeEventListener('keydown', handleKeyPress);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  // Pre-fetch all routes for instant navigation
  React.useEffect(() => {
    pages.forEach(page => router.prefetch(page.href));
  }, []);

  const isActiveRoute = (href) => router.pathname === href;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AppBar 
        position="fixed" 
        color="default" 
        elevation={scrolled ? 4 : 0} 
        component="nav"
        aria-label="Main navigation"
        sx={{ 
          background: scrolled ? 'rgba(15, 23, 42, 0.8)' : 'transparent', 
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        {isLoading && (
          <LinearProgress
            aria-label="Page loading indicator"
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '2px',
              zIndex: 2000
            }}
          />
        )}
        <Container maxWidth={false} sx={{ px: { xs: 2, md: 8 } }}>
          <Toolbar 
            disableGutters 
            sx={{ 
              minHeight: { xs: '56px', sm: '64px' },
              justifyContent: 'space-between'
            }}
          >
            {/* Logo/Brand */}
            <Typography
              variant="h6"
              component={motion.div}
              whileHover={{ scale: 1.05 }}
              sx={{ 
                flexGrow: { xs: 1, md: 0 },
                fontSize: { xs: '1.25rem', sm: '1.5rem' },
                fontWeight: 700,
                textAlign: { xs: 'center', md: 'left' },
                color: 'white'
              }}
            >
              Welcome to my website
            </Typography>

            {/* Mobile menu toggle */}
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label={mobileOpen ? 'close menu' : 'open menu'}
                onClick={toggleMobileMenu}
                color="inherit"
                edge="end"
              >
                {mobileOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </Box>

            {/* Desktop menu */}
            <Box 
              sx={{ 
                flexGrow: 1, 
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'flex-end',
                gap: 2
              }}
            >
              {pages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  passHref
                  style={{ textDecoration: 'none' }}
                >
                  <Button
                    component={motion.button}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    sx={{
                      color: 'text.primary',
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '2px',
                        background: 'primary.main',
                        transform: isActiveRoute(page.href) ? 'scaleX(1)' : 'scaleX(0)',
                        transition: 'transform 0.3s ease'
                      },
                      '&:hover::after': {
                        transform: 'scaleX(1)'
                      }
                    }}
                  >
                    {page.label}
                  </Button>
                </Link>
              ))}
            </Box>

            {/* Mobile drawer */}
            <Drawer
              anchor="right"
              open={mobileOpen && isMobile}
              onClose={() => setMobileOpen(false)}
              PaperProps={{
                sx: {
                  width: '80%',
                  maxWidth: '300px',
                  background: 'var(--color-nav-bg)',
                  backdropFilter: 'blur(8px)'
                }
              }}
              ModalProps={{
                keepMounted: true // Better mobile performance
              }}
            >
              <List sx={{ pt: 2 }}>
                {pages.map((page) => (
                  <ListItem 
                    key={page.href}
                    component={Link}
                    href={page.href}
                    onClick={() => setMobileOpen(false)}
                    sx={{ 
                      py: 2,
                      borderBottom: '1px solid',
                      borderColor: 'divider'
                    }}
                  >
                    <ListItemText 
                      primary={page.label}
                      sx={{
                        '& .MuiTypography-root': {
                          fontSize: '1.125rem',
                          fontWeight: isActiveRoute(page.href) ? 600 : 400,
                          color: isActiveRoute(page.href) ? 'primary.main' : 'text.primary'
                        }
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </Toolbar>
        </Container>
      </AppBar>
    </motion.div>
  );
}