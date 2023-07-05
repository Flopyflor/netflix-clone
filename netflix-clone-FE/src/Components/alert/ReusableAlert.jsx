
const RepusableAlert = ({ id = "success-box", msg = "éxito!", face = "face", mouth = "mouth happy", shadow = "shadow scale", severity = "Success!", button = "continue", closeSnackbar }) => {

    const navegationCLick = () => closeSnackbar()


    return (
        <div id={id}>
            <div className="dot"></div>
            <div className="dot two"></div>
            <div className={face}>
                <div className="eye"></div>
                <div className="eye right"></div>
                <div className={mouth}></div>
            </div>
            <div className={shadow}></div>
            <div className="message"><h1 className="alert alert-h1">{severity}</h1><p>{msg}</p></div>
            <button className="button-box"><h1 className="green alert-h1" onClick={navegationCLick}>{button}</h1></button>
        </div>
    );
}

export default RepusableAlert;