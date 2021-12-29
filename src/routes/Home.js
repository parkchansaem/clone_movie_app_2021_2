import { useEffect, useState} from "react";
import Movie from "../component/Movie";
import "../css/Home.css";
import"../css/style.css";
function Home(){
    const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
 useEffect(()=>{
 fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year').then((responese)=>responese.json()).then((json)=>{
   setMovies(json.data.movies);
   setLoading(false);
 })
},[]);
console.log(movies)
  return (
  <div className="container">
    {loading ? "loading":
    <div className="movie_compoenent">
      {movies.map((movie)=>( 
      <Movie
      key={movie.id}
      id={movie.id}
      medium_cover_image={movie.medium_cover_image}
      title={movie.title}
      summary={movie.summary}
      genres={movie.genres} />
      ))}
      </div>}

  </div>
  )
}
export default Home;