import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Persona from "./components/Persona";

ReactDOM.render(
    <Router>
      <Route exact path = "/" component = {App} />
      <Route path = "/persona" component = {Persona} />
    </Router>,
  document.getElementById('root')
);