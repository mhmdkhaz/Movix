import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// icon
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-[#020c1b] w-full">
      <div className="container mx-auto md:px-64 sm:px-10 px-2 py-8">
        <ul className="flex justify-center gap-5 text-white my-5">
          <li className="capitalize transition duration-300 ease-in-out hover:text-[#da2f68] cursor-pointer text-[4vw] sm:text-[2vw] lg:text-[1.2vw]">
            teem of use
          </li>
          <li className="capitalize transition duration-300 ease-in-out hover:text-[#da2f68] cursor-pointer text-[4vw] sm:text-[2vw] lg:text-[1.2vw]">
            Privacy-Policy
          </li>
          <li className="capitalize transition duration-300 ease-in-out hover:text-[#da2f68] cursor-pointer text-[4vw] sm:text-[2vw] lg:text-[1.2vw]">
            About
          </li>
          <li className="capitalize transition duration-300 ease-in-out hover:text-[#da2f68] cursor-pointer text-[4vw] sm:text-[2vw] lg:text-[1.2vw]">
            Blog
          </li>
          <li className="capitalize transition duration-300 ease-in-out hover:text-[#da2f68] cursor-pointer text-[4vw] sm:text-[2vw] lg:text-[1.2vw]">
            FAQ
          </li>
        </ul>
        <p className="text-white opacity-50 text-center text-[14px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <div className="flex flex-wrap justify-center gap-6 mt-5">
          <FontAwesomeIcon
            icon={faFacebookF}
            className="text-white bg-[#04152d] rounded-full cursor-pointer w-4 h-4 p-4 transition-all duration-300 ease-in-out hover:shadow-sm hover:shadow-white"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-white bg-[#04152d] rounded-full cursor-pointer w-4 h-4 p-4 transition-all duration-300 ease-in-out hover:shadow-sm hover:shadow-white"
          />
          <FontAwesomeIcon
            icon={faTwitter}
            className="text-white bg-[#04152d] rounded-full cursor-pointer w-4 h-4 p-4 transition-all duration-300 ease-in-out hover:shadow-sm hover:shadow-white"
          />
          <FontAwesomeIcon
            icon={faLinkedinIn}
            className="text-white bg-[#04152d] rounded-full cursor-pointer w-4 h-4 p-4 transition-all duration-300 ease-in-out hover:shadow-sm hover:shadow-white"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
