import React, { useState, useEffect } from 'react';
import "../assets/styles/skills_css.css";

const Skills = () => {
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
    { name: "Manutenção e Configuração de Computadores", level: 100 },
    { name: "GitHub", level: 50 },
    { name: "Vercel", level: 60 },
    { name: "VS Code", level: 80 },
    { name: "WebStorm", level: 65 },
    { name: "Unity", level: 70 },
    { name: "Netlify", level: 60 },
    { name: "Bootstrap", level: 50 }
  ];

  const [displayedSkills, setDisplayedSkills] = useState([]);
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
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
      const skillText = `${currentSkill.name}: ${'★'.repeat(currentSkill.level/10)} (${currentSkill.level}%)`;
      
      if (currentText.length < skillText.length) {
        const typingTimer = setTimeout(() => {
          setCurrentText(skillText.slice(0, currentText.length + 1));
        }, 50);
        return () => clearTimeout(typingTimer);
      } else {
        const nextSkillTimer = setTimeout(() => {
          setDisplayedSkills(prev => [...prev, currentText]);
          setCurrentText('');
          setCurrentSkillIndex(currentSkillIndex + 1);
        }, 25);
        return () => clearTimeout(nextSkillTimer);
      }
    } else {
      setShowCursor(false);
    }
  }, [currentSkillIndex, currentText, skillsData]);

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
      </div>
    </div>
  );
};

export default Skills;





