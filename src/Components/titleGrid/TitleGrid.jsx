import React from 'react';
import styles from "./TitleGrid.module.css";

const TitleGrid = ({children}) => {
    return (
        <div className={styles.movieGrid}>
            {children}
        </div>
        
    )
}

export default TitleGrid;