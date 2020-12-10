import Page from '../commons/page'
import GetRecetas from '../private/getRecetas'
import Perfil from '../private/perfil'
import {useStateContext} from '../../utlts/Context'
import { RECE_RESET} from '../../utlts/store/reducers/rece.reducer';
import { useEffect } from 'react';
const Usuario = ()=>{
    const [{auth,rece}, dispatch] = useStateContext();
    
    console.log(auth.user.id);
    return (
        <Page headding="Usuario" footer="true">
            <Perfil _id={auth.user._id}></Perfil>
            <GetRecetas _id={auth.user._id}></GetRecetas>
            
            
        </Page>
    );
}
export default Usuario;