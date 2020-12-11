import GetRecetas from '../../../commons/private/getRecetas'
  
const initialState = {

  currentId:''
}


export const RECETA_SET_CURRENT = "RECETA_SET_CURRENT";


const localreceReducer = (state = initialState, action = {}) =>{
  switch(action.type){
    
    case RECETA_SET_CURRENT:
      console.log(action);
      return { ...state, currentId: action.payload._id}
    default:
      return state;
  }
}

  export default localreceReducer;
  