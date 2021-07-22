import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Listado from "./ListadoDePersonas";
import Formulario from "./FormularioPersonas";

const Persona = () => {
  const [personas, setPersonas] = useState([]);
  useEffect(async () => {
    const response = await axios.get("http://localhost:8080/persona");
    setPersonas(response.data);
  }, []);

  return (
    <>
      <div class="body-container">
        <div class="btn-container">
          <button type="button" class="btn btn-primary">{personas && <Listado personas={personas}></Listado>}</button>          
        </div>
      </div>
    </>
  );
};

export default Persona;
