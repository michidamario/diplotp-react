import React, { useState, useEffect } from "react";
import axios from "axios";
import FormularioG from "./FormularioGenero";
import FormularioGb from "./FormularioGeneroB";
import { Link } from "react-router-dom";

const Genero = () => {
  const [Genero, setGenero] = useState([]);
  useEffect(async () => {
    const response = await axios.get("http://localhost:8080/genero");
    setGenero(response.data);
  }, []);

  return (
    <>
        <div class="container">

          <button type="button" class="btn btn-primary">
          <Link to="/genero/formulario">Altas - Género</Link>
          </button>

          <button type="button" class="btn btn-primary">
          <Link to="/genero/formularioB">Bajas - Género</Link>
          </button>

          <button type="button" class="btn btn-primary">
          <Link to="/genero/formularioM">Modificaciones - Género</Link>
          </button>

          <button type="button" class="btn btn-primary">Listado - Genero </button>
        </div>
    </>
  );
};

export default Genero;