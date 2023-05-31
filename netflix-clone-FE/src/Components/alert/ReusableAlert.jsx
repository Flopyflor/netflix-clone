const RepusableAlert = ({ id = "success-box", msg = "exito!", face = "face", mouth = "mouth happy", shadow = "shadow scale", severity = "Success!", button="continue" }) => {
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
            <div className="message"><h1 className="alert">{severity}</h1><p>{msg}</p></div>
            <button className="button-box"><h1 className="green">{button}</h1></button>
        </div>
    );
}

export default RepusableAlert;