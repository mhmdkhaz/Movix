import React from "react";

function Videos({ videoMovieTv }) {
  return (
    <div className="">
      {videoMovieTv &&
        videoMovieTv.results &&
        videoMovieTv.results.length > 0 && (
          <div className="">
            <h1 className="text-white text-2xl my-10">Official Videos</h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  justify-center items-start gap-8">
              {videoMovieTv &&
                Array.isArray(videoMovieTv.results) &&
                videoMovieTv?.results.slice(0, 4).map((vidos, index) => {
                  return (
                    <div key={index}>
                      <iframe
                        src={`https://www.youtube.com/embed/${vidos.key}`}
                        className="w-full"
                      />
                      <h2 className="text-white text-xl mt-2">{vidos.name}</h2>
                    </div>
                  );
                })}
            </div>
          </div>
        )}
    </div>
  );
}

export default Videos;
