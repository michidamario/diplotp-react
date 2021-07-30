import React, {useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import swal from  'sweetalert';
import '../styles/listados.css'

const FormularioGm= ()=>{
    const [nombre, setNombre] = useState("");
    
   

    const handleDelete=async (categoriaId)=>{
      try{
          await axios.delete("http://localhost:8080/categoria/"+ categoriaId)
          swal({
              text: "Registro eliminado correctamente.",
              icon: "success"
              });   
              window.location.reload();         
      }
      catch(e){
          
          swal({
              title: "No se puede eliminar, este Genero porque existe un libro.",
              //text: "Falta desarrollar para que muestre esta alerta.",
              icon: "warning"
              });
      }
  }

  const handleSubmit=async (e) => {
      e.preventDefault();
      const data = {
        nombre,
      };
      
      await axios.put("http://localhost:8080/categoria", data);
      swal({      
        text: "Registro modificado correctamente.",
        icon: "success"
        });
        window.location.reload();  
  };

    useEffect(async () => {
        const response = await axios.get("http://localhost:8080/categoria");
        setNombre(response.data);        
    }, []);

    return(
        <div className="containerCategoria">
       
        {nombre && nombre.map(nomb=>{

            return(
                <div className="container">
                  <form onSubmit={handleSubmit}>
                    <div class="mb-3">
                      <p>Nombre: {nomb.nombre}</p>
                    </div>
                    <hr></hr>
                    <div class="mb-3">
                      <label class="form-label">Descripción Genero por el cual modifica: </label>
                      <input                        
                        type="text"
                        class="form-control"
                        required
                      ></input>
                    </div>
                    <button type="submit" class="btn btn-primary">Editar</button>
                   
                    <button onClick={()=>{handleDelete(nomb.id)}} className="btn btn-danger">Borrar</button>
                    </form> 
                </div>
            )
        })}
        </div>
    )
}

export default  FormularioGm;

