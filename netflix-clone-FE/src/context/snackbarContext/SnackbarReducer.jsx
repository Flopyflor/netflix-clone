import {
    OPEN_SNACKBAR,
    CLOSE_SNACKBAR,
} from "../types";

// eslint-disable-next-line react-refresh/only-export-components
export default (state, action) => {
    switch (action.type) {
        case OPEN_SNACKBAR:
            return {
                category: action.payload.category,
                msg: action.payload.msg,
                open: true,
            };
        case CLOSE_SNACKBAR:
            return {
                category: null,
                msg: null,
                open: false,
            };
       
        default:
            return state;
    }
};
