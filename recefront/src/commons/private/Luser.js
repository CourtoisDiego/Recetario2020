import Page from '../commons/page'

import {useStateContext} from '../../utlts/Context'
import Gordon from '../public/img/gordon.jpg'
import {paxios} from '../../utlts/Axios';
import {useState ,useEffect} from 'react';
import {useHistory} from "react-router-dom";
import {  RECE_SET_CURRENT} from '../../utlts/store/reducers/rece.reducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTimes, faXRay} from '@fortawesome/free-solid-svg-icons'
import { useRef } from 'react';

import Pizza from '../public/img/screen-4.jpg'
import InfiniteScroll from 'react-infinite-scroller';
import './perfil.css'
const LocalUser = ()=>{
    const [{auth},] = useStateContext();
    const [{rece},dispatch]= useStateContext();
    const [localrece,setLocalRece]=useState({
      rslt:[]
    });
  
    console.log(auth.user._id);
    const [form, setForm] = useState({
        nombre:'',
        usuario:'',
        pais:'',
      });
      useEffect(()=>{
        paxios.get(`/api/usuarios/profile/${auth.user._id}`)
      .then(({data})=>{
          console.log(data);
          setForm(data);
      })
      .catch((ex)=>{
        console.log(ex);
        alert("Algo salio mal.");
        history.push("/");
      });
      //Get recetas
      paxios.get(`/api/recetas/facet/${auth.user._id}`)
      .then(({data})=>{
          console.log(data);
          setLocalRece(data);
      })
      .catch((ex)=>{
        console.log(ex);
        alert("Algo salio mal.");
        history.push("/");
      });

      },[]);
      
   
    //Recetas
      
    const history = useHistory();
    const listElements = localrece.rslt.map((o)=>{
        let styles;
        switch (o.dificultad) {
            case "Dificil":
                styles= {
                    backgroundColor:"#E74C3C"
                  };
                break;
            case "Intermedio":
                styles= {
                    backgroundColor:"#F39C12"
                  };
                break;
            case "Facil":
                styles= {
                    backgroundColor:"#27AE60"
                  };
                  break;
            default:
                styles= {
                    backgroundColor:"#F39C12"
                  };
                break;}
        return (<div key={o._id} className="va">
        <img className="Pizza"src={Pizza}  onClick={() => { dispatch({ type: RECE_SET_CURRENT, payload:{_id:o._id}}); history.push("/UnaReceta");}}/>
        <div className="equis" onClick={ ()=>{
           if (window.confirm('¿Desea borrar esta receta?')) {
            paxios.delete(`/api/recetas/del/${o._id}`)
            .then(({data})=>{
                console.log(data);
                window.location.reload();
            })
            .catch((ex)=>{
              console.log(ex);
              alert("Algo salio mal.");
              history.push("/");
            });

          }
            
        }}><FontAwesomeIcon icon={faTimes}/></div>
        <div className="nombre">{o.nombre}</div>
        <div className="descripcion">{o.descripcion.substr(0,20) + "..."}</div>
        <div className="difi" style={styles}>{o.dificultad}</div>
        </div>);
            });
    return (
        <Page headding={form.nombre} footer="true">
            <div className="viewPerfil">
            <div className="pp"><img src={Gordon}/></div>
            <div className="Usuario">{form.usuario}</div>
            <div className="Pais">{form.pais}</div>
            </div> 
            <br/>
            
            <div className="ediper" onClick={() =>{ history.push("/EditUser");}}>Editar perfil</div>
            
            <section className="productoList" >
            
                  {listElements}
        
             </section>
            <br>
            </br>
            <br/>
            <br>
            </br>

            
            
            
        </Page>
    );
}
export default LocalUser;