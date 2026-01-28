import image from "../assets/luiscruz.png";

export default function FrontPage() {
  return (
    <section className="hero-section">
      <div className="hero-image-container">
        <div className="hero-image-wrapper">
          <img
            alt="Professional profile photograph"
            className="hero-img"
            src={image}
          />
          <div className="hero-gradient-right"></div>
          <div className="hero-gradient-bottom"></div>
          <div className="hero-frame-element"></div>
        </div>
      </div>
      <div className="hero-content">
        <div className="hero-content-inner">
          <h1 className="hero-title">
            Creando
            <br />
            <span className="hero-title-gradient">Experiencias</span>
            <br />
            <span className="hero-title-indent">Digitales</span>
          </h1>

          <div className="hero-buttons">
            <button className="btn-primary">Ver Portafolio</button>
            <button className="btn-secondary">Descargar CV</button>
          </div>
        </div>
      </div>
    </section>
  );
}
