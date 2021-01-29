import React from 'react';
import { ListItem } from './ListItem';

export const List = (props:any) => {
    return(
        <ul className="mt-6 mb-2 space-y-3">
            <li>
                <ListItem text={"0801 234 5678"}  active={false} icon={(
                     <svg className="w-5 h-5 stroke-current" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.65309 6.68614L2.54575 7.57881C2.77555 7.80865 3.04838 7.99097 3.34864 8.11536C3.64891 8.23975 3.97074 8.30377 4.29575 8.30377C4.62077 8.30377 4.9426 8.23975 5.24286 8.11536C5.54313 7.99097 5.81595 7.80865 6.04575 7.57881L7.35842 6.26681C7.47334 6.15191 7.5645 6.0155 7.62669 5.86536C7.68889 5.71523 7.7209 5.55432 7.7209 5.39181C7.7209 5.2293 7.68889 5.06839 7.62669 4.91825C7.5645 4.76812 7.47334 4.63171 7.35842 4.51681L4.80575 1.96414C4.68098 1.83815 4.53063 1.7404 4.36485 1.6775C4.19907 1.61459 4.02172 1.58799 3.84477 1.59949C3.66783 1.61099 3.49542 1.66033 3.33917 1.74416C3.18293 1.828 3.0465 1.94439 2.93909 2.08548C0.26642 5.71748 1.88442 9.54281 5.17109 12.8288C8.45775 16.1148 12.2824 17.7335 15.9144 15.0608C16.0555 14.9534 16.1719 14.817 16.2557 14.6607C16.3396 14.5045 16.3889 14.3321 16.4004 14.1551C16.4119 13.9782 16.3853 13.8008 16.3224 13.635C16.2595 13.4693 16.1617 13.3189 16.0358 13.1941L13.4838 10.6415C13.3689 10.5266 13.2324 10.4354 13.0823 10.3732C12.9322 10.311 12.7713 10.279 12.6088 10.279C12.4462 10.279 12.2853 10.311 12.1352 10.3732C11.9851 10.4354 11.8487 10.5266 11.7338 10.6415L10.4211 11.9541C10.1912 12.1839 10.0089 12.4568 9.88454 12.757C9.76015 13.0573 9.69613 13.3791 9.69613 13.7041C9.69613 14.0292 9.76015 14.351 9.88454 14.6513C10.0089 14.9515 10.1912 15.2243 10.4211 15.4541L11.3238 16.3568" stroke="#A1AACE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                )}/>
            </li>
            <li>
                <ListItem text={"abc@gmail.com"}  active={false}  icon={(
                     <svg className="w-5 h-5 stroke-current" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5 3H2.5C1.94772 3 1.5 3.44772 1.5 4V12C1.5 12.5523 1.94772 13 2.5 13H15.5C16.0523 13 16.5 12.5523 16.5 12V4C16.5 3.44772 16.0523 3 15.5 3Z" stroke="#A1AACE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M11.458 6.65007L14 9.00007" stroke="#A1AACE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.542 6.65007L4 9.00007" stroke="#A1AACE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16.2535 3.34277L9.91149 7.71611C9.64358 7.90108 9.32572 8.00015 9.00016 8.00015C8.67459 8.00015 8.35674 7.90108 8.08883 7.71611L1.74683 3.34277" stroke="#A1AACE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                )}/>
            </li>
            <li>
                <ListItem text={"Mojidi, Lagos"}  active={false}  icon={(
                    <svg className="w-5 h-5 stroke-current" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 9C9.38071 9 10.5 7.88071 10.5 6.5C10.5 5.11929 9.38071 4 8 4C6.61929 4 5.5 5.11929 5.5 6.5C5.5 7.88071 6.61929 9 8 9Z" stroke="#A1AACE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8 1.5V1.5C10.7614 1.5 13 3.73857 13 6.5C13 8.77134 9.61734 14.4667 8.41667 16.2767V16.2767C8.26403 16.5068 7.95374 16.5696 7.72362 16.417C7.66796 16.38 7.62026 16.3323 7.58334 16.2767C6.38267 14.4667 3 8.77134 3 6.5V6.5C3 3.73858 5.23857 1.5 8 1.5L8 1.5Z" stroke="#A1AACE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    
                )}/>
            </li>
            <li>
                <ListItem text={"2 Journal entries"}  active={true}  icon={(
                     <svg className="w-5 h-5 stroke-current" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 4H3.5" stroke="#A1AACE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M1.5 9H3.5" stroke="#A1AACE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M1.5 13H3.5" stroke="#A1AACE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M13.4477 1.5H3.05228C2.74726 1.5 2.5 1.74726 2.5 2.05228V15.9477C2.5 16.2527 2.74726 16.5 3.05228 16.5H13.4477C13.7527 16.5 14 16.2527 14 15.9477V2.05228C14 1.74726 13.7527 1.5 13.4477 1.5Z" stroke="#A1AACE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10.9478 4.5H6.55301C6.248 4.5 6.00073 4.74727 6.00073 5.05228V7.44772C6.00073 7.75274 6.248 8 6.55301 8H10.9478C11.2528 8 11.5001 7.75274 11.5001 7.44772V5.05228C11.5001 4.74727 11.2528 4.5 10.9478 4.5Z" stroke="#A1AACE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M14 2.5V11.5H15.5V11.5C16.0523 11.5 16.5 11.0523 16.5 10.5V3.5C16.5 2.94772 16.0523 2.5 15.5 2.5H14Z" stroke="#A1AACE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M14 5.5H16.5" stroke="#A1AACE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M14 8.5H16.5" stroke="#A1AACE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                     </svg>
                )}/>
            </li>
            <li>
                <ListItem text={"24 fingerprints enrolled"} active={false}  icon={(
                     <svg className="w-5 h-5 stroke-current" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.49933 16H2C1.73478 16 1.48043 15.8946 1.29289 15.7071C1.10536 15.5196 1 15.2652 1 15V2C1 1.73478 1.10536 1.48043 1.29289 1.29289C1.48043 1.10536 1.73478 1 2 1H4.49933" stroke="#A1AACE" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12.4993 16H14.9993C15.2645 16 15.5188 15.8946 15.7064 15.7071C15.8939 15.5196 15.9993 15.2652 15.9993 15V2C15.9993 1.73478 15.8939 1.48043 15.7064 1.29289C15.5188 1.10536 15.2645 1 14.9993 1H12.4993" stroke="#A1AACE" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12.4993 9.5V8.5C12.4993 6.02467 10.6993 4 8.49927 4C6.29927 4 4.49927 6.02467 4.49927 8.5V12.5" stroke="#A1AACE" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12.5 12.5V11.5" stroke="#A1AACE" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6.5 11.5V12.5" stroke="#A1AACE" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10.4993 12.5V9C10.4993 7.62467 9.59993 6.5 8.49927 6.5C7.39927 6.5 6.49927 7.62467 6.49927 9V9.5" stroke="#A1AACE" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8.5 12V12.5" stroke="#A1AACE" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8.5 8.5V10" stroke="#A1AACE" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                )}/>
            </li>
             
        </ul>
    )
}