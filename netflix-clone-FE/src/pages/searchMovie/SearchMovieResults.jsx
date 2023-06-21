import { useNavigate } from "react-router-dom";
import './MovieGrid.css'
import useSWR from 'swr'
import { Loading, Text, Image, Pagination, Input, Button } from "@nextui-org/react";
import { useState } from "react";
import { getMovieSearch, getImageURL } from "../../api/Endpoints";
import './SearchMovieResults.css'

function SearchMovieResults({passedQuery = ''}) { 
  const [query, setQuery] = useState(passedQuery)
  const [search, setSearch] = useState('');

  const [page, setPage] = useState(1)  

  const {data, isLoading, error} =  useSWR(`${query}&${page}`, async ()=> await getMovieSearch(query, page));


  const navigate = useNavigate();  

  let movieView = (<></>)

  if (isLoading){
     movieView = <Loading/>
  } else if (error){ 
    movieView =  <h1>Error: {error.message}</h1>
  }
  else{
    movieView = (
      <>
      <div className="movieGrid">{
        data.movies?.map((movie) => (
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
        }</div>

      <Pagination initialPage={page} total={data.totalPages} controls={false} onChange={(newPage) => {setPage(newPage)}}/>

      </>
      )
  }

  return (
  <>
  <div className="searchGroup">
    <Input className="searchInput" aria-label='search' onChange={(q)=> setSearch(q.target.value)}/>
    <Button className="searchBtn" onPress={()=> {setQuery(search)}}>Search</Button>
  </div>

    <Text h1>Movies related to '{query}': </Text>
    
    {movieView}
  </>)
}

export default SearchMovieResults