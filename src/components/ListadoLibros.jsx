import React, {useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import swal from  'sweetalert';
import '../styles/listados.css'

const ListadoLibros= ()=>{
    const [personas, setPersonas] = useState([]);
    const [libros, setLibros] = useState([]);

    const handleDelete=async (libroId)=>{
        try{
            await axios.delete("http://localhost:8080/libro/"+ libroId)
            swal({
                text: "Registro eliminado correctamente.",
                icon: "success"
                });   
                window.location.reload();         
        }
        catch(e){
            
            swal({
                text: "No se puede eliminar, este libro está prestado.",
                icon: "warning"
                });
        }
    }

    const handleEdit= (libroId)=>{

    }


    useEffect(async () => {
        const response = await axios.get("http://localhost:8080/persona");
        const responseLibros = await axios.get("http://localhost:8080/libro");

        setLibros(responseLibros.data);
        setPersonas(response.data);
    }, []);

    return(
        <div className="containerLibros">
        <Link to="/libro/formulario">FORMULARIO</Link>
        {personas && libros && libros.map(libro=>{

            return(
                <div className="container">
                    <p>Nombre: {libro.nombre}</p>
                    <p>Genero: {libro.genero}</p>
                    <p>Descripción: {libro.descripcion}</p>
                    <p>Prestado a: {libro.persona_id}</p>
                    
                    <button onClick={()=>handleEdit(libro.id)} className="btn btn-warning"> Editar</button>
                    <button onClick={()=>{handleDelete(libro.id)}} className="btn btn-danger">Borrar</button>
                </div>
            )
        })}
        </div>
    )
}

export default  ListadoLibros;
