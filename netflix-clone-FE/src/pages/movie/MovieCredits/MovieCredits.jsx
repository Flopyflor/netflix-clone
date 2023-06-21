import { Loading, Text, Avatar } from "@nextui-org/react";
import { getImageURL, getMovieCreditsById } from "../../../api/Endpoints";
import useSWR from 'swr'
import './MovieCredits.css'

function MovieCredits({id}) {

    const {data: credits, isLoading: creditsLoading, error: creditsError} = useSWR(`MovieCredits${id}`, async (name)=> await getMovieCreditsById(id));
 
    if (creditsLoading) {
        return <Loading/>
    }
    else if (creditsError) {
        return <h1>{creditsError.message}</h1>
    }
    else {
        return (
            <>
            <Text h4>Crew:</Text>
            <div className="crewList">
            {credits.map((person)=>{
                return(
                <div className="creditsAvatar">
                <Avatar size='lg' src={getImageURL(person.profile)} css={{zIndex: 1}}/>
                <Text h5 key={person.id}>{person.name} as {person.character}</Text>
                </div>)
            })}   
            </div>
            </>
        );
    }
}

export default MovieCredits;