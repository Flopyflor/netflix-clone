import { getTopTV } from "../../../api/Endpoints";
import useSWR from 'swr'
import { Loading, Text } from "@nextui-org/react";
import { useState } from "react";
import API from '../../../api/Urls';
import Carousel from "../../../Components/carousel/Carousel";
import TitleCard from "../../../Components/titleCard/TitleCard";

const {PAGE} = API.FILTERS

function TVGrid() { 

  const [page, setPage] = useState(1)  

  const {data, isLoading, error} =  useSWR(`TopTV${page}`, async (name) => await getTopTV({[PAGE]: page})) ;   

  if (isLoading){
    return <Loading/>
  } else if (error){ 
    return <h1>{error.message}</h1>
  }
  else{
    return (
      <>
        <Text h2>Top TV: </Text>
        <Carousel>
        {
            data.results?.map((tv) => (
            <TitleCard movie={tv} key={tv.id}/>
            ))    
            }
        </Carousel>
      </>
    )
  }
}

export default TVGrid;