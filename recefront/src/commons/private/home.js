import Page from '../commons/page'
import './home.css'

import { useHistory } from 'react-router-dom';
import { useStateContext } from '../../utlts/Context';
import { RECE_RESET, RECE_LOADED , RECE_ERROR, RECE_SET_CURRENT} from '../../utlts/store/reducers/rece.reducer';
import {paxios} from '../../utlts/Axios';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSync} from '@fortawesome/free-solid-svg-icons'
import Pizza from '../public/img/screen-4.jpg'
import InfiniteScroll from 'react-infinite-scroller';
/*<div clasName="descrip">{o.Descripcion}</div>
  <div className="difi">{o.Dificultad}</div>
  <div className="user">{o.Usuario}</div>*/
const Home = ()=>{
  
  
    const[{rece},dispatch] = useStateContext();
    const history = useHistory();
    const listElements = rece.recetas.map((o)=>{
        let styles;
        switch (o.dificultad) {
            case "Dificil":
                styles= {
                    backgroundColor:"#E74C3C"
                  };
                break;
            case "Intermedio":
                styles= {
                    backgroundColor:"#F39C12"
                  };
                break;
            case "Facil":
                styles= {
                    backgroundColor:"#27AE60"
                  };
                  break;
            default:
                styles= {
                    backgroundColor:"#F39C12"
                  };
                break;}
        return (<div key={o._id} className="va" onClick={() => { dispatch({ type: RECE_SET_CURRENT, payload:{_id:o._id}}); history.push("/UnaReceta");}}><img className="Pizza"src={Pizza}/>
        <div className="nombre">{o.nombre}</div>
        <div className="descripcion">{o.descripcion.substr(0,20) + "..."}</div>
        <div className="difi" style={styles}>{o.dificultad}</div>
        </div>);
            })
    const searchChange = (e)=>{
        dispatch({type:RECE_RESET,payload:{ searchFilter: e.target.value}});
    }
    const loadMore = function (){
        if(!rece.fetching){
            paxios.get(
                (!(/^\s*$/).test(rece.searchFilter))?
                  `/api/recetas/facet/text/${rece.currentPage}/${rece.pageLimit}/${encodeURI(rece.searchFilter)}`
                  : `/api/recetas/facet/${rece.currentPage}/${rece.pageLimit}`)
                .then(({data})=>{
                  dispatch({
                    type: RECE_LOADED,
                    payload: {
                      recetas:data.rslt,
                      total:data.total,
                      currentPage:(rece.currentPage+1)
                    }
                  });
                })
                .catch((ex)=>{
                  dispatch({ type: RECE_ERROR });
                  console.log(ex)
              }); //end paxios
        }
    }
    
    const scrollParentRef = useRef();

    return (
        
        <Page headding="Inicio" footer="true">
        <section className="productoList" ref={scrollParentRef}>
            
            <br></br>
            <br></br>
            <form className="con">
            <input type="text" 
            placeholder="Buscar" 
            className="txt"
            value={rece.searchFilter}
          onChange={searchChange}></input>
            </form>
            
            <br></br>
            
        <InfiniteScroll
          pageStart={rece.currentPage}
          hasMore={rece.hasMore}
          getScrollParent={()=>scrollParentRef.current}
          loader={(<div key="loadingli" className="loader"><FontAwesomeIcon icon={faSync}/></div>)}
          loadMore={loadMore}
          element="section"
        >
          {listElements}
        </InfiniteScroll>
      </section>
      <br></br>
      <br/>
      <br></br>
            
          
           
            
        </Page>
    );
}
export default Home;