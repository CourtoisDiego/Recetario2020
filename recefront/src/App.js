
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import {StateProvider} from './utlts/Context';
import mainReducer from './utlts/store/store';
import PrivateRoute from './utlts/PrivateRoute';
import Splash from '../src/commons/public/Splash';

import { AnimatedSwitch } from 'react-router-transition';
import { pageTransitions as transition, mapGlideStyles as mapStyles } from './utlts/Transitions';

import Login from '../src/commons/public/login'
import Registro from './commons/public/registro'
import Home from './commons/private/home'
import NewReceta from './commons/private/Newreceta'
import Usuario from './commons/private/usuario'
import Buscar from './commons/private/buscar'

import NotFound from './commons/public/NotFound';


function App() {
  let appState = mainReducer();
  return (
    <StateProvider initialState={appState} reducer = {mainReducer}>
      <div className="App">
        <Router>
        <Splash>
          <AnimatedSwitch
            {...transition}
            mapStyles={mapStyles}
            className="switch-wrapper"
          >

            <Route path="/login" exact component={Login} />
            <Route path="/registro" exact component={Registro} />
            <Route path="/" exact component={Home} />
            <Route path="/nuevaReceta" exact component={NewReceta} />
            <Route path="/usuario" exact component={Usuario} />
            <Route path="/buscar" exact component={Buscar} />
            <Route path="*" component={NotFound}></Route>
          </AnimatedSwitch>
          </Splash>
      </Router>
      </div>
    </StateProvider>
  );
}

export default App;
