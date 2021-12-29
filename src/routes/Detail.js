import { useEffect, useCallback, useState } from "react";
import {useParams} from "react-router-dom";
import "../css/Detail.css";
function Detail(){
    const [loadding, setLoad]=useState(true);
    const [movie,setMovie] =useState([]);
    const {id} =useParams();
    console.log(id);
    const getMoive =useCallback( async() =>{
        const json = await( 
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json()
            setMovie(json.data.movie);
            console.log(json);
            setLoad(false);
            },[id]);
    
            
    useEffect(()=>{
        getMoive();
    },[getMoive]);
    return (
        <div className="detail_container">
            {loadding ? <div className="detail_loader">loadding...</div>:
    <div className="detail_component">
    <h1 className="detail_component_title">{movie.title}</h1>
    <div className="detail_component_year">{movie.year}</div>
    <span className="detail_component_summary">{movie.description_full}</span>
    </div>
    }
    </div>
    )
           
}

export default Detail;