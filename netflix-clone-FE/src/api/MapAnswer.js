export function mapTopMovies(results){
    return results.results.map((movie)=>{
        return {
            id: movie.id,
            title: movie.title,
            poster: movie.poster_path,
            overview: movie.overview
        }
    })
}

export function mapTopTV(results){
    return results.results.map((tv)=>{
        return {
            id: tv.id,
            title: tv.name,
            poster: tv.poster_path,
            overview: tv.overview
        }
    })
}

export function mapMovieCredits(results){
    return results.cast.map((person)=> {
        return {
            id: person.id,
            name: person.name,
            character: person.character
        }
    });
}

export function mapMovieDetails(movie) {
    return {
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        release_date: movie.release_date,
        backdrop: movie.backdrop_path
    };
}