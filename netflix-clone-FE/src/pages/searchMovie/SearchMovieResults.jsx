import useSWR from 'swr'
import { Loading, Text, Pagination, Input, Button } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { getMovieSearch } from "../../api/Endpoints";
import TitleCard from "../../Components/titleCard/TitleCard";
import { useParams } from "react-router-dom";
import TitleGrid from '../../Components/titleGrid/TitleGrid';


function SearchMovieResults() { 
  const {query: passedQuery} = useParams();

  const [query, setQuery] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    setQuery(passedQuery);
  }, [])
  

  const [page, setPage] = useState(1)  

  const {data, isLoading, error} =  useSWR(`${query}&${page}`, async ()=> await getMovieSearch(query, page));

  const enterSearch = (e) =>{
    if (e.key == "Enter"){
      setQuery(e.target.value);
    }
  }

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
        <TitleCard movie={movie}/>))    
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