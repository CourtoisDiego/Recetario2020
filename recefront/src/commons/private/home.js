import Page from '../commons/page'
import './home.css'
const Home = ()=>{
    const plato = [{"_id":1,"nombre":"Cereal con leche","Descripcion":"Literalmente cereal con leche","Dificultad":"Facil","Usuario":"Cr7"},
                   {"_id":2,"nombre":"Cereal con leche","Descripcion":"Literalmente cereal con leche","Dificultad":"Facil","Usuario":"Cr7"},
                   {"_id":1,"nombre":"Cereal con leche","Descripcion":"Literalmente cereal con leche","Dificultad":"Facil","Usuario":"Cr7"},
                   {"_id":1,"nombre":"Cereal con leche","Descripcion":"Literalmente cereal con leche","Dificultad":"Facil","Usuario":"Cr7"},
                   {"_id":1,"nombre":"Cereal con leche","Descripcion":"Literalmente cereal con leche","Dificultad":"Facil","Usuario":"Cr7"}];
                   
    
  const listElements = plato.map((o)=>{
    return (<li key={o._id}>{o.nombre} <span>{o.Dificultad}</span></li>);
  })
    return (
        
        <Page headding="Recetario" footer="true">
            
            
            <ul className="productoList">
                 {listElements}
            </ul>        
           
            
        </Page>
    );
}
export default Home;