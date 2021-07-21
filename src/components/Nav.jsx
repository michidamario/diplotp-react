import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav class="nav">
      <ul class="menu">
        <li>
          <a href="#">CATEGORIA</a>
        </li>
        <li>
          <a href="#">GENERO</a>
          <ul class="submenu">
            <li>
              <Link to="#">Registrar</Link>
            </li>
            <li>
              <a href="#">Listado</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">LIBRO</a>
          <ul class="submenu">
            <li>
              <Link to="#">Registrar</Link>
            </li>
            <li>
              <a href="#">Listado</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">PERSONA</a>
          <ul class="submenu">
            <li>
              <Link to="/persona">Registrar</Link>
            </li>
            <li>
              <a href="#">Listado</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
