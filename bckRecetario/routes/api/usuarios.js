let express = require('express');
let router = express.Router();

const UsuariosModelClass = require('../../models/usuarios.model');
const mdbUsuariosModel = new UsuariosModelClass();
//Obtiene todos los usuarios por nombre
router.post('/AllByName',async(req,res)=>{
    try{
        let {nombre} = req.body;
        let oneDocument = await mdbUsuariosModel.getByName(nombre);
        res.status(200).json(oneDocument);
    }
    catch(ex){
        console.log(ex);
        res.status(500).json({ "msg": "Algo Paso Mal." });
    }
});


module.exports = router;