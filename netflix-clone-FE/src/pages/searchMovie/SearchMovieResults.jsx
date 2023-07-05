import gridStyles from './MovieGrid.module.css'
import useSWR from 'swr'
import { Loading, Text, Pagination, Input, Button } from "@nextui-org/react";
import { useState } from "react";
import { getMovieSearch } from "../../api/Endpoints";
import searchStyles from './SearchMovieResults.module.css'
import TitleCard from "../../Components/titleCard/titleCard";

function SearchMovieResults({passedQuery = ''}) { 
  const [query, setQuery] = useState(passedQuery)
  const [search, setSearch] = useState('');

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
      <div className={gridStyles.movieGrid}>{
        data.movies?.map((movie) => (
          <TitleCard movie={movie}/>))    
        }</div>

      <Pagination initialPage={page} total={data.totalPages} controls={false} onChange={(newPage) => {setPage(newPage)}}/>

      </>
      )
  }

  return (
  <>
  <div className={searchStyles.searchGroup} >
    <Input aria-label='search' onChange={(q)=> setSearch(q.target.value)}/>
    <Button onPress={()=> {setQuery(search)}} css={{zIndex: 1}}>Search</Button>
  </div>

    <Text h2>Movies related to '{query}': </Text>
    
    {movieView}
  </>)
}

export default SearchMovieResults