import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../assets/styles/header_css.css";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <nav className="navbar">
                <Link to="/" className="logo">
                    Gustavo Santos
                </Link>

                <button 
                    className="mobile-menu-btn" 
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    ☰
                </button>

                <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <li><Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                    <li><Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</Link></li>
                    <li><Link to="/skills" className="nav-link" onClick={() => setIsMenuOpen(false)}>Skills</Link></li>
                    <li><Link to="/projects" className="nav-link" onClick={() => setIsMenuOpen(false)}>Projects</Link></li>
                    <li><Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
