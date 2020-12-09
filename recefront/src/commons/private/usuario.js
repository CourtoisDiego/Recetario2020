import Page from '../commons/page'
import GetRecetas from '../private/getRecetas'
import Perfil from '../private/perfil'
import {useStateContext} from '../../utlts/Context'
const Usuario = ()=>{
    return (
        <Page headding="Usuario" footer="true">
            <Perfil></Perfil>
            <GetRecetas></GetRecetas>
            
            
        </Page>
    );
}
export default Usuario;