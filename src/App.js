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
import ListadoLibros from './components/ListadoLibros';
import BookForm from './components/FormularioLibro';
import swal from  'sweetalert';
import FormularioGm from './components/FormularioGeneroM';
import FormularioGl from './components/FormularioGeneroL';

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
                    <Route exact path="/libro/listado" component={ListadoLibros} />
                    <Route exact path="/genero" component={Genero} />
                    <Route exact path="/genero/formulario" component={FormularioG} /> 
                    <Route exact path="/genero/formulariom" component={FormularioGm} />
                    <Route exact path="/genero/formulariol" component={FormularioGl} />
                </Switch>
                </main>
                <Footer></Footer>
        </Router>
    );
}
export default App;
