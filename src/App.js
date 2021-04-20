import './App.css';
import Login from './Components/Login'
import Ayuda from './Components/Ayuda'
import Contacto from './Components/Contacto'
import Nosotros from './Components/Nosotros'
import Servicios from './Components/Servicios'
import Ubicacion from './Components/Ubicacion'
import Carrusel from './Components/Carrusel'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">

        <Router>

          <div className="container mt-3" >
          <div className="row justify-content-center align-items-center minh-100" > 
            <div className="btn-group" >
              <Link to="/Carpeta_Proyecto" className="btn btn-primary" >Inicio</Link>
              <Link to="/Carpeta_Proyecto/Login" className="btn btn-primary">Login</Link>
              <Link to="/Carpeta_Proyecto/Servicios" className="btn btn-primary">Servicios</Link>
              <Link to="/Carpeta_Proyecto/Nosotros" className="btn btn-primary">Nosotros</Link>
              <Link to="/Carpeta_Proyecto/Ubicacion" className="btn btn-primary">Ubicacion</Link>
              <Link to="/Carpeta_Proyecto/Contacto" className="btn btn-primary">Contacto</Link>
              <Link to="/Carpeta_Proyecto/Ayuda" className="btn btn-primary">Ayuda</Link>
            </div>
            </div>

            <Switch>

              <Route path="/Carpeta_Proyecto" exact >
                <Carrusel></Carrusel>
              </Route>

              <Route path="/Carpeta_Proyecto/Login" >
                <Login />
              </Route>

              <Route path="/Carpeta_Proyecto/Ayuda" >
                <Ayuda />
              </Route>

              <Route path="/Carpeta_Proyecto/Contacto" >
                <Contacto />
              </Route>

              <Route path="/Carpeta_Proyecto/Servicios" >
                <Servicios />
              </Route>

              <Route path="/Carpeta_Proyecto/Nosotros" >
                <Nosotros />
              </Route>

              <Route path="/Carpeta_Proyecto/Ubicacion" >
                <Ubicacion />
              </Route>

            </Switch>
          </div>
        </Router>

    </div>
  );
}

export default App;
