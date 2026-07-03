import React from 'react';
import { Hero, Projects, About, Contact } from '../components/sections';
import '../styles/design-system.css';

/**
 * Modern Portfolio Landing Page Template
 * A complete, production-ready portfolio landing page with all sections
 */
export const PortfolioLanding = () => {
  const portfolioData = {
    hero: {
      name: 'Your Name',
      title: 'Full Stack Designer & Developer',
      description:
        'I craft beautiful, functional digital experiences. Specializing in modern web design, user experience, and scalable applications.',
      image: '/path/to/hero-image.jpg',
      cta: {
        primary: 'View My Work',
        secondary: 'Get in Touch'
      }
    },

    projects: {
      title: 'Featured Projects',
      subtitle: 'A selection of my latest work across design, development, and product design.',
      items: [
        {
          id: 1,
          title: 'E-Commerce Platform',
          category: 'Full Stack',
          description:
            'A modern e-commerce platform built with React, Node.js, and PostgreSQL. Features include product filtering, real-time cart, and secure checkout.',
          image: '/path/to/project-1.jpg',
          tags: ['React', 'Node.js', 'Design'],
          link: 'https://example.com/project-1'
        },
        {
          id: 2,
          title: 'Design System',
          category: 'Design',
          description:
            'A comprehensive design system with 50+ components, tokens, and documentation. Built to scale for multiple product teams.',
          image: '/path/to/project-2.jpg',
          tags: ['UI/UX', 'Design System', 'Figma'],
          link: 'https://example.com/project-2'
        },
        {
          id: 3,
          title: 'Analytics Dashboard',
          category: 'Web App',
          description:
            'Real-time analytics dashboard with interactive charts, data filtering, and export capabilities. Built with Next.js and Recharts.',
          image: '/path/to/project-3.jpg',
          tags: ['Next.js', 'Charts', 'Data Viz'],
          link: 'https://example.com/project-3'
        },
        {
          id: 4,
          title: 'Mobile App Design',
          category: 'Mobile',
          description:
            'End-to-end design and development of a fitness tracking mobile app. iOS and Android versions with custom animations.',
          image: '/path/to/project-4.jpg',
          tags: ['Mobile', 'Animation', 'React Native'],
          link: 'https://example.com/project-4'
        },
        {
          id: 5,
          title: 'Brand Identity',
          category: 'Branding',
          description:
            'Complete brand identity design including logo, color palette, typography, and brand guidelines for a SaaS startup.',
          image: '/path/to/project-5.jpg',
          tags: ['Branding', 'Design', 'Strategy'],
          link: 'https://example.com/project-5'
        },
        {
          id: 6,
          title: 'API Documentation',
          category: 'Documentation',
          description:
            'Interactive API documentation with code examples, sandbox environment, and comprehensive guides. Built with Next.js.',
          image: '/path/to/project-6.jpg',
          tags: ['Documentation', 'API', 'Next.js'],
          link: 'https://example.com/project-6'
        }
      ]
    },

    about: {
      title: 'About Me',
      bio: `I'm a passionate designer and developer with 5+ years of experience creating digital products that people love.
      My journey started with a curiosity about how things work, which led me to combine design thinking with engineering principles.
      I believe in building products that are not just beautiful but also accessible, performant, and intuitive.`,
      image: '/path/to/about-image.jpg',
      skills: [
        {
          category: 'Design',
          items: ['UI/UX Design', 'Figma', 'Design Systems', 'Prototyping', 'User Research']
        },
        {
          category: 'Frontend',
          items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Animation']
        },
        {
          category: 'Backend',
          items: ['Node.js', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL']
        },
        {
          category: 'Tools',
          items: ['Git', 'Webpack', 'Docker', 'AWS', 'Figma', 'Linear']
        }
      ],
      stats: [
        { value: '5+', label: 'Years Experience' },
        { value: '20+', label: 'Projects Completed' },
        { value: '50+', label: 'Happy Clients' },
        { value: '100%', label: 'Satisfaction Rate' }
      ]
    },

    contact: {
      title: 'Let\'s Work Together',
      subtitle: 'Have a project in mind? I\'d love to hear about it. Let\'s create something amazing together.',
      email: 'hello@example.com',
      social: [
        { label: 'GitHub', url: 'https://github.com' },
        { label: 'LinkedIn', url: 'https://linkedin.com' },
        { label: 'Twitter', url: 'https://twitter.com' },
        { label: 'Dribbble', url: 'https://dribbble.com' }
      ]
    }
  };

  return (
    <>
      <Hero {...portfolioData.hero} />
      <Projects projects={portfolioData.projects.items} {...portfolioData.projects} />
      <About {...portfolioData.about} />
      <Contact {...portfolioData.contact} />
    </>
  );
};

export default PortfolioLanding;
