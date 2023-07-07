import ReusableLogin from "../reusableLogin/ReusableLogin";
import UseSignUp from "./UseSignUp";

const SignUp = () => {
    const { firstName, lastName, email, password, confirmPassword, changeInput,
        onSubmit } = UseSignUp()
    return (
        <ReusableLogin onSubmit={onSubmit} title={"SignUp"}>
            <div className="user-box">
                <input autoComplete="email" type="text" name="email" required onChange={changeInput} value={email} />
                <label>Email</label>
            </div>
            <div className="user-box">
                <input autoComplete="nombre" type="text" name="firstName" required onChange={changeInput} value={firstName} />
                <label>Nombre</label>
            </div>
            <div className="user-box">
                <input autoComplete="apellido" type="text" name="lastName" required onChange={changeInput} value={lastName} />
                <label>Apellido</label>
            </div>
            <div className="user-box">
                <input type="password" name="password" required autoComplete="current-password" onChange={changeInput} value={password} />
                <label>Password</label>
            </div>
            <div className="user-box">
                <input type="password" name="confirmPassword" required autoComplete="current-password" onChange={changeInput} value={confirmPassword} />
                <label>confirmar Password</label>
            </div>
        </ReusableLogin>
    );
}

export default SignUp;