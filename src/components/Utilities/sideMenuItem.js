import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  * as FaIcons  from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
export const SideMenuItem = (props) => {
    const {menuGap, open,src,link} = props;

  return (
    <li className={`text-white-text-100 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-red rounded-md hover:font-bold ${menuGap? 'mt-9': 'mt-2'}`}>
    <Link to={link}>
    <FontAwesomeIcon icon={FaIcons[`${src}`]} size="xl"/>
    <span className={`${!open && 'hidden'} origin-center duration-200 text-lg ml-2`}>
    {props.optionName}
    </span>
    </Link>
    </li>
  )
}
