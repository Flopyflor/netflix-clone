import React from "react";
import './Carousel.css'

const Carousel = ({children}) => {

    const scrollLeft = () => {
        document.getElementsByClassName("items")[0].scrollBy({
          top: 0,
          left: -window.innerWidth,
          behavior: "smooth"
        });
      }
    
      const scrollRight = () => {
        document.getElementsByClassName("items")[0].scrollBy({
          top: 0,
          left: window.innerWidth,
          behavior: "smooth"
        });
      }

    return (
        <>
          <div className="movieCarousel">

            <div className="controlOverlay">
              <div className="controlLeft overlayButton" onClick={scrollLeft}>🞀</div>
              <div className="controlRight overlayButton" onClick={scrollRight}>🞂</div>
            </div>

            <div className="items">

              {children}
              
            </div>
            </div>
  
        </>
      )
};

export default Carousel;