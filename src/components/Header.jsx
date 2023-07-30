import React, { useContext, useState } from "react";
import styled from "styled-components";
import UseFetchGet from "../Hooks/UseFetchData";
import { useEffect } from "react";
import { MediatMovieTv } from "../Hooks/UseContextApp";
import API from "../shared/API";
import { Link } from "react-router-dom";

function Header() {
  const { setValueSearch } = useContext(MediatMovieTv);
  const [inputValue, setInputValue] = useState("");

  const [data] = UseFetchGet(
    "https://api.themoviedb.org/3/movie/popular",
    true
  );
  const [backImg, setBackImg] = useState(null);

  // getimg in api
  const [getImg] = API();

  const getRandomImg = () => {
    if (data) {
      const copy = [...data];
      for (let index = 0; index < 1; index++) {
        const randomIndex = Math.floor(Math.random() * copy.length);
        setBackImg(copy[randomIndex].poster_path);
      }
    }
  };
  useEffect(() => {
    getRandomImg();
  }, [data]);

  // get input value
  function handleInputChange(event) {
    const newValue = event.target.value;
    setInputValue(newValue);
  }

  function handleFormSubmit() {
    setValueSearch(inputValue);
  }

  return (
    <div>
      <Div
        className="w-full h-screen flex justify-center items-center bg-no-repeat bg-cover "
        style={{
          backgroundImage: `url(${getImg}${backImg})`,
          backgroundPosition: `center `,
        }}
      >
        <div className="flex flex-col justify-center items-center gap-12 text-center relative z-40">
          <div className="mainText text-white">
            <h2 className="capitalize lg:text-[5vw] text-[8vw] mb-3">
              Welcome.
            </h2>
            <span className="subTitle lg:text-[1.8vw] text-[5vw]">
              Millions of movies, TV shows and people to discover. Explore now.
            </span>
          </div>
          <div className="flex justify-center lg:w-3/4 w-[95%] md:h-12 h-11">
            <input
              type="text"
              placeholder="Search for a movie or tv show...."
              className="bg-white h-full rounded-l-full  w-full  p-5 outline-none"
              onChange={handleInputChange}
            />
            <Link to={`${inputValue === "" ? "" : "SearchAll"}`}>
              <Button
                className="md:px-10 sm:px-2 px-2 py-2 rounded-r-full text-white capitalize sm:text-[1.5vw] text-[6vw] h-full"
                onClick={handleFormSubmit}
              >
                Search
              </Button>
            </Link>
          </div>
        </div>
        {/* overlay in bottom */}
        <div
          className="overlay z-10 absolute bottom-0 left-0 w-full h-64"
          style={{
            background:
              "linear-gradient(180deg,rgba(4,21,45,0) 0%,#04152d 79.17%)",
          }}
        ></div>
      </Div>
    </div>
  );
}

export default Header;

const Div = styled.div`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgb(0, 0, 0, 0.7);
  }
`;

const Button = styled.button`
  background: linear-gradient(98.37deg, #f89e00 0.99%, #da2f68 100%);
`;
