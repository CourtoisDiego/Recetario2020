import Page from '../commons/page'
import GetRecetas from '../private/getRecetas'
import Perfil from '../private/perfil'
import {useStateContext} from '../../utlts/Context'

const Usuario = ()=>{
    const [{auth,rece}, dispatch] = useStateContext();
    
    console.log(auth.user.id);
    return (
        <Page headding="Usuario" footer="true">
            
            
            
            
        </Page>
    );
}
export default Usuario;