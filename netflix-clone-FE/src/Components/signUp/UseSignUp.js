import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/userContext/UserContext";

const UseSignUp = () => {
    const navigate = useNavigate()

    //userContext
    const userContext = useContext(UserContext);
    const { registerUser, authenticated } = userContext;

    // hook de crear usuario
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    // destroyoning del hook user
    const { firstName, lastName, email, password, confirmPassword } = user

    useEffect(() => {
        if (authenticated) {

            navigate("/");
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [authenticated])

    const changeInput = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const changePhone = (e) => {
        setUser({
            ...user,
            phone: e
        })
    }
    const changeAlternativePhone = (e) => {
        setUser({
            ...user,
            alternativePhone: e
        })
    }

    const changeData = (date) => {
        setUser({
            ...user,
            dateOfBirth: date
        })
    };

    const loginButtonDisabled = () => isEmpty(firstName) || isEmpty(lastName) || isEmpty(email) || isEmpty(password) || isEmpty(confirmPassword)

    const isEmpty = (aField) => {
        return aField === "";
    }

    const onSubmit = (e) => {
        e.preventDefault()

        // if (password !== confirmar) {
        //   openSnackbar("las contraseñas no coinciden", "error")
        // }
        // else {
        //   closeSnackbar()
        registerUser({ firstName, lastName, email, password, confirmPassword})
        // }

    }
    return {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        changeInput,
        changePhone,
        changeAlternativePhone,
        changeData,
        loginButtonDisabled,
        onSubmit
    }
}

export default UseSignUp;