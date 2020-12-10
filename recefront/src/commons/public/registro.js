import {useState} from 'react';

import Page from '../commons/page'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './registro.css';
import {naxios,setJWT} from '../../utlts/Axios';
import { LOGIN_FETCHING, LOGIN_FETCHING_FAILED, LOGIN_SUCCESS } from '../../utlts/store/reducers/auth.reducer';
import {useStateContext} from '../../utlts/Context';
const Registro = ()=>{
    const [, dispatch] = useStateContext();
    let [redirect, setRedirect] = useState("");
    const [form, setForm] = useState({
        email:'',
        password:'',
        nombre:'',
        usuario:'',
        pais:''
      });
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
  const onClick = (e)=>{
    const {email,password,nombre,usuario,pais} = form;
      //registrandolo
      naxios.post(
        '/api/seguridad/signin',
         {email, password , nombre, usuario, pais}
      ).then(({data})=>{
        console.log({data});
      }).catch((err)=>{
        console.log(err);
      })
    //logeandolo

    dispatch({ type: LOGIN_FETCHING });
    naxios.post(
      '/api/seguridad/login',
       {email, password}
    ).then(({data})=>{
      dispatch({type:LOGIN_SUCCESS, payload:data});
      setJWT(data.jwt);
      setRedirect("/");
    }).catch((err)=>{
      dispatch({ type: LOGIN_FETCHING_FAILED });
      console.log(err);
      

    })
  }
    return(
        <Page headding="Registro" >
            
            <form className="regis">
                 <br></br>
                <label className="label">Nombre: </label>
                <br></br>
                <input type="text" className="formu" placeholder="Nombre" name="nombre" value={form.nombre} onChange={onChange}></input>
                <br></br>
                <label className="label">Correo Electronico: </label>
                <br></br>
                <input type="email" className="formu" placeholder="Correo Electronico" name="email"value={form.email} onChange={onChange}></input>
                <br></br>
                <label className="label">Usuario: </label>
                <br></br>
                <input type="text" className="formu" placeholder="Usuario" name="usuario"value={form.usuario} onChange={onChange}></input>
                <br></br>
                <label className="label">Contraseña: </label>
                <br></br>
                <input type="password" className="formu" placeholder="Contraseña" name="password" value={form.password} onChange={onChange}></input>
                <br></br>
                <label className="label">Pais: </label>
                <br></br>
                <input type="text" className="formu" placeholder="Pais" name="pais" value={form.pais} onChange={onChange}></input>
                <br></br>
                <br></br>
                <Button variant="warning" className="btningre" onClick={onClick} >Registrar</Button>

                <br></br>
                <br></br>
                <Button variant="warning" className="btningre" onClick={(e) => { setRedirect("/login") }}>Regresar</Button>
            </form>
        </Page>
    );
}

export default Registro;