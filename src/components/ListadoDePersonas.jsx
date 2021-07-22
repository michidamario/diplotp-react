import React from "react";
import { Link } from "react-router-dom";

const Listado= ({personas})=>{
    console.log(personas);
    return(
        <>
        <Link to="/persona/formulario">FORMULARIO</Link>
        {personas.map(persona=>{
            return(
                <div>
                    <p>{persona.nombre}</p>
                    <p>{persona.apellido}</p>
                    <p>{persona.alias}</p>
                    <p>{persona.email}</p>
                </div>
            )
        })}
        </>
    )
}





export default Listado;