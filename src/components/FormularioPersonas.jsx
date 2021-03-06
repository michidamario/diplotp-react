import React, { useState } from "react";
import axios from "axios";
import swal from  'sweetalert';

const Formulario = () => {
  const [nombre, setName] = useState("");
  const [apellido, setLastName] = useState("");
  const [alias, setAlias] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      nombre,
      apellido,
      alias,
      email,
    };
    await axios.post("http://localhost:8080/persona", data);
    swal({
      title:"Persona ingresada correctamente",
      text: "A continuación podrá ingresar otra persona.",
      icon: "success"
      });
      e.target.reset()
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleAliasChange = (e) => {
    setAlias(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
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
            <label>Apellido: </label>
            <input
              onChange={handleLastNameChange}
              type="text"
              class="form-control"
              required
            ></input>
          </div>
          <div class="mb-3">
            <label>Alias: </label>
            <input
              onChange={handleAliasChange}
              type="text"
              class="form-control"
              required
            ></input>
          </div>
          <div class="mb-3">
            <label>Email: </label>
            <input
              onChange={handleEmailChange}
              type="email"
              class="form-control"
              required
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

export default Formulario;
