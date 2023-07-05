import { getTopMovies } from "../../../api/Endpoints";
import useSWR from 'swr'
import { Loading, Text } from "@nextui-org/react";
import { useState } from "react";
import API from '../../../api/Urls';
import Carousel from "../../../Components/carousel/Carousel";
import TitleCard from "../../../Components/titleCard/TitleCard";

const {PAGE} = API.FILTERS

function MovieGrid() { 

  const [page, setPage] = useState(1)  

  const {data: movies, isLoading, error} =  useSWR(`TopMovies${page}`, async (name) => await getTopMovies({[PAGE]: page})) ;   

  if (isLoading){
    return <Loading/>
  } else if (error){ 
    return <h1>{error.message}</h1>
  }
  else{
    return (
      <>
        <Text h2>Top Movies: </Text>
        <Carousel>
        {
            movies?.map((movie) => (
            <TitleCard movie={movie}/>
            ))    
            }
        </Carousel>
      </>
    )
  }
}

export default MovieGrid