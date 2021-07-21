import React from "react";
import "./App.css";

function Acciones() {
  return (
    <>
      <div id="btn-container">
        <div role="group" aria-label="Basic example">
          <button type="button" class="btn btn-primary">
            Categoría
          </button>
          <button type="button" class="btn btn-primary">
            Género
          </button>
          <button type="button" class="btn btn-primary">
            Libro
          </button>
          <button type="button" class="btn btn-primary">
            Persona
          </button>
        </div>
      </div>
    </>
  );
}

export default Acciones;
