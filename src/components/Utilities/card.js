import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as FaIcons from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const CardElement = ({ title, description, icon, link, cta, bg }) => {
  return (
    <div className="max-w-sm min-h-[40%] rounded overflow-hidden shadow-lg text-center flex flex-col justify-center items-center gap-3 hover:translate-y-[-0.5rem] transition-all ease-in duration-200">
      <div className={`${bg} w-full flex-grow text-white-text-100 flex items-center justify-center p-10`}>
        <FontAwesomeIcon icon={FaIcons[`${icon}`]} size="5x" />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4">
        <Link to={link}>
          <button
            className="relative group px-8 h-14 bg-blue-600 rounded-lg
                      before:rounded-lg  
                      before:absolute 
                      before:inset-0 
                      before:bg-blue-400 
                      before:scale-x-0 
                      before:origin-right
                      before:transition
                      before:duration-300
                      hover:before:scale-x-100
                      hover:before:origin-left
                      flex
                      justify-center
                      items-center
                      "
          >
            <span className="relative uppercase text-base  text-white-text-100 font-semibold align-middle">
              {cta}
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CardElement;
