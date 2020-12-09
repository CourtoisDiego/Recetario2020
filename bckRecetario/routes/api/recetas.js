let express = require ('express');
let router = express.Router();

const RecetasModelClass = require('../../models/recetas.model');
const mdbRecetasModel = new RecetasModelClass();
router.get('/facet/:page/:items', async (req, res) => {
  try {
    const {page, items} = req.params;
    const rslt = await mdbRecetasModel.getFacet(Number(page), Number(items), '');
    res.status(200).json(rslt);
  } catch (ex) {
    console.log(ex);
    res.status(500).json({ "msg": "Algo Paso Mal." });
  }
});
//Recetas por usuario
router.get('/user/facet/:page/:items', async (req, res) => {
  try {
    const {_id} = req.user;
    const {page, items} = req.params;
    const rslt = await mdbRecetasModel.getFacetId(Number(page), Number(items), '',_id);
    res.status(200).json(rslt);
  } catch (ex) {
    console.log(ex);
    res.status(500).json({ "msg": "Algo Paso Mal." });
  }
});

router.get('/facet/:page/:items/:search', async (req, res) => {
  try {
    const { page, items, search } = req.params;
    const rslt = await mdbRecetasModel.getFacet(Number(page), Number(items), search);
    res.status(200).json(rslt);
  } catch (ex) {
    console.log(ex);
    res.status(500).json({ "msg": "Algo Paso Mal." });
  }
});

//Muestra todas las recetas
router.get('/all', async (req, res)=>{
    try{
      const rslt = await mdbRecetasModel.getAll()
      res.status(200).json(rslt);
    }catch(ex){
      console.log(ex);
      res.status(500).json({"msg":"Algo Paso Mal."});
    }
  });
//Muestra todas las recetas de un usuario
  router.get('/allByUser',async(req,res)=>{
    try{
      let { _id }=req.user;
      const rslt = await mdbRecetasModel.getByUser(_id);
      res.status(200).json(rslt);

    }
    catch(ex){
      console.log(ex);
      res.status(500).json({ "msg": "Algo Paso Mal." });
    }
  });

//Muestra recetas por nombre
  router.post('/allByName', async (req, res)=>{
  try{
    const { nombre } = req.body;
    
    let oneDocument = await mdbRecetasModel.getByName(nombre);
    res.status(200).json(oneDocument);
  } catch(ex){
    console.log(ex);
    res.status(500).json({ "msg": "Algo Paso Mal." });
  }
});
//Nueva receta
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
  //Borra receta
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