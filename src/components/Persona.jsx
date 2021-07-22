import React, { useState, useEffect } from "react";
import axios from "axios";
import Listado from "./ListadoDePersonas";
import Formulario from "./FormularioPersonas";
import { Link } from "react-router-dom";

const Persona = () => {
  const [personas, setPersonas] = useState([]);
  useEffect(async () => {
    const response = await axios.get("http://localhost:8080/persona");
    setPersonas(response.data);
  }, []);

  return (
    <>
      <div class="container">
        <button type="button" class="btn btn-primary">
          <Link to="/persona/formulario">FORMULARIO</Link>
        </button>
        <button type="button" class="btn btn-primary">
          {personas && <Listado personas={personas}></Listado>}
        </button>
      </div>
    </>
  );
};

export default Persona;
