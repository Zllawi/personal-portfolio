import React from 'react';

const Footer = ({ content, sections }) => {
  const currentYear = new Date().getFullYear();
  const { footer, nav, contact } = content;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{content.logo}</h3>
            <p>{footer.description}</p>
            <div className="social-links">
              <a
                href={contact.linkedinUrl}
                className="social-link"
                target="_blank"
                rel="noreferrer"
                aria-label={contact.linkedin}
              >
                <i className="fa-brands fa-linkedin-in" aria-hidden="true"></i>
              </a>
              <a href="#" className="social-link" aria-label={contact.portfolio}>
                <i className="fa-solid fa-link" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h4>{footer.quickLinks}</h4>
            <ul>
              {sections.map((sectionId) => (
                <li key={sectionId}>
                  <a href={`#${sectionId}`}>{nav[sectionId]}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-section">
            <h4>{footer.contactInfo}</h4>
            <div className="footer-contact">
              <p><i className="fa-solid fa-envelope" aria-hidden="true"></i> {contact.email}</p>
              <p><i className="fa-solid fa-phone" aria-hidden="true"></i> {contact.phone}</p>
              <p><i className="fa-solid fa-location-dot" aria-hidden="true"></i> {contact.location}</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} {content.logo}. {footer.rights}</p>
          <p>{footer.built}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
