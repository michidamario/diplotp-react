import React, { useState, useEffect } from "react";
import axios from "axios";
import Formulario from "./FormularioGenero";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {connect} from 'react-redux';

const Genero = () => {
  const [Genero, setGenero] = useState([]);
  const dispatch = useDispatch();
  useEffect(async () => {
    const response = await axios.get("http://localhost:8080/categoria");
    setGenero(response.data);
    dispatch({ type: "LISTAR_GENEROS", payload: response.data});
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

export default connect()(Genero);