import React from 'react';

type TableItemProps = {
    status:any;
    username: string;
    state: string;
    street: string;
    entries:any;
    entriesStatus:string;
    risk:string;
}

export const TableItem = (props:TableItemProps) => {
    const checkStatus = (status:any) => {
        return status === null ? (<span className=" font-medium text-gray-400 inline-block py-0.5 px-3 text-sm">Not Found</span>) 
               : parseInt(status,10) > 0 ? (
            <span className="text-issue-orange  font-medium bg-issue-orange-lighter 
                inline-block py-0.5 px-3 text-sm rounded-full">{status} Issue{status > 1?'s':null} found</span>
        ) : (
            <span className="text-no-issue-blue  font-medium bg-no-issue-blue-lighter 
                inline-block py-0.5 px-3 text-sm rounded-full">No Issues</span>
        );
    }

    const RiskComponnent = (icon:any,text:string) => {
        const res = text.toLowerCase()
        const checkColor =   res === 'high' ? 'text-high-risk-red' 
                           : res === 'mid'? 'text-mid-risk-purple' 
                           : res === 'low' ? 'text-low-risk-green'
                           : 'text-gray-400'
        return(
            <div className={"flex items-center" + " " + checkColor}>
                {icon}
                <span className="ml-3 font-medium text-sm">{text} Risk </span>
            </div>
        )
    }

    const checkRiskHandler = (risk:any) => {
        if(risk.toLowerCase() === 'high'){
            return (
                RiskComponnent((<svg className="w-4 h-4 stroke-current" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.94891 13.8921L8.05176 2.10748" stroke="" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2.10801 7.94839L8.05176 2.10748L13.8927 8.05124" stroke="" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                ),'High')
            )
        }else if(risk.toLowerCase() === 'mid'){
            return (
                RiskComponnent((<svg className="w-4 h-4  stroke-current" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.10771 8.0003H13.8928" stroke="" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.00027 2.10775L13.8928 8.0003L8.00027 13.8929" stroke="" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>),'Mid')
            )
        }else if(risk.toLowerCase() === 'low'){
            return (
                RiskComponnent((<svg className="w-3 h-3 stroke-current" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.833171 0.833659L9.1665 9.16699" stroke="" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.1665 0.833659V9.16699H0.833171" stroke="" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>),'Low')
            )
        }else{
            return (
                <span className="text-gray-400 font-medium text-sm">Not Found</span>
               ); 
        }
    }
    return(
        <tr>
            <td className="pl-6 pr-3 py-3 whitespace-nowrap">
                <div className="flex items-center">
                  <input className="w-4 h-4 cursor-pointer text-background-neutral focus:outline-none" type="checkbox" />
                  <svg className="w-4 h-4 fill-current ml-8" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.97895 9.85263C7.24737 10.1211 7.73684 10.1211 8.00526 9.85263L10.8474 7.01053C11.1316 6.72632 11.1316 6.26842 10.8474 5.98421C10.5632 5.7 10.1053 5.7 9.82105 5.98421L7.5 8.30526L5.17895 5.98421C5.03684 5.84211 4.84737 5.76316 4.65789 5.76316C4.46842 5.76316 4.27895 5.84211 4.13684 5.98421C3.85263 6.26842 3.85263 6.72632 4.13684 7.01053L6.97895 9.85263Z" fill="#0052CC"/>
                    <path d="M7.5 15C11.6368 15 15 11.6368 15 7.5C15 3.36316 11.6368 0 7.5 0C3.36316 0 0 3.36316 0 7.5C0 11.6368 3.36316 15 7.5 15ZM7.5 1.45263C10.8316 1.45263 13.5474 4.16842 13.5474 7.5C13.5474 10.8316 10.8316 13.5474 7.5 13.5474C4.16842 13.5474 1.45263 10.8316 1.45263 7.5C1.45263 4.16842 4.16842 1.45263 7.5 1.45263Z" fill="#0052CC"/>
                  </svg>
                </div>
            </td> 
            <td className="px-6 py-3 whitespace-nowrap">
                <div className="text-sm font-medium text-accent-30">
                      {props.username}
                </div>
            </td>   
            <td className="px-6 py-3 whitespace-nowrap">
                <div className="text-left">
                    <div className="text-sm font-medium text-accent-30">
                      {props.state}
                    </div>
                    <div className="text-sm mt-0.5 font-normal text-accent-40">
                      {props.street}
                    </div>
                  </div> 
            </td>   
            <td className="px-6 py-3 whitespace-nowrap">
                {checkStatus(props.status)}
            </td>
            <td className="px-6 py-3 whitespace-nowrap">
                <div className="text-left">
                    <div className="flex items-center text-sm font-medium text-accent-30">
                       <svg className="w-1.5 h-1.5 fill-current" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <circle cx="4.5" cy="4.5" r="4.5" fill="#707070"/>
                        </svg>
                        <span className="ml-1.5">{props.entries} Unique Entries</span>
                    </div>
                    <div className="text-sm font-normal text-accent-40">
                      {props.entriesStatus}
                    </div>
                </div> 
            </td>
            <td className="px-6 py-3 whitespace-nowrap">
                {checkRiskHandler(props.risk)}
            </td>
            <td className="pl-2 pr-6 py-3 whitespace-nowrap">
                <button className="focus:outline-none">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 0.666702C1.46957 0.666702 0.960859 0.877416 0.585786 1.25249C0.210713 1.62756 0 2.13627 0 2.6667C0 3.19714 0.210713 3.70584 0.585786 4.08092C0.960859 4.45599 1.46957 4.6667 2 4.6667C2.53043 4.6667 3.03914 4.45599 3.41421 4.08092C3.78929 3.70584 4 3.19714 4 2.6667C4 2.13627 3.78929 1.62756 3.41421 1.25249C3.03914 0.877416 2.53043 0.666702 2 0.666702ZM2 6.00004C1.46957 6.00004 0.960859 6.21075 0.585786 6.58582C0.210713 6.96089 0 7.4696 0 8.00004C0 8.53047 0.210713 9.03918 0.585786 9.41425C0.960859 9.78932 1.46957 10 2 10C2.53043 10 3.03914 9.78932 3.41421 9.41425C3.78929 9.03918 4 8.53047 4 8.00004C4 7.4696 3.78929 6.96089 3.41421 6.58582C3.03914 6.21075 2.53043 6.00004 2 6.00004ZM2 11.3334C1.46957 11.3334 0.960859 11.5441 0.585786 11.9192C0.210713 12.2942 0 12.8029 0 13.3334C0 13.8638 0.210713 14.3725 0.585786 14.7476C0.960859 15.1227 1.46957 15.3334 2 15.3334C2.53043 15.3334 3.03914 15.1227 3.41421 14.7476C3.78929 14.3725 4 13.8638 4 13.3334C4 12.8029 3.78929 12.2942 3.41421 11.9192C3.03914 11.5441 2.53043 11.3334 2 11.3334Z" fill="#C3C3C3"/>
                    </svg>
                </button>
            </td>
        </tr>
    )
}