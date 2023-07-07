import React, {useRef} from "react";
import styles from './Carousel.module.css'

const Carousel = ({children}) => {

    const carousel = useRef(null);

    const scrollLeft = () => {
        carousel.current.scrollBy({
          top: 0,
          left: -window.innerWidth,
          behavior: "smooth"
        });
      }
    
      const scrollRight = () => {
        carousel.current.scrollBy({
          top: 0,
          left: window.innerWidth,
          behavior: "smooth"
        });
      }

    return (
        <>
          <div className={styles.movieCarousel}>

            <div className={styles.controlOverlay}>
              <div className={styles.overlayButton} onClick={scrollLeft}>🞀</div>
              <div className={styles.overlayButton} onClick={scrollRight}>🞂</div>
            </div>

            <div className={styles.items} ref={carousel}>

              {children}
              
            </div>
            </div>
  
        </>
      )
};

export default Carousel;