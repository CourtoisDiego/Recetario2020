
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import { AnimatedSwitch } from 'react-router-transition';
import { pageTransitions as transition, mapGlideStyles as mapStyles } from './utlts/Transitions';

import Login from '../src/commons/public/login'
import Registro from './commons/public/registro'
import Home from './commons/private/home'
import NewReceta from './commons/private/Newreceta'
import Usuario from './commons/private/usuario'
import Buscar from './commons/private/buscar'

function App() {
  return (
    <div className="App">
      <Router>
      <section>
        <AnimatedSwitch
          {...transition}
          mapStyles={mapStyles}
          className="switch-wrapper"
        >

          <Route path="/" exact component={Login} />
          <Route path="/registro" exact component={Registro} />
          <Route path="/home" exact component={Home} />
          <Route path="/nuevaReceta" exact component={NewReceta} />
          <Route path="/usuario" exact component={Usuario} />
          <Route path="/buscar" exact component={Buscar} />
        </AnimatedSwitch>
      </section>
    </Router>
    </div>
  );
}

export default App;
