import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Nav from "./Nav";
import Footer from "./Footer";
import Listado from "./ListadoDePersonas";
import Formulario from "./FormularioPersonas";

const Persona = () => {
    const[personas, setPersonas]= useState([]);
    useEffect(async ()=>{
       const response=await axios.get("http://localhost:8080/persona");
        setPersonas(response.data);
    }, [])

  return (
    <>
      <Nav></Nav>
      {personas &&(
         <Listado personas={personas}></Listado> 
      )}
      <Footer></Footer>
    </>
  );
};

export default Persona;
