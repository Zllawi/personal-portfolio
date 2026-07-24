import React from 'react';

const Education = ({ content }) => {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">{content.title}</h2>
        <article className="education-card">
          <div className="education-icon" aria-hidden="true">
            <i className="fa-solid fa-graduation-cap"></i>
          </div>
          <div>
            <h3>{content.degree}</h3>
            <p>{content.university}</p>
            <div className="education-meta">
              <span>{content.location}</span>
              <span>{content.graduation}</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Education;
