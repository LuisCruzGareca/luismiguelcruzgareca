import { useState } from "react";
import { LogoLWCG, GitHub, LinkedIn, Mail } from "./Icons";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <header className="main-header">
        <div className="header-container">
          <div className="logo-wrapper">
            <div className="logo-icon-lwcg">
              <LogoLWCG />
            </div>
          </div>
          <nav className="main-nav">
            <a className="nav-link nav-link-gold">
              <Link to="/">Inicio</Link>
            </a>

            <a className="nav-link nav-link-purple">
              <Link to="/sobreMi">Sobre Mi</Link>
            </a>
          </nav>
          <div className="contact-dropdown-wrapper">
            <button
              className="header-cta"
              onClick={() => setContactOpen(!contactOpen)}
            >
              Contactar
            </button>
            {contactOpen && (
              <div className="contact-dropdown">
                <a href="mailto:garecal447@gmail.com" className="contact-icon">
                  <Mail />
                </a>
                <a
                  href="https://www.linkedin.com/in/luis-miguel-cruz-gareca-248801331"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-icon"
                >
                  <LinkedIn />
                </a>
                <a
                  href="https://github.com/TU_USUARIO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-icon"
                >
                  <GitHub />
                </a>
              </div>
            )}
          </div>
          <button
            className={`hamburger ${menuOpen ? "hamburger-active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </header>
      <div
        className={`mobile-menu-overlay ${menuOpen ? "mobile-menu-open" : ""}`}
        onClick={() => setMenuOpen(false)}
      >
        <nav className="mobile-menu" onClick={(e) => e.stopPropagation()}>
          <a className="mobile-menu-link" onClick={() => setMenuOpen(false)}>
            <Link to="/">Inicio</Link>
          </a>

          <a className="mobile-menu-link" onClick={() => setMenuOpen(false)}>
            <Link to="/sobreMi">Sobre Mi</Link>
          </a>
          <div className="mobile-contact-section">
            <span className="mobile-contact-label">Contactar</span>
            <div className="mobile-contact-icons">
              <a href="mailto:garecal447@gmail.com" className="contact-icon">
                <Mail />
              </a>
              <a
                href="https://www.linkedin.com/in/luis-miguel-cruz-gareca-248801331"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon"
              >
                <LinkedIn />
              </a>
              <a
                href="https://github.com/TU_USUARIO"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon"
              >
                <GitHub />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
