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

    console.log("creditos:", results)

    return results.cast.map((person)=> {
        return {
            id: person.id,
            name: person.name,
            character: person.character,
            profile: person.profile_path
        }
    });
}

export function mapMovieDetails(movie) {

    //console.log("movie:", movie)

    return {
        id: movie.id,
        title: movie.title,
        tagline: movie.tagline,
        overview: movie.overview,
        release_date: movie.release_date,
        backdrop: movie.backdrop_path
    };
}

export function mapSearchMovies(results){
    console.log(results)
    const movies = results.results.map((movie)=>{
        return {
            id: movie.id,
            title: movie.title,
            poster: movie.poster_path,
            overview: movie.overview
        }
    })

    return {
        totalPages: results.total_pages,
        movies: movies
    }
}