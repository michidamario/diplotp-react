import { createStore, compose } from "redux";

const estadoInicial = {
  generos: [],
  libros: [],
  personas: []
 };

function reducer(state = estadoInicial, action) {
  switch (action.type) {
    case "EDITAR_PERSONA":
      return { ...state.persona, ...action.payload };
    case "LISTAR_PERSONAS":
      return { ...state.personas, ...action.payload };
    case "LISTAR_LIBROS":
      return { ...state.libros, ...action.payload } ;
    case "LISTAR_GENEROS":
        return { ...state.generos, ...action.payload };
    default:
      return state;
  }
}

let state = {};

const store = createStore(
  reducer,
  compose(window.devToolsExtension ? window.devToolsExtension() : (f) => f)
);

export default store;
