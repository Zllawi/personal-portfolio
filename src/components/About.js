import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate web developer with expertise in modern web technologies. 
              I love creating beautiful, functional, and user-friendly websites and applications.
            </p>
            <p>
              With a strong foundation in HTML, CSS, JavaScript, and React, I'm always 
              eager to learn new technologies and take on challenging projects.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h3>50+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>3+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>100%</h3>
                <p>Client Satisfaction</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <span>Your Photo Here</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;