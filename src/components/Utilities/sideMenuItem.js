import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  * as FaIcons  from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
export const SideMenuItem = (props) => {
    const {menuGap, open,src,link} = props;

  return (
    <NavLink to={link}>
    <li className={`text-white-text-100 text-xs flex items-center gap-x-2 cursor-pointer p-2 hover:bg-red-500 rounded-md  ${menuGap? 'mt-9': 'mt-2'}`}>
    <FontAwesomeIcon icon={FaIcons[`${src}`]} size="xl"/>
    <span className={`${!open && 'hidden'} origin-center duration-200 text-[1rem] ml-2`}>
    {props.optionName}
    </span>
    </li>
    </NavLink>
  )
}
