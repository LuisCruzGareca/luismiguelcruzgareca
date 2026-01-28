import { SatelliteAlt, Database } from "./Icons";

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <h2 className="experience-title">Experiencia</h2>
      <div className="timeline">
        {/* Timeline Item 1 */}
        <div className="timeline-item">
          <div className="timeline-icon timeline-icon-gold">
            <SatelliteAlt />
          </div>
          <div className="timeline-card-wrapper">
            <div className="timeline-card-header">
              <div className="timeline-role">Proyectos Personales</div>
              <time className="timeline-date timeline-date-current">
                ACTUAL
              </time>
            </div>
            {/* <div className="timeline-company timeline-company-gold">
                  Prism Digital Agency
                </div> */}
            <p className="timeline-description">
              Desarrollo de una tienda online, un sistema de reservas para
              barberías y una red social tipo Facebook utilizando React y
              tecnologías web modernas (frontend y backend).
            </p>
          </div>
        </div>

        {/* Timeline Item 2 */}
        <div className="timeline-item">
          <div className="timeline-icon timeline-icon-purple">
            <Database />
          </div>
          <div className="timeline-card-wrapper timeline-card-gold">
            <div className="timeline-card-header">
              <div className="timeline-role">
                Pasantía en Desarrollo Web / Sistemas
              </div>
              <time className="timeline-date timeline-date-past">
                2024 - 2025
              </time>
            </div>
            <div className="timeline-company timeline-company-purple"></div>
            <p className="timeline-description">
              Apoyo en el desarrollo y mantenimiento de aplicaciones y sistemas
              internos. Participación en el desarrollo de interfaces web
              utilizando HTML, CSS y JavaScript. Colaboración en tareas de
              frontend y soporte técnico. Trabajo en equipo siguiendo
              lineamientos técnicos y buenas prácticas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
