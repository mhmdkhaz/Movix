import React, { createContext, useState, useEffect, useContext } from "react";
import SliderCard from "./SliderCard";
import TabItems from "./TabItems";
import { MediatMovieTv } from "../Hooks/UseContextApp";

export const MyContext = createContext();


function ConteinerSliderItems({
  firstUrl,
  secondUrl,
  text,
  checkOne,
  checkTwo,
}) {
  const [data, setData] = useState(firstUrl);
  const [mediaType, setMediaType] = useState("movie");

  const { setMediaTypeMovieTv } = useContext(MediatMovieTv);

  useEffect(() => {
    setMediaTypeMovieTv(mediaType);
  }, [mediaType]);

  return (
    <div className="py-5">
      <MyContext.Provider
        value={{
          firstUrl,
          secondUrl,
          data,
          setData,
          mediaType,
          setMediaType,
          text,
          checkOne,
          checkTwo,
        }}
      >
        <TabItems />
        <SliderCard />
      </MyContext.Provider>
    </div>
  );
}

export default ConteinerSliderItems;
