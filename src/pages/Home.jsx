import React from "react";
import Header from "../components/Header";
import ConteinerSliderItems from "../shared/ConteinerSliderItems";
import Footer from "../components/Footer";

function Home() {
  const dataUrl = [
    {
      firstUrl: "https://api.themoviedb.org/3/trending/movie/day",
      secondUrl: "https://api.themoviedb.org/3/trending/tv/week",
      text: "Trending",
      checkOne: "day",
      checkTwo: "week",
    },
    {
      firstUrl: "https://api.themoviedb.org/3/movie/popular",
      secondUrl: "https://api.themoviedb.org/3/tv/popular",
      text: "whats popular",
      checkOne: "movies",
      checkTwo: "tv show",
    },
    {
      firstUrl: "https://api.themoviedb.org/3/movie/top_rated",
      secondUrl: "https://api.themoviedb.org/3/tv/top_rated",
      text: "top rated",
      checkOne: "movies",
      checkTwo: "tv show",
    },
  ];

  return (
    <div>
      <Header />
      <div className="bg-[#04152d] w-full h-auto">
        <div className="md:container md:mx-auto px-10">
          {dataUrl.map((location, index) => {
            return (
              <ConteinerSliderItems
                key={index}
                firstUrl={location.firstUrl}
                secondUrl={location.secondUrl}
                text={location.text}
                checkOne={location.checkOne}
                checkTwo={location.checkTwo}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
