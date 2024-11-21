"use client";
import React from "react";
import { FaArrowRight, FaHamburger } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

function Navbar() {
  return (
    <div className="p-5">
      <nav className="flex flex-row justify-between items-center w-full bg-opacity-10 rounded-full bg-white">
        <div className="font-bold px-4 m-3 text-[#56c17d] hover:text-[#86efac] hover:transition-colors duration-300 ease-in-out">
          <span className="cursor-pointer font-bold text-xl">{`{YA}`}</span>
        </div>
        <div id="menus" className="hidden md:flex md:h-full">
          <ul className="flex flex-row items-center h-full">
            <li className="m-3 text-[#c0c6c2] hover:text-[#dde1de] hover:transition-colors duration-300 ease-in-out cursor-pointer">
              whoami
            </li>
            <li className="m-3 text-[#c0c6c2] hover:text-[#dde1de] hover:transition-colors duration-300 ease-in-out cursor-pointer">
              ./experience
            </li>
            <li className="m-3 text-[#c0c6c2] hover:text-[#dde1de] hover:transition-colors duration-300 ease-in-out cursor-pointer">
              ~/projects
            </li>
            <li className="m-3 text-[#c0c6c2] hover:text-[#dde1de] hover:transition-colors duration-300 ease-in-out cursor-pointer">
              ping_me
            </li>
            <li className="px-2 font-semibold text-[#ebeeec] hover:transition-colors duration-300 ease-in-out cursor-pointer bg-[#3fc16f] hover:bg-[#16a34a] rounded-full h-full flex items-center">
              <a
                href={`mailto:yasharya2901@gmail.com`}
                className="px-2 inline-flex items-center py-3 w-full"
              >
                sudo contact{" "}
                <FaArrowRight className="ml-2" style={{ fontWeight: "10" }} />
              </a>
            </li>
          </ul>
        </div>
        <div id="smallmenu" className="md:hidden">
            {/* Hamburger menu */}
            {/* On click, a list should appear */}
            <div className="flex md:hidden">
                <div className="flex flex-col justify-between h-8 w-8 mx-6">
                    <IoMenu size={"5x"} color="#56c17d"/>
                </div>
            </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;