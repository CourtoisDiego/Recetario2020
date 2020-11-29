import Page from '../commons/page'
import GetRecetas from '../private/getRecetas'
const Usuario = ()=>{
    return (
        <Page headding="Usuario" footer="true">
            <GetRecetas></GetRecetas>
            
        </Page>
    );
}
export default Usuario;