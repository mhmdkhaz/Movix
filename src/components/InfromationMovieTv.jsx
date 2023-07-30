import React from "react";

// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
// styyle compoentn
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";

function InfromationMovieTv({ dataUrl }) {
  return (
    <div>
      <BgImg
        className="w-full lg:h-screen h-auto flex justify-center items-center bg-no-repeat bg-cover "
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${dataUrl?.backdrop_path})`,
          backgroundPosition: `center `,
        }}
      >
        <div className="grid grid-cols-3  justify-center items-center container mx-auto px-8 py-28 lg:py-0 relative z-20 h-auto lg:h-[500px]">
          <figure className="flex justify-center text-center md:text-right w-auto col-span-3 lg:col-span-1">
            <LazyLoadImage
              src={`https://image.tmdb.org/t/p/original${dataUrl?.poster_path}`}
              alt=""
              className="mx-auto md:mx-0 rounded-xl md:h-[500px] h-auto"
              effect="blur"
            />
          </figure>
          {/* inforamtion */}
          <div className="flex flex-col justify-start items-start w-full h-full col-span-3 lg:col-span-2 relative z-30 lg:mt-0 mt-8">
            <h1 className="text-white text-4xl">
              {dataUrl?.name || dataUrl?.title} (
              <span>
                {dataUrl?.release_date?.slice(0, 4) ||
                  dataUrl?.last_air_date?.slice(0, 4)}
                )
              </span>
            </h1>
            <p className="text-xl text-white opacity-50 my-3 italic">
              {dataUrl?.tagline}
            </p>
            <div className="genres flex flex-wrap gap-4">
              {Array.isArray(dataUrl) &&
                dataUrl?.genres.map((genre, index) => {
                  return (
                    <span
                      key={index}
                      className="py-1 px-2 bg-[#da2f68] text-xs text-white rounded-md mx-1"
                    >
                      {genre.name}
                    </span>
                  );
                })}
            </div>
            <div className="watchTarget flex flex-wrap justify-between items-center my-8 gap-8 w">
              <div className="circleProgress">
                <Progress
                  progres={dataUrl?.vote_average}
                  className="text-white"
                >
                  {dataUrl?.vote_average?.toFixed(1)}
                </Progress>
              </div>
              <div className="play flex justify-center items-center">
                <div className=" border-2 border-white border-solid rounded-full px-8 py-7">
                  <FontAwesomeIcon
                    icon={faPlay}
                    className="text-white text-4xl"
                  />
                </div>
              </div>
              <h1 className="text-white text-2xl capitalize hidden lg:block">
                watch trayler
              </h1>
            </div>
            <div className="overview">
              <h1 className="text-white text-3xl capitalize mb-2">Overview</h1>
              <p className="text-white leading-6">{dataUrl?.overview}</p>
            </div>
            <ul className="info flex flex-wrap gap-5 w-full mt-8 p-5 border-b-2 border-[rgba(255,255,255,.)] border-solid">
              <li className="text-white capitalize">
                status:{" "}
                <span className="text-white opacity-50">{dataUrl?.status}</span>
              </li>
              <li className="text-white capitalize">
                release date:{" "}
                <span className="text-white opacity-50">
                  {dataUrl?.first_air_date || dataUrl?.release_date}
                </span>
              </li>
              <li className="text-white capitalize">
                Runtime:{" "}
                <span className="text-white opacity-50">
                  {dataUrl?.runtime}
                </span>
              </li>
            </ul>
            <ul className="info flex  gap-5 w-full mt-8 p-5 border-b-2 border-[rgba(255,255,255,.)] border-solid">
              <li className="text-white capitalize">
                Director:{" "}
                <span className="text-white opacity-50">{dataUrl?.status}</span>
              </li>
            </ul>
          </div>
        </div>
        {/* overlay in bottom */}
        <div
          className="overlay z-10 absolute bottom-0 left-0 w-full h-64 "
          style={{
            background:
              "linear-gradient(180deg,rgba(4,21,45,0) 0%,#04152d 79.17%)",
          }}
        ></div>
      </BgImg>
    </div>
  );
}

export default InfromationMovieTv;

const BgImg = styled.div`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: -webkit-fill-available;
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

const Progress = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  padding: 10px;
  border-radius: 50%;

  background: radial-gradient(
      closest-side,
      rgba(0, 0, 0) 79%,
      transparent 80% 100%
    ),
    conic-gradient(
      ${(props) => {
        if (`${props.progres?.toFixed(1) * 10}%` >= "75%") {
          return "green";
        } else if (`${props.progres.toFixed(1) * 10}%` >= "50%") {
          return "orange";
        } else {
          return "red";
        }
      }},
      ${(props) => `${props.progres?.toFixed(1) * 10}%`},
      white 0
    );
`;
