import { useParams } from "react-router-dom";
import { getImageURL, getMovieById, getMovieCreditsById } from "../../api/Endpoints";
import { mapMovieCredits, mapMovieDetails } from "../../api/MapAnswer";
import API from "../../api/Urls"
import useFetch from "../../hooks/useFetch";

function MovieView() {
    const {id} = useParams();

    const {data: movie, isLoading: movieLoading, error: movieError} = useFetch(async ()=>{return await getMovieById(id)}, mapMovieDetails);
    const {data: credits, isLoading: creditsLoading, error: creditsError} = useFetch(async ()=>{return await getMovieCreditsById(id)}, mapMovieCredits);
 
    if (movieLoading) {
        return <h1>Loading...</h1>
    }

    if (movieError) {
        return <h1>{movieError}</h1>
    }
    
    return (
        <>
        <div>
            <img src={getImageURL(movie.backdrop, API.IMAGE_SIZES.W1280)} alt="" />
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
            <div>{
                creditsLoading ? (
                    <h1>Loading credits...</h1>
                ) : (
                    <h1>loaded credits</h1>
                )

            }</div>     
        </div>

        </>
    );

}

export default MovieView;

/*
(credits!=undefined && !creditsError) ? 
                    credits.map((person)=> <p key={person.id}>{person.name} as {person.character}</p>) 
                    : (<h1>{creditsError}</h1>)
*/
