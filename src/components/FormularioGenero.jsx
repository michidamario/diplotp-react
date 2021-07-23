import React, { useState } from "react";
import axios from "axios";

 
const FormularioG = () => {
    const [genero, setGenero] = useState("");
      
    const handleGeneroChange = (e) => {
      setGenero(e.target.value);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = {
        genero,
        };
      console.log(data);
      await axios.post("http://localhost:8080/genero", data);
    };
  
  

  
  return (
    <>
      <div class="container">
        <form onSubmit={handleSubmit}>
          <div class="mb-3">
            <label class="form-label">Genero: </label>
            <input
              onChange={handleGeneroChange}
              type="text"
              class="form-control"
            ></input>
          </div>
                   
          <button type="submit" class="btn btn-primary" >
            Registrar
          </button>
          <button type="submit" class="btn btn-primary">
            Modificar
          </button>
          <button type="submit" class="btn btn-primary">
            Borrar
          </button>
        </form>
      </div>
    </>
  );
};

export default FormularioG;
