import React from 'react';
import { HistoryListItem } from './HistoryListItem';

export const HistoryList = (props:any) => {
    return(
        <div className="mt-6 mb-2">
            <HistoryListItem />
            <HistoryListItem />
        </div>
    )
}