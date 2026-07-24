import React from 'react';

const About = ({ content }) => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">{content.title}</h2>
        <div className="about-content">
          <div className="about-text">
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="about-details" aria-label={content.title}>
            {content.details.map((detail) => (
              <div className="detail-item" key={detail.label}>
                <span>{detail.label}</span>
                <strong>{detail.value}</strong>
              </div>
            ))}
            <div className="detail-note">
              <i className="fa-solid fa-circle-nodes" aria-hidden="true"></i>
              <span>{content.detailNote}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
