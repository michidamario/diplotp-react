import React, { useState } from "react";
import axios from "axios";
import swal from  'sweetalert';

 
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
  
  
const mostrarAlerta =()=>{
  //let valorEntrada = document.getElementById("textElement").Value;
  //console.log(valorEntrada);
  //if (valorEntrada == null){
  
    swal({
        text: "Falta/n ingresar dato/s ",
        icon: "warning"
        });
  //    }

  
}
  
  return (
    <>
      <div class="container">
        <form onSubmit={handleSubmit}>
          <div class="mb-3">
            <p>Alta - Genero </p>
            <input
              onChange={handleGeneroChange}
              type="text"
              class="form-control"
              id = "textElement"
            ></input>
          </div>
          
         
          <button type="submit" onClick={()=>mostrarAlerta()} class="btn btn-primary"  >
            Alta
          </button>
         
        </form>
      </div>
    </>
  );
};

export default FormularioG;
