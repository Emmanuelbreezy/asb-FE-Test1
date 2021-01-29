import React from "react";
import { CardItem } from "../../../UI/Card/Card";

export const TopLayer = (props:any) => {

    return (
      <div className="w-full flex flex-col p-4 mb-1">
          <div className="relative pl-5">
            <ul className="flex items-center space-x-2 list-none font-normal text-secondary ">
                <li>
                    <span>Divisions</span>
                </li>
                <li>
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.4042 6.35889L0.583205 10.1799C0.169205 10.5939 0.169205 11.2659 0.583205 11.6799C0.997205 12.0939 1.66921 12.0939 2.08321 11.6799L6.69721 7.06589C7.0882 6.67489 7.0882 6.04189 6.69721 5.65189L2.08321 1.03789C1.66921 0.623887 0.997205 0.623887 0.583205 1.03789C0.169205 1.45189 0.169205 2.12389 0.583205 2.53789L4.4042 6.35889Z" fill="#0A5685"/>
                    </svg>
                </li>
                <li>
                    <span>Module</span>
                </li>
            </ul>
          </div>
          <div className="w-full flex-1 mt-4">
             <ul className="w-full flex flex-col items-center space-y-3  lg:flex-row  lg:space-x-6">
                 <li className="w-full">
                    <CardItem digitNum={'32456'} terms={'Ongoing metric'} />
                 </li>
                 <li className="w-full">
                    <CardItem digitNum={'2344'} terms={'Past metric'} />
                 </li>
                 <li className="w-full">
                    <CardItem digitNum={'14234'} terms={'Ongoing metric'} />
                 </li>
                 <li className="w-full">
                    <CardItem digitNum={'635'} terms={'Failed metric'} />
                 </li>
                 <li className="w-full">
                    <CardItem digitNum={'11334'} terms={'Pending metric'} />
                 </li>
             </ul>
          </div>
      </div>
    )

}