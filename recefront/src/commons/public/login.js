import '../public/Login.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import {Redirect,Link,useHistory, useLocation} from 'react-router-dom';
import {useStateContext} from '../../utlts/Context';

import {naxios as axios,setJWT} from '../../utlts/Axios';


import { LOGIN_FETCHING, LOGIN_FETCHING_FAILED, LOGIN_SUCCESS } from '../../utlts/store/reducers/auth.reducer';

const  Login=()=>{


  const [form, setForm] = useState({
    email:'',
    password:''
  });
  const [, dispatch] = useStateContext();
  const location = useLocation();
  const routeHistory = useHistory();
  

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
  let { from } = location.state || { from: { pathname: "/usuario" } };
  const onLogin = (e) =>{
    const {email,password} = form;
    //ACA VA AXIOS

    dispatch({ type: LOGIN_FETCHING });
    axios.post(
      '/api/seguridad/login',
       {email, password}
    ).then(({data})=>{
      dispatch({type:LOGIN_SUCCESS, payload:data});
      setJWT(data.jwt);
      routeHistory.replace(from);
    }).catch((err)=>{
      dispatch({ type: LOGIN_FETCHING_FAILED });
      console.log(err);
      

    })
    
    
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

      <Button variant="warning" className="btn"  onClick={onLogin }>Ingresar</Button>
      <div className="error"></div>
      <br></br>
      <br></br>
      
      <span onClick={(e) => { setRedirect("/registro") } } className="a">Registrarme</span>
      
    </form>
  </div>
  );
}
export default Login;