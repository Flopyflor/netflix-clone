const SignUp = () => {
    return (
        <div className="login-box" id="card">
            <div className='content'>
                <h2>SignUp</h2>
                <form>
                    <div className="user-box">
                        <input autoComplete="email" type="text" name="email" required />
                        <label>Email</label>
                    </div>
                    <div className="user-box">
                        <input autoComplete="nombre" type="text" name="firstName" required />
                        <label>Nombre</label>
                    </div>
                    <div className="user-box">
                        <input autoComplete="apellido" type="text" name="lastName" required />
                        <label>Apellido</label>
                    </div>
                    <div className="user-box">
                        <input type="password" name="password" required autoComplete="current-password" />
                        <label>Password</label>
                    </div>
                    <div className="user-box">
                        <input type="password" name="confirmPassword" required autoComplete="current-password" />
                        <label>confirmar Password</label>
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

export default SignUp;