import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/global.css";
import "../assets/styles/home_css.css";
import { AnimatedBackground } from 'animated-backgrounds';
import north from "../assets/images/north_east_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";

function LandingPage() {
    return (
        <div className="home-section">
            <AnimatedBackground animationName="particleNetwork" style={{ opacity: 0.2 }} />
            
            <div className="home-content">
                <h1 className="home-title">Gustavo Santos</h1>
                <h2 className="home-subtitle">Desenvolvedor Web Mobile</h2>
                
                <div className="home-buttons">
                    <Link to="/about" className="home-button">
                        <span>About</span>
                        <img src={north} alt="" className="button-icon" />
                    </Link>
                    <Link to="/skills" className="home-button">
                        <span>Skills</span>
                        <img src={north} alt="" className="button-icon" />
                    </Link>
                    <Link to="/projects" className="home-button">
                        <span>Projects</span>
                        <img src={north} alt="" className="button-icon" />
                    </Link>
                    <Link to="/contact" className="home-button">
                        <span>Contact</span>
                        <img src={north} alt="" className="button-icon" />
                    </Link>
                </div>
            </div>

            {/* Removido o container da imagem de perfil */}
            
            {/* Cubes animados */}
            <div className="cube-animation">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className={`cube cube-${i+1}`}></div>
                ))}
            </div>
        </div>
    );
}

export default LandingPage;
