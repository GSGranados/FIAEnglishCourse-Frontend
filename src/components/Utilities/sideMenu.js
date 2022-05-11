import React from 'react'
import { SideMenuItem } from './sideMenuItem';
export const SideMenu = (props) => {
    const formattedItems = props.menuOptions.map((menuItem,index)=>{
        return <SideMenuItem key={index} optionName={menuItem.title} menuGap={menuItem.gap} open={props.open} src={menuItem.src} link={menuItem.link}/>
    });
  return (
    <ul className='pt-6'>
        {formattedItems}
    </ul>
  )
}
