import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { watchListData } from '../../reducer/reducerSlice';

import { removeOne,totalRemove } from '../../reducer/reducerSlice';
import DeleteIcon from '@mui/icons-material/Delete';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
const Watches = () => {  
  const dispatch = useDispatch();
  const watchingData = useSelector((state) => state.movies.watchingData);
  return (
    <div>
      {
        watchingData.map((item,index)=>(
          <div key={index}>
        {/* <img  src= {item.poster_path} /> */}
        <img className="cards__img" src={`https://image.tmdb.org/t/p/original${item?item.poster_path:""}`}  />
         
  
         <p>{item.original_title}</p>
<p>  {item.release_date}</p>
<p>{item.vote_average}</p>
<p> item.overview.slice(0,118)</p>
           <button>
            <span>
              <CancelPresentationIcon  onClick={e=>dispatch(removeOne(item.id))}/>
            </span>
           </button>

          </div>
        ))
      }
      <div>
    {
      watchingData.lengh >0 ? 
    
        <span>
<DeleteIcon   onClick={e=>dispatch(totalRemove())}/>
        </span>:" "
}
      </div>
    </div>

    
  )
}

export default Watches
