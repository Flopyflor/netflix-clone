import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import UserContext from "../context/userContext/UserContext";
import Home from "../Components/home/Home";
import Login from "../Components/login/Login";
import { BrowserRouter as Router } from "react-router-dom";
import SignUp from "../Components/signUp/SignUp";

const AppRouter = () => {
    //userContext   
    const userContext = useContext(UserContext);
    const { loading } = userContext;

    return (
        <Router>

            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/nueva-cuenta" element={<SignUp />} />

                {(!loading) ?
                    <>

                    </> : <></>}
            </Routes>
        </Router>
    );
}

export default AppRouter;