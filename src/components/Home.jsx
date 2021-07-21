import "./App.css";
import React from "react";
import Nav from "./Nav";
import Acciones from "./Acciones";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <header>
        <div>
          <h1>
            WHERES'S MY BO
            <img
              id="book-icon"
              src="https://cdn.icon-icons.com/icons2/809/PNG/512/book_dictionary_icon-icons.com_66121.png"
            ></img>
            K
          </h1>
        </div>
      </header>
      <Acciones></Acciones>
      <Footer></Footer>
    </div>
  );
}

export default App;
