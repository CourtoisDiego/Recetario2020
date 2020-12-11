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
                    <li><NavLink to="/" className="navlink"><FontAwesomeIcon icon={faHome} /></NavLink></li>
                    <li><NavLink to="/nuevaReceta" className="navlink"><FontAwesomeIcon icon={faPlusCircle}/></NavLink></li>
                    <li><NavLink to="/usuario" className="navlink"><FontAwesomeIcon icon={faUser} /></NavLink></li>
                    <li><FontAwesomeIcon icon={faDoorOpen} onClick={logout}/></li>
                    

                </ul>
            </nav>

        </footer>
        
    );
}
export default Nav;