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

    }
module.exports = UsuariosModel;

