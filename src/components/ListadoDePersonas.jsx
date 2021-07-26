import React, {useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Listado= ()=>{
    const [personas, setPersonas] = useState([]);
    const [libros, setLibros] = useState([]);
  useEffect(async () => {
    const response = await axios.get("http://localhost:8080/persona");
    const responseLibros = await axios.get("http://localhost:8080/libro");
    setLibros(responseLibros.data);
    setPersonas(response.data);
  }, []);
    return(
        <div className="containerPersona">
        <Link to="/persona/formulario">FORMULARIO</Link>
        {personas && libros && personas.map(persona=>{
            return(
                <div className="container">
                    <p>Nombre: {persona.nombre}</p>
                    <p>Apellido: {persona.apellido}</p>
                    <p>Alias: {persona.alias}</p>
                    <p>Email: {persona.email}</p>
                    <p>Libros: {libros.filter(libro=>{
                            return libro.persona_id == persona.id
                        })
                        .map((libro, i)=>{
                            if (i>0){
                                return ", " + libro.nombre
                            }
                            return libro.nombre
                        })} 
                    </p>
                </div>
            )
        })}
        </div>
    )
}





export default Listado;