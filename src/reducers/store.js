import { createStore, compose } from "redux";

const estadoInicial = { };

function personaReducer(state = estadoInicial, action) {
  switch (action.type) {
    case "EDITAR_PERSONA":
      return { ...state.persona, ...action.payload };
    case "LISTAR_PERSONAS":
      return { ...state.personas, ...action.payload };
    default:
      return state;
  }
}

let state = {};

const store = createStore(
  personaReducer,
  compose(window.devToolsExtension ? window.devToolsExtension() : (f) => f)
);

export default store;
