import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import "../css/Home.css";
function Movie({id,medium_cover_image,title,summary,genres}){
    return <div className="movies" >
      
      <div className="movie_title_column">
      <img className="movie_img" src={medium_cover_image} alt={title}/>
      <div>
    <h2 className="movie_title"><Link to={`/movie/${id}`}>{title}</Link></h2>
    <ul className="movie_genre">
      {genres.map((g)=><li key={g}>{g}</li>)}
    </ul>
    </div>
    </div>
    <p className="movie_summary">{summary.slice(0,120)}</p>
    </div>
}
 
Movie.propTypes={
    id:PropTypes.number.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;