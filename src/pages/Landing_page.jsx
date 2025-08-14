import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/global.css";
import "../assets/styles/home_css.css";
import me2 from "../assets/images/WhatsApp_Image_2025-02-26_at_21.19.21-removebg-preview.png";
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

            <div className="profile-container">
                <img src={me2} alt="Gustavo Santos" className="profile-image" />
                
                {/* Cubes animados */}
                <div className="cube-animation">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className={`cube cube-${i+1}`}></div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
