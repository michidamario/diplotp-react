import React from "react";
import "./App.css";

function Nav() {
  return (
    <nav class="navbar navbar-light bg-light">
      <form class="container-fluid justify-content-end">
        <button class="btn btn-outline-primary me-2" type="button">
          CATEGORÍA
        </button>
        <button class="btn btn-outline-primary me-2" type="button">
          GÉNERO
        </button>
        <button class="btn btn-outline-primary me-2" type="button">
          LIBRO
        </button>
        <button class="btn btn-outline-primary me-2" type="button">
          PERSONA
        </button>
      </form>
    </nav>
  );
}

export default Nav;
