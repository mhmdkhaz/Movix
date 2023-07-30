import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import styled from "styled-components";

import NoPoster from "../images/no-poster.png";

import Genres from "../components/Genres";

function Card({ img, title, date, progres, genres }) {
  // console.log(genres);
  return (
    <div>
      <div className="mr-4">
        <div className="relative">
          <figure className="relative">
            <LazyLoadImage
              src={
                img === null || img === ""
                  ? NoPoster
                  : `https://image.tmdb.org/t/p/original${img}`
              }
              alt=""
              effect="blur"
              className="h-full w-full rounded-2xl"
            />
            <div className="genres">
              <Genres allGenres={genres} />
            </div>
          </figure>
          <div className="circleProgress absolute bottom-0">
            <Progress progres={progres}>{progres?.toFixed(1)}</Progress>
          </div>
        </div>
        <div className="textCard mt-8">
          <h1 className="text-white text-xl">{title}</h1>
          <span className="text text-white opacity-50 text-sm">{date}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
const Progress = styled.span`
  width: 100px;
  height: 100px;
  padding: 10px;
  border-radius: 50%;
  background: radial-gradient(closest-side, white 79%, transparent 80% 100%),
    conic-gradient(
      ${(props) => {
        if (`${props.progres?.toFixed(1) * 10}%` >= "80%") {
          return "green";
        } else if (`${props.progres?.toFixed(1) * 10}%` >= "50%") {
          return "orange";
        } else {
          return "red";
        }
      }},
      ${(props) => `${props.progres?.toFixed(1) * 10}%`},
      pink 0
    );
`;
