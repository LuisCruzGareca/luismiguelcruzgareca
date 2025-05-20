import { useState } from "react";
import logo from "../assets/removebg_p.png";
import { Menu } from "./Icons";

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
              <a href="#SobreMi" onClick={() => setMenuOpen(false)}>
                <p>Sobre mi</p>
              </a>
            </li>
            <li>
              <a href="#Habilidades" onClick={() => setMenuOpen(false)}>
                <p>Habilidades</p>
              </a>
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
              <a href="#SobreMi">
                <p>Sobre mi</p>
              </a>
            </li>
            <li>
              <a href="#Habilidades">
                <p>Habilidades</p>
              </a>
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
