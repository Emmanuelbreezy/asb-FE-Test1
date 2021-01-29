import React from 'react';

type MenuItemProps = {
    active:boolean;
    name: string;
    iconPath:any
}

const MenuItem = ({active,name,iconPath}:MenuItemProps) => {
    const checkActive = active ? 'flex items-center p-3 focus:outline-none space-x-2 header-active-button' :'flex items-center p-3 focus:outline-none space-x-2 header-inactive-button'
  return (
     <button className={checkActive}>
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            {iconPath}
        </svg>
        <span>{name}</span>
    </button>
  );
}


export default MenuItem;
