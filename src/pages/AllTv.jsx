import React, { useContext } from "react";
import AllMovieTv from "../components/AllMovieTv";
import { MediatMovieTv } from "../Hooks/UseContextApp";
import UseFetchGet from "../Hooks/UseFetchData";
import Footer from "../components/Footer";

function AllTv() {
  const { mediaTypeMovieTv, setMediaTypeMovieTv } = useContext(MediatMovieTv);

  const [genres] = UseFetchGet(
    "https://api.themoviedb.org/3/genre/tv/list",
    false
  );

  const genresData = genres.genres;
  if (mediaTypeMovieTv === "tv") {
    setMediaTypeMovieTv("tv");
  } else {
    setMediaTypeMovieTv("tv");
  }
  return (
    <div className="bg-[#04152d] w-full h-auto">
      <div className="md:container md:mx-auto px-10 pt-32">
        <AllMovieTv
          dataAll="https://api.themoviedb.org/3/discover/tv"
          media="tv"
          explore="explore movie"
          genresAll={genresData}
        />
      </div>
      <Footer />
    </div>
  );
}

export default AllTv;
