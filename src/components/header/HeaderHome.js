import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./header-home.css";
import logo from "../../img/logo.png";
import { Icon } from "@iconify/react";
import menuIcon from "@iconify/icons-feather/menu";
import xIcon from "@iconify/icons-feather/x";

const HeaderHome = () => {
  const menu = useRef(null);

  const openMenu = () => {
    menu.current.classList.remove("hide");
  };

  const closeMenu = () => {
    menu.current.classList.add("hide");
  };
  return (
    <header className="header">
      <div>
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/about">Nosotros</Link>
          </li>
          <li>
            <Link to="/catalogue">Catálogo</Link>
          </li>
          <li>
            <Link to="/join">Sé parte</Link>
          </li>
        </ul>
      </nav>
      <span onClick={openMenu}>
        <Icon icon={menuIcon} />
      </span>
      <div ref={menu} className="hide">
        <Icon onClick={closeMenu} icon={xIcon} />
        <ul>
          <li>
            <Link onClick={closeMenu} to="/">
              Home
            </Link>
          </li>
          <hr></hr>
          <li>
            <Link onClick={closeMenu} to="/about">
              Nosotros
            </Link>
          </li>
          <hr></hr>
          <li>
            <Link onClick={closeMenu} to="/catalogue">
              Catálogo
            </Link>
          </li>
          <hr></hr>
          <li>
            <Link onClick={closeMenu} to="/join">
              Sé parte
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default HeaderHome;
