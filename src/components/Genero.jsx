import "./App.css";
import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const Genero = () => {
    return (
      <>
        <Nav></Nav>
        <div class="body-container">
          <div class="btn-container">
            <button type="button" class="btn btn-primary">Formulario</button>
            <button type="button" class="btn btn-primary">Listado</button>
          </div>
        </div>
        <Footer></Footer>
      </>
    );
  };

export default Genero;
