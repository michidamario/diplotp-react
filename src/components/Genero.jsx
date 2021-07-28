import React, { useState, useEffect } from "react";
import axios from "axios";
import FormularioG from "./FormularioGenero";
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
          <Link to="/genero/formularioM">Bajas / Modifica - Género</Link>
          </button>

          <button type="button" class="btn btn-primary">
          <Link to="/genero/formularioL">Listado - Genero/Libros</Link>   
          </button>
        </div>
    </>
  );
};

export default Genero;