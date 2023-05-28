import API from './Urls'

// no estoy muy segura de cómo hacer que la key sea accesible y no visible
const AUTH_TOKEN = '' 

const {BASE, DISCOVER, MOVIE, TV, CREDITS, FILTERS, LANGUAGES, SORT_KEY} = API;
const {INCLUDE_ADULT, INCLUDE_VIDEO, LANGUAGE, PAGE, SORT_BY} = FILTERS;

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${AUTH_TOKEN}`
    }
};

export async function getTopMovies(params = {
    [INCLUDE_ADULT]: false,
    [INCLUDE_VIDEO]: false,
    [LANGUAGE]: LANGUAGES.EN,
    [PAGE]: 1,
    [SORT_BY]: SORT_KEY.POPULARITY_DESC
}){

    try {
        const response = await fetch([BASE, DISCOVER, MOVIE].join("/") + new URLSearchParams(params), options);
        return response.json()
            .then((res)=>{
                return res.results.map((movie)=>{
                    return {
                        id: movie.id,
                        title: movie.title,
                        poster: movie.poster_path,
                        overview: movie.overview
                    }
                })
            })
    } catch {
        return "ERROR"
    }
}

export async function getTopTV(params = {
    [INCLUDE_ADULT]: true,
    [INCLUDE_VIDEO]: true,
    [LANGUAGE]: LANGUAGES.EN,
    [PAGE]: 1,
    [SORT_BY]: SORT_KEY.POPULARITY_DESC
}){

    try {
        const response = await fetch([BASE, DISCOVER, TV].join("/")+ new URLSearchParams(params), options);
        return response.json()
            .then((res)=>{
                return res.results.map((tv)=>{
                    return {
                        id: tv.id,
                        title: tv.name,
                        poster: tv.poster_path,
                        overview: tv.overview
                    }
                })
            })
    } catch {
        return "ERROR"
    }
    
}

export async function getMovieById(id) {
    try {
        const movie_res = await fetch([BASE, MOVIE, id].join("/"), options);
        const credits_res = await fetch([BASE, MOVIE, id, CREDITS].join("/"), options);

        if (!movie_res.ok || !credits_res.ok) {
            throw new Error("Error al cargar: ", movie_res, credits_res)
        }

        let data = movie_res.json()
            .then((movie) => {
                return {
                    id: movie.id,
                    title: movie.title,
                    overview: movie.overview,
                    release_date: movie.release_date,
                };
            }).then((movie_data)=> {
                const data = credits_res.json()
                    .then((credits) =>{
                        const cast =  credits.cast.map((person)=> {
                            return {
                                id: person.id,
                                name: person.name,
                                character: person.character
                            }
                        });

                        return {...movie_data, cast}
                    });

                return data
            });
        
        return data
    } catch (e){
        console.log(e)
        return (e)
    }

}