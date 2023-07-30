import React, { useRef, useEffect, useState, useContext } from "react";
import Glider from "react-glider";
import "glider-js/glider.min.css";
import { MyContext } from "./ConteinerSliderItems";
// import API from "./API";
import UseFetchGet from "../Hooks/UseFetchData";
import Card from "../components/Card";
import { Link } from "react-router-dom";

function SliderCard() {
  const gliderRef = useRef(null);
  const [numSlides, setNumSlides] = useState(5);

  const { data, mediaType } = useContext(MyContext);
  const [dataUrl] = UseFetchGet(`${data}`, true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setNumSlides(5);
      } else if (window.innerWidth >= 768) {
        setNumSlides(4);
      } else if (window.innerWidth >= 480) {
        setNumSlides(3);
      } else {
        setNumSlides(2);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div className="glider-wrapper mt-10 ">
        <Glider
          ref={gliderRef}
          scrollLock
          draggable
          hasArrows
          slidesToShow={numSlides}
          slidesToScroll={numSlides}
          scrollToSlide={5}
          className="gradient-outline"
        >
          {Array.isArray(dataUrl) &&
            dataUrl?.map((card) => (
              <Link to={`${mediaType}/${card.id}`} key={card.id}>
                <Card
                  type={card.media_type}
                  img={card.poster_path}
                  title={card.title || card.name}
                  date={card.release_date || card.first_air_date}
                  progres={card.vote_average}
                  genres={card.genre_ids}
                />
              </Link>
            ))}
        </Glider>
      </div>
    </div>
  );
}

export default SliderCard;
