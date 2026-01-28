import { Link } from "react-router-dom";
import { GitHub, LinkedIn, LogoLWCG, Mail } from "./Icons";

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="logo-icon-lwcg">
              <LogoLWCG />
            </div>
          </div>
          <p className="footer-copyright">CANAL ESTABLE // © 2024</p>
        </div>
        <div className="footer-links">
          <a className="nav-link nav-link-gold">
            <Link to="/">Inicio</Link>
          </a>

          <a className="nav-link nav-link-purple">
            <Link to="/sobreMi">Sobre Mi</Link>
          </a>
        </div>
        <div className="footer-social">
          <a
            href="https://github.com/TU_USUARIO"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <GitHub />
          </a>
          <a
            href="https://www.linkedin.com/in/luis-miguel-cruz-gareca-248801331"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <LinkedIn />
          </a>
          <a href="mailto:garecal447@gmail.com" className="social-icon">
            <Mail />
          </a>
        </div>
      </div>
    </footer>
  );
}
