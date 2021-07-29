import React, { useState, useEffect } from "react";
import BookForm from './FormularioLibro';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { connect } from "react-redux";

const Libro = () => {
  const [libros, setLibros] = useState([]);
  const dispatch = useDispatch();

  useEffect(async () => {
    const response = await axios.get("http://localhost:8080/libro");
    setLibros(response.data);
    dispatch({ type: "LISTAR_LIBROS", payload: response.data});
  }, []);

  return (
    <>
      <div class="container">
        <button type="button" class="btn btn-primary">
          <Link to="/libro/formulario">FORMULARIO</Link>
        </button>
        <button type="button" class="btn btn-primary">
          <Link to="/libro/listado">LISTADO</Link>
        </button>
      </div>
    </>
  );
};

export default connect()(Libro);