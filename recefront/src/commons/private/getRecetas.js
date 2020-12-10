import Pizza from '../public/img/screen-4.jpg'
import '../private/getRecetas.css'
import {paxios} from '../../utlts/Axios'
import {useStateContext} from '../../utlts/Context'
import { useEffect } from 'react';
import { RECE_LOADED, RECE_LOADING,RECE_ERROR } from '../../utlts/store/reducers/rece.reducer';
import { useHistory } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroller';
import { useRef } from 'react';

    
const GetRecetas =({_id})=> {
    
    const [{rece}, dispatch] = useStateContext();
    
    const history = useHistory();
    const listElements = rece.recetas.map((o)=>{
    return (<div key={o._id} className="va"><img className="Pizza"src={Pizza}/>
    <div className="nombre">{o.nombre}</div>
    <div className="descripcion">{o.descripcion}</div>
    <div className="difi">{o.dificultad}</div>
    </div>);
        })
    const loadMore= function(){
        if(!rece.fetching){
            
            dispatch({type:RECE_LOADING});
            
            paxios.get(
                (_id)?
                `/api/recetas/user/facet/${rece.currentPage}/${rece.pageLimit}`:
                `/api/recetas/facet/${rece.currentPage}/${rece.pageLimit})`
                
                )
                .then(({data})=>{
                 console.log(_id);   
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
    };
const scrollParentRef = useRef();
    return(

        <section className="productoList" ref={scrollParentRef}>
            <InfiniteScroll
          pageStart={rece.currentPage}
          hasMore={rece.hasMore}
          getScrollParent={()=>scrollParentRef.current}
          
          loadMore={loadMore}
          element="section"
        >
            {listElements}
        </InfiniteScroll>
            
        </section>         
        );

}

export default GetRecetas;