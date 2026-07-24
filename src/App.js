import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Loading from './components/Loading';
import { portfolioContent } from './data/portfolioContent';

const sections = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('portfolio-language') || 'en';
  });

  const content = portfolioContent[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('portfolio-language', language);
  }, [language]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage((currentLanguage) => (currentLanguage === 'en' ? 'ar' : 'en'));
  };

  return (
    <div className={`App lang-${language}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Loading label={content.loading} />
      <Header
        activeSection={activeSection}
        content={content}
        sections={sections}
        language={language}
        onToggleLanguage={toggleLanguage}
      />
      <Hero content={content.hero} />
      <About content={content.about} />
      <Experience content={content.experience} />
      <Projects content={content.projects} />
      <Skills content={content.skills} />
      <Education content={content.education} />
      <Contact content={content.contact} />
      <Footer content={content} sections={sections} />
      <ScrollToTop />
    </div>
  );
}

export default App;
