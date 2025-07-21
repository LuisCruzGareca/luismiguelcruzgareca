import "../css/SobreMi.css";
export default function SobreMi() {
  return (
    <div className="styleBody">
      <div className="container">
        <h1>Sobre mí</h1>

        <div className="about">
          <img src="images/foto-perfil.jpg" alt="Foto de Luis Miguel" />
          <div className="about-text">
            <p>
              ¡Hola! Soy <strong>Luis Miguel Cruz Gareca</strong>, apasionado
              por la tecnología y el desarrollo. Actualmente trabajo en COTES TV
              configurando redes y también desarrollo aplicaciones web con
              tecnologías modernas como Vue.js, NestJS y Prisma. Me gusta
              optimizar sistemas, resolver problemas reales y estar siempre
              aprendiendo.
            </p>
          </div>
        </div>

        <div className="titles">
          <h2>Títulos y Formación</h2>
          <ul>
            <li>Estudiante de Ingeniería en Sistemas</li>
            <li>Curso profesional de Desarrollo Web (Vue.js, TypeScript)</li>
            <li>Formación técnica en redes FTTH, ADSL y HFC</li>
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

        <p className="quote">“Hazlo simple, hazlo útil, hazlo bien.”</p>

        <div className="center">
          <a className="back" href="index.html">
            ← Volver al inicio
          </a>
        </div>
      </div>
    </div>
  );
}
