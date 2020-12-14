let express = require('express');
let router = express.Router();

const UsuariosModelClass = require('../../models/usuarios.model');
const mdbUsuariosModel = new UsuariosModelClass();


router.get('/profile/:_id', async (req, res)=>{
    try{
      let { _id } = req.params;
      let oneDocument = await mdbUsuariosModel.getById(_id);
      res.status(200).json(oneDocument);
    } catch(ex){
      console.log(ex);
      res.status(500).json({ "msg": "Algo Paso Mal." });
    }
});
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

router.put('/upd',async(req,res)=>{
      try{
        let {nombre,usuario,pais,_id} = req.body;
        let oneDocument = await mdbUsuariosModel.updateById(nombre,usuario,pais,_id);
        res.status(200).json(oneDocument);
    }
    catch(ex){
        console.log(ex);
        res.status(500).json({ "msg": "Algo Paso Mal." });
    }
});


module.exports = router;