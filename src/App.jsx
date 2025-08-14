import React, { useState, useEffect } from 'react';
import { AnimatedBackground } from 'animated-backgrounds';
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./assets/styles/global.css";
import me2 from "../assets/images/WhatsApp_Image_2025-02-26_at_21.19.21-removebg-preview.png";
import Me from "../assets/images/Beige Simple Photo Signature Twitter Profile Picture.png";
import north from "../assets/images/north_east_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";
import dwl from "../assets/images/arrow_downward_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";
import ccs2 from "../assets/images/cs2apis.png";
import github from "../assets/images/4202098_github_code_developer_logo_icon.svg";
import linkedin from "../assets/images/4202085_linkedin_logo_social_social media_icon.svg";
import insta from "../assets/images/1298747_instagram_brand_logo_social media_icon.svg";
import mail from "../assets/images/mail_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";
import phone from "../assets/images/call_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [displayedSkills, setDisplayedSkills] = useState([]);
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  // Dados
  const skillsData = [
    "HTML: ********** (90%)",
    "CSS: ********** (90%)",
    "JavaScript: ********* (85%)",
    // ... outras habilidades
  ];

  const projectsData = [
    {
      id: 1,
      title: "Projeto com 2 api's",
      description: "Um site para teste de api de um jogo.",
      technologies: ["React", "CSS", "JavaScript"],
      image: ccs2,
      liveLink: "https://frameapics2.vercel.app/",
      codeLink: "https://github.com/GusAtSantos/frameapigames"
    },
    // ... outros projetos
  ];

  // Controle de scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Efeito de digitação
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (currentSkillIndex < skillsData.length) {
      const currentSkill = skillsData[currentSkillIndex];
      
      if (isTyping) {
        if (currentText.length < currentSkill.length) {
          const timer = setTimeout(() => {
            setCurrentText(currentSkill.slice(0, currentText.length + 1));
          }, 90);
          return () => clearTimeout(timer);
        } else {
          setIsTyping(false);
          const timer = setTimeout(() => {
            setDisplayedSkills(prev => [...prev, currentText]);
            setCurrentText('');
            setCurrentSkillIndex(currentSkillIndex + 1);
            setIsTyping(true);
          }, 1000);
          return () => clearTimeout(timer);
        }
      }
    } else {
      setShowCursor(false);
    }
  }, [currentSkillIndex, currentText, isTyping]);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="portfolio-app">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />

      {/* Seção Home */}
      <section id="home" className="section home-section">
        <AnimatedBackground animationName="particleNetwork" style={{ opacity: 0.2 }} />
        
        <div className="home-content">
          <h1>Gustavo Santos</h1>
          <h2>Desenvolvedor Web Mobile</h2>
          
          <div className="home-buttons">
            <button onClick={() => scrollToSection('about')} className="btn">
              About <img src={north} alt="" />
            </button>
            {/* Outros botões */}
          </div>
        </div>
        
        <img src={me2} alt="Gustavo Santos" className="profile-image" />
      </section>

      {/* Seção About */}
      <section id="about" className="section about-section">
        <AnimatedBackground animationName="particleNetwork" style={{ opacity: 0.2 }} />
        
        <div className="about-content">
          <h1>About-me</h1>
          <p>
            Desenvolvedor de aplicações web e mobile. Sou apaixonado por criar soluções
            inovadoras e eficientes...
          </p>
          
          <a href="https://drive.google.com/drive/u/4/folders/1CLSos1uFhI95ZYVRldFE47A-Vj3Tfhch">
            <button className="btn">
              Download Curriculo <img src={dwl} alt="" />
            </button>
          </a>
        </div>
        
        <img src={Me} alt="Gustavo Santos" className="about-image" />
      </section>

      {/* Seção Skills */}
      <section id="skills" className="section skills-section">
        <AnimatedBackground animationName="particleNetwork" style={{ opacity: 0.2 }} />
        
        <div className="terminal">
          <h1>Minhas Habilidades</h1>
          
          <div className="terminal-content">
            {displayedSkills.map((skill, index) => (
              <div key={index} className="terminal-line">
                <span className="prompt">$</span> {skill}
              </div>
            ))}
            
            {currentSkillIndex < skillsData.length && (
              <div className="terminal-line">
                <span className="prompt">$</span> {currentText}
                {showCursor && <span className="cursor">|</span>}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Seção Projects */}
      <section id="projects" className="section projects-section">
        <AnimatedBackground animationName="particleNetwork" style={{ opacity: 0.2 }} />
        
        <div className="projects-container">
          <h1>Meus Projetos</h1>
          
          <div className="projects-grid">
            {projectsData.map(project => (
              <div key={project.id} className="project-card">
                <img src={project.image} alt={project.title} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    Ver Projeto
                  </a>
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                    Código no GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Contact */}
      <section id="contact" className="section contact-section">
        <AnimatedBackground animationName="particleNetwork" style={{ opacity: 0.2 }} />
        
        <div className="contact-container">
          <h1>Contact</h1>
          
          <div className="contact-form">
            {/* Seu formulário de contato aqui */}
          </div>
          
          <div className="contact-info">
            <div className="contact-item">
              <img src={mail} alt="Email" />
              <span>gustavoatanasiosantos@gmail.com</span>
            </div>
            
            <div className="contact-item">
              <img src={phone} alt="Phone" />
              <span>(31) 9 9290-1102</span>
            </div>
            
            <div className="social-links">
              <a href="https://github.com/GusAtSantos" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="GitHub" />
              </a>
              {/* Outras redes sociais */}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
