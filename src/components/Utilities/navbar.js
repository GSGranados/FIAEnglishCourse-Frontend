import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUserCircle,faBars,faClose,} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
export const Navbar = () => {
  const links = [
    { name: "Tuitions", link: "/" },
    { name: "MOOC Courses", link: "/" },
    { name: "English Courses", link: "/permissions" },
    { name: "Roles", link: "/roles"},
    { name: "faUserCircle" },
  ];
  const [open, setOpen] = useState(false);
  const formattedListItems = links.map((item, index) => {
    return (
      <li key={index} className="md:ml-8 text-lg md:my-0 my-7">
        {item.name === "faUserCircle" ? (
            <FontAwesomeIcon icon={faUserCircle} size="xl" className="tablet:hidden cursor-pointer" />
        ) : (
          <NavLink
            to={item.link}
            className="text-white-text-100 hover:text-opacity-80 duration-300"
          >
            {item.name}
          </NavLink>
        )}
      </li>
    );
  });
  return (
    <div className="bg-wine-red-600 bg-opacity-90 text-white-text-100 font-bold shadow-md w-full min-h-max py-4 px-10  top-0 left-0">
      <div className="md:flex items-center justify-between">
        <div className="font-bold text-xl cursor-pointer flex items-center">
          FIA English Course
        </div>
        <div
          className="absolute right-8 top-5 cursor-pointer md:hidden"
          onClick={() => setOpen(!open)}
        >
          <FontAwesomeIcon icon={open ? faClose : faBars} size="xl" />
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-10 absolute md:static
         tablet:bg-wine-red-600 md:z-auto z-[1] left-0 w-full 
         md:w-auto md:pl-0 pl-9 transition-all duration-200 ease-in 
         ${open ? "top-14 opacity-100" : "top-[-490px]"}
         tablet:opacity-100`}
        >
          {formattedListItems}
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <NavLink to="/" className="text-white-text-100 hover:text-opacity-80 duration-300 md:hidden">
                My Profile
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
