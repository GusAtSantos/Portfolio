import React, { useState, useEffect } from 'react';
import "../assets/styles/skills_css.css";
import { AnimatedBackground } from 'animated-backgrounds';

const skillsData = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    // ... outras habilidades
];

const Skills = () => {
    const [displayedSkills, setDisplayedSkills] = useState([]);
    const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        if (currentSkillIndex < skillsData.length) {
            const currentSkill = skillsData[currentSkillIndex];
            const skillText = `${currentSkill.name}: ${'*'.repeat(currentSkill.level/10)} (${currentSkill.level}%)`;
            const timeout = isTyping ? 50 : 1000;

            if (isTyping) {
                if (currentText.length < skillText.length) {
                    const timer = setTimeout(() => {
                        setCurrentText(skillText.slice(0, currentText.length + 1));
                    }, timeout);
                    return () => clearTimeout(timer);
                } else {
                    setIsTyping(false);
                    const timer = setTimeout(() => {
                        setDisplayedSkills(prev => [...prev, currentText]);
                        setCurrentText('');
                        setCurrentSkillIndex(currentSkillIndex + 1);
                        setIsTyping(true);
                    }, 1000);
                    return () => clearTimeout(timer);
                }
            }
        }
    }, [currentSkillIndex, currentText, isTyping]);

    return (
        <section className="skills-section">
            <AnimatedBackground animationName="particleNetwork" style={{ opacity: 0.2 }} />
            
            <div className="container">
                <h1 className="section-title">Minhas Habilidades</h1>
                
                <div className="terminal">
                    <div className="terminal-header">
                        <div className="terminal-buttons">
                            <div className="terminal-button red"></div>
                            <div className="terminal-button yellow"></div>
                            <div className="terminal-button green"></div>
                        </div>
                        <div className="terminal-title">C:\Users\GustavoSantos\skills</div>
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
                                <span className="cursor">_</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
