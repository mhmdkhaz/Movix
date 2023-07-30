import React, { useContext, useState } from "react";
import styled from "styled-components";
import { MyContext } from "./ConteinerSliderItems";

function TabItems() {
  const {
    firstUrl,
    secondUrl,
    setData,
    setMediaType,
    text,
    checkOne,
    checkTwo,
  } = useContext(MyContext);

  // chdeck button color
  const [choose, setChoosee] = useState(true);

  // trending
  const handleFirstUrl = () => {
    setData(firstUrl);

    setChoosee(true);
    // change state api
    setMediaType("movie");
  };
  const handleSecondUrl = () => {
    setData(secondUrl);
    setChoosee(false);

    // change state api
    setMediaType("tv");
  };

  return (
    <div className="flex lg:flex-row flex-col lg:justify-between justify-center  items-center ">
      <h1 className="title text-white text-2xl capitalize text-center lg:text-left ">
        {text}
      </h1>
      <div className="flex gap-5 tabItems bg-white rounded-full px-8 py-1 relative text-white text-center mt-5 lg:mt-0">
        <span
          className={`tabItemDay z-10 capitalize text-[5vw] sm:text-[1vw] whitespace-nowrap ${
            choose ? "text-white" : "text-black"
          }`}
          onClick={handleFirstUrl}
        >
          {checkOne}
        </span>
        <span
          className={`tabItemDay z-10 capitalize text-[5vw] sm:text-[1vw] whitespace-nowrap ${
            choose ? "text-black" : "text-white"
          }`}
          onClick={handleSecondUrl}
        >
          {checkTwo}
        </span>
        <Span
          className={`movingBg w-full absolute top-0 ${
            choose ? "left-0" : "left-2/4"
          }`}
        ></Span>
      </div>
    </div>
  );
}

export default TabItems;

const Span = styled.span`
  height: 100%;
  width: 50%;
  border-radius: 15px;
  background-image: linear-gradient(98.37deg, #f89e00 0.99%, #da2f68 100%);
  transition: left 0.4s linear;
`;
