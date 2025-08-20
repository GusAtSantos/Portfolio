import React from "react";
import "../assets/styles/about_css.css";

function About()  {

  return (
    <div className="about-page">
      <div className="about-container">
        <h1 className="about-title">Sobre Mim</h1>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              Sou um desenvolvedor web e mobile apaixonado por tecnologia e inovação. 
              Com experiência em diversas tecnologias modernas, busco sempre criar 
              soluções eficientes e elegantes para problemas complexos.
            </p>
            
            <p>
              Minha jornada na programação começou há alguns anos e desde então 
              venho me especializando em React, JavaScript, TypeScript e outras 
              tecnologias do ecossistema frontend e mobile.
            </p>
            
            <p>
              Acredito no poder da tecnologia para transformar vidas e estou 
              constantemente aprendendo novas habilidades para me manter atualizado 
              com as tendências do mercado.
            </p>

            {/* Botão de Download do CV */}
            <div className="cv-download-container">
                <a href="https://drive.google.com/drive/u/0/folders/1CLSos1uFhI95ZYVRldFE47A-Vj3Tfhch" >
              <button className="cv-download-btn">
                📄 Baixar CV
                <span className="download-arrow">↓</span>
                  </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
