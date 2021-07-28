import React, { useState } from "react";
import axios from "axios";
import swal from  'sweetalert';

const BookForm = () => {
    const [nombre, setName] = useState("");
    const [categoria, setCategory] = useState("");
    const [descripcion, setInfo] = useState("");
    const [persona, setPerson] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            nombre,
            categoria,
            descripcion,
            persona,
        };
        await axios.post("http://localhost:8080/libro", data);
        swal({
          title:"Libro ingresado correctamente",
          text: "A continuación podrá ingresar otro libro.",
          icon: "success"
          });
          e.target.reset()
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const handleInfoChange = (e) => {
        setInfo(e.target.value);
    };

    const handlePersonChange = (e) => {
        setPerson(e.target.value);
    };
    return (
      <>
        <div class="container">
          <form onSubmit={handleSubmit}>
            <div class="mb-3">
              <label class="form-label">Nombre: </label>
              <input
                onChange={handleNameChange}
                type="text"
                class="form-control"
                required
              ></input>
            </div>
            <div class="mb-3">
              <label>Categoria: </label>
              <input
                onChange={handleCategoryChange}
                type="text"
                class="form-control"
                required
              ></input>
            </div>
            <div class="mb-3">
              <label>Descripcion: </label>
              <input
                onChange={handleInfoChange}
                type="text"
                class="form-control"
                required
              ></input>
            </div>
            <div class="mb-3">
              <label>Persona Asociada: </label>
              <input
                onChange={handlePersonChange}
                class="form-control"
              ></input>
            </div>
            <button type="submit" class="btn btn-primary">
              Registrar
            </button>
          </form>
        </div>
      </>
    );
};

export default BookForm;