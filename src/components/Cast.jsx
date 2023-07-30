import React, { useEffect, useRef, useState } from "react";
import Glider from "react-glider";
import "glider-js/glider.min.css";
import CastLogo from "../images/avatar.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Cast({ castImgaes }) {
  const gliderRef = useRef(null);
  const [numSlides, setNumSlides] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setNumSlides(6);
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
      {castImgaes && castImgaes.cast && castImgaes.cast.length > 0 && (
        <div>
          {" "}
          <h1 className="text-white text-2xl py-10">Top Cast</h1>
          <Glider
            ref={gliderRef}
            scrollLock
            draggable
            hasArrows={false}
            slidesToShow={numSlides}
            slidesToScroll={numSlides}
            scrollToSlide={6}
            className="gradient-outline"
          >
            {castImgaes.cast &&
              castImgaes?.cast.map((castInfo, index) => (
                <div
                  className="flex flex-col justify-start items-center w-full h-full mx-2"
                  key={index}
                >
                  <div className="">
                    <LazyLoadImage
                      src={
                        castInfo.profile_path === null
                          ? CastLogo
                          : `https://image.tmdb.org/t/p/original${castInfo.profile_path}`
                      }
                      alt=""
                      effect="blur"
                      className="rounded-full object-cover mx-auto object-top w-[200px] lg:w-[150px] lg:h-[160px] h-[180px]"
                    />
                  </div>
                  <div className="text-center start mt-5">
                    <h1 className="text-white capitalize">{castInfo.name}</h1>
                    <p className="text-white opacity-50">
                      {castInfo.character}
                    </p>
                  </div>
                </div>
              ))}
          </Glider>
        </div>
      )}
    </div>
  );
}

export default Cast;
