//import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import {Redirect} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome,faPlusCircle, faUser,faSearch} from '@fortawesome/free-solid-svg-icons'
import './nav.css'
import {NavLink} from 'react-router-dom'


const Nav = ()=>{
    let [redirect, setRedirect] = useState("");
    if (redirect !==""){
      return (<Redirect to={redirect}></Redirect>);
    }
  
    return (
        <footer>
            <nav>
                <ul >
                    <li><NavLink to="/" className="navlink"><FontAwesomeIcon icon={faHome} /></NavLink></li>
                    <li><NavLink to="/buscar" className="navlink"><FontAwesomeIcon icon={faSearch} /></NavLink></li>
                    <li><NavLink to="/nuevaReceta" className="navlink"><FontAwesomeIcon icon={faPlusCircle}/></NavLink></li>
                    <li><NavLink to="/usuario" className="navlink"><FontAwesomeIcon icon={faUser} /></NavLink></li>
                    

                </ul>
            </nav>

        </footer>
        
    );
}
export default Nav;