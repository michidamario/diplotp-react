import React, { useState } from "react";
import axios from "axios";

 
const FormularioGm = () => {
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
        <p>Baja - Genero </p>
          <div class="mb-3">
          <label class="form-label">Código Genero: </label>
            <input
              onChange={handleGeneroChange}
              type="text"
              class="form-control"
            ></input>
          </div>

          

          <button type="submit" class="btn btn-primary" >
            Baja
          </button>
         
        </form>
      </div>
    </>
  );
};

export default FormularioGm;
