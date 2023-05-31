import { useContext } from 'react';
import './Alert.css'
import { Dialog } from "@mui/material";
import SnackBarContext from '../../context/snackbarContext/SnackbarContext';
import RepusableAlert from './reusableAlert';

/* 
********************************

PARA PODER ACTIVAR EL SNACKBAR TENEMOS QUE UTILIZAR EL CONTEXT 
SnacbarContext 

EN ESE TENEMOS QUE LLAMAR A LA FUNCION openSnackbar EN DONDE RESIBRA UN MJ Y LA CATEGORIA
 - openSnackbar(msg, category)

LA CATEGORIA ES UN STRING QUE PUEDE SER
- success 
PARA INDICAR AL SNACKBAR QUE FUE EXITOSO SI NO LE PASAMOS NADA TOMARA COMO QUE ES UN ERROR


*************************   
*/


const Alert = () => {

    const snackBarContext = useContext(SnackBarContext)
    const { open, msg, category } = snackBarContext
    return (
        <Dialog aria-labelledby="simple-dialog-title" open={open} maxWidth="md" fullWidth scroll="body" PaperProps={{
            style: {
                backgroundColor: 'transparent',
                boxShadow: 'none',
            },
        }}>
            <div id="container">
                {category === "success" ?
                    <RepusableAlert msg={msg} /> :
                    <RepusableAlert id="error-box" face='face2' mouth='mouth sad' shadow='shadow move' msg={msg} button='try again' severity='Error!' />
                }
            </div>
        </Dialog>
    )

}

export default Alert;