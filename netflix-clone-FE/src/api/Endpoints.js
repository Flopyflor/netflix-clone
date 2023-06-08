import API from './Urls'

const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTBhNjhjMjkyNDBhMDI2NDRmYTJiMWEzMGEwZmQ4YiIsInN1YiI6IjY0NzBmNzU4ODgxM2U0MDBjM2FkZDdmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eyiaWgTYJYitVZU22zFYPMOYI2EHM9Uw9ZfrSUa0GYs';

const {BASE, DISCOVER, MOVIE, TV, CREDITS, FILTERS, LANGUAGES, SORT_KEY, IMAGE_SIZES, BASE_IMAGE} = API;
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
        return await fetch([BASE, DISCOVER, MOVIE].join("/") + '?'+ new URLSearchParams(params), options);
    } catch (e) {
        console.log("ERROR al cargar", e);
        return e;
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
        return await fetch([BASE, DISCOVER, TV].join("/")+ '?'+ new URLSearchParams(params), options);
    } catch (e) {
        console.log(e);
        return "ERROR"
    }
    
}

export async function getMovieById(id) {
    try {
        return await fetch([BASE, MOVIE, id].join("/"), options);
    } catch (e){
        console.log(e)
        return (e)
    }
}

export async function getMovieCreditsById(id){
    try {
        return fetch([BASE, MOVIE, id, CREDITS].join("/"), options);

    } catch (e){
        console.log(e)
        return (e)
    }
}

export function getImageURL(name, size=IMAGE_SIZES.W154) {
    return [BASE_IMAGE, size].join("/") + name;
}