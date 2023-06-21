import { useParams } from "react-router-dom";
import { getImageURL, getMovieById, getMovieCreditsById } from "../../api/Endpoints";
import API from "../../api/Urls"
import useSWR from 'swr'
import MovieCredits from "../MovieCredits/MovieCredits";

function MovieView() {
    const {id} = useParams();

    const {data: movie, isLoading: movieLoading, error: movieError} = useSWR(`MovieDetails${id}`, async () => await getMovieById(id));
 
    if (movieLoading) {
        return <h1>Loading...</h1>
    }
    else if (movieError) {
        return <h1>{movieError.message}</h1>
    }
    else {
        return (
            <>
            <div>
                <img src={getImageURL(movie.backdrop, API.IMAGE_SIZES.W1280)} alt="" />
                <h3>{movie.title}</h3>
                <p>{movie.overview}</p>  

                <MovieCredits id={id}></MovieCredits> 
            </div>
    
            </>
        );
    }

}

export default MovieView;

