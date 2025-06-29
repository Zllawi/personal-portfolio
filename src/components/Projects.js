import React, { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Website',
      category: 'web',
      description: 'A full-stack e-commerce platform built with React and Node.js',
      technologies: ['React', 'Node.js', 'MongoDB'],
      image: 'https://via.placeholder.com/400x250/4f46e5/ffffff?text=E-Commerce'
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'app',
      description: 'A productivity app for managing tasks and projects',
      technologies: ['React', 'Firebase', 'Material-UI'],
      image: 'https://via.placeholder.com/400x250/059669/ffffff?text=Task+Manager'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      category: 'web',
      description: 'A responsive portfolio website with modern design',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://via.placeholder.com/400x250/dc2626/ffffff?text=Portfolio'
    },
    {
      id: 4,
      title: 'Weather App',
      category: 'app',
      description: 'A weather application with real-time data',
      technologies: ['React', 'API Integration', 'CSS3'],
      image: 'https://via.placeholder.com/400x250/7c3aed/ffffff?text=Weather+App'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="project-filters">
          <button 
            className={filter === 'all' ? 'active' : ''}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={filter === 'web' ? 'active' : ''}
            onClick={() => setFilter('web')}
          >
            Web
          </button>
          <button 
            className={filter === 'app' ? 'active' : ''}
            onClick={() => setFilter('app')}
          >
            Apps
          </button>
        </div>
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <button className="btn btn-primary">View Project</button>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;