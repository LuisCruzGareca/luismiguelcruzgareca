import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Birthdate, Location } from "../components/Icons";
import image from "../assets/luiscruz.png";
import titulo from "../assets/titulo.jpg";
import provicionNacional from "../assets/provicionNacional.jpg";

export default function SobreMi() {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <Header />
      <main class="main-container">
        <div class="grid-layout">
          <div class="hero-card glass-tile">
            <div class="hero-image-wrapper">
              <img
                alt="Retrato grande en blanco y negro"
                class="hero-image"
                src={image}
              />
              <div class="hero-overlay"></div>
            </div>
            <div class="hero-content">
              <h1 class="hero-title">
                <span class="gradient-text">Sobre Mi</span>
              </h1>
              <p class="hero-description">
                Una sintesis de logica arquitectonica y precision estetica.
                Forjado en Tokio, sirviendo a la red global con sistemas e
                interfaces de alta fidelidad.
              </p>
            </div>
          </div>
          <div class="side-cards">
            <div class="info-card info-card--gold glass-tile">
              <span class="material-symbols-outlined icon-gold">
                <Birthdate />
              </span>
              <div>
                <h3 class="info-label info-label--amethyst">
                  Fecha de Nacimiento
                </h3>
                <p class="info-value">22 de octubre de 1999</p>
              </div>
            </div>
            <div class="info-card info-card--amethyst glass-tile">
              <span class="material-symbols-outlined icon-amethyst">
                <Location />
              </span>
              <div>
                <h3 class="info-label info-label--gold">Ubicacion Actual</h3>
                <p class="info-value--sm">Santa Cruz - Bolivia // Remoto</p>
              </div>
            </div>
          </div>
        </div>
        <div class="grid-layout">
          <div class="languages-card glass-tile">
            <h3 class="section-label section-label--amethyst">
              <span class="dot-indicator"></span>
              Idiomas
            </h3>
            <div class="language-list">
              <div class="language-item">
                <div>
                  <p class="language-name">Ingles</p>
                  <span class="language-level">fluido</span>
                </div>
                <div class="progress-bar">
                  <div class="progress-fill progress-fill--gold progress-fill--full"></div>
                </div>
              </div>
              <div class="language-item">
                <div>
                  <p class="language-name">Espanol</p>
                  <span class="language-level">nativo</span>
                </div>
                <div class="progress-bar">
                  <div class="progress-fill progress-fill--amethyst progress-fill--90"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="education-card glass-tile">
            <h3 class="education-label">Trayectoria Academica</h3>
            <div class="education-grid">
              <div class="timeline-item">
                <div class="timeline-dot timeline-dot--gold gold-glow"></div>
                <span class="timeline-date timeline-date--amethyst">
                  2022 — 2025
                </span>
                <h4 class="timeline-title">TECNICO SUPERIOR EN INFORMATICA</h4>
                <p class="timeline-subtitle">
                  Universidad Mayor, Real y Pontificia de San Francisco Xavier
                  de Chuquisaca
                </p>
              </div>
              <div class="timeline-item">
                <div class="timeline-dot timeline-dot--amethyst amethyst-glow"></div>
                <span class="timeline-date timeline-date--gold">
                  2025 — Presente
                </span>
                <h4 class="timeline-title">INGENIERIA EN SISTEMAS</h4>
                <p class="timeline-subtitle">
                  Universidad Mayor, Real y Pontificia de San Francisco Xavier
                  de Chuquisaca
                </p>
              </div>
              <div class="timeline-item">
                <div class="timeline-dot timeline-dot--amethyst amethyst-glow"></div>
                <span class="timeline-date timeline-date--gold">
                  2025 — Presente
                </span>
                <h4 class="timeline-title">Certificacion Full-Stack</h4>
                <p class="timeline-subtitle"></p>
              </div>
            </div>
            {/* <div class="quote-box">
              <span class="material-symbols-outlined quote-icon">
                auto_awesome
              </span>
              <p class="quote-text">
                "Construyendo el puente entre sistemas complejos y el diseno
                humano."
              </p>
            </div> */}
          </div>
        </div>
        <section class="credentials-section">
          <div class="section-header">
            <div>
              <h2 class="section-title">Credenciales Academicas</h2>
              <p class="section-subtitle">
                Prueba verificada de experiencia y dominio de sistemas
              </p>
            </div>
            <div class="accent-lines">
              <div class="accent-line accent-line--gold"></div>
              <div class="accent-line accent-line--amethyst"></div>
            </div>
          </div>
          <div class="credentials-grid">
            <div class="cert-card glass-tile">
              <div class="cert-image-wrapper">
                <img alt="Certificado" class="cert-image" src={titulo} />
                <div class="cert-overlay">
                  <button
                    class="cert-button theme-button"
                    onClick={() => openModal(titulo)}
                  >
                    Ver Completo
                  </button>
                </div>
              </div>
              <div class="cert-content">
                <div class="cert-header">
                  <h3 class="cert-title">TITULO UNIBERCITARIO</h3>
                  <span class="cert-date cert-date--gold">marzo 2025</span>
                </div>
                <p class="cert-description">
                  titulo Unibercitario en TECNICO SUPERIOR EN INFORMATICA
                </p>
              </div>
            </div>
            <div class="cert-card glass-tile">
              <div class="cert-image-wrapper">
                <img
                  alt="Certificado"
                  class="cert-image"
                  src={provicionNacional}
                />
                <div class="cert-overlay">
                  <button
                    class="cert-button theme-button"
                    onClick={() => openModal(provicionNacional)}
                  >
                    Ver Completo
                  </button>
                </div>
              </div>
              <div class="cert-content">
                <div class="cert-header">
                  <h3 class="cert-title">TITULO DE PROVICON NACIONAL</h3>
                  <span class="cert-date cert-date--amethyst">MARZO 2025</span>
                </div>
                <p class="cert-description"></p>
              </div>
            </div>
            <div class="cert-card glass-tile">
              <div class="cert-image-wrapper">
                <img
                  alt="Certificado"
                  class="cert-image"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLEzA_oIOqH5ixeOM5za7odt_gwIMhdfHm1Df4gYfm3CWKtnGVX_Fz_mz8BYqKGXuByrtPRWAWjEME0kOpbC6Rdbp7WvEzcYSafCSWQN3xBkplflkqnILv6YRKWn4MxXHt1xIMw3C2aVG4Rm7wV7V0dGeo5-_Td-FqXSQYx3AdBeQbkevNoj3c4AxtCUPE3Oz9ocjsu5fnOjgwxVagXviY7h0RMVpk2kiFo9mbu3C71r-6LMJp7rY8KtW-lAsgEwdLx_cfSyXrN4Ip"
                />
                <div class="cert-overlay">
                  <button
                    class="cert-button theme-button"
                    onClick={() =>
                      openModal(
                        "https://lh3.googleusercontent.com/aida-public/AB6AXuDLEzA_oIOqH5ixeOM5za7odt_gwIMhdfHm1Df4gYfm3CWKtnGVX_Fz_mz8BYqKGXuByrtPRWAWjEME0kOpbC6Rdbp7WvEzcYSafCSWQN3xBkplflkqnILv6YRKWn4MxXHt1xIMw3C2aVG4Rm7wV7V0dGeo5-_Td-FqXSQYx3AdBeQbkevNoj3c4AxtCUPE3Oz9ocjsu5fnOjgwxVagXviY7h0RMVpk2kiFo9mbu3C71r-6LMJp7rY8KtW-lAsgEwdLx_cfSyXrN4Ip"
                      )
                    }
                  >
                    Ver Completo
                  </button>
                </div>
              </div>
              <div class="cert-content">
                <div class="cert-header">
                  <h3 class="cert-title">Sistemas UI/UX</h3>
                  <span class="cert-date cert-date--gold">JUN 2022</span>
                </div>
                <p class="cert-description">
                  Pensamiento de diseno aplicado a componentes de interfaz
                  sistematicos y flujo de usuario.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Modal Lightbox */}
      {modalImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            <img
              src={modalImage}
              alt="Certificado completo"
              className="modal-image"
            />
          </div>
        </div>
      )}
    </>
  );
}
