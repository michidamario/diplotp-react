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
import FormularioG from './components/FormularioGenero';
import Listado from './components/ListadoDePersonas';
import BookForm from './components/FormularioLibro';

function App() {
    return (
        <Router>
                <Nav></Nav>
                <main>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route><Route exact path="/persona" component={Persona} />
                    <Route exact path="/persona/formulario" component={Formulario} />
                    <Route exact path="/persona/listado" component={Listado}/>
                    <Route exact path="/libro" component={Libro} />
                    <Route exact path="/libro/formulario" component={BookForm} />
                    <Route exact path="/genero" component={Genero} />
                    <Route exact path="/genero/formulario" component={FormularioG} />
                
                </Switch>
                </main>
                <Footer></Footer>
        </Router>
    );
}
export default App;
