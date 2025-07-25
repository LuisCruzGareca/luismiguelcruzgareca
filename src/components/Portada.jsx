import luisImage from "../assets/Luis Cruz.png";
import { Link } from "react-router-dom";
import cdPdf from "../assets/LuisCruzGareca.pdf";
export default function Portada() {
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
              <Link to="/sobreMi" className="btn-Ar">
                Sobre Mi
              </Link>
              <a href={cdPdf} target="_blank" className="btn-Ar">
                Ver mi CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
