import React from 'react';

type SideCardItemProps = {
    children:any;
    icon:any;
    title:string
}
export const SideCardItem = (props:SideCardItemProps) => {
    return(
        <div className="w-full lg:w-56 flex flex-col items-start bg-background-primary  
            p-5 pt-3 card-boxShadow  card-border">
                <div className="flex flex-row items-center space-x-3">
                    <span className="block w-8 h-8 justify-center pl-1.5 pt-1.5 rounded-lg bg-icon-shade-blue">
                        {props.icon}
                    </span>
                    <h2 className="font-bold text-deep">
                        {props.title}
                    </h2>
                </div>
                <div>
                    {props.children}
                </div>
        </div>
    )
}