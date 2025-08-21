import React, { useState, useEffect, useRef } from 'react';
import { AnimatedBackground } from 'animated-backgrounds';
import "../assets/styles/global.css";
import "../assets/styles/home_css.css";
import "../assets/styles/about_css.css";
import "../assets/styles/skills_css.css";
import "../assets/styles/projects_css.css";
import "../assets/styles/contact_css.css";
import "../assets/styles/header_css.css";
import "../assets/styles/footer_css.css";
import "../assets/styles/social_css.css";
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
  const [isMobile, setIsMobile] = useState(false);

  // Verificar se é mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Dados das habilidades
  const skillsData = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "React", level: 90 },
    { name: "C#", level: 80 },
    { name: "SQL", level: 55 },
    { name: "SQLite", level: 55 },
    { name: "PHP", level: 70 },
    { name: "Laravel", level: 70 },
    { name: "Swift", level: 75 },
    { name: "Kotlin", level: 80 },
    { name: "Manutenção e Configuração de Computadores", level: 100 },
    { name: "GitHub", level: 50 },
    { name: "Vercel", level: 60 },
    { name: "VS Code", level: 80 },
    { name: "WebStorm", level: 65 },
    { name: "Unity", level: 70 },
    { name: "Netlify", level: 60 },
    { name: "Bootstrap", level: 50 }
  ];

  // Dados dos projetos
  const projectsData = [
    {
      id: 1,
      title: "Projeto com 2 API's",
      description: "Um site para teste de API de um jogo.",
      technologies: ["React", "CSS", "JavaScript"],
      image: ccs2,
      liveLink: "https://frameapics2.vercel.app/",
      codeLink: "https://github.com/GusAtSantos/frameapigames"
    },
    {
      id: 2,
      title: "Replica de site empresarial",
      description: "replica de site para venda de serviços",
      technologies: ["Html", "Css"],
      image: chimp,
      liveLink: "https://chimperfront.vercel.app/",
      codeLink: "https://github.com/GusAtSantos/chimperfront"
    },
    {
      id: 3,
      title: "Jogo simples",
      description: "um simples jogo contra o computador",
      technologies: ["Html", "Css"],
      image: ppt,
      liveLink: "https://pedra-papel-tesoura-react-orcin.vercel.app/",
      codeLink: "https://github.com/GusAtSantos/pedra-papel-tesoura-react"
    },
    {
      id: 4,
      title: "Replica de site de fotografia profissional",
      description: "Site de fotografia profissional",
      technologies: ["Html", "Css"],
      image: photsent,
      liveLink: "https://photsenfront.vercel.app/",
      codeLink: "https://github.com/GusAtSantos/Photsenfront"
    }
  ];

  // Estado para formulário de contato
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Efeito de digitação para habilidades
  const [displayedSkills, setDisplayedSkills] = useState([]);
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const terminalContentRef = useRef(null);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (currentSkillIndex < skillsData.length) {
      const currentSkill = skillsData[currentSkillIndex];
      const skillText = `${currentSkill.name}: ${'★'.repeat(Math.floor(currentSkill.level/10))} (${currentSkill.level}%)`;
      
      if (currentText.length < skillText.length) {
        const typingTimer = setTimeout(() => {
          setCurrentText(skillText.slice(0, currentText.length + 1));
        }, currentSkillIndex > 5 ? 10 : 50);
        return () => clearTimeout(typingTimer);
      } else {
        const nextSkillTimer = setTimeout(() => {
          setDisplayedSkills(prev => [...prev, currentText]);
          setCurrentText('');
          setCurrentSkillIndex(currentSkillIndex + 1);
        }, 200);
        return () => clearTimeout(nextSkillTimer);
      }
    } else {
      setShowCursor(false);
    }
  }, [currentSkillIndex, currentText, skillsData]);

  useEffect(() => {
    if (terminalContentRef.current) {
      terminalContentRef.current.scrollTop = terminalContentRef.current.scrollHeight;
    }
  }, [displayedSkills, currentText]);

  // Função para rolar suavemente
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Funções para formulário de contato
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Nome é obrigatório';
    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'E-mail inválido';
    }
    if (!formData.message.trim()) newErrors.message = 'Mensagem é obrigatória';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (validateForm()) {
      try {
        // Simulação de envio de email
        await new Promise(resolve => setTimeout(resolve, 2000));
        alert('Mensagem enviada com sucesso!');
        setFormData({ name: '', email: '', message: '' });
      } catch (error) {
        console.error('Erro ao enviar:', error);
        alert('Ocorreu um erro. Tente novamente mais tarde.');
      }
    }
    setIsSubmitting(false);
  };

  return (
    <div className="portfolio-app">
      {/* Header */}
      <header className="header">
        <div className="navbar">
          <div className="logo" onClick={() => scrollToSection('home')}>
            Gustavo Santos
          </div>
          
          {isMobile ? (
            <button 
              className="menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          ) : (
            <nav className="desktop-nav">
              <ul className="nav-menu">
                <li><button onClick={() => scrollToSection('home')}>Home</button></li>
                <li><button onClick={() => scrollToSection('about')}>About</button></li>
                <li><button onClick={() => scrollToSection('skills')}>Skills</button></li>
                <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
                <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
              </ul>
            </nav>
          )}
        </div>
      </header>

      {/* Sidebar para mobile */}
      {isMobile && (
        <>
          <div 
            className={`sidebar-overlay ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          />
          
          <aside className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
            <nav className="mobile-nav">
              <ul>
                <li><button onClick={() => scrollToSection('home')}>Home</button></li>
                <li><button onClick={() => scrollToSection('about')}>About</button></li>
                <li><button onClick={() => scrollToSection('skills')}>Skills</button></li>
                <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
                <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
              </ul>
            </nav>
          </aside>
        </>
      )}

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
            <button onClick={() => scrollToSection('skills')} className="home-button">
              <span>Skills</span>
              <img src={north} alt="" className="button-icon" />
            </button>
            <button onClick={() => scrollToSection('projects')} className="home-button">
              <span>Projects</span>
              <img src={north} alt="" className="button-icon" />
            </button>
            <button onClick={() => scrollToSection('contact')} className="home-button">
              <span>Contact</span>
              <img src={north} alt="" className="button-icon" />
            </button>
          </div>
        </div>

        <div className="cube-animation">
          {[...Array(6)].map((_, i) => (
            <div key={i} className={`cube cube-${i+1}`}></div>
          ))}
        </div>
      </section>

      {/* Seção About */}
      <section id="about" className="section about-section">
        <AnimatedBackground animationName="particleNetwork" style={{ opacity: 0.2 }} />
        
        <div className="container">
          <h1 className="section-title">Sobre Mim</h1>
          
          <div className="about-content">
            <p className="about-me">
              Desenvolvedor de aplicações web e mobile. Sou apaixonado por criar soluções
              inovadoras e eficientes. Aprendizado em todo o ciclo de desenvolvimento, desde a concepção até o lançamento e
              manutenção de projetos. Busco uma oportunidade em uma empresa desafiadora para aplicar e expandir meus
              conhecimentos e contribuir para o crescimento da equipe.
            </p>
            
            <a 
              href="https://drive.google.com/drive/u/4/folders/1CLSos1uFhI95ZYVRldFE47A-Vj3Tfhch" 
              target="_blank"
              rel="noopener noreferrer"
              className="download-cv"
            >
              <button className="btn" id="btn-dwc">
                Download Currículo <img src={dwl} alt="" className="svg-dwl"/>
              </button>
            </a>
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
            
            <div className="terminal-content" ref={terminalContentRef}>
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
                  <span className="prompt">$</span> Habilidades carregadas com sucesso!
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
                <div className="project-image-container">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="project-image" 
                  />
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="technology">{tech}</span>
                    ))}
                  </div>
                  
                  <div className="project-links">
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      Ver Projeto
                    </a>
                    <a 
                      href={project.codeLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      Código no GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="more-projects">
            <a 
              href="https://github.com/GusAtSantos?tab=repositories" 
              target="_blank"
              rel="noopener noreferrer"
              className="more-projects-btn"
            >
              <span>Veja mais projetos no GitHub</span>
              <img src={dwl} alt="" className="btn-icon" />
            </a>
          </div>
        </div>
      </section>

      {/* Seção Contact */}
      <section id="contact" className="section contact-section">
        <AnimatedBackground animationName="particleNetwork" style={{ opacity: 0.2 }} />
        
        <div className="container">
          <h1 className="section-title">Contato</h1>
          
          <div className="contact-container">
            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  className={`form-input ${errors.name ? 'error-input' : ''}`}
                />
                {errors.name && <span className="error">{errors.name}</span>}
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seuemail@exemplo.com"
                  className={`form-input ${errors.email ? 'error-input' : ''}`}
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Sua mensagem..."
                  className={`form-textarea ${errors.message ? 'error-input' : ''}`}
                />
                {errors.message && <span className="error">{errors.message}</span>}
              </div>

              <button 
                type="submit" 
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar'}
              </button>
            </form>
            
            <div className="contact-info">
              <h2 className="contact-info-title">Informações de Contato</h2>
              
              <div className="contact-details">
                <div className="contact-item">
                  <img src={mail} alt="Email" className="contact-icon" />
                  <span>gustavoatanasiosantos@gmail.com</span>
                </div>
                
                <div className="contact-item">
                  <img src={phone} alt="Telefone" className="contact-icon" />
                  <span>(31) 9 9290-1102</span>
                </div>
              </div>
              
              <div className="social-links">
                <a 
                  href="https://github.com/GusAtSantos" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <img src={github} alt="GitHub" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/gustavo-santos-002415288/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <img src={linkedin} alt="LinkedIn" />
                </a>
                <a 
                  href="https://www.instagram.com/gus._.santos._/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <img src={insta} alt="Instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <p className="copyright">© {new Date().getFullYear()} Gustavo Santos. Todos os direitos reservados.</p>
          
          <div className="social-links">
            <a 
              href="https://github.com/GusAtSantos" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <img src={github} alt="GitHub" className="social-icon" />
            </a>
            <a 
              href="https://www.linkedin.com/in/gustavo-santos-002415288/" 
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <img src={linkedin} alt="LinkedIn" className="social-icon" />
            </a>
            <a 
              href="https://www.instagram.com/gus._.santos._/" 
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <img src={insta} alt="Instagram" className="social-icon" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioSPA;
