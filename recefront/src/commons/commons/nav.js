//import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import {Redirect,Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome,faPlusCircle, faUser,faSearch} from '@fortawesome/free-solid-svg-icons'
import './nav.css'


const Nav = ()=>{
    let [redirect, setRedirect] = useState("");
    if (redirect !==""){
      return (<Redirect to={redirect}></Redirect>);
    }
  
    return (
        <footer>
            <nav>
                <ul >
                    <li onClick={(e) => { setRedirect("/home") } }><FontAwesomeIcon icon={faHome} /></li>
                    <li onClick={(e) => { setRedirect("/buscar") } }><FontAwesomeIcon icon={faSearch} /></li>
                    <li onClick={(e) => { setRedirect("/nuevaReceta") } } className="medio"><FontAwesomeIcon icon={faPlusCircle}/></li>
                    <li onClick={(e) => { setRedirect("/usuario") } }><FontAwesomeIcon icon={faUser} /></li>

                </ul>
            </nav>

        </footer>
        
    );
}
export default Nav;