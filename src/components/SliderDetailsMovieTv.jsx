import React, { useEffect, useRef, useState } from "react";
import Glider from "react-glider";
import "glider-js/glider.min.css";
import { Link } from "react-router-dom";
import Card from "./Card";

function SliderDetailsMovieTv({ dataSlider, mediaType }) {
  const gliderRef = useRef(null);
  const [numSlides, setNumSlides] = useState(5);
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
      <div>
        <div>
          <h1 className="text-white text-2xl my-10">Similar Movies</h1>
          <div className="glider-wrapper mt-10 ">
            <Glider
              ref={gliderRef}
              scrollLock
              draggable
              hasArrows={false}
              slidesToShow={numSlides}
              slidesToScroll={numSlides}
              scrollToSlide={5}
              className="gradient-outline"
            >
              {dataSlider.results &&
                dataSlider.results.map((card) => {
                  return (
                    <Link to={`/${mediaType}/${card.id}`} key={card.id}>
                      <Card
                        type={card.media_type}
                        img={card.poster_path}
                        title={card.title || card.name}
                        date={card.release_date || card.first_air_date}
                        progres={card.vote_average}
                        genres={card.genre_ids}
                      />
                    </Link>
                  );
                })}
            </Glider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderDetailsMovieTv;
