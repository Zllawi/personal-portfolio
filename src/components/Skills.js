import React from 'react';

const Skills = ({ content }) => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">{content.title}</h2>
        <div className="skills-grid">
          {content.groups.map((group) => (
            <article key={group.title} className="skill-group">
              <h3>{group.title}</h3>
              <div className="skill-tags">
                {group.items.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
