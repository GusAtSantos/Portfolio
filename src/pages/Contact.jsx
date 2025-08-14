import React from "react";
import Forms from '../components/Forms';
import "../assets/styles/global.css";
import "../assets/styles/contact_css.css";
import { AnimatedBackground } from 'animated-backgrounds';
import github from "../assets/images/4202098_github_code_developer_logo_icon.svg";
import linkedin from "../assets/images/4202085_linkedin_logo_social_social media_icon.svg";
import insta from "../assets/images/1298747_instagram_brand_logo_social media_icon.svg";
import mail from "../assets/images/mail_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";
import phone from "../assets/images/call_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";

function Contact() {
    return (
        <section className="contact-section">
            <AnimatedBackground animationName="particleNetwork" style={{ opacity: 0.2 }} />
            
            <div className="container">
                <h1 className="section-title">Contato</h1>
                
                <div className="contact-container">
                    <Forms />
                    
                    <div className="contact-info">
                        <h2 className="contact-info-title">Informações de Contato</h2>
                        
                        <div className="contact-details">
                            <div className="contact-item">
                                <span className="contact-icon">✉️</span>
                                <span>gustavoatanasiosantos@gmail.com</span>
                            </div>
                            
                            <div className="contact-item">
                                <span className="contact-icon">📱</span>
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
    );
}

export default Contact;
