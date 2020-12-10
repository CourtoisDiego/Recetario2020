var MongoDB = require('../models/db');
var ObjectID = require('mongodb').ObjectID;

class RecetasModel{
    constructor(){
      this.collection = null
      MongoDB.getDb()
       .then (
         (db)=>{
           this.collection = db.collection("recetas");
         }
      )
       .catch((ex)=>{
        throw(ex);
      });
    }
   async getFacet(page, items, search){
      try{
        const searchExp = new RegExp(search);
        
        const filter = (search == '')?{}:{"$or":[{"nombre": {"$regex":searchExp,$options:"i" }} ]};
        // select * from productos where (sku like '%search%' or bane like '%search%');

        let cursor = await this.collection.find(filter);
        let total = await cursor.count();
        cursor.skip((page-1) * items);
        cursor.limit(items);
        let rslt = await cursor.toArray();
        return {total, rslt};
      }catch(ex){
        throw (ex);
      }
    }

    async GetById(id) {
      try{
        const _id = new ObjectID(id);
        let rslt = await this.collection.findOne({_id});
        return rslt;
      }catch(ex){
        throw(ex);
      }
    }
//Devuelve todas las recetas
    async getAll(){
      try {
        let rslts = await this.collection.find({}).toArray();
        return rslts;
      }catch(ex){
        throw(ex);
      }
    }
//Busca recetas por nombre
    async getByName(name){
      try{
        let oneDoc = await this.collection.find({"nombre":{$regex: name, $options:"i"}}).toArray();
        return oneDoc;
      }catch(ex){
        throw(ex);
      }
    }
//Busca las recetas por usuario
    async getByUser(_id){
      try{
        console.log(_id);
        const filter = 
        {"usuario._id":ObjectID(_id)};
        let oneDoc = await this.collection.find(filter).toArray();
        return oneDoc;
    }
      catch(ex){
        throw(ex);
    }
    }
  
//Agrega receta
    async addOne({ _id,email, nombre,descripcion,fingre,fpasos,dificultad,date }) {
      try{
        
        let newReceta = {
            'usuario':{
                '_id': ObjectID(_id),
                'email':email
            },
           'nombre':nombre,
            'descripcion':descripcion,
            'fingre':fingre,
            'fpasos':fpasos,
            'dificultad':dificultad,
            'fechapost':date

        }
        var result = await this.collection.insertOne(newReceta);
        return result;
      }catch(ex){
        throw(ex);
      }
    }

   //Elimina

    async removeById(id) {
      try{
        const _id = new ObjectID(id);
        let rslt = await this.collection.deleteOne({_id});
        return rslt;
      }catch(ex){
        throw(ex);
      }
    }
    
}
module.exports = RecetasModel;
