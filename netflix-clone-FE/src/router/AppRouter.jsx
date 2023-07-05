import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import UserContext from "../context/userContext/UserContext";
import Home from "../pages/home/home/Home";
import Login from "../Components/login/Login";
import { BrowserRouter as Router } from "react-router-dom";
import SignUp from "../Components/signUp/SignUp";
import Layout from '../Components/header/Layout'
import MovieView from "../pages/movie/MovieView/MovieView";
import MovieCategory from '../pages/category/MovieCategory'
import SearchMovieResults from "../pages/searchMovie/SearchMovieResults";
import TVSeries from "../pages/TVSeries/TVSeries";

const AppRouter = () => {
    //userContext   
    const userContext = useContext(UserContext);
    const { loading } = userContext;

    return (
        <Router>
            <Layout>


                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/nueva-cuenta" element={<SignUp />} />
                    <Route exact path="/movie/:id" element={<MovieView/>} />
                    <Route exact path="/tv/:id" element={<TVSeries/>} />
                    <Route exact path="/:category/movies" element={<MovieCategory/>} />
                    <Route exact path="/search/movies/:query" element={<SearchMovieResults/>} />

                    {(!loading) ?
                        <>

                        </> : <></>}
                </Routes>
            </Layout>
        </Router>
    );
}

export default AppRouter;