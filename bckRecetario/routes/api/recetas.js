let express = require ('express');
let router = express.Router();

const RecetasModelClass = require('../../models/recetas.model');
const mdbRecetasModel = new RecetasModelClass();

router.get('/all', async (req, res)=>{
    try{
      const rslt = await mdbRecetasModel.getAll()
      res.status(200).json(rslt);
    }catch(ex){
      console.log(ex);
      res.status(500).json({"msg":"Algo Paso Mal."});
    }
  });


  router.get('/one/:id', async (req, res)=>{
  try{
    let { id } = req.params;
    let oneDocument = await mdbRecetasModel.getById(id);
    res.status(200).json(oneDocument);
  } catch(ex){
    console.log(ex);
    res.status(500).json({ "msg": "Algo Paso Mal." });
  }
});

router.post('/new', async (req, res)=>{
    try{
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      let{_id,email} = req.user;
      let {nombre,descripcion,ingredientes,pasos,dificultad} = req.body;
      let fingre = ingredientes.split("|");
      let fpasos = pasos.split("|");

      var rslt = await mdbRecetasModel.addOne({ _id,email, nombre,descripcion,fingre,fpasos,dificultad,date }); // {sku: sku, name:name, price:price, stock:0}
      res.status(200).json(rslt);
    }catch(ex){
      console.log(ex);
      res.status(500).json({ "msg": "Algo Paso Mal." });
    }
  });
  router.delete('/del/:id',async (req, res)=>{
    let {id} = req.params;
    try{
      let rslt = await mdbRecetasModel.removeById(id);
      res.status(200).json(rslt);
    }catch(ex){
      console.log(ex);
      res.status(500).json({ "msg": "Algo Paso Mal." });
    }
    
  });



module.exports = router;