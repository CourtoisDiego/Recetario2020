import {useState} from 'react';

import Page from '../commons/page'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import 'bootstrap/dist/css/bootstrap.min.css';
import './registro.css';

const Registro = ()=>{
    return(
        <Page headding="Registro" >
            
            <form className="regis">
                 <br></br>
                <label className="label">Nombre: </label>
                <br></br>
                <input type="text" className="formu" placeholder="Nombre"></input>
                <br></br>
                <label className="label">Correo Electronico: </label>
                <br></br>
                <input type="email" className="formu" placeholder="Correo Electronico"></input>
                <br></br>
                <label className="label">Usuario: </label>
                <br></br>
                <input type="text" className="formu" placeholder="Usuario"></input>
                <br></br>
                <label className="label">Contraseña: </label>
                <br></br>
                <input type="password" className="formu" placeholder="Contraseña"></input>
                <br></br>
                <label className="label">Pais: </label>
                <br></br>
                
                <Form.Control as="select" className="formu">
                <option>Honduras</option>
                <option>Estados Unidos</option>
                
                </Form.Control>
                <br></br>
                <br></br>
                <Button variant="warning" className="btningre" >Registrar</Button>
            </form>
        </Page>
    );
}

export default Registro;