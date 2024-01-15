import React, { useContext } from "react";
import { MediatMovieTv } from "../Hooks/UseContextApp";
import UseFetchGet from "../Hooks/UseFetchData";
import { Link } from "react-router-dom";
import Card from "./Card";

function Search() {
  const { valueSearch } = useContext(MediatMovieTv);

  const [dataSearch] = UseFetchGet(
    "https://api.themoviedb.org/3/search/multi",
    true,
    "",
    `&query=${valueSearch}`
  );

  return (
    <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
      {dataSearch && Array.isArray(dataSearch) && dataSearch.length > 0 ? (
        dataSearch.map((searchMovieTv, index) => {
          return (
            <Link
              to={`/${searchMovieTv.media_type}/${searchMovieTv.id}`}
              key={index}
              className="my-5"
            >
              <Card
                type={searchMovieTv.media_type || ""}
                img={searchMovieTv.poster_path || ""}
                title={searchMovieTv.title || searchMovieTv.name || ""}
                date={
                  searchMovieTv.release_date ||
                  searchMovieTv.first_air_date ||
                  ""
                }
                progres={searchMovieTv.vote_average}
                genres={searchMovieTv.genre_ids || ""}
              />
            </Link>
          );
        })
      ) : (
        <div>No results found</div>
      )}
    </div>
  );
}

export default Search;
