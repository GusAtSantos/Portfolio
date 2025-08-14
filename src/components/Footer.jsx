import React from "react";
import Social from "./Social";
import "../assets/styles/footer_css.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Gustavo Santos. Todos os direitos reservados.</p>
        <Social />
      </div>
    </footer>
  );
}

export default Footer;
