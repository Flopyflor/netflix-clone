import { useParams } from "react-router-dom";
import { getTopMovies } from "../../api/Endpoints";
import useSWR from 'swr'
import { Loading, Text } from "@nextui-org/react";
import { useState } from "react";
import API from '../../api/Urls'
import { movieGenres } from "../../api/Genres";
import TitleCard from "../../Components/titleCard/TitleCard";
import TitleGrid from '../../Components/titleGrid/TitleGrid'

const {PAGE, WITH_GENRES} = API.FILTERS

function MovieCategory() { 

    const {category} = useParams();

    const genre = movieGenres.filter((genre) => genre.name==category)[0]

    const [page, setPage] = useState(1)

    const {data: movies, isLoading, error} =  useSWR(`TopMovies${page}`, async (name) => await getTopMovies({[PAGE]: page, [WITH_GENRES]: genre.id})) ;   


    if (isLoading){
    return <Loading/>
    } else if (error){ 
    return <h1>{error.message}</h1>
    }
    else{
    return (
        <>
        <Text h1>{category} Movies: </Text>
        <TitleGrid>
        {movies?.map((movie) => (
            <TitleCard movie={movie} key={movie.id}></TitleCard>
        ))}
        </TitleGrid>
        </>
    )
    }
}

export default MovieCategory