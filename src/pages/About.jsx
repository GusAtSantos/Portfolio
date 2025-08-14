import React from "react";
import "../assets/styles/global.css";
import "../assets/styles/about_css.css";
import Me from "../assets/images/Beige Simple Photo Signature Twitter Profile Picture.png";
import { AnimatedBackground } from 'animated-backgrounds';
import dwl from "../assets/images/arrow_downward_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";

function About() {
    return (
        <section className="about-section">
            <AnimatedBackground animationName="particleNetwork" style={{ opacity: 0.2 }} />
            
            <div className="container">
                <div className="about-content">
                    <h1 className="section-title">Sobre Mim</h1>
                    
                    <p className="about-text">
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
    );
}

export default About;
