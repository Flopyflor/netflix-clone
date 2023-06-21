import { useNavigate } from "react-router-dom";
import { getImageURL, getTopMovies } from "../../api/Endpoints";
import './MovieGrid.css'
import useSWR from 'swr'

function MovieGrid() { 

  const {data: movies, isLoading, error} =  useSWR("TopMovies", getTopMovies) ;   

  const navigate = useNavigate();  

  if (isLoading){
    return <h1>Loading...</h1>
  } else if (error){ 
    return <h1>{error.message}</h1>
  }
  else{
    return (
      <>
        <div className="movieGrid">{
          movies?.map((movie) => (
            <div 
            className="movieCard"
            key={movie.id}>
              <img src={getImageURL(movie.poster)}
              onClick={()=>{navigate(`/movie/${movie.id}`)}}/> 
              <p className="movieTitle">{movie.title}</p>
            </div>))    
          }
          </div>
      </>
    )
  }
}

export default MovieGrid