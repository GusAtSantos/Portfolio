import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "../assets/styles/header_css.css";
import { AnimatedBackground } from 'animated-backgrounds';

function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Verifica o tamanho da tela
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Verifica no carregamento inicial
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fecha a sidebar ao clicar em um link
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <header className={`header ${isMobile ? 'mobile' : ''}`}>
        <div className="navbar">
          <Link to="/" className="logo">
            Gustavo Santos
          </Link>
          
          {isMobile ? (
            <button 
              className="menu-toggle"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Toggle menu"
            >
              {sidebarOpen ? '✕' : '☰'}
            </button>
          ) : (
            <nav className="desktop-nav">
              <ul className="nav-menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>
          )}
        </div>
      </header>

      {/* Sidebar para mobile */}
      {isMobile && (
        <>
          <div 
            className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`}
            onClick={closeSidebar}
          />
          
          <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
            <AnimatedBackground animationName="particleNetwork" style={{ opacity: 0.1 }} />
            <nav className="mobile-nav">
              <ul>
                <li><Link to="/" onClick={closeSidebar}>Home</Link></li>
                <li><Link to="/about" onClick={closeSidebar}>About</Link></li>
                <li><Link to="/skills" onClick={closeSidebar}>Skills</Link></li>
                <li><Link to="/projects" onClick={closeSidebar}>Projects</Link></li>
                <li><Link to="/contact" onClick={closeSidebar}>Contact</Link></li>
              </ul>
            </nav>
          </aside>
        </>
      )}
    </>
  );
}

export default Header;
