import './buscar.css'
import Page from '../commons/page'
import GetRecetas from '../private/getRecetas'
const Buscar = ()=>{
    
    return(
        <Page headding="¿Buscando algo?" footer="true">
        <form className="cont">
         <input type="text" placeholder="Buscar" className="txtbuscar"></input>
         </form>
         <br></br>
         <br></br>
         <GetRecetas></GetRecetas>
        </Page>
    );
}

export default Buscar;