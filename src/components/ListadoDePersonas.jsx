import React, {useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import swal from  'sweetalert';
import { useDispatch } from 'react-redux';
import {connect} from 'react-redux';
import '../styles/listados.css'


const Listado = () => {
  const [personas, setPersonas] = useState([]);
  const [libros, setLibros] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = async (personaId) => {
    try {
      await axios.delete("http://localhost:8080/persona/" + personaId);
      swal({
        text: "Registro eliminado correctamente.",
        icon: "success",
      });
      window.location.reload();
    } catch (e) {
      swal({
        text: "No se puede eliminar, tiene libros asociados.",
        icon: "warning",
      });
    }
  };

  const handleEdit = (persona) => {
    dispatch({
        type: "EDITAR_PERSONA",
        payload: persona
      });
    //const personaAEditar = personas.find(persona=>persona.id == personaId);
  };

  useEffect(async () => {
    const response = await axios.get("http://localhost:8080/persona");
    const responseLibros = await axios.get("http://localhost:8080/libro");

    setLibros(responseLibros.data);
    setPersonas(response.data);
  }, []);

  return (
    <div className="containerPersonas">
      <Link to="/persona/formulario">FORMULARIO</Link>
      {personas && libros && personas.map((persona) => {
          return (
            <div className="container">
              <p>Nombre: {persona.nombre}</p>
              <p>Apellido: {persona.apellido}</p>
              <p>Alias: {persona.alias}</p>
              <p>Email: {persona.email}</p>
              <p>
                Libros:{" "}
                {libros
                  .filter((libro) => {
                    return libro.persona_id == persona.id;
                  })
                  .map((libro, i) => {
                    if (i > 0) {
                      return ", " + libro.nombre;
                    }
                    return libro.nombre;
                  })}
              </p>
              <button
                onClick={() => handleEdit(persona)}
                className="btn btn-warning"
              >
                {" "}
                Editar
              </button>
              <button
                onClick={() => {
                  handleDelete(persona.id);
                }}
                className="btn btn-danger"
              >
                Borrar
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default connect()(Listado);