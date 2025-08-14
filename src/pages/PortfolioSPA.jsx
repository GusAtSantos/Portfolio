import React, { useState, useEffect } from 'react';
import { AnimatedBackground } from 'animated-backgrounds';
import north from "../assets/images/north_east_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";
import Me from "../assets/images/Beige Simple Photo Signature Twitter Profile Picture.png";
import me2 from "../assets/images/WhatsApp_Image_2025-02-26_at_21.19.21-removebg-preview.png";
import dwl from "../assets/images/arrow_downward_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";
import ccs2 from "../assets/images/cs2apis.png";
import chimp from "../assets/images/chimper.png";
import ppt from "../assets/images/ppt.png";
import photsent from "../assets/images/photosen.png";
import github from "../assets/images/4202098_github_code_developer_logo_icon.svg";
import linkedin from "../assets/images/4202085_linkedin_logo_social_social media_icon.svg";
import insta from "../assets/images/1298747_instagram_brand_logo_social media_icon.svg";
import mail from "../assets/images/mail_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";
import phone from "../assets/images/call_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";

const PortfolioSPA = () => {
  // Estado para controle do menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Dados das habilidades
  const skillsData = [
    "HTML: ********** (90%)",
    "CSS: ********** (90%)",
    "JavaScript: ********* (85%)",
    // ... outras habilidades
  ];

  // Dados dos projetos
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

  // Efeito de digitação para habilidades
  const [displayedSkills, setDisplayedSkills] = useState([]);
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
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
            setDisplayedSkills((prev) => [...prev, currentText]);
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

  // Função para rolar suavemente
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="portfolio-container">
      {/* Header */}
      <header className="header">
        <nav className="navbar">
          <div className="logo" onClick={() => scrollToSection('home')}>
            Gustavo Santos
          </div>
          
          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>

          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li><button onClick={() => scrollToSection('home')}>Home</button></li>
            <li><button onClick={() => scrollToSection('about')}>About</button></li>
            <li><button onClick={() => scrollToSection('skills')}>Skills</button></li>
            <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
            <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
          </ul>
        </nav>
      </header>

      {/* Seção Home */}
      <section id="home" className="section home-section">
        <AnimatedBackground animationName="particleNetwork" style={{ opacity: 0.2 }} />
        
        <div className="home-content">
          <h1 className="home-title">Gustavo Santos</h1>
          <h2 className="home-subtitle">Desenvolvedor Web Mobile</h2>
          
          <div className="home-buttons">
            <button onClick={() => scrollToSection('about')} className="home-button">
              <span>About</span>
              <img src={north} alt="" className="button-icon" />
            </button>
            {/* ... outros botões */}
          </div>
        </div>

        <div className="profile-container">
          <img src={me2} alt="Gustavo Santos" className="profile-image" />
        </div>
      </section>

      {/* Seção About */}
      <section id="about" className="section about-section">
        <AnimatedBackground animationName="particleNetwork" style={{ opacity: 0.2 }} />
        
        <div className="container">
          <div className="about-content">
            <h1 className="section-title">Sobre Mim</h1>
            
            <p className="about-text">
              Desenvolvedor de aplicações web e mobile. Sou apaixonado por criar soluções
              inovadoras e eficientes...
            </p>
            
            <a href="https://drive.google.com/drive/u/4/folders/1CLSos1uFhI95ZYVRldFE47A-Vj3Tfhch" 
               target="_blank"
               rel="noopener noreferrer"
               className="download-cv"
            >
              <button className="btn">
                <span>Download Currículo</span>
                <img src={dwl} alt="" className="btn-icon" />
              </button>
            </a>
          </div>
          
          <div className="about-image">
            <img src={Me} alt="Gustavo Santos" className="profile-image" />
          </div>
        </div>
      </section>

      {/* Seção Skills */}
      <section id="skills" className="section skills-section">
        <AnimatedBackground animationName="particleNetwork" style={{ opacity: 0.2 }} />
        
        <div className="container">
          <h1 className="section-title">Minhas Habilidades</h1>
          
          <div className="terminal">
            <div className="terminal-header">
              <div className="terminal-buttons">
                <div className="terminal-button red"></div>
                <div className="terminal-button yellow"></div>
                <div className="terminal-button green"></div>
              </div>
              <div className="terminal-title">terminal</div>
            </div>
            
            <div className="terminal-content">
              {displayedSkills.map((skill, index) => (
                <div key={index} className="terminal-line">
                  <span className="prompt">$</span> {skill}
                </div>
              ))}
              
              {currentSkillIndex < skillsData.length ? (
                <div className="terminal-line">
                  <span className="prompt">$</span> {currentText}
                  {showCursor && <span className="cursor">|</span>}
                </div>
              ) : (
                <div className="terminal-line">
                  <span className="prompt">$</span> Todas habilidades carregadas!
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Seção Projects */}
      <section id="projects" className="section projects-section">
        <AnimatedBackground animationName="particleNetwork" style={{ opacity: 0.2 }} />
        
        <div className="container">
          <h1 className="section-title">Meus Projetos</h1>
          
          <div className="projects-grid">
            {projectsData.map((project) => (
              <div key={project.id} className="project-card">
                <img src={project.image} alt={project.title} className="project-image" />
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
        
        <div className="container">
          <h1 className="section-title">Contato</h1>
          
          <div className="contact-container">
            <div className="contact-form">
              {/* Formulário de contato aqui */}
            </div>
            
            <div className="contact-info">
              <h2>Informações de Contato</h2>
              
              <div className="contact-details">
                <div className="contact-item">
                  <img src={mail} alt="Email" />
                  <span>gustavoatanasiosantos@gmail.com</span>
                </div>
                
                <div className="contact-item">
                  <img src={phone} alt="Telefone" />
                  <span>(31) 9 9290-1102</span>
                </div>
              </div>
              
              <div className="social-links">
                <a href="https://github.com/GusAtSantos" target="_blank" rel="noopener noreferrer">
                  <img src={github} alt="GitHub" />
                </a>
                {/* ... outros links sociais */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Gustavo Santos. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default PortfolioSPA;
