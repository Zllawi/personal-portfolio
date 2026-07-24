import React from 'react';

const Experience = ({ content }) => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">{content.title}</h2>
        <div className="timeline">
          {content.items.map((item) => (
            <article className="timeline-item" key={`${item.role}-${item.company}`}>
              <div className="timeline-marker" aria-hidden="true"></div>
              <div className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3>{item.role}</h3>
                    <p>{item.company}</p>
                  </div>
                  <span>{item.period}</span>
                </div>
                <p className="timeline-location">
                  <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
                  {item.location}
                </p>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
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

export default Experience;
