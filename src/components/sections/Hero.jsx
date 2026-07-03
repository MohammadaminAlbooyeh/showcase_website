import React from 'react';
import { Container, Section, Button } from '../ui';
import './Hero.css';

export const Hero = ({ name, title, description, image, cta }) => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section id="hero" bgVariant="default" className="hero-section">
      <Container size="xl" className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">{name}</h1>
            <p className="hero-subtitle">{title}</p>
            <p className="hero-description">{description}</p>
            <div className="hero-cta">
              <Button size="lg" onClick={scrollToProjects}>
                {cta?.primary || 'View My Work'}
              </Button>
              <Button size="lg" variant="secondary">
                <a href="#contact" style={{ all: 'inherit', cursor: 'inherit' }}>
                  {cta?.secondary || 'Get in Touch'}
                </a>
              </Button>
            </div>
          </div>
          {image && (
            <div className="hero-image">
              <div className="hero-image-wrapper">
                <img src={image} alt={name} />
              </div>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
};
