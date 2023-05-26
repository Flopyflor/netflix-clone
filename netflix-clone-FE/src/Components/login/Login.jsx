import './Login.css'
import UseLogin from './UseLogin.js';
const Login = () => {
    const { changeInput, onSubmit } = UseLogin()

    return (

        <div className="login-box" id="card">
            <div className='content'>
                <h2>Login</h2>
                <form onSubmit={onSubmit}>

                    <div className="user-box">
                        <input  autoComplete="email" type="text" name="email" required onChange={changeInput}/>
                        <label>Username</label>
                    </div>
                    <div className="user-box">
                        <input type="password" name="password" required onChange={changeInput} autoComplete="current-password"/>
                        <label>Password</label>
                    </div>
                    <button type="submit">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;