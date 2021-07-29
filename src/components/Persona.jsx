import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";

const Persona = () => {
  const [personas, setPersonas] = useState([]);
  const dispatch = useDispatch();

  useEffect(async () => {
    const response = await axios.get("http://localhost:8080/persona");
    setPersonas(response.data);
    dispatch({ type: "LISTAR_PERSONAS", payload: response.data});
  }, []);

  return (
    <>
      <div class="container">
        <button type="button" class="btn btn-primary">
          <Link to="/persona/formulario">FORMULARIO</Link>
        </button>
        <button type="button" class="btn btn-primary">
          <Link to="/persona/listado">LISTADO</Link>
        </button>
      </div>
    </>
  );
};

export default connect()(Persona);
