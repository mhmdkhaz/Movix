import React, { useContext } from "react";
import AllMovieTv from "../components/AllMovieTv";
import { MediatMovieTv } from "../Hooks/UseContextApp";
import UseFetchGet from "../Hooks/UseFetchData";
import Footer from "../components/Footer";

function AllMovie() {
  const { mediaTypeMovieTv, setMediaTypeMovieTv } = useContext(MediatMovieTv);

  const [genres] = UseFetchGet(
    "https://api.themoviedb.org/3/genre/movie/list",
    false
  );

  const genresData = genres.genres;

  if (mediaTypeMovieTv === "movie") {
    setMediaTypeMovieTv("movie");
  } else {
    setMediaTypeMovieTv("movie");
  }

  return (
    <div className="bg-[#04152d] w-full h-auto">
      <div className="md:container md:mx-auto px-10 py-32">
        <AllMovieTv
          dataAll="https://api.themoviedb.org/3/discover/movie"
          media="movie"
          explore="explore movie"
          genresAll={genresData}
        />
      </div>
      <Footer />
    </div>
  );
}

export default AllMovie;
