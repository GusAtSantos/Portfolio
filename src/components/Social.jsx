import React from "react";
import github from "../assets/images/4202098_github_code_developer_logo_icon.svg";
import linkedin from "../assets/images/4202085_linkedin_logo_social_social media_icon.svg";
import insta from "../assets/images/1298747_instagram_brand_logo_social media_icon.svg";
import "../assets/styles/social_css.css";

function Social() {
  return (
    <div className="social-links">
      <a 
        href="https://github.com/GusAtSantos" 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-link"
        aria-label="GitHub"
      >
        <img src={github} alt="GitHub" className="social-icon" />
      </a>
      
      <a 
        href="https://www.linkedin.com/in/gustavo-santos-002415288/" 
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
        aria-label="LinkedIn"
      >
        <img src={linkedin} alt="LinkedIn" className="social-icon" />
      </a>
      
      <a 
        href="https://www.instagram.com/gus._.santos._/" 
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
        aria-label="Instagram"
      >
        <img src={insta} alt="Instagram" className="social-icon" />
      </a>
    </div>
  );
}

export default Social;
