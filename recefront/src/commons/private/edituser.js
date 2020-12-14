import {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom'
import Page from '../commons/page'
import Button from 'react-bootstrap/Button';

import {Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../commons/public/registro.css';
import {paxios} from '../../utlts/Axios';

import {useStateContext} from '../../utlts/Context';
const EditUser = ()=>{
    const history = useHistory();
    const [, dispatch] = useStateContext();
    const [{auth},] = useStateContext();
    let [redirect, setRedirect] = useState("");
    const [form, setForm] = useState({
        email:'',
        nombre:'',
        usuario:'',
        pais:''
      });
      const onChange = (e)=>{
        const {name,value} = e.target;
        setForm({
          
          ...form,
          [name]:value,
        });
      }
      useEffect(()=>{
        paxios.get(`/api/usuarios/profile/${auth.user._id}`)
          .then(({data})=>{
              console.log(data);
              setForm(data);
              
          })
          .catch((ex)=>{
            console.log(ex);
            alert("Algo salio mal.");
            
          });
      },[]);
  if (redirect !==""){
    return (<Redirect to={redirect}></Redirect>);
  }
  console.log(auth.user._id);
  let _id = auth.user._id;
  const onClick = (e)=>{
    const {nombre,usuario,pais} = form;
      //Modificandolo
      paxios.put(
        '/api/usuarios/upd',
         { nombre, usuario, pais,_id}
      ).then(({data})=>{
        console.log({data});
        history.push("/usuario");
      }).catch((err)=>{
        console.log(err);
      })
    

  }
  
    return(
        <Page headding="Registro" footer="true" >
            
            <form className="regis">
                 <br></br>
                <label className="label">Nombre: </label>
                <br></br>
                <input type="text" className="formu" placeholder="Nombre" name="nombre" value={form.nombre} onChange={onChange}></input>
                <br></br>
                <label className="label">Correo Electronico: </label>
                <br></br>
                <input type="email" className="formu" placeholder="Correo Electronico" name="email"value={form.email} onChange={onChange} readOnly={true}></input>
                <br></br>
                <label className="label">Usuario: </label>
                <br></br>
                <input type="text" className="formu" placeholder="Usuario" name="usuario"value={form.usuario} onChange={onChange}></input>
                <br></br>
                <label className="label">Pais: </label>
                <br></br>
                <input type="text" className="formu" placeholder="Pais" name="pais" value={form.pais} onChange={onChange}></input>
                <br></br>
                <br></br>
                <Button variant="warning" className="btningre" onClick={onClick} >Guardar Cambios</Button>

                <br></br>
                <br></br>
                
            </form>
        </Page>
    );
}

export default EditUser;