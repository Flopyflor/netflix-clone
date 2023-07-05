import React from "react";
import { getImageURL } from "../../api/Endpoints";
import { useNavigate } from "react-router-dom";
import { Image, Text } from "@nextui-org/react";
import "./TitleCard.css"

const TitleCard = ({ movie }) => {

    const navigate = useNavigate();

    return (
        <div className="titleCard" key={movie.id}>
            <Image showSkeleton src={getImageURL(movie.poster)} onClick={()=>{navigate(`/${movie.type}/${movie.id}`)}}/> 

            <Text h5 className="titleCardText">
                {movie.title}
            </Text>
        </div>
    )
}

export default TitleCard;