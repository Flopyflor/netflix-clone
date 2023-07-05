import React from "react";
import { getImageURL } from "../../api/Endpoints";
import { useNavigate } from "react-router-dom";
import { Image, Text } from "@nextui-org/react";
import styles from "./TitleCard.module.css"

const TitleCard = ({ movie }) => {

    const navigate = useNavigate();

    return (
        <div className={styles.titleCard}>
            <Image showSkeleton src={getImageURL(movie.poster)} onClick={()=>{navigate(`/${movie.type}/${movie.id}`)}}/> 

            <Text h5 className={styles.titleCardText}>
                {movie.title}
            </Text>
        </div>
    )
}

export default TitleCard;