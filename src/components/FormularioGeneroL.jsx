import React, {useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import swal from  'sweetalert';

const FormularioGl= ()=>{
    const [nombre, setNombre] = useState("");
    const [libros, setLibros] = useState([]);
    
    useEffect(async () => {
        const response = await axios.get("http://localhost:8080/categoria");
        const responseLibros = await axios.get("http://localhost:8080/libro");
        setLibros(responseLibros.data);
        setNombre(response.data);        
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            nombre,            
        };
        await axios.post("http://localhost:8080/libro", data);
       
    };

    const handleBuscar=async (categoriaId)=>{
        try{
            await axios.delete("http://localhost:8080/categoria/"+ categoriaId)
                    
        }
        catch(e){
            
            swal({
                text: "No se encontraron resultados para este genero.",
                icon: "warning"
                });
        }
    }
   
    return(     
        <div className="containerCategoria">            
                <div className="container">
                    <form onSubmit={handleSubmit}>
                    <p>Seleccione un Género:</p>                   
                        <div class="mb-3">
                            <select>
                                {nombre && nombre.map(nomb=>{
                                    return(
                                        <option>
                                            {nomb.nombre}
                                        </option>
                                    )
                                })};
                            </select>    
                        </div>
                        <button type="submit" class="btn btn-primary">Buscar Libros</button>
                        
                    </form>    
                </div>                               
        );
        </div>       
    )
}

export default  FormularioGl;