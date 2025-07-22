import "../css/SobreMi.css";
import luisImage from "../assets/Luis Cruz.png";
const volverAtras = () => {
  window.history.back();
};
export default function SobreMi() {
  return (
    <div className="styleBody">
      <div className="container">
        <h1>Sobre mí</h1>

        <div className="about">
          <img src={luisImage} alt="Foto de Luis Miguel" />
          <div className="about-text">
            <p>
              ¡Hola! Soy <strong>Luis Miguel Cruz Gareca</strong>, desarrollador
              web enfocado en crear interfaces modernas y funcionales con
              <strong> React.js</strong>. Me gusta escribir código limpio,
              cuidar los detalles del diseño y lograr que cada proyecto se vea
              bien y funcione mejor. Siempre estoy buscando mejorar, aprender
              nuevas formas de hacer las cosas y llevar mis habilidades al
              siguiente nivel. Me encanta trabajar en equipo y creo que la
              colaboración es clave para crear grandes proyectos.
            </p>
          </div>
        </div>

        <div className="titles">
          <h3>Títulos y Formación</h3>
          <ul>
            <li>
              Egresado de la carrera de Informática – Universidad San Francisco
              Xavier
            </li>
            <li>Desarrollador Web con experiencia en React.js</li>
            <li>Participación en proyectos personales </li>
            <li>En constante aprendizaje y actualización en tecnologías web</li>
          </ul>

          <div className="title-images">
            <h3>Certificados</h3>
            <div className="gallery">
              <img src="images/certificado1.jpg" alt="Certificado de curso 1" />
              <img src="images/certificado2.jpg" alt="Certificado de curso 2" />
              {/* Puedes agregar más */}
            </div>
          </div>
        </div>

        <div className="center">
          <a className="back" onClick={volverAtras}>
            Volver al inicio
          </a>
        </div>
      </div>
    </div>
  );
}
