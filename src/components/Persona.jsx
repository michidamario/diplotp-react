import React, { useState } from "react";
import axios from "axios";

const Persona = ()=>{
    const [nombre, setName]= useState("");
    const [apellido, setLastName]= useState("");
    const [alias, setAlias] = useState("");
    const [email, setEmail]= useState("");
    
    const handleNameChange=(e)=>{
        setName(e.target.value);
    }

    const handleSubmit =async (e)=>{
        e.preventDefault();
        const data = {
            nombre, 
            apellido,
            alias,
            email
        }
        console.log(data);
        await axios.post("http://localhost:8080/persona", data);
    }

    const handleLastNameChange =(e)=>{
        setLastName(e.target.value);
    }

    const handleAliasChange =(e)=>{
        setAlias(e.target.value);
    }

    const handleEmailChange =(e)=>{
        setEmail(e.target.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Nombre: </label>
                <input onChange ={handleNameChange} type="text"></input>
                <label>Apellido: </label>
                <input onChange ={handleLastNameChange}type="text"></input>
                <label>Alias: </label>
                <input onChange ={handleAliasChange}type="text"></input>
                <label>Email: </label>
                <input onChange ={handleEmailChange}type="text"></input>
                <button type="submit">Registrar</button>
            </form>
        </div>
    )
}




export default Persona;