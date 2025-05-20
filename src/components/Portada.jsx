import { useState } from "react";
import luisImage from "../assets/Luis Cruz.png";

export default function Portada() {
  const [mostrarSobreMi, setMostrarSobreMi] = useState(false);

  const toggleSobreMi = () => setMostrarSobreMi(!mostrarSobreMi);

  return (
    <>
      <div className="imageLuis">
        <div className="parte1">
          <div className="dentro">
            <img src={luisImage} alt="Luis Cruz" />
          </div>
        </div>

        <div className="parte2">
          <div className="sobre_mi">
            <p>
              No tienes que ser el mejor, solo tienes que ser mejor que ayer.
            </p>
            <div className="Botones">
              <a onClick={toggleSobreMi} className="btn-Ar">
                Sobre Mi
              </a>
              <a
                href="/public/LuisCruzGareca.pdf"
                target="_blank"
                className="btn-Ar"
              >
                Ver mi CV
              </a>
            </div>
          </div>

          {mostrarSobreMi && (
            <div id="cuadroOculto" className="cuadroVisible">
              <div className="txtOculto">
                <h2>Sobre mi</h2>
                <span>
                  Soy un desarrollador frontend apasionado por el diseño web
                  moderno y la creación de experiencias digitales intuitivas...
                </span>
              </div>
              <div className="btn-At">
                <button onClick={toggleSobreMi} className="btn-Ar">
                  Volver
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
