import Page from '../commons/page'
import {useStateContext} from '../../utlts/Context';
import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Redirect} from 'react-router-dom';
import {paxios} from '../../utlts/Axios';
import './NReceta.css'
import {useHistory} from "react-router-dom";
const Newreceta = ()=>{
  const history = useHistory();
  let [redirect, setRedirect] = useState("");
  const [form, setForm] = useState({
    nombre:'',
    descripcion:'',
    ingredientes:'',
    pasos:'',
    dificultad:''

  });
  if (redirect !==""){
    return (<Redirect to={redirect}></Redirect>);
  }
  const onClick = (e)=>{
    const {nombre,descripcion,ingredientes,pasos,dificultad} = form;
      //registrandolo
      paxios.post(
        '/api/recetas/new',
         {nombre,descripcion,ingredientes,pasos,dificultad}
      ).then(({data})=>{
        console.log({data});
        alert("Guardado Correctamente");
        history.push("/usuario");
        
      }).catch((err)=>{
        console.log(err);
      })
    
  }
  const onChange = (e)=>{
    const {name,value} = e.target;
    setForm({
      
      ...form,
      [name]:value,
    });
  }
    return (
        <Page headding="Nueva receta" footer="true">
           <form className="regis" >
           <br></br>
                <label className="label">Nombre de la receta: </label>
                <br></br>
                <input type="text" className="formu" placeholder="Nombre de la receta" name="nombre" value={form.nombre} onChange={onChange}></input>
                <br></br>
                <label className="label">Descripcion:  </label>
                <br></br>
                <textarea type="text" className="formu" placeholder="Descripcion..." name="descripcion"value={form.descripcion} onChange={onChange}></textarea>
                <br></br>
                <label className="label">Ingredientes:  </label>
                <br></br>
                <span>NOTA! Escriba los ingredientes separados por *, Ejemplo: Agua * Azucar *</span>
                <br></br>
                <textarea type="text" className="formu" placeholder="Ingredientes" name="ingredientes"value={form.ingredientes} onChange={onChange}></textarea>
                <br></br>
                <label className="label">Pasos:  </label>
                <br></br>
                <span>NOTA! Escriba los pasos separados por *, Ejemplo: 1.Hervir * 2.Luego servir *</span>
                <textarea type="text" className="formu" placeholder="Pasos" name="pasos"value={form.pasos} onChange={onChange}></textarea>
                <br></br>
                <label className="label">Pasos:  </label>
                <br></br>
                <input type="text" className="formu" placeholder="dificultad" name="dificultad"value={form.dificultad} onChange={onChange}></input>
                <br></br>
                <br></br>
                <Button variant="warning" className="btningre" onClick={onClick} >Registrar</Button>
                
           </form>
           <br></br>
           <br/>
           <br></br>
        </Page>
    );
}
export default Newreceta;