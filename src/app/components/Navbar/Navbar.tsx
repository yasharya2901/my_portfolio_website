"use client";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { useScroll } from "../../context/ScrollContext";

function Navbar() {

  const [menuClicked, setMenuClicked] = useState<boolean>(false);
  const {scrollToSection} = useScroll();

  return (
    <div className="w-[95vw] sticky top-0">
      <nav className="sticky top-0 z-50 flex flex-row justify-between items-center w-full bg-opacity-10 backdrop-blur-sm rounded-full bg-white">
        <div className="font-bold px-4 m-3 text-[#56c17d] hover:text-[#86efac] hover:transition-colors duration-300 ease-in-out">
          <span className="cursor-pointer font-bold text-xl">{`{YA}`}</span>
        </div>
        <div id="menus" className="hidden md:flex md:h-full ">
          <ul className="flex flex-row items-center h-full">
            <li onClick={() => scrollToSection('about')} className="m-3 text-[#c0c6c2] hover:text-[#dde1de] hover:transition-colors duration-300 ease-in-out cursor-pointer">
              whoami
            </li>
            <li onClick={() => scrollToSection('experience')} className="m-3 text-[#c0c6c2] hover:text-[#dde1de] hover:transition-colors duration-300 ease-in-out cursor-pointer">
              ./experience
            </li>
            <li onClick={() => scrollToSection('projects')} className="m-3 text-[#c0c6c2] hover:text-[#dde1de] hover:transition-colors duration-300 ease-in-out cursor-pointer">
              ~/projects
            </li>
            <li onClick={() => scrollToSection('contact')} className="m-3 text-[#c0c6c2] hover:text-[#dde1de] hover:transition-colors duration-300 ease-in-out cursor-pointer">
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
            <div className="flex justify-evenly pr-3 md:hidden" onClick={() => {setMenuClicked(!menuClicked)}}>
                    <IoMenu size={"2rem"} color="#56c17d"/>
            </div>
        </div>
      </nav>
      <div className={`absolute backdrop-blur-sm right-1 top-16 z-40 transition-transform duration-300 ease-in-out ${menuClicked ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
              {menuClicked && (
                <ul className="flex flex-col items-end">
                  <li onClick={() => {scrollToSection('about'); setMenuClicked(false);}} className="m-3 text-[#e1e1e1] hover:text-[#dde1de] hover:transition-colors duration-300 ease-in-out cursor-pointer">
                    whoami
                  </li>
                  <li onClick={() => {scrollToSection('experience'); setMenuClicked(false);}} className="m-3 text-[#e1e1e1] hover:text-[#dde1de] hover:transition-colors duration-300 ease-in-out cursor-pointer">
                    ./experience
                  </li>
                  <li onClick={() => {scrollToSection('projects'); setMenuClicked(false);}} className="m-3 text-[#e1e1e1] hover:text-[#dde1de] hover:transition-colors duration-300 ease-in-out cursor-pointer">
                    ~/projects
                  </li>
                  <li onClick={() => {scrollToSection('contact'); setMenuClicked(false);}} className="m-3 text-[#e1e1e1] hover:text-[#dde1de] hover:transition-colors duration-300 ease-in-out cursor-pointer">
                    ping_me
                  </li>
                  <li onClick={() => setMenuClicked(false)} className="px-2 font-semibold text-[#ebeeec] hover:transition-colors duration-300 ease-in-out cursor-pointer bg-[#3fc16f] hover:bg-[#16a34a] rounded-full h-full flex items-center">
                    <a
                      href={`mailto:yasharya2901@gmail.com`}
                      className="px-2 inline-flex items-center py-3 w-full"
                    >
                      sudo contact{" "}
                      <FaArrowRight className="ml-2" style={{ fontWeight: "10" }} />
                    </a>
                  </li>
                </ul>
              )}
            </div>
    </div>
  );
}

export default Navbar;