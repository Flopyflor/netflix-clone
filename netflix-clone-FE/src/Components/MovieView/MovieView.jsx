import { useEffect, useState } from "react";
import { getMovieById } from "../../api/Endpoints";

function MovieView() {
    
    const [movie, setMovie] = useState({});

    useEffect(() => {
        getMovieById('603692').then((res)=> {
            setMovie(res)
        });
    
    }, [])
    

    

    return (
        <div>
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
            <div>{movie.cast != undefined ? movie.cast.map((person)=> <p key={person.id}>{person.name} as {person.character}</p>) : ""}</div>
        </div>
    )
}

export default MovieView;
