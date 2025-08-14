import React from "react";
import Social from "./Social";
import "../assets/styles/footer_css.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="copyright">
          © {new Date().getFullYear()} Gustavo Santos. Todos os direitos reservados.
        </p>
        <div className="social-wrapper">
          <Social />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
