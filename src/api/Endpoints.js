import axios from 'axios'
import API from './Urls'
import { mapMovieCredits, mapMovieDetails, mapTopMovies, mapTopTV, mapSearchMovies, mapTVDetails } from './MapAnswer';

const AUTH_TOKEN = import.meta.env.VITE_APP_API_KEY;

const {BASE, DISCOVER, MOVIE, TV, CREDITS, FILTERS, LANGUAGES, SORT_KEY, IMAGE_SIZES, BASE_IMAGE, SEARCH} = API;
const {INCLUDE_ADULT, INCLUDE_VIDEO, LANGUAGE, PAGE, SORT_BY, QUERY} = FILTERS;

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${AUTH_TOKEN}`
    }
};

export async function getTopMovies(keys={}){

    const params = {
        [INCLUDE_ADULT]: false,
        [INCLUDE_VIDEO]: false,
        [LANGUAGE]: LANGUAGES.EN,
        [PAGE]: 1,
        [SORT_BY]: SORT_KEY.POPULARITY_DESC,
        ...keys
    }

    const url = [BASE, DISCOVER, MOVIE].join("/") +'?'+ new URLSearchParams(params)

    const res = await axios.get(url, options)

    if (await res.status != 200){
        throw Error(res);
    }
    
    return mapTopMovies(await res.data)
}

export async function getTopTV(keys={}){

    const params = {
        [INCLUDE_ADULT]: true,
        [INCLUDE_VIDEO]: true,
        [LANGUAGE]: LANGUAGES.EN,
        [PAGE]: 1,
        [SORT_BY]: SORT_KEY.POPULARITY_DESC,
        ...keys
    }

    const url = [BASE, DISCOVER, TV].join("/")+  '?'+ new URLSearchParams(params);
    const res = await axios.get(url, options)

    if (await res.status != 200){
        throw Error(res);
    }

    return mapTopTV(await res.data)    
}

export async function getMovieById(id) {  
    const url = [BASE, MOVIE, id].join("/");
    const res = await axios.get(url, options)

    if (await res.status != 200){
        throw Error(res);
    }
    
    return mapMovieDetails(await res.data)
}

export async function getMovieCreditsById(id){
    const url = [BASE, MOVIE, id, CREDITS].join("/");
    const res = await axios.get(url, options)

    if (await res.status != 200){
        throw Error(res);
    }
    
    return mapMovieCredits(await res.data)
}

export function getImageURL(name, size=IMAGE_SIZES.W154) {
    return [BASE_IMAGE, size].join("/") + name;
}

export async function getMovieSearch(query='', page=1) {
    const params = {
        [INCLUDE_ADULT]: false,
        [LANGUAGE]: LANGUAGES.EN,
        [PAGE]: page,

        [QUERY]: query
    }

    const url = [BASE, SEARCH, MOVIE].join("/")+'?'+ new URLSearchParams(params);
    const res = await axios.get(url, options)

    if (await res.status != 200){
        throw Error(res);
    }
    
    return mapSearchMovies(await res.data)
}

export async function getTVById(id) {
    const url = [BASE, TV, id].join("/");
    const res = await axios.get(url, options)

    if (await res.status != 200){
        throw Error(res);
    }
    
    return mapTVDetails(await res.data)
}