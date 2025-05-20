import "../App.css";
import "../css/Footer.css";

import githubIcon from "../assets/github.png";
import linkedinIcon from "../assets/linkedin.png";
import mailIcon from "../assets/correo.png";

export default function Footer() {
  return (
    <>
      <footer className="footer" id="Contacto">
        <div className="footerC">
          <p className="text-center">
            © 2025 Luis Miguel Cruz Gareca. Todos los derechos reservados.
          </p>
        </div>
        <div className="social_media">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} className="imgLogo" alt="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/luis-miguel-cruz-gareca-4a667b350/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} className="imgLogo" alt="LinkedIn" />
          </a>
          <a href="mailto:tucorreo@example.com">
            <img src={mailIcon} className="imgLogo" alt="Email" />
          </a>
        </div>
      </footer>
    </>
  );
}
