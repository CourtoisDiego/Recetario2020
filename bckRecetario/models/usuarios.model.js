var MongoDB = require('../models/db');
var ObjectID = require('mongodb').ObjectID;
class UsuariosModel{
    constructor(){
      this.collection = null
      MongoDB.getDb()
       .then (
         (db)=>{
           this.collection = db.collection("usuarios");
         }
      )
       .catch((ex)=>{
        throw(ex);
      });
    }
    //Por ID
    async getById(_id){
      try{
        _id=ObjectID(_id);
        let oneDoc = await this.collection.findOne({_id});
        return oneDoc;
      }catch(ex){
        throw(ex);
      }
    }
//Busca usuario por nombre
    async getByName(name){
        try{
          let oneDoc = await this.collection.find({"nombre":{$regex: name, $options:"i"}}).toArray();
          return oneDoc;
        }catch(ex){
          throw(ex);
        }
      }
    //Update de usuario
      async updateById(nombre,usuario,pais,id){
        try{
          const _id = new ObjectID(id);
          // UPDATE TABLE SET attr = val, attr = val where attr = val;
          const updOps = {"$set":{"nombre":nombre, "usuario":usuario,"pais":pais}};
          let updDoc = await this.collection.findOneAndUpdate({ _id }, updOps, { returnOriginal:false});
          return updDoc;
        }catch(ex){
          throw(ex);
        }
      }
    }
    
module.exports = UsuariosModel;

