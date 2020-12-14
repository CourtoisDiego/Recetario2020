//import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import {Redirect} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome,faPlusCircle, faUser,faDoorOpen} from '@fortawesome/free-solid-svg-icons'
import './nav.css'
import {NavLink} from 'react-router-dom'
import {useHistory} from "react-router-dom";
import { LOGOUT } from '../../utlts/store/reducers/auth.reducer';
import {useStateContext} from '../../utlts/Context';

const Nav = ()=>{
    const history = useHistory();
    const [, dispatch] = useStateContext();
    let [redirect, setRedirect] = useState("");
    if (redirect !==""){
      return (<Redirect to={redirect}></Redirect>);
    }
    const logout = () =>{
        if (window.confirm('¿Desea cerrar sesion?')) {
            dispatch([LOGOUT]);
            localStorage.clear("store_auth");
            history.push("/login");

          } else {
            
            console.log('No sales');
          }
    }
    return (
        <footer>
            <nav>
                <ul >
                    <li onClick={()=>{history.push("/")}}><FontAwesomeIcon icon={faHome} /></li>
                    <li onClick={()=>{history.push("/nuevaReceta")}}><FontAwesomeIcon icon={faPlusCircle}/></li>
                    <li onClick={()=>{history.push("/usuario")}}><FontAwesomeIcon icon={faUser} /></li>
                    <li><FontAwesomeIcon icon={faDoorOpen} onClick={logout}/></li>
                    

                </ul>
            </nav>

        </footer>
        
    );
}
export default Nav;