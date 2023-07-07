import MovieGrid from "../MovieGrid/MovieGrid";
import Alert from "../../../Components/alert/Alert";
import TVGrid from "../TVGrid/TVGrid";

const Home = () => {
    return (<>
        <Alert />
        <MovieGrid />
        <TVGrid />
    </>
    );
}

export default Home;