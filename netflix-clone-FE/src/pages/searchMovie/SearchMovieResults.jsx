import useSWR from 'swr'
import { Loading, Text, Pagination, Input, Button } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { getMovieSearch } from "../../api/Endpoints";
import TitleCard from "../../Components/titleCard/TitleCard";
import TitleGrid from '../../Components/titleGrid/TitleGrid';
import {useParams} from 'react-router-dom';


function SearchMovieResults() { 
  
  const {query} = useParams();

  const [page, setPage] = useState(1)  

  const {data, isLoading, error} =  useSWR(`${query}&${page}`, async ()=> await getMovieSearch(query, page));


  let movieView = (<></>)

  if (isLoading){
     movieView = <Loading/>
  } else if (error){ 
    movieView =  <h1>Error: {error.message}</h1>
  }
  else{
    movieView = (
      <>
      <TitleGrid>
      {data.movies?.map((movie) => (
        <TitleCard movie={movie} key={movie.id}/>))    
      }
      </TitleGrid>

      <Pagination initialPage={page} total={data.totalPages} controls={false} onChange={(newPage) => {setPage(newPage)}}/>

      </>
      )
  }

  return (
  <>
    <Text h2>Movies related to '{query}': </Text>
    
    {movieView}
  </>)
}

export default SearchMovieResults