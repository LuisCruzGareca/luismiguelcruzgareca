import { useState } from "react";
import { Back, Next } from "./Icons";
import image1 from "../img/shop.luismiguelcruzgareca.com_ (2).png";

const projects = [
  {
    title: "Tienda online",
    techColor: "purple",
    image: image1,
    description:
      "Interfaz de red de nodos descentralizada con sincronizacion en tiempo real e integracion blockchain.",
    btn: "Acceder",
    link: "https://shop.luismiguelcruzgareca.com",
  },
  {
    title: "Prism Marketplace",
    techColor: "gold",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD9WzT_K22Kd9JGefDUyOhMXhcmVbzcGGKTLO5h-ToNidwEejq4JsbVKo9hTj96H2Pgyq3iFRToY2ehZDKEjUeQtpwnhqXfQ1oVnGybM_7z3UXhjFvFn0bgxY2wqbPDbSl2NdwfBIN9F4BT4UO3wE-wRsm31m8se7DQJsKVqTktipkzUNRjFgQUI3IUd_UH_V7ksc0z-8hpJJ8WcAXFI45XY9BqwcggezqdtNbv6iQ59pGFd6lszg2JthhqGtj-hChbyIz0raMSv9Dm",
    description:
      "Interfaz de e-commerce cristalina optimizada para activos de alta fidelidad y tiempos de respuesta en milisegundos.",
    btn: "Acceder",
  },
  {
    title: "Ether Sky",
    techColor: "purple",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAqFoszjoaDGeB3mFvT1QiEVDQIF0kAwQeN20JqkXdjVcniCsTHBo0MA0lzGaxLIElaQNfm3lhCnC7uYgKhL6_ul4rY8LXS-_L4qGw_h2Xvjo6Ov17YcVWttv_f3XsHgwm3aelmwlEhp9m3vCbW6VGpfHfzFa35HCmIsMSxrmNxz2lgmjDTsH3hB9-vOXh_8OI8xV16z9z_ElmdEJ3J1P6ks0mGpYWUqgL9F-h0G-Z2JpWwWTnfHQhH6AQx2r4bImBZapRT8ZUi_VEM",
    description:
      "Plataforma inmersiva de visualizacion 3D del cielo con renderizado WebGL y sistemas de particulas dinamicos.",
    btn: "Acceder",
  },
];
export default function Proyects() {
  const [activeIndex, setActiveIndex] = useState(1);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };
  const angleStep = 360 / projects.length;
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 480;
  const cardDepth = isMobile ? 180 : 300;

  return (
    <>
      {/* Projects Section */}
      <section className="projects-section" id="projects">
        <div className="projects-header">
          <h2 className="skills-title">
            PROYECTOS <span className="dual-text">PRINSIPALES</span>
          </h2>
        </div>
        <div className="carousel-viewport">
          <div
            className="carousel-track"
            style={{
              transform: `rotateY(${-activeIndex * angleStep}deg)`,
            }}
          >
            {projects.map((project, index) => {
              const isCenter = index === activeIndex;
              return (
                <div
                  key={project.title}
                  className="project-card"
                  style={{
                    transform: `rotateY(${
                      index * angleStep
                    }deg) translateZ(${cardDepth}px) rotateY(${
                      (-index + activeIndex) * angleStep
                    }deg)`,
                    opacity: isCenter ? 1 : 0.5,
                    filter: isCenter ? "brightness(1)" : "brightness(0.5)",
                    zIndex: isCenter ? 10 : 1,
                  }}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="project-card-image">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-card-img"
                    />
                  </div>
                  <div className="project-card-content">
                    <div className="project-card-header">
                      <div>
                        <h3 className="project-card-title">{project.title}</h3>
                        <p
                          className={
                            project.techColor === "gold"
                              ? "project-card-tech-gold"
                              : "project-card-tech"
                          }
                        >
                          {project.tech}
                        </p>
                      </div>
                      {project.badge && (
                        <span className="project-badge">{project.badge}</span>
                      )}
                    </div>
                    <p className="project-card-description">
                      {project.description}
                    </p>
                    <a href={project.link} className="project-card-btn">
                      {project.btn}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="carousel-controls">
          <button
            className="carousel-btn carousel-btn-prev"
            onClick={handlePrev}
          >
            <Back />
          </button>
          <button
            className="carousel-btn carousel-btn-next"
            onClick={handleNext}
          >
            <Next />
          </button>
        </div>
      </section>
    </>
  );
}
