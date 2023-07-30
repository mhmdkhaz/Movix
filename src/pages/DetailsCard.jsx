import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import UseFetchGet from "../Hooks/UseFetchData";
import { MediatMovieTv } from "../Hooks/UseContextApp";
import InfromationMovieTv from "../components/InfromationMovieTv";
import Cast from "../components/Cast";
import Video from "../components/Videos";
import Footer from "../components/Footer";
import SliderDetailsMovieTv from "../components/SliderDetailsMovieTv";

function DetailsCard() {
  const { id } = useParams();
  const { mediaTypeMovieTv } = useContext(MediatMovieTv);

  let dataUrlMovieTv = "";
  let castImagees = "";
  let videoMovieTv = "";
  let similarMovieTv = "";
  let recomndation = "";

  if (mediaTypeMovieTv === "movie") {
    dataUrlMovieTv = `https://api.themoviedb.org/3/movie/${id}`;
    // get cast movie
    castImagees = `https://api.themoviedb.org/3/movie/${id}/credits`;
    // get video
    videoMovieTv = `https://api.themoviedb.org/3/movie/${id}/videos`;
    // get similar
    similarMovieTv = `https://api.themoviedb.org/3/movie/${id}/similar`;
    // get recomndation
    recomndation = `https://api.themoviedb.org/3/movie/${id}/recommendations`;
  } else if (mediaTypeMovieTv === "tv") {
    dataUrlMovieTv = `https://api.themoviedb.org/3/tv/${id}`;
    // get cast tv
    castImagees = `https://api.themoviedb.org/3/tv/${id}/credits`;
    // get video
    videoMovieTv = `https://api.themoviedb.org/3/tv/${id}/videos`;
    // get similar
    similarMovieTv = `https://api.themoviedb.org/3/tv/${id}/similar`;
    // get recomndation
    recomndation = `https://api.themoviedb.org/3/tv/${id}/recommendations`;
  }

  // get information in movie and tv
  const [dataUrl] = UseFetchGet(`${dataUrlMovieTv}`, false);
  // get cast imges from movie and tv
  const [castImgMovieTv] = UseFetchGet(`${castImagees}`, false);
  // get cast imges from movie and tv
  const [videoWatch] = UseFetchGet(`${videoMovieTv}`, false);
  // get cast imges from movie and tv
  const [similar] = UseFetchGet(`${similarMovieTv}`, false);
  // get cast imges from movie and tv
  const [reco] = UseFetchGet(`${recomndation}`, false);

  // to slider
  let result = [similar, reco];

  return (
    <div className="bg-[#04152d] w-full h-auto pt-5">
      {/* informaton in movie and tv */}
      <InfromationMovieTv dataUrl={dataUrl} />
      <div className="container mx-auto lg:px-28 px-3  ">
        {/* cast movie and tv */}
        <Cast castImgaes={castImgMovieTv} />
        {/* vidos movie and tv */}
        <Video videoMovieTv={videoWatch} />
        {/*  */}
        {result.map((slider, index) => {
          return (
            <div key={index}>
              <SliderDetailsMovieTv
                dataSlider={slider}
                mediaType={mediaTypeMovieTv}
              />
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default DetailsCard;
