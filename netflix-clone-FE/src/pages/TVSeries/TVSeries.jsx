import { useParams } from "react-router-dom";
import { getImageURL, getTVById } from "../../api/Endpoints";
import API from "../../api/Urls"
import useSWR from 'swr'
import { Loading, Text, Image } from "@nextui-org/react";

function TVSeries() {
    const {id} = useParams();

    const {data: series, isLoading: seriesLoading, error: seriesError} = useSWR(`seriesDetails${id}`, async (name) => await getTVById(id));
 
    if (seriesLoading) {
        return <Loading/>
    }
    else if (seriesError) {
        return <h1>{seriesError.message}</h1>
    }
    else {
        return (
            <>

            <div>
                <Text h1>{series.title}</Text>
                <Image showSkeleton src={getImageURL(series.backdrop, API.IMAGE_SIZES.W1280)} alt="" />
                <Text h3>{series.overview}</Text>
                <Text h5>Status: {series.inProduction? "Ongoing": "Finished"}</Text>
                <Text h5>Number of episodes: {series.episodes}</Text>
            </div>
    
            </>
        );
    }

}

export default TVSeries;

