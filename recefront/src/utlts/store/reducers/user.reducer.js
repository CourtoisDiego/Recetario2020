const initialState = {
    hasMore:true,
    user:[],
    total:0,
    currentPage:1,
    pageLimit:6,
    fetching:false,
    error:'',
    currentId:null,
    searchFilter:''
  }  
  export const USER_LOADING = "USER_LOADING";
  export const USER_LOADED = "USER_LOADED";
  export const USER_RESET = "USER_RESET";
  export const USER_ERROR = "USER_ERROR";
  export const USER_SET_CURRENT = "USER_SET_CURRENT";
  export const USER_RELOAD = "USER_RELOAD";

  const userReducer = (state = initialState, action = {}) =>{
    switch(action.type){
      case USER_LOADING:
        return { ...state, fetching:true};
      case USER_LOADED:
          let nuser= [];
          nuser = [action.payload.user];
        return {
            user:nuser,
          ...state,
          fetching: false
        }
      case USER_RESET:
        return { ...initialState,};
      case USER_ERROR:
        return {...state, fetching:false}
      case USER_SET_CURRENT:
        return {...state}
      case USER_RELOAD:
          return {...initialState}
      default:
        return state;
    }
  }

  export default userReducer;