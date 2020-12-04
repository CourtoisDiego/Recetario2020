import Pizza from '../public/img/screen-4.jpg'
import '../private/getRecetas.css'
const getRecetas =()=> {
    const plato = [{"_id":1,"nombre":"Cereal con leche","Descripcion":"Literalmente cereal con leche","Dificultad":"Facil","Usuario":"Cr7"},
    {"_id":2,"nombre":"Cereal con leche","Descripcion":"Literalmente cereal con leche","Dificultad":"Facil","Usuario":"Cr7"},
    {"_id":3,"nombre":"Cereal con leche","Descripcion":"Literalmente cereal con leche","Dificultad":"Facil","Usuario":"Cr7"},
    {"_id":4,"nombre":"Cereal con leche","Descripcion":"Literalmente cereal con leche","Dificultad":"Facil","Usuario":"Cr7"},
    {"_id":5,"nombre":"Cereal con leche","Descripcion":"Literalmente cereal con leche","Dificultad":"Facil","Usuario":"Cr7"}];
    

        const listElements = plato.map((o)=>{
        return (<li key={o._id}><img className="Pizza"src={Pizza}/>
        <div className="nombre">{o.nombre}</div>
        <div className="descripcion">{o.Descripcion}</div>

        <div className="difi">{o.Dificultad}</div>

        </li>);
         })

        return(

            <ul className="productoList">
            {listElements}
            </ul>         
        );

}

export default getRecetas;