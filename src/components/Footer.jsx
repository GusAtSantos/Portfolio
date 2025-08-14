import React from "react";
import Social from "./Social.jsx";
import "../assets/styles/footer_css.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="footer-copyright">© 2025 Gustavo Santos. Todos os direitos reservados.</p>
                <Social />
            </div>
        </footer>
    );
}

export default Footer;
