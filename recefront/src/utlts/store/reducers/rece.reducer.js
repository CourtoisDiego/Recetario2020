import GetRecetas from '../../../commons/private/getRecetas'
  
const initialState = {
  hasMore:true,
  recetas:[],
  total:0,
  currentPage:1,
  pageLimit:6,
  fetching:false,
  error:'',
  currentId:null,
  searchFilter:''
}

export const RECE_LOADING = "RECE_LOADING";
export const RECE_LOADED = "RECE_LOADED";
export const RECE_RESET = "RECE_RESET";
export const RECE_ERROR = "RECE_ERROR";
export const RECE_SET_CURRENT = "RECE_SET_CURRENT";


const receReducer = (state = initialState, action = {}) =>{
  switch(action.type){
    case RECE_LOADING:
      return { ...state, fetching:true};
    case RECE_LOADED:
      let nrecetas = [];
      let newCurrentPage = state.currentPage;
      if(state.currentPage >= action.payload.currentPage) {
        nrecetas = [...state.recetas];
      } else {
        nrecetas = [...state.recetas, ...action.payload.recetas];
        newCurrentPage = action.payload.currentPage;
      }
      const hasMore = (nrecetas.length < action.payload.total);
      return {
        ...state,
        recetas:nrecetas,
        total:nrecetas.length,
        hasMore: hasMore,
        currentPage: newCurrentPage,
        fetching: false
      }
    case RECE_RESET:
      if (action.payload){
        return { ...initialState, searchFilter: action.payload.searchFilter};
      } else {
        let { searchFilter } = state;
        return { ...initialState, searchFilter: searchFilter };

      }

    case RECE_ERROR:
      return {...state, fetching:false}
    case RECE_SET_CURRENT:
      console.log(action);
      return { ...state, currentId: action.payload._id}
    default:
      return state;
  }
}

  export default receReducer;
  