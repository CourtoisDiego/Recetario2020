import Page from '../commons/page'
import './home.css'
import GetRecetas from '../private/getRecetas'

/*<div clasName="descrip">{o.Descripcion}</div>
  <div className="difi">{o.Dificultad}</div>
  <div className="user">{o.Usuario}</div>*/
const Home = ()=>{
    
 
    return (
        
        <Page headding="Recetario" footer="true">
            
            <GetRecetas></GetRecetas>
          
           
            
        </Page>
    );
}
export default Home;