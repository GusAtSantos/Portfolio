import React, { useState, useEffect, useRef } from 'react';
import { AnimatedBackground } from 'animated-backgrounds';
import emailjs from 'emailjs-com';
import './assets/styles/global.css';
import './assets/styles/home_css.css';
import './assets/styles/about_css.css';
import './assets/styles/skills_css.css';
import './assets/styles/projects_css.css';
import './assets/styles/contact_css.css';
import './assets/styles/header_css.css';
import './assets/styles/footer_css.css';
import './assets/styles/social_css.css';

// Import de ícones
import north from "./assets/images/north_east_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";
import profileImage from "./assets/images/Beige Simple Photo Signature Twitter Profile Picture.png";
import dwl from "./assets/images/arrow_downward_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";
import ccs2 from "./assets/images/cs2apis.png";
import chimp from "./assets/images/chimper.png";
import ppt from "./assets/images/ppt.png";
import photsent from "./assets/images/photosen.png";
import github from "./assets/images/4202098_github_code_developer_logo_icon.svg";
import linkedin from "./assets/images/4202085_linkedin_logo_social_social media_icon.svg";
import insta from "./assets/images/1298747_instagram_brand_logo_social media_icon.svg";
import mail from "./assets/images/mail_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";
import phone from "./assets/images/call_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";

const PortfolioSPA = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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
    { name: "Manutenção de Computadores", level: 100 },
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
      description: "Site para teste de API de um jogo com integração de múltiplos serviços.",
      technologies: ["React", "CSS", "JavaScript", "API Integration"],
      image: ccs2,
      liveLink: "https://frameapics2.vercel.app/",
      codeLink: "https://github.com/GusAtSantos/frameapigames"
    },
    {
      id: 2,
      title: "Site Empresarial",
      description: "Réplica de site para venda de serviços com design responsivo.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      image: chimp,
      liveLink: "https://chimperfront.vercel.app/",
      codeLink: "https://github.com/GusAtSantos/chimperfront"
    },
    {
      id: 3,
      title: "Jogo Interativo",
      description: "Jogo simples contra o computador com interface intuitiva.",
      technologies: ["HTML", "CSS", "JavaScript", "Game Logic"],
      image: ppt,
      liveLink: "https://pedra-papel-tesoura-react-orcin.vercel.app/",
      codeLink: "https://github.com/GusAtSantos/pedra-papel-tesoura-react"
    },
    {
      id: 4,
      title: "Site de Fotografia",
      description: "Site profissional para fotógrafos com galeria e portfólio.",
      technologies: ["HTML", "CSS", "JavaScript", "UI/UX Design"],
      image: photsent,
      liveLink: "https://photsenfront.vercel.app/",
      codeLink: "https://github.com/GusAtSantos/Photsenfront"
    }
  ];

  // Efeito para detectar scroll e tamanho da tela
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    handleResize(); // Verifica no carregamento inicial
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Função para rolar suavemente para uma seção
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Funções para o formulário de contato
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
        await emailjs.sendForm(
          'service_6ngxrmg',
          'template_r8zzhos',
          e.target,
          'x6lpyhnZocW4A2rOf'
        );
        alert('Mensagem enviada com sucesso!');
        setFormData({ name: '', email: '', message: '' });
      } catch (error) {
        console.error('Erro ao enviar:', error);
        alert('Ocorreu um erro. Tente novamente mais tarde.');
      }
    }
    setIsSubmitting(false);
  };

  // Componente de efeito de digitação para habilidades
  const TypingEffect = () => {
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
    }, [currentSkillIndex, currentText]);

    useEffect(() => {
      if (terminalContentRef.current) {
        terminalContentRef.current.scrollTop = terminalContentRef.current.scrollHeight;
      }
    }, [displayedSkills, currentText]);

    return (
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
    );
  };

  return (
    <div className="portfolio-app">
      {/* Header com navegação */}
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar">
          <div className="logo" onClick={() => scrollToSection('home')}>
            <span>Gustavo</span>Santos
          </div>
          
          {isMobile ? (
            <button 
              className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          ) : (
            <nav className="desktop-nav">
              <ul className="nav-menu">
                {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                  <li key={item}>
                    <button 
                      className={activeSection === item ? 'active' : ''}
                      onClick={() => scrollToSection(item)}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>

        {/* Menu mobile */}
        {isMobile && (
          <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
            <ul>
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <li key={item}>
                  <button 
                    className={activeSection === item ? 'active' : ''}
                    onClick={() => scrollToSection(item)}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* Seção Home/Hero */}
      <section id="home" className="section home-section">
        <AnimatedBackground animationName="particleNetwork" style={{ opacity: 0.2 }} />
        
        <div className="container">
          <div className="home-content">
            <div className="intro-text">
              <h6 className="pre-title">Desenvolvedor Web & Mobile</h6>
              <h1 className="home-title">Gustavo Santos</h1>
              <p className="home-description">
                Criando experiências digitais excepcionais com foco em performance, 
                acessibilidade e designs responsivos que impressionam.
              </p>
              
              <div className="home-buttons">
                <button 
                  className="btn btn-primary"
                  onClick={() => scrollToSection('projects')}
                >
                  Ver Projetos
                  <img src={north} alt="" className="button-icon" />
                </button>
                <button 
                  className="btn btn-secondary"
                  onClick={() => scrollToSection('contact')}
                >
                  Entrar em Contato
                  <img src={north} alt="" className="button-icon" />
                </button>
              </div>
            </div>
            
            <div className="profile-image-container">
              <div className="image-wrapper">
                <img src={profileImage} alt="Gustavo Santos" className="profile-image" />
                <div className="image-overlay"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <p>Scroll para explorar</p>
        </div>
      </section>

      {/* Seção About */}
      <section id="about" className="section about-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Sobre Mim</h2>
            <p className="section-subtitle">Conheça um pouco da minha trajetória</p>
          </div>
          
          <div className="about-content">
            <div className="about-text">
              <p>
                Sou um desenvolvedor web e mobile apaixonado por criar soluções inovadoras 
                e eficientes. Minha jornada na programação começou há 3 anos, e desde então 
                tenho me dedicado a aprender e aplicar as melhores tecnologias e práticas 
                do mercado.
              </p>
              
              <p>
                Tenho experiência em todo o ciclo de desenvolvimento, desde a concepção 
                até o lançamento e manutenção de projetos. Busco constantemente desafios 
                que me permitam expandir meus conhecimentos e contribuir para o crescimento 
                de equipes e empresas.
              </p>
              
              <div className="about-stats">
                <div className="stat">
                  <span className="stat-number">20+</span>
                  <span className="stat-label">Projetos Concluídos</span>
                </div>
                <div className="stat">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Tecnologias Dominadas</span>
                </div>
                <div className="stat">
                  <span className="stat-number">3+</span>
                  <span className="stat-label">Anos de Experiência</span>
                </div>
              </div>
              
              <a 
                href="https://drive.google.com/drive/u/4/folders/1CLSos1uFhI95ZYVRldFE47A-Vj3Tfhch" 
                target="_blank"
                rel="noopener noreferrer"
                className="download-cv-btn"
              >
                <span>Baixar Currículo</span>
                <img src={dwl} alt="Download" className="btn-icon" />
              </a>
            </div>
            
            <div className="about-skills-preview">
              <h3>Tecnologias que domino:</h3>
              <div className="skills-tags">
                {skillsData.slice(0, 8).map((skill, index) => (
                  <span key={index} className="skill-tag">{skill.name}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Skills */}
      <section id="skills" className="section skills-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Minhas Habilidades</h2>
            <p className="section-subtitle">Tecnologias e ferramentas que utilizo</p>
          </div>
          
          <div className="skills-container">
            <div className="terminal">
              <div className="terminal-header">
                <div className="terminal-buttons">
                  <div className="terminal-button red"></div>
                  <div className="terminal-button yellow"></div>
                  <div className="terminal-button green"></div>
                </div>
                <div className="terminal-title">gustavo@portfolio:~$</div>
              </div>
              
              <TypingEffect />
            </div>
            
            <div className="skills-visual">
              <div className="skills-grid">
                {skillsData.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Projects */}
      <section id="projects" className="section projects-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Meus Projetos</h2>
            <p className="section-subtitle">Alguns dos trabalhos que desenvolvi</p>
          </div>
          
          <div className="projects-grid">
            {projectsData.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image-container">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="project-image" 
                  />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        Ver Demo
                      </a>
                      <a 
                        href={project.codeLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        Código Fonte
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="technology">{tech}</span>
                    ))}
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
              <span>Ver mais projetos no GitHub</span>
              <img src={north} alt="" className="btn-icon" />
            </a>
          </div>
        </div>
      </section>

      {/* Seção Contact */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Entre em Contato</h2>
            <p className="section-subtitle">Vamos conversar sobre seu projeto</p>
          </div>
          
          <div className="contact-container">
            <div className="contact-info">
              <h3>Vamos trabalhar juntos?</h3>
              <p>
                Estou sempre aberto a discutir novos projetos, oportunidades de trabalho 
                ou apenas trocar ideias sobre tecnologia.
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <img src={mail} alt="Email" className="contact-icon" />
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:gustavoatanasiosantos@gmail.com">
                      gustavoatanasiosantos@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <img src={phone} alt="Telefone" className="contact-icon" />
                  <div>
                    <h4>Telefone</h4>
                    <a href="tel:+5531992901102">(31) 9 9290-1102</a>
                  </div>
                </div>
              </div>
              
              <div className="social-links">
                <h4>Conecte-se comigo</h4>
                <div className="social-icons">
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
            
            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome completo"
                  className={`form-input ${errors.name ? 'error-input' : ''}`}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className={`form-input ${errors.email ? 'error-input' : ''}`}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Descreva seu projeto ou dúvida..."
                  className={`form-textarea ${errors.message ? 'error-input' : ''}`}
                  rows="5"
                />
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>

              <button 
                type="submit" 
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <h3>Gustavo Santos</h3>
              <p>Desenvolvedor Web & Mobile Full Stack</p>
            </div>
            
            <div className="footer-links">
              <button onClick={() => scrollToSection('home')}>Home</button>
              <button onClick={() => scrollToSection('about')}>Sobre</button>
              <button onClick={() => scrollToSection('skills')}>Habilidades</button>
              <button onClick={() => scrollToSection('projects')}>Projetos</button>
              <button onClick={() => scrollToSection('contact')}>Contato</button>
            </div>
            
            <div className="footer-social">
              <a 
                href="https://github.com/GusAtSantos" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img src={github} alt="GitHub" />
              </a>
              <a 
                href="https://www.linkedin.com/in/gustavo-santos-002415288/" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="LinkedIn" />
              </a>
              <a 
                href="https://www.instagram.com/gus._.santos._/" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={insta} alt="Instagram" />
              </a>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Gustavo Santos. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioSPA;
