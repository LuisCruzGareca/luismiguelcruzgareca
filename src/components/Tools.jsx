// import React from "../assets/iconsTools/react.png";
// import css from "../assets/iconsTools/css.jpg";
// import Node from "../assets/iconsTools/node.png";
// import html from "../assets/iconsTools/html.jpg";
// import Node from "../assets/iconsTools/node.jpg";

import React, { useEffect, useState } from "react";
import "../css/movile.css";
import "../css/Tools.css";
import { Css, Html, Javscript, MongoDB, Reac, Talwind } from "./Icons";

export function Tools() {
  const totalItems = 6;
  const visibleItems = 3;

  const itemWidth = 287 + 26; // 287px width + 2*13px margin
  const itemHeight = 350 + 26;

  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 540);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 540);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      const limit = totalItems - (isMobile ? 3 : visibleItems) + 1;
      setIndex((prev) => (prev + 1) % limit);
    }, 5000);
    return () => clearInterval(interval);
  }, [isMobile]);
  return (
    <div className="tools" id="Habilidades">
      <h1>Habilidades</h1>

      <div className="tools_container">
        <div
          id="carousel"
          className="carousel-track"
          style={{
            transform: isMobile
              ? `translateY(-${index * itemHeight}px)`
              : `translateX(-${index * itemWidth}px)`,
          }}
        >
          <div className="tools1">
            <Reac />
            <h2>REACT</h2>
            <span style={{ color: "white" }}>
              Uso React para construir interfaces modernas que se ven bien y
              funcionan de forma fluida. Me gusta su enfoque modular, que
              permite armar proyectos ordenados y fáciles de mantener. Con
              React, puedo crear experiencias dinámicas y adaptables que
              responden bien al usuario. Me siento cómodo trabajando en
              aplicaciones de una sola página y organizando bien el código.
            </span>
          </div>

          <div className="tools1">
            <Javscript />
            <h2>JAVASCRIPT</h2>
            <span style={{ color: "white" }}>
              Utilizo JavaScript como base para desarrollar interfaces web
              dinámicas, interactivas y orientadas a la experiencia del usuario.
              Trabajo aplicando buenas prácticas de desarrollo, organizando el
              código de forma modular y manteniendo un enfoque claro en la
              mantenibilidad y escalabilidad del proyecto. Tengo experiencia
              integrando lógica en el frontend.
            </span>
          </div>

          <div className="tools1">
            <Html />
            <h2>HTML</h2>
            <span style={{ color: "white" }}>
              Tengo un dominio sólido de HTML, utilizando etiquetas semánticas
              para estructurar contenido web de manera clara, accesible y
              ordenada. Conozco buenas prácticas para construir formularios bien
              organizados, implementando correctamente inputs, botones, enlaces
              y atributos esenciales. Además, aplico conceptos básicos de
              accesibilidad para mejorar la experiencia del usuario
            </span>
          </div>

          <div className="tools1">
            <Css />
            <h2>CSS</h2>
            <span style={{ color: "white" }}>
              Uso CSS para darle vida y personalidad a las interfaces. Me gusta
              crear diseños ordenados, responsivos y que se vean bien en
              cualquier pantalla. Siempre busco que el estilo acompañe la
              funcionalidad, manteniendo el código limpio y fácil de modificar.
              Disfruto cuidar los detalles y hacer que cada sitio se vea bien y
              funcione mejor.
            </span>
          </div>

          <div className="tools1">
            <Talwind />
            <h2>TALWIND</h2>
            <span style={{ color: "white" }}>
              Trabajo con Tailwind CSS para crear estilos limpios, rápidos y
              fáciles de mantener. Me gusta cómo permite armar diseños
              consistentes sin complicarme con hojas de estilo largas. Con
              Tailwind puedo enfocarme más en el diseño y la funcionalidad,
              manteniendo el código ordenado y adaptable. Me resulta ideal para
              proyectos escalables y bien organizados.
            </span>
          </div>
          <div className="tools1">
            <MongoDB />
            <h2>MONGODB</h2>
            <span style={{ color: "white" }}>
              Uso MongoDB para manejar la información de mis proyectos de forma
              flexible y organizada. Me gusta trabajar con bases de datos que se
              adaptan bien a las necesidades del desarrollo moderno. Con MongoDB
              puedo guardar, consultar y manejar datos sin complicaciones,
              manteniendo todo simple, escalable y listo para crecer con la
              aplicación.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
