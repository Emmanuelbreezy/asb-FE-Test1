import React from 'react';

type HistoryListItemProps = {

}

export const HistoryListItem = (props:HistoryListItemProps) => {
    return(
        <div className="flex items-start">
            <div className="flex-shrink">
                <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="4.5" cy="4.5" r="4.5" fill="#707070"/>
                </svg>
                <div className="flex items-center h-20">
                    <span className="w-1.5 h-20 block border-r borderLineStyle border-accent-80"></span>
                </div>
            </div>
            <div className="ml-2">
                <h2 className="text-sm text-accent-60 font-normal">Searched "Journal Entries" on Division module</h2>
                <div className="flex items-center mt-3 text-xs font-medium text-accent-70">
                    <span>22:10 21/06/2021</span>
                    <svg className="w-1 h-1 ml-2 fill-current" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="2" cy="2" r="1" stroke="#C4C4C4" stroke-width="2"/>
                    </svg>
                    <span className="ml-2">Web</span>
                </div>
            </div>
        </div>
    )
}