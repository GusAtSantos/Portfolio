import React, { useEffect, useRef } from "react";
import "../assets/styles/global.css";
import "../assets/styles/about_css.css";
import { AnimatedBackground } from 'animated-backgrounds';
import dwl from "../assets/images/arrow_downward_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";

function About() {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    // Adiciona animações de entrada quando o componente é montado
    const timer = setTimeout(() => {
      if (sectionRef.current) {
        sectionRef.current.classList.add('visible');
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="about-section" ref={sectionRef} aria-labelledby="about-heading">
      <AnimatedBackground 
        animationName="particleNetwork" 
        style={{opacity: 0.15}} 
        className="animated-bg"
      />
      
      <div className="about-container">
        <header className="about-header">
          <h1 id="about-heading" className="about-title">
            <span className="greeting">Olá, eu sou</span>
            <span className="name-highlight">Seu Nome</span>
          </h1>
          <p className="about-subtitle">Desenvolvedor Full Stack</p>
        </header>
        
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              Desenvolvedor de aplicações web e mobile. Sou apaixonado por criar soluções
              inovadoras e eficientes. Tenho experiência em todo o ciclo de desenvolvimento, 
              desde a concepção até o lançamento e manutenção de projetos. 
              Busco uma oportunidade em uma empresa desafiadora para aplicar e expandir meus
              conhecimentos e contribuir para o crescimento da equipe.
            </p>
            
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Projetos Concluídos</span>
              </div>
              <div className="stat">
                <span className="stat-number">3+</span>
                <span className="stat-label">Anos de Experiência</span>
              </div>
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Tecnologias Dominadas</span>
              </div>
            </div>
            
            <div className="about-actions">
              <a 
                href="https://drive.google.com/drive/u/4/folders/1CLSos1uFhI95ZYVRldFE47A-Vj3Tfhch"
                className="btn btn-primary"
                aria-label="Baixar currículo em formato PDF"
              >
                <span>Baixar Currículo</span>
                <img src={dwl} alt="" className="btn-icon" />
              </a>
              
              <button className="btn btn-secondary">
                Entrar em Contato
              </button>
            </div>
          </div>
          
          <div className="about-visual">
            <div className="profile-image">
              <div className="image-placeholder">
                <span>Sua Foto Aqui</span>
              </div>
              <div className="floating-element element-1">🚀</div>
              <div className="floating-element element-2">💻</div>
              <div className="floating-element element-3">📱</div>
            </div>
          </div>
        </div>
        
        <div className="skills-section">
          <h2 className="skills-title">Principais Habilidades</h2>
          <div className="skills-grid">
            <div className="skill-item">
              <span className="skill-name">React</span>
              <div className="skill-bar">
                <div className="skill-progress" style={{width: '90%'}}></div>
              </div>
            </div>
            <div className="skill-item">
              <span className="skill-name">JavaScript</span>
              <div className="skill-bar">
                <div className="skill-progress" style={{width: '85%'}}></div>
              </div>
            </div>
            <div className="skill-item">
              <span className="skill-name">Node.js</span>
              <div className="skill-bar">
                <div className="skill-progress" style={{width: '80%'}}></div>
              </div>
            </div>
            <div className="skill-item">
              <span className="skill-name">CSS</span>
              <div className="skill-bar">
                <div className="skill-progress" style={{width: '95%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
