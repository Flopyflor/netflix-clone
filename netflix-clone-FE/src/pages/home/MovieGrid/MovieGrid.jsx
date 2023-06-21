import { useNavigate } from "react-router-dom";
import { getImageURL, getTopMovies } from "../../../api/Endpoints";
import './MovieGrid.css'
import useSWR from 'swr'
import { Loading, Text, Image } from "@nextui-org/react";
import { useEffect, useState } from "react";
import API from '../../../api/Urls';

const {PAGE} = API.FILTERS

function MovieGrid() { 

  const [page, setPage] = useState(1)  

  const {data: movies, isLoading, error} =  useSWR(`TopMovies${page}`, async (name) => await getTopMovies({[PAGE]: page})) ;   

  const navigate = useNavigate();  

  if (isLoading){
    return <Loading/>
  } else if (error){ 
    return <h1>{error.message}</h1>
  }
  else{
    return (
      <>
        <Text h1>Top Movies: </Text>
        <div className="movieGrid">{
          movies?.map((movie) => (
            <div 
            className="movieCard"
            key={movie.id}>
              <Image showSkeleton src={getImageURL(movie.poster)}
              onClick={()=>{navigate(`/movie/${movie.id}`)}}/> 
              <Text 
              h5 
              className="movieTitle">
                {movie.title}
                </Text>
            </div>))    
          }
          </div>
      </>
    )
  }
}

export default MovieGrid