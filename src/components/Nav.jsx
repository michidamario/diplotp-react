import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav class="nav">
      <ul class="menu">
        <li>
          <span>CATEGORIA</span>
        </li>
        <li>
        <span>GENERO</span>
          <ul class="submenu">
            <li>
              <Link to="#">REGISTRAR</Link>
            </li>
            <li>
              <Link to="#">LISTADO</Link>
            </li>
          </ul>
        </li>
        <li>
          <span>LIBRO</span>
          <ul class="submenu">
            <li>
              <Link to="#">REGISTRAR</Link>
            </li>
            <li>
            <Link to="#">LISTADO</Link>
            </li>
          </ul>
        </li>
        <li>
          <span>PERSONA</span>
          <ul class="submenu">
            <li>
              <Link to="/persona">REGISTRAR</Link>
            </li>
            <li>
            <Link to="#">LISTADO</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
