import { useEffect, useRef, useState, useMemo, useContext } from "react";
import UseFetchData from "../Hooks/UseFetchData";
import Card from "./Card";
import { Link } from "react-router-dom";
import Select from "react-select";

function AllMovieTv({ dataAll, media, explore, genresAll }) {
  const [pageNumber, setPageNumber] = useState(1);
  const [dataDiscover, setDataDiscover] = useState(null);
  const [movies, setMovies] = useState([]);
  const loaderRef = useRef(null);
  const [options, setOptions] = useState([]);

  const [genreFilter, setGenreFilter] = useState(null); // حالة الفلتر الجديدة

  useEffect(() => {
    setDataDiscover([]);
    setPageNumber(1);
    setMovies([]);
  }, [dataAll]);

  useEffect(() => {
    if (dataDiscover && dataDiscover.results) {
      setMovies((prevMovies) => [...prevMovies, ...dataDiscover.results]);
    }
  }, [dataDiscover]);

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      threshold: 0,
    });
    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setPageNumber((prevPageNumber) => prevPageNumber + 1);
    }
  };

  const [data] = UseFetchData(`${dataAll}`, false, `&page=${pageNumber}`);

  useEffect(() => {
    if (data) {
      setDataDiscover(data);
    }
  }, [data, pageNumber]);

  useEffect(() => {
    if (genresAll && genresAll.length > 0) {
      const updatedOptions = genresAll.map((genre) => ({
        value: genre.id,
        label: genre.name,
      }));
      setOptions(updatedOptions);
    }
  }, [genresAll]);

  // تصفية الأفلام المعروضة باستخدام genreFilter
  const filteredMovies = useMemo(() => {
    if (!genreFilter || genreFilter.length === 0) {
      return movies;
    } else {
      return genreFilter.reduce((filtered, genre) => {
        const filteredMoviesByGenre = movies.filter((movie) =>
          movie.genre_ids.includes(genre.value)
        );
        return [...filteredMoviesByGenre];
      }, []);
    }
  }, [genreFilter, movies]);

  // تحديث genreFilter عند تغيير الفلتر المختار في Select
  const handleGenreFilterChange = (selectedOptions) => {
    if (selectedOptions) {
      setGenreFilter(selectedOptions);
    } else {
      setGenreFilter(null);
    }
  };

  return (
    <div>
      <div className="filter flex lg:flex-row flex-col lg:justify-between justify-center  items-center">
        <h1 className="text-white capitalize lg:my-0 my-5 text-2xl">
          {explore}
        </h1>
        <Select
          isMulti
          name="genres"
          options={options}
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={handleGenreFilterChange} // تحديث genreFilter عند تغيير الفلتر المختار
        />
      </div>
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 ">
        {filteredMovies &&
          filteredMovies.map((data, index) => {
            return (
              <div className="my-5" key={index}>
                <Link to={`/${media}/${data.id}`}>
                  <Card
                    key={data.id}
                    img={data.poster_path}
                    title={data.title || data.name}
                    date={data.release_date || data.first_air_date}
                    progres={data.vote_average}
                    genres={data.genre_ids}
                  />
                </Link>
              </div>
            );
          })}
        <div ref={loaderRef}></div>
      </div>
    </div>
  );
}

export default AllMovieTv;
