import { useReducer } from "react";
import SnackbarReducer from "./SnackbarReducer";
import SnackBarContext from "./SnackbarContext";
import { CLOSE_SNACKBAR, OPEN_SNACKBAR } from "../types";
const SnackbarState = (props) => {
    const initialState = {
        category: null,
        open: false,
        msg: null
    };


    const [state, dispatch] = useReducer(SnackbarReducer, initialState);

    const openSnackbar = ({ msg, category }) => {
        const alert = {
            msg, category
        }
        dispatch({
            type: OPEN_SNACKBAR,
            payload: alert,
        });

        setTimeout(() => {
            dispatch({
                type: CLOSE_SNACKBAR,
            })
        }, 5000)

    }

    const closeSnackbar = () => {
        dispatch({
            type: CLOSE_SNACKBAR,
        })
    }

    const onClose = () => {
        
    }

    return (
        <SnackBarContext.Provider
            value={{
                msg: state.msg,
                category: state.category,
                open: state.open,
                openSnackbar,
                closeSnackbar,
                onClose
            }}
        >
            {props.children}
        </SnackBarContext.Provider>
    );
}

export default SnackbarState;
