import React from "react";
import { Link, Outlet } from "react-router-dom";
// styled  compoents
import styled from "styled-components";
// logo
import logo from "../images/movix-logo.svg";

function Navbar() {
  return (
    <div>
      <Nav className="fixed w-full z-50">
        <div className="container mx-auto px-8">
          <div className="flex md:flex-row flex-col  justify-between items-center py-4 ">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
            <ul className="flex flex-row justify-between gap-4 items-center text-white mt-5 md-mt-0">
              <Link to="AllMovie" className="capitalize">
                movies
              </Link>
              <Link to="AllTv" className="capitalize">
                tv show
              </Link>
            </ul>
          </div>
        </div>
      </Nav>
      <Outlet />
    </div>
  );
}

export default Navbar;

const Nav = styled.nav`
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3.5px);
  -webkit-backdrop-filter: blur(3.5px);
`;
