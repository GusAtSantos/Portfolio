import React from "react";
import "../assets/styles/global.css";
import github from "../assets/images/4202098_github_code_developer_logo_icon.svg";
import linkedin from "../assets/images/4202085_linkedin_logo_social_social media_icon.svg";
import insta from "../assets/images/1298747_instagram_brand_logo_social media_icon.svg";

function Social() {
    return (
        <div className="social-container">
            <a 
                href="https://github.com/GusAtSantos" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
            >
                <img src={github} alt="GitHub" className="social-icon" />
                <span>GitHub</span>
            </a>
            
            <a 
                href="https://www.linkedin.com/in/gustavo-santos-002415288/" 
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
            >
                <img src={linkedin} alt="LinkedIn" className="social-icon" />
                <span>LinkedIn</span>
            </a>
            
            <a 
                href="https://www.instagram.com/gus._.santos._/" 
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
            >
                <img src={insta} alt="Instagram" className="social-icon" />
                <span>Instagram</span>
            </a>
        </div>
    );
}

export default Social;
