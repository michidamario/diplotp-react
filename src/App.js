import {
    BrowserRouter as Router, Route, Switch, Link, NavLink
} from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import Persona from './components/Persona';
import Libro from './components/Libro';
import Genero from './components/Genero';
import Formulario from './components/FormularioPersonas';

function App() {
    return (
        <Router>
            <div>
                <Nav></Nav>

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route><Route exact path="/persona" component={Persona} />
                    <Route exact path="/persona/formulario" component={Formulario} />
                    <Route exact path="/libro" component={Libro} />
                    <Route exact path="/genero" component={Genero} />
                </Switch>

                <Footer></Footer>
            </div>
        </Router>
    );
}
export default App;
