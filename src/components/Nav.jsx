import React from "react";
import "../styles/Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav class="nav">
      <ul class="menu">
        <li>
          <span>
            <Link to="/">HOME</Link>
          </span>
        </li>
        <li>
          <span>
            <Link to="/genero">GENERO</Link>
          </span>
        </li>
        <li>
          <span>
            <Link to="/libro">LIBRO</Link>
          </span>
        </li>
        <li>
          <span>
            <Link to="/persona">PERSONA</Link>
          </span>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
