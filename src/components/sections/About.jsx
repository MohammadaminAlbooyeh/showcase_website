import React from 'react';
import { Container, Section, Grid, Badge } from '../ui';
import './About.css';

export const About = ({
  title = 'About Me',
  bio = '',
  image = '',
  skills = [],
  stats = []
}) => {
  return (
    <Section id="about" bgVariant="muted">
      <Container size="xl">
        <h2 className="about-title">{title}</h2>

        <div className="about-content">
          {image && (
            <div className="about-image">
              <img src={image} alt={title} />
            </div>
          )}

          <div className="about-text">
            <p className="about-bio">{bio}</p>

            {skills.length > 0 && (
              <div className="skills-section">
                <h3 className="skills-title">Skills & Technologies</h3>
                <div className="skills-grid">
                  {skills.map((skill, idx) => (
                    <div key={idx} className="skill-item">
                      {skill.category && <h4 className="skill-category">{skill.category}</h4>}
                      <div className="skill-tags">
                        {(Array.isArray(skill) ? skill : skill.items || []).map((item, i) => (
                          <Badge key={i} variant="primary">
                            {typeof item === 'string' ? item : item.name}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {stats.length > 0 && (
          <div className="stats-section">
            <Grid columns={4} gap="md">
              {stats.map((stat, idx) => (
                <div key={idx} className="stat-card">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </Grid>
          </div>
        )}
      </Container>
    </Section>
  );
};
