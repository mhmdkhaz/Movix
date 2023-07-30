import React, { useState, useEffect, useContext } from "react";
import { MediatMovieTv } from "../Hooks/UseContextApp";
import useFetchGet from "../Hooks/UseFetchData";

function Genres({ allGenres }) {
  const media = useContext(MediatMovieTv);
  const [genresMovie, setGenresMovie] = useState([]);
  const [genresTv, setGenresTv] = useState([]);
  const [matchedGenres, setMatchedGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [data] = useFetchGet(
    media.mediaTypeMovieTv === "movie"
      ? "https://api.themoviedb.org/3/genre/movie/list"
      : "https://api.themoviedb.org/3/genre/tv/list",
    false
  );

  // console.log(data);
  useEffect(() => {
    if (data) {
      if (media.mediaTypeMovieTv === "movie") {
        setGenresMovie(data.genres);
      } else {
        setGenresTv(data.genres);
      }
      setIsLoading(false);
    }
  }, [data, media]);

  useEffect(() => {
    if (data && allGenres.length > 0) {
      const matched = [];
      allGenres.forEach((genreId) => {
        if (
          media.mediaTypeMovieTv === "movie" &&
          Array.isArray(genresMovie) &&
          genresMovie.length > 0
        ) {
          const genre = genresMovie.find((g) => g.id === genreId);
          if (genre) {
            matched.push(genre);
          }
        } else if (
          media.mediaTypeMovieTv === "tv" &&
          Array.isArray(genresTv) &&
          genresTv.length > 0
        ) {
          const genre = genresTv.find((g) => g.id === genreId);
          if (genre) {
            matched.push(genre);
          }
        }
      });
      setMatchedGenres([...matched]);
    }
  }, [allGenres, media, genresMovie, genresTv, data]);

  return (
    <div className="text-white flex sm:flex-row flex-col flex-wrap  gap-2 absolute md:bottom-11 md:right-4 right-1 bottom-5 ">
      {!isLoading &&
        matchedGenres?.slice(0, 2).map((genre, index) => (
          <h2
            key={index}
            className="bg-[#da2f68] py-1 px-[5px] rounded-md md:text-xs text-[10px]"
          >
            {genre.name}
          </h2>
        ))}
    </div>
  );
}

export default Genres;
