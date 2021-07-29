import { createStore } from 'redux';

const estadoInicial = {
  personaData: {}
};

function personaReducer(state = estadoInicial, action) {
  switch (action.type) {
    case 'EDITAR_PERSONA':
      return {...state.persona, ...action.payload};
    default:
      return state;
  }
}

let state = {};

export default createStore(personaReducer);