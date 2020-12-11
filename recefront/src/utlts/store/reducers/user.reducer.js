

const initialState = {
    currentId:null
  }  
 
  export const USER_SET_CURRENT = "USER_SET_CURRENT";
  

  const userReducer = (state = initialState, action = {}) =>{
    switch(action.type){
      case USER_SET_CURRENT:
        return {...state,currentId:action.payload._id}

      default:
        return state;
    }
  }

  export default userReducer;