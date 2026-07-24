import React from 'react';

const Projects = ({ content }) => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">{content.title}</h2>
          <p>{content.intro}</p>
        </div>
        <div className="projects-grid">
          {content.items.map((project, index) => (
            <article key={project.title} className="project-card">
              <div className="project-media" aria-hidden="true">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{project.type}</strong>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <span className="project-type">{project.type}</span>
                <p>{project.description}</p>
                <div className="project-role">
                  <span>{content.roleLabel}</span>
                  <strong>{project.role}</strong>
                </div>
                <h4>{content.contributionLabel}</h4>
                <ul>
                  {project.contributions.map((contribution) => (
                    <li key={contribution}>{contribution}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
