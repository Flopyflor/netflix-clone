const API = {
    BASE: "https://api.themoviedb.org/3",
    DISCOVER: "discover",
    TV: "tv",
    MOVIE: "movie",
    API_KEY: "api_key",
    CREDITS: 'credits',
    GENRE: 'genre',
    LIST: 'list',
    SEARCH: 'search',
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
        QUERY: 'query'
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
        W500: 'w500',
        W154: 'w154',
        W1280: 'w1280'
    }
}

export default API;