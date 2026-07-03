import React, { useState } from 'react';
import { Container, Section, Grid, Card, CardImage, CardContent, CardHeader, CardFooter, Badge, Button } from '../ui';
import './Projects.css';

export const Projects = ({ projects = [], title = 'Featured Projects', subtitle = '' }) => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const allTags = Array.from(new Set(projects.flatMap(p => p.tags || [])));

  const filteredProjects = selectedFilter === 'all'
    ? projects
    : projects.filter(p => p.tags?.includes(selectedFilter));

  return (
    <Section id="projects" bgVariant="default">
      <Container size="xl">
        <div className="projects-header">
          <div>
            <h2 className="projects-title">{title}</h2>
            {subtitle && <p className="projects-subtitle">{subtitle}</p>}
          </div>
        </div>

        {allTags.length > 0 && (
          <div className="projects-filters">
            <button
              className={`filter-btn ${selectedFilter === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('all')}
            >
              All Projects
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                className={`filter-btn ${selectedFilter === tag ? 'active' : ''}`}
                onClick={() => setSelectedFilter(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        <Grid columns={3} gap="lg" className="projects-grid">
          {filteredProjects.map(project => (
            <Card key={project.id} hoverable className="project-card">
              {project.image && <CardImage src={project.image} alt={project.title} />}
              <CardContent>
                <CardHeader title={project.title} subtitle={project.category} />
                <p className="project-description">{project.description}</p>
                {project.tags && (
                  <div className="project-tags">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
              {project.link && (
                <CardFooter>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    View Project →
                  </a>
                </CardFooter>
              )}
            </Card>
          ))}
        </Grid>

        {filteredProjects.length === 0 && (
          <div className="projects-empty">
            <p>No projects found in this category.</p>
          </div>
        )}
      </Container>
    </Section>
  );
};
