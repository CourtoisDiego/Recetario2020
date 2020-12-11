import Page from '../commons/page'
import {useStateContext} from '../../utlts/Context';
import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Redirect} from 'react-router-dom';
const Newreceta = ()=>{
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
   
      return(<Redirect to="/"></Redirect>)

    }
  
    return (
        <Page headding="Nueva receta" footer="true">
            <form className="regis">
                 <br></br>
                <label className="label">Nombre de la receta: </label>
                <br></br>
                <input type="text" className="formu" placeholder="Nombre" name="nombre" value={form.nombre} onChange={onChange}></input>
                <br></br>
                <label className="label">Descripcion:  </label>
                <br></br>
                <input type="text" className="formu" placeholder="Correo Electronico" name="email"value={form.email} onChange={onChange}></input>
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
            <br></br>
            <br/>
            <br></br>
        </Page>
    );
}
export default Newreceta;