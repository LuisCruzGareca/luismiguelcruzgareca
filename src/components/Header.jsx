import { useState } from "react";
import logo from "../assets/removebg_p.png";
import { Menu } from "./Icons";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="Menu">
        <div className="logoImg">
          <img src={logo} style={{ width: "150px" }} alt="Logo" />
        </div>

        <div className="menu-mobile" onClick={toggleMenu}>
          <Menu />
        </div>

        {/* Menú móvil visible solo si está abierto */}
        {menuOpen && (
          <ul className={`mobile_menu ${menuOpen ? "show" : ""}`}>
            <li>
              <p style={{ textAlign: "center" }}>
                <Link
                  to="/sobreMi"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    fontSize: "46px",
                  }}
                >
                  Sobre Mi
                </Link>
              </p>
            </li>
            <li>
              <Link to="/tools_all">
                <p>Habilidades</p>
              </Link>
            </li>
            <li>
              <a href="#Proyectos" onClick={() => setMenuOpen(false)}>
                <p>Proyectos</p>
              </a>
            </li>
            <li>
              <a href="#Contacto" onClick={() => setMenuOpen(false)}>
                <p>Contacto</p>
              </a>
            </li>
          </ul>
        )}

        {/* Menú escritorio (siempre visible) */}
        <div className="menu_list" id="menu_list">
          <ul
            className="separar"
            style={{ listStyle: "none", padding: 0, margin: 0 }}
          >
            <li>
              <p>
                <Link
                  to="/sobreMi"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Sobre Mi
                </Link>
              </p>
            </li>
            <li>
              <Link to="/tools_all">
                <p>Habilidades</p>
              </Link>
            </li>
            <li>
              <a href="#Proyectos">
                <p>Proyectos</p>
              </a>
            </li>
            <li>
              <a href="#Contacto">
                <p>Contacto</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
