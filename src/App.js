import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Persona from './components/Persona';
import Libro from './components/Libro';
import Genero from './components/Genero';
import Formulario from './components/FormularioPersonas';


function App() {
    return (
            <Router>
                <Route exact path="/" component={Home} />
                <Route exact path="/persona" component={Persona} />
                <Route path="/libro" component={Libro} />
                <Route path="/genero" component={Genero} />
                <Route path="/persona/formulario" component={Formulario}/>
            </Router>
    );
}
export default App;
