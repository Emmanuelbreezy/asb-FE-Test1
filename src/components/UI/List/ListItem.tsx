import React from 'react';

type ListItemProps = {
    icon:any;
    text:string;
    active:boolean;
}

export const ListItem = ({icon,text,active}:ListItemProps) => {
    const checkActive = active === true ? "font-medium text-sm text-shade-blue border-b-2 border-shade-blue" : "font-medium text-sm text-accent-50";
    return(
        <div className="flex items-center space-x-2">
            {icon}
            <span className={checkActive}>
                {text}
            </span>
        </div>
    )
}