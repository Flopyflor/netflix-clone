import { useParams } from "react-router-dom";
import { getImageURL, getMovieById, getMovieCreditsById } from "../../../api/Endpoints";
import API from "../../../api/Urls"
import useSWR from 'swr'
import MovieCredits from "../MovieCredits/MovieCredits";
import { Loading, Text, Image } from "@nextui-org/react";

function MovieView() {
    const {id} = useParams();

    const {data: movie, isLoading: movieLoading, error: movieError} = useSWR(`MovieDetails${id}`, async (name) => await getMovieById(id));
 
    if (movieLoading) {
        return <Loading/>
    }
    else if (movieError) {
        return <h1>{movieError.message}</h1>
    }
    else {
        return (
            <>
            <div>
                <Text h1>{movie.title}</Text>
                <Text h3>{movie.tagline}</Text>
                <Image showSkeleton src={getImageURL(movie.backdrop, API.IMAGE_SIZES.W1280)} alt="" />
                <Text h5>{movie.overview}</Text>  

                <MovieCredits id={id}></MovieCredits> 
            </div>
    
            </>
        );
    }

}

export default MovieView;

