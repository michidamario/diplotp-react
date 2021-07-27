import React, { useState } from "react";
import axios from "axios";
import swal from  'sweetalert';

 
const FormularioG = () => {
  const [nombre, setNombre] = useState("");
      
  const handleGeneroChange = (e) => {
      setNombre(e.target.value);
    };
  
   const handleSubmit = async (e) => {
      e.preventDefault();
      const data = {
        nombre,     
      };
      await axios.post("http://localhost:8080/categoria", data);
      swal({
        text: "Género ingresado correctamente",
        icon: "success"
        });
        e.target.reset()
    };
  

  return (
    <>
      <div class="container">
        <form onSubmit={handleSubmit}>
          <div class="mb-3">
            
            <label class="form-label">Ingrese el Género: </label>
            <input
              onChange={handleGeneroChange}
              type="text"
              class="form-control"
              required
            ></input>
          </div>     
          <button type="submit" class="btn btn-primary">
            Alta
          </button>
         
        </form>
      </div>
    </>
  );
};

export default FormularioG;
