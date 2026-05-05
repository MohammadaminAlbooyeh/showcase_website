import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../styles/theme';
import '../styles/variables.css';
import '../components/FixedBottomBar.css';
import '../App.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import FixedBottomBar from '../components/FixedBottomBar';
import SEO from '../components/SEO';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Remove the server-side injected CSS
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    // Pre-fetch all routes for instant navigation
    ['/', '/projects/', '/resume/', '/contactus/'].forEach(route => {
      router.prefetch(route);
    });
  }, []);

  // Define SEO metadata based on current route
  const getPageMetadata = () => {
    const path = router.pathname;
    const baseUrl = 'https://your-portfolio-url.com';
    
    const metadata = {
      '/': {
        title: 'My Portfolio - Full Stack Developer',
        description: 'Welcome to my portfolio showcasing my expertise in web development, featuring projects in React, Next.js, and Django.',
        image: `${baseUrl}/og-home.jpg`,
        type: 'website'
      },
      '/portfolio': {
        title: 'Portfolio - My Work and Projects',
        description: 'Explore my portfolio of web development projects, including full-stack applications, responsive websites, and interactive UIs.',
        image: `${baseUrl}/og-portfolio.jpg`,
        type: 'website'
      },
      '/projects': {
        title: 'Projects - Web Development Showcase',
        description: 'View my latest web development projects built with modern technologies like React, Next.js, and Django.',
        image: `${baseUrl}/og-projects.jpg`,
        type: 'website'
      },
      '/resume': {
        title: 'Resume - Full Stack Developer',
        description: 'Professional experience, skills, and qualifications in web development and software engineering.',
        image: `${baseUrl}/og-resume.jpg`,
        type: 'profile'
      },
      '/contactus': {
        title: 'Contact Me - Let\'s Work Together',
        description: 'Get in touch for collaboration opportunities, project inquiries, or professional connections.',
        image: `${baseUrl}/og-contact.jpg`,
        type: 'website'
      }
    };

    return metadata[path] || metadata['/'];
  };

  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SEO {...getPageMetadata()} />
        <NavBar />
        <main className="content">
          <Component {...pageProps} />
        </main>
        <Footer />
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default MyApp;