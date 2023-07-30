import React from "react";
import Search from "../components/Search";
import Footer from "../components/Footer";

function SearchAll() {
  return (
    <div>
      <div className=" bg-[#04152d] w-full h-auto px-10 p-32">
        <Search />
      </div>
      <Footer />
    </div>
  );
}

export default SearchAll;
