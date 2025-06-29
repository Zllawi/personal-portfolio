import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "I'm a Web Developer";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <section id="home" className="hero">
      <div className="video-background">
        <video autoPlay muted loop playsInline>
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>
      <div className="hero-content">
        <h1>Hello, I'm <span className="highlight">John Doe</span></h1>
        <h2 className="typewriter">{text}<span className="cursor">|</span></h2>
        <p>Creating amazing web experiences with modern technologies</p>
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={() => {
            const element = document.getElementById('projects');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
          }}>
            View My Work
          </button>
          <button className="btn btn-secondary" onClick={() => {
            const element = document.getElementById('contact');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
          }}>
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;