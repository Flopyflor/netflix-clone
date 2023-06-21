import { getMovieCreditsById } from "../../../api/Endpoints";
import useSWR from 'swr'

function MovieCredits({id}) {

    const {data: credits, isLoading: creditsLoading, error: creditsError} = useSWR(`MovieCredits${id}`, async ()=> await getMovieCreditsById(id));
 
    if (creditsLoading) {
        return <h1>Loading...</h1>
    }
    else if (creditsError) {
        return <h1>{creditsError.message}</h1>
    }
    else {
        return (
            <>
            {credits.map((person)=><div key={person.id}>{person.name} as {person.character}</div>)}   
            </>
        );
    }
}

export default MovieCredits;