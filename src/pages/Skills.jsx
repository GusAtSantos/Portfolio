import React, { useState, useEffect } from 'react';
import "../assets/styles/skills_css.css";

const Skills = () => {
  const skillsData = [
    { name: "HTML", level: 90, year: 2019 },
    { name: "CSS", level: 90, year: 2019 },
    { name: "JavaScript", level: 85, year: 2020 },
    { name: "React", level: 90, year: 2021 },
    // Adicione outras habilidades aqui
  ];

  const [displayedSkills, setDisplayedSkills] = useState([]);
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Efeito de piscar o cursor
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (currentSkillIndex < skillsData.length) {
      const currentSkill = skillsData[currentSkillIndex];
      const skillText = `${currentSkill.name}: ${'★'.repeat(currentSkill.level/10)} (${currentSkill.level}%) [${currentSkill.year}]`;
      
      if (isTyping) {
        if (currentText.length < skillText.length) {
          const typingTimer = setTimeout(() => {
            setCurrentText(skillText.slice(0, currentText.length + 1));
          }, 50); // Velocidade de digitação
          return () => clearTimeout(typingTimer);
        } else {
          // Terminou de digitar esta habilidade
          setIsTyping(false);
          const pauseTimer = setTimeout(() => {
            setDisplayedSkills(prev => [...prev, currentText]);
            setCurrentText('');
            setCurrentSkillIndex(currentSkillIndex + 1);
            setIsTyping(true);
          }, 1000); // Pausa entre habilidades
          return () => clearTimeout(pauseTimer);
        }
      }
    } else {
      // Todas as habilidades foram exibidas
      setShowCursor(false);
    }
  }, [currentSkillIndex, currentText, isTyping, skillsData]);

  return (
    <div className="skills-page">
      <h1 className="skills-title">Minhas Habilidades</h1>
      
      <div className="terminal">
        <div className="terminal-header">
          <div className="terminal-buttons">
            <div className="terminal-button red"></div>
            <div className="terminal-button yellow"></div>
            <div className="terminal-button green"></div>
          </div>
          <div className="terminal-title">terminal</div>
        </div>
        
        <div className="terminal-content">
          {displayedSkills.map((skill, index) => (
            <div key={index} className="terminal-line">
              <span className="prompt">$</span> {skill}
            </div>
          ))}
          
          {currentSkillIndex < skillsData.length && (
            <div className="terminal-line">
              <span className="prompt">$</span> {currentText}
              {showCursor && <span className="cursor">|</span>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;
