import Page from '../commons/page'
import {useStateContext} from '../../utlts/Context';
import {useState ,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Redirect} from 'react-router-dom';
import {paxios} from '../../utlts/Axios';
import {useHistory} from "react-router-dom";
import './NReceta.css'
import Gordon from '../public/img/gordon.jpg'

import {USER_SET_CURRENT} from '../../utlts/store/reducers/user.reducer'
const Newreceta = ()=>{
  const [ {rece}, ] = useStateContext();
  const [ {user}, dispatch] = useStateContext();
  const [form, setForm] = useState({
    nombre:'',
    descripcion:'',
    fingre:[],
    fpasos:[],
    dificultad:'',
    usuario:[],
    
  });
  const history = useHistory();
    
    useEffect(
      ()=>{
        
        const  id  = rece.currentId;
        paxios.get(`/api/recetas/one/${id}`)
          .then(({data})=>{
              console.log(data);
              setForm(data);
              console.log(form.usuario._id);
          })
          .catch((ex)=>{
            console.log(ex);
            alert("Algo salio mal.");
            history.push("/");
          });
      }
      ,[]
    );

    const listIngre = form.fingre.map((ingre)=>{
      return(
        
          
          <li key={ingre}>{ingre}</li>
          
        
      )
    })

    const listPasos = form.fpasos.map((pa)=>{
      return(

        <li key={pa}>{pa}</li>
      )
    })
  
    return (
        <Page headding={form.nombre.substr(0,20) + "..."} footer="true">
           <form className="regis" >
                <br></br>
                <div className="pp" onClick={() => { dispatch({ type: USER_SET_CURRENT, payload:{_id:form.usuario._id}}); history.push("/ThisUser");}}><img src={Gordon}/></div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                
                <label className="label">Descripcion:  </label>
                <br></br>
                <textarea type="text" className="formu" placeholder="Descripcion..." name="descripcion"value={form.descripcion} readOnly={true}></textarea>
                <br></br>
                <label className="label">Ingredientes:  </label>
                <br></br>
                <ul>
                  {listIngre}
                </ul>
                
                <label className="label">Pasos:  </label>
                <br></br>
                <ol>
                  {listPasos}
                </ol>
                
                <label className="label">Dificultad:  </label>
                <br></br>
                <input type="text" className="formu" placeholder="dificultad" name="dificultad"value={form.dificultad} readOnly={true}></input>
                
                
                
           </form>
        </Page>
    );
  }
  
export default Newreceta;