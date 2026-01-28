import { useState } from "react";
import {
  Css,
  Html,
  Javscript,
  MongoDB,
  Reac,
  Talwind,
  NodeJS,
  NestJS,
  Angular,
  MariaDB,
  Git,
} from "./Icons";
const skills = [
  {
    icon: <Reac />,
    title: "REACT",
    description:
      "Desarrollo de interfaces modernas usando componentes reutilizables, hooks y manejo de estado para crear aplicaciones dinámicas y escalables.",
    colorClass: "skill-card-purple",
    glowClass: "skill-glow-purple",
  },
  {
    icon: <Javscript />,
    title: "JAVASCRIPT",
    description:
      "Programación lógica del frontend utilizando funciones modernas, manejo de arrays, asincronía y consumo de APIs.",
    colorClass: "skill-card-gold",
    glowClass: "skill-glow-gold",
  },
  {
    icon: <Css />,
    title: "CSS3",
    description:
      "Diseño y maquetación responsive utilizando Flexbox, Grid, animaciones y buenas prácticas de estilo.",
    colorClass: "skill-card-purple",
    glowClass: "skill-glow-purple",
  },
  {
    icon: <Html />,
    title: "HTML5",
    description:
      "Estructuración semántica de sitios web, formularios accesibles y bases sólidas para el SEO.",
    colorClass: "skill-card-gold",
    glowClass: "skill-glow-gold",
  },
  {
    icon: <NodeJS />,
    title: "Node.js",
    description:
      "Desarrollo de lógica backend usando JavaScript en el servidor para crear APIs y manejar procesos del lado servidor.",
    colorClass: "skill-card-purple",
    glowClass: "skill-glow-purple",
  },
  {
    icon: <NestJS />,
    title: "NestJS",
    description:
      "Uso de NestJS para construir backends estructurados con TypeScript, aplicando una arquitectura modular y escalable.",
    colorClass: "skill-card-gold",
    glowClass: "skill-glow-gold",
  },
  {
    icon: <Angular />,
    title: "",
    description:
      "Uso de Tailwind CSS para crear interfaces modernas y responsivas mediante clases utilitarias, manteniendo un diseño limpio y consistente.",
    colorClass: "skill-card-purple",
    glowClass: "skill-glow-purple",
  },
  {
    icon: <MariaDB />,
    title: "MariaDB",
    description:
      "Uso de MariaDB como base de datos relacional para almacenar y gestionar información estructurada, trabajando con consultas SQL y relaciones entre tablas.",
    colorClass: "skill-card-gold",
    glowClass: "skill-glow-gold",
  },
  {
    icon: <Talwind />,
    title: "Tailwind CSS",
    description:
      "Creación rápida de interfaces modernas y responsivas usando clases utilitarias y diseño mobile-first.",
    colorClass: "skill-card-purple",
    glowClass: "skill-glow-purple",
  },
  {
    icon: <Git />,
    title: "Git",
    description:
      "Control de versiones, trabajo con repositorios, commits ordenados y despliegue de proyectos.",
    colorClass: "skill-card-gold",
    glowClass: "skill-glow-gold",
  },
  {
    icon: <MongoDB />,
    title: "MONGODBASE",
    description:
      "Base de datos NoSQL orientada a documentos, usada para almacenar y gestionar datos de forma flexible y escalable en aplicaciones web.",
    colorClass: "skill-card-purple",
    glowClass: "skill-glow-purple",
  },
];
export default function Kills() {
  const [showAllSkills, setShowAllSkills] = useState(false);

  return (
    <>
      {/* Skills Section */}
      <section className="skills-section" id="skills">
        <div className="skills-bg-pattern"></div>
        <div className="skills-line-horizontal"></div>
        <div className="skills-line-vertical-left"></div>
        <div className="skills-line-vertical-right"></div>
        <div className="skills-container">
          <div className="skills-header">
            <h2 className="skills-title">
              Principales <span className="dual-text">Habilidades</span>
            </h2>
            <div className="skills-divider"></div>
          </div>
          <div className="skills-grid">
            {(showAllSkills ? skills : skills.slice(0, 8)).map(
              (skill, index) => (
                <div key={index} className={`skill-card ${skill.colorClass}`}>
                  <div className="skill-icon-wrapper">
                    <div className={`skill-icon-glow ${skill.glowClass}`}></div>
                    <div className="skill-icon-box">{skill.icon}</div>
                  </div>
                  <h3 className="skill-card-title">{skill.title}</h3>
                  <p className="skill-card-description">{skill.description}</p>
                </div>
              )
            )}
          </div>
          {skills.length > 8 && (
            <div className="skills-show-more">
              <button
                className="btn-show-all"
                onClick={() => setShowAllSkills(!showAllSkills)}
              >
                {showAllSkills ? "Mostrar Menos" : "Mostrar Todo"}
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
