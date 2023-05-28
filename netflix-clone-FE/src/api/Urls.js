const API = {
    BASE: "https://api.themoviedb.org/3",
    DISCOVER: "discover",
    TV: "tv",
    MOVIE: "movie",
    API_KEY: "api_key",
    CREDITS: 'credits',
    FILTERS: {
        INCLUDE_ADULT: 'include_adult',
        INCLUDE_VIDEO: 'include_video',
        LANGUAGE: 'language',
        PAGE: 'page',
        SORT_BY: 'sort_by',
        WITH_CAST: 'with_cast',
        WITH_GENRES: 'with_genres',
        WITH_KEYWORDS: 'with_keywords',
        WITH_PEOPLE: 'with_people',
        YEAR: 'year',
    },
    LANGUAGES: {
        EN: 'en-US',
        ES: 'es'
    },
    SORT_KEY: {
        POPULARITY_DESC: 'popularity.desc'
    },
    BASE_IMAGE: 'https://image.tmdb.org/t/p',
    IMAGE_SIZES: {
        W500: 'w500'
    }
}

export default API;