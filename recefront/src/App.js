import logo from './logo.svg';
import './App.css';
import './Login.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
function Prueba(){
  return(
  <div className="bg">
     <h1>Inicio de sesión</h1>
    <form className="f">
      
      <input type="email" placeholder="Correo electronico" className="campos"></input>
      <br></br>
      <br></br>
      <input type="password" placeholder="Contraseña" className="campos"></input>
      <br></br>
      <a href="www.google.com">¿Olvidaste tu contraseña?</a>
      <br></br>
      <br></br>

      <Button variant="warning" className="btn">Ingresar</Button>

      <br></br>
      <br></br>
      <a href="www.google.com">Registrarmee</a>
      
    </form>
  </div>
  );
}

function App() {
  return (
    <div className="App">
      <Prueba></Prueba>
    </div>
  );
}

export default App;
