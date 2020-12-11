import './perfil.css'
import Gordon from '../public/img/gordon.jpg'

const Perfil = ()=>{
    const usuario = [{"_id":1,"Nombre":"Cristiano Ronaldo","Usuario":"CR7","Pais":"Portugal"}];
    const usuarioView = usuario.map((o)=>{
        return (<div className="li" key={o._id}><div className="pp"><img src={Gordon}/></div>
        <div className="Nombre">{o.Nombre}</div>
        <div className="Usuario">{o.Usuario}</div>

        <div className="Pais">{o.Pais}</div>

        </div>);
        })
   return (
       
        <div className="viewPerfil">
        {usuarioView}
        </div>         
        
   );
}

export default Perfil;