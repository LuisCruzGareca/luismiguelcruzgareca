import pagina2 from "../assets/pagina2.png";
import paginaMOvile from "../assets/tiendaMovile.png";

import { useState } from "react";
import { Back, Next } from "./Icons";
import { useSwipeable } from "react-swipeable";
import "../css/Proyects.css";

export default function Proyects() {
  const [startIndex, setStartIndex] = useState(0);

  const proyectos = [
    {
      titulo: "TIENDA ONLINE",
      imagenDesktop: pagina2,
      imagenMobile: paginaMOvile,
      link: "https://shop.luismiguelcruzgareca.com/",
    },
    // {
    //   titulo: "TIENDA ONLINE",
    //   imagenDesktop: pagina1,

    //   imagenMobile: paginaMovile,
    //   link: "https://shop.luismiguelcruzgareca.com/",
    // },
  ];

  const nextProyect = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % proyectos.length);
  };

  const prevProyect = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? proyectos.length - 1 : prevIndex - 1
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextProyect,
    onSwipedRight: prevProyect,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const visibleProyect = proyectos[startIndex];

  return (
    <div className="projects" id="Proyectos">
      <div className="projectsTxt">
        <h1>Proyectos</h1>
      </div>

      <div className="all_projects" {...handlers}>
        {/* <button className="btnA" onClick={prevProyect}>
          <Back />
        </button> */}

        <div className="projectsImg">
          <a
            href={visibleProyect.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <picture>
              <source
                media="(max-width: 500px)"
                srcSet={visibleProyect.imagenMobile}
              />
              <source
                media="(min-width: 769px)"
                srcSet={visibleProyect.imagenDesktop}
              />
              <img
                src={visibleProyect.imagenDesktop}
                alt={`Proyecto: ${visibleProyect.titulo}`}
                className="w-full h-auto object-cover"
              />
            </picture>
            <h3 className="txt_proyect">{visibleProyect.titulo}</h3>
          </a>
        </div>

        {/* <button className="btnA" onClick={nextProyect}>
          <Next />
        </button> */}
      </div>
    </div>
  );
}
