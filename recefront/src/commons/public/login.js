import '../public/Login.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import {Redirect,Link} from 'react-router-dom';
const  Login=()=>{


  const [form, setForm] = useState({
    email:'',
    password:''
  });

  let [redirect, setRedirect] = useState("");
  if (redirect !==""){
    return (<Redirect to={redirect}></Redirect>);
  }

  const onChange = (e)=>{
    const {name,value} = e.target;
    setForm({
      
      ...form,
      [name]:value,
    });
  }
  const onLogin = (e) =>{
    const {email,password} = form;
    //ACA VA AXIOS
    console.log(email);
    console.log(password);
    
  }
  return(
  <div className="bg">
     <h1>Inicio de sesión</h1>
    <form className="f">
      
      <input type="email" placeholder="Correo electronico" className="campos" name="email" value={form.email} onChange={onChange}></input>
      <br></br>
      <br></br>
      <input type="password" placeholder="Contraseña" className="campos" name="password" value={form.password} onChange={onChange}></input>
      <br></br>
      <br></br>

      <Button variant="warning" className="btn"  onClick={onLogin, (e) => { setRedirect("/home") } }>Ingresar</Button>

      <br></br>
      <br></br>
      
      <Link onClick={(e) => { setRedirect("/registro") } } className="a">Registrarme</Link>
      
    </form>
  </div>
  );
}
export default Login;