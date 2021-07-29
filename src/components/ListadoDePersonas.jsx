import React, {useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import swal from  'sweetalert';
import { useDispatch, useSelector } from 'react-redux';


const Listado= ()=>{
    const [personas, setPersonas] = useState([]);
    const [libros, setLibros] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const contador = useSelector((state) => state.numero), 
        dispatch = useDispatch();

    const handleDelete=async (personaId)=>{
        try{
            await axios.delete("http://localhost:8080/persona/"+ personaId)
            swal({
                text: "Registro eliminado correctamente.",
                icon: "success"
                });   
                window.location.reload();         
        }
        catch(e){
            
            swal({
                text: "No se puede eliminar, tiene libros asociados.",
                icon: "warning"
                });
        }
    }


    const handleEdit= (personaId)=>{
        const personaAEditar = personas.find(persona=>persona.id == personaId);
        console.log(personaAEditar);
    }

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
                    <button onClick={() => dispatch({ type: 'EDITAR_PERSONA', payload: persona })} className="btn btn-warning"> Editar</button>
                    <button onClick={()=>{handleDelete(persona.id)}} className="btn btn-danger">Borrar</button>
                </div>
            )
        })}
        </div>
    )
}


// <button onClick={()=>handleEdit(persona.id)} className="btn btn-warning"> Editar</button>


export default Listado;