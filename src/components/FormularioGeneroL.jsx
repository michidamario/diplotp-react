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

    const handleFound= ()=>{
        swal({
            title: "EN DESARROLLO.",
            text: "Falta desarrollar esta parte.",
            icon: "warning",
            timer: "4000"
            });
       
    };
    
    
   
    return(     
        <div>           
                <div className="container">
                    <form>
                    <p>Seleccione un Género:</p>                   
                        <div class="mb-3">                            
                            <select>
                                <option>
                                    TODOS LOS GENEROS
                                </option>
                                {nombre && nombre.map(nomb=>{
                                    return(
                                        <option>
                                            {nomb.nombre}
                                        </option>
                                    )
                                })};
                            </select>    
                        </div>
                        <button onClick={()=>{handleFound()}} className="btn btn-warning">Buscar Libros</button>
                    </form>                        
                </div>
                
                <div className="container">
                    {libros && nombre && libros.map((libro) => {
                        return (
                            <div>
                                <b><p>Nombre: {libro.nombre}</p></b>
                                <p>Descripcion: {libro.descripcion}</p>

                                <p>
                                    Genero:{" "}
                                    {nombre
                                    .filter((nombre) => {
                                        return nombre.id == libro.id;
                                    })
                                    .map((nombre, i) => {
                                        if (i > 0) {
                                        return ", " + nombre.nombre;
                                        }
                                        return nombre.nombre;
                                    })}
                                </p>
                            <hr></hr>   
                            </div>
                        );
                    })}
                </div>
        );
        </div>       
    )
}

export default  FormularioGl;