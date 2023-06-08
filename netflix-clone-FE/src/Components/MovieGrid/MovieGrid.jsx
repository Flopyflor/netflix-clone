import { useNavigate } from "react-router-dom";
import { getImageURL, getTopMovies } from "../../api/Endpoints";
import { mapTopMovies } from "../../api/MapAnswer";
import useFetch from "../../hooks/useFetch";
import './MovieGrid.css'

function MovieGrid() {
  const {data: movies, isLoading, error} = useFetch(getTopMovies, mapTopMovies);

  const navigate = useNavigate();

    return (
      <>
      <h1>{error}</h1>

      {isLoading ? (
        <h1>Loading...</h1>
      ) : (

        <div className="movieGrid">{
          (movies && !error) ? 
          movies.map((movie) => (
            <div 
            className="movieCard"
            key={movie.id}>
              <img src={getImageURL(movie.poster)}
              onClick={()=>{navigate(`/movie/${movie.id}`)}}/> 
              <p className="movieTitle">{movie.title}</p>
            </div>)) 
          
          : ''}
          </div>
      )}
      </>
    )
}

export default MovieGrid