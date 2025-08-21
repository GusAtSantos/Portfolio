import React, { useState } from 'react';
import "../assets/styles/projects_css.css";
import { AnimatedBackground } from 'animated-backgrounds';
import ccs2 from "../assets/images/cs2apis.png";
import chimp from "../assets/images/chimper.png";
import ppt from "../assets/images/ppt.png";
import photsent from "../assets/images/photosen.png";
import dwl from "../assets/images/arrow_downward_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";
import github from "../assets/images/4202098_github_code_developer_logo_icon.svg";
import external from "../assets/images/open_in_new_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";

const projectsData = [
    {
        id: 1,
        title: "Counter Strike 2 API",
        description: "Site interativo que consome duas APIs diferentes relacionadas ao jogo Counter Strike 2, apresentando estatísticas e informações em tempo real.",
        technologies: ["React", "CSS", "JavaScript", "API Integration"],
        image: ccs2,
        liveLink: "https://frameapics2.vercel.app/",
        codeLink: "https://github.com/GusAtSantos/frameapigames",
        category: "web"
    }, 
    {
        id: 2,
        title: "Replica Site Empresarial",
        description: "Réplica responsiva de um site empresarial moderno com foco em design limpo e experiência do usuário otimizada.",
        technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
        image: chimp,
        liveLink: "https://chimperfront.vercel.app/",
        codeLink: "https://github.com/GusAtSantos/chimperfront",
        category: "web"
    },
    {
        id: 3,
        title: "Pedra, Papel e Tesoura",
        description: "Jogo interativo contra o computador com interface intuitiva e animações suaves para uma experiência divertida.",
        technologies: ["HTML", "CSS", "JavaScript", "Game Development"],
        image: ppt,
        liveLink: "https://pedra-papel-tesoura-react-orcin.vercel.app/",
        codeLink: "https://github.com/GusAtSantos/pedra-papel-tesoura-react",
        category: "game"
    },
    {
        id: 4,
        title: "Site de Fotografia Profissional",
        description: "Portfólio elegante para fotógrafos profissionais com galeria visualmente impressionante e design minimalista.",
        technologies: ["HTML", "CSS", "JavaScript", "UI/UX Design"],
        image: photsent,
        liveLink: "https://photsenfront.vercel.app/",
        codeLink: "https://github.com/GusAtSantos/Photsenfront",
        category: "web"
    },
];

const Projects = () => {
    const [filter, setFilter] = useState('all');
    
    const filteredProjects = filter === 'all' 
        ? projectsData 
        : projectsData.filter(project => project.category === filter);

    return (
        <section className="projects-section" id="projects">
            <AnimatedBackground animationName="particleNetwork" style={{ opacity: 0.15 }} />
            
            <div className="container">
                <div className="projects-header">
                    <h1 className="section-title">Meus Projetos</h1>
                    <p className="section-subtitle">Uma coleção dos meus trabalhos mais recentes e desafiadores</p>
                    
                    <div className="projects-filter">
                        <button 
                            className={filter === 'all' ? 'filter-btn active' : 'filter-btn'}
                            onClick={() => setFilter('all')}
                        >
                            Todos
                        </button>
                        <button 
                            className={filter === 'web' ? 'filter-btn active' : 'filter-btn'}
                            onClick={() => setFilter('web')}
                        >
                            Web
                        </button>
                        <button 
                            className={filter === 'game' ? 'filter-btn active' : 'filter-btn'}
                            onClick={() => setFilter('game')}
                        >
                            Jogos
                        </button>
                    </div>
                </div>
                
                <div className="projects-grid">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="project-image-container">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="project-image" 
                                />
                                <div className="project-overlay">
                                    <div className="project-actions">
                                        <a 
                                            href={project.liveLink} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="project-action-btn"
                                            aria-label="Ver projeto ao vivo"
                                        >
                                            <img src={external} alt="Ver projeto" />
                                        </a>
                                        <a 
                                            href={project.codeLink} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="project-action-btn"
                                            aria-label="Ver código no GitHub"
                                        >
                                            <img src={github} alt="Código no GitHub" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                
                                <div className="technologies">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="technology">{tech}</span>
                                    ))}
                                </div>
                                
                                <div className="project-links">
                                    <a 
                                        href={project.liveLink} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="project-link live-demo"
                                    >
                                        <span>Ver Projeto</span>
                                        <img src={external} alt="" className="btn-icon" />
                                    </a>
                                    <a 
                                        href={project.codeLink} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="project-link source-code"
                                    >
                                        <span>Código Fonte</span>
                                        <img src={github} alt="" className="btn-icon" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="more-projects">
                    <a 
                        href="https://github.com/GusAtSantos?tab=repositories" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="more-projects-btn"
                    >
                        <span>Explorar Mais Projetos</span>
                        <img src={dwl} alt="" className="btn-icon" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;