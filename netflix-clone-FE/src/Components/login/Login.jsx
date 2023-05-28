import { Link } from 'react-router-dom';
import './Login.css'
import UseLogin from './UseLogin.js';
import ReusableLogin from '../reusableLogin/ReusableLogin';
const Login = () => {
    const { changeInput, onSubmit } = UseLogin()

    return (
        <ReusableLogin onSubmit={onSubmit} title={"login"}>

            <div className="user-box">
                <input autoComplete="email" type="text" name="email" required onChange={changeInput} autoFocus />
                <label>Username</label>
            </div>
            <div className="user-box">
                <input type="password" name="password" required onChange={changeInput} autoComplete="current-password" />
                <label>Password</label>
            </div>
            <div className='link-Container'>
                <Link to={"/nueva-cuenta"} className="link">
                    <p>No tienes cuenta? Registrate</p>
                </Link>
            </div>
        </ReusableLogin>
    );
}

export default Login;