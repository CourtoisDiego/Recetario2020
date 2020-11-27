
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import { AnimatedSwitch } from 'react-router-transition';
import { pageTransitions as transition, mapGlideStyles as mapStyles } from './utlts/Transitions';

import Login from '../src/commons/public/login'
import Registro from './commons/public/registro'

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
        </AnimatedSwitch>
      </section>
    </Router>
    </div>
  );
}

export default App;
