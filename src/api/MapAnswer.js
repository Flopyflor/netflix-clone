import API from "./Urls";
const {TV, MOVIE} = API;

export function mapTopMovies(results){
    return {
        totalPages: results.total_pages,
        results: results.results.map((movie)=>{
        return {
            type: MOVIE,
            id: movie.id,
            title: movie.title,
            poster: movie.poster_path,
            overview: movie.overview
        }
    })}
}

export function mapTopTV(results){
    return{
        totalPages: results.total_pages, 
        results: results.results.map((tv)=>{
            return {
                type: TV,
                id: tv.id,
                title: tv.name,
                poster: tv.poster_path,
                overview: tv.overview
            }
        })
    } 
}

export function mapMovieCredits(results){
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
    const movies = results.results.map((movie)=>{
        return {
            type: MOVIE,
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

export function mapTVDetails(results) {
    return {
        id: results.id,
        title: results.name,
        episodes: results.number_of_episodes,
        overview: results.overview,
        inProduction: results.in_production,
        backdrop: results.backdrop_path
    }

}