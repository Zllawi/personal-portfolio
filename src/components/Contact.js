import React from 'react';

const Contact = ({ content }) => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">{content.title}</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>{content.heading}</h3>
            <p>{content.body}</p>
            <div className="contact-details">
              <div className="contact-item">
                <strong>{content.emailLabel}</strong>
                <a href={`mailto:${content.email}`}>{content.email}</a>
              </div>
              <div className="contact-item">
                <strong>{content.phoneLabel}</strong>
                <a href={`tel:${content.phone.replace(/\s/g, '')}`}>{content.phone}</a>
              </div>
              <div className="contact-item">
                <strong>{content.locationLabel}</strong>
                <span>{content.location}</span>
              </div>
            </div>
            <div className="contact-actions">
              <a href={`mailto:${content.email}`} className="btn btn-primary">
                <i className="fa-solid fa-envelope" aria-hidden="true"></i>
                {content.emailCta}
              </a>
              <a href={`tel:${content.phone.replace(/\s/g, '')}`} className="btn btn-outline">
                <i className="fa-solid fa-phone" aria-hidden="true"></i>
                {content.phoneCta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
