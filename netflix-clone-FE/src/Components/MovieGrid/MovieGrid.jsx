import { useEffect, useState } from "react";
import { getTopMovies } from "../../api/Endpoints";

function MovieGrid() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTopMovies().then((res)=> {
          setMovies(res)
      });
  
  }, [])

    return (
        <div>{movies ? movies.map((movie) => (<p key={movie.id}>{movie.title} </p>)) : ""}</div>
    )
}

export default MovieGrid