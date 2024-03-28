import React, { useEffect, useState, useRef } from "react";
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';

function ItemMessagesMy(props) {

    return (                          
        <div onClick={props.openChat} className={`${props.read ? 'bg-[#F3F5FA]' : null} fm-message flex items-center justify-between py-3 pr-3 pl-1.5 cursor-pointer hover:bg-[#C8D5ED]/30 border-b border-solid border-[#EAEEF4]`}>
            <div className="flex items-center overflow-hidden whitespace-nowrap text-ellipsis">
                <div className={`${props.read ? 'bg-[#F3F5FA]' : null} fm-message-avatar-wrapper flex-shrink-0 overflow-hidden relative mr-1.5 rounded-full p-1.5`}>
                    <div className="fm-message-avatar flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 overflow-hidden rounded-full">
                        <img className="sps-avatar-pic w-full h-full object-cover" src={`/img/${props.avatar}`} alt="user"/>
                    </div>
                    <span className="fm-message-status block bg-gradient-secondary z-20 h-1.5 w-1.5 sm:h-2 sm:w-2 right-[7px] bottom-[7px] rounded-full border-0 border-white absolute"></span>
                    <span className="fm-message-status block bg-white z-10 h-3.5 w-3.5 sm:h-4 sm:w-4 right-[3px] bottom-[3px] rounded-full border-0 border-white absolute"></span>
                </div>
                <div className="fm-message-user overflow-hidden flex flex-col mr-[12px]">
                    <div className="fm-message-username font-secondary-bold text-black text-sm sm:text-base">{props.nameUser}</div>
                    <div className="fm-message-text w-full min-[1440px]:max-w-[130px] min-[1670px]:max-w-[230px] font-primary-med text-xs sm:text-sm">{props.message}</div>
                </div>
            </div>
            <div className="fm-info py-1 flex flex-col items-end justify-between h-full">
                <span className="fm-message-time font-secondary-med text-[10px] sm:text-xs">{props.time}</span>
                <span className="fm-message-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="11" viewBox="0 0 21 11" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M15.8216 0.694067C15.994 0.895626 16.0793 1.15742 16.0587 1.42185C16.038 1.68628 15.9132 1.93168 15.7116 2.10407L6.12163 10.3341C5.62703 10.7557 4.88666 10.7069 4.45163 10.2241L0.26163 5.61407C0.020476 5.34969 -0.0613165 4.97674 0.0470632 4.63571C0.155443 4.29467 0.437529 4.03737 0.787063 3.96071C1.1366 3.88405 1.50048 3.99969 1.74163 4.26407L5.41163 8.26407L14.4116 0.554067C14.617 0.38516 14.8811 0.304981 15.1457 0.331251C15.4103 0.357522 15.6535 0.488079 15.8216 0.694067Z" fill="#8CD23C"></path>
                        <path fillRule="evenodd" clipRule="evenodd" d="M20.6477 0.694067C20.8201 0.895626 20.9054 1.15742 20.8848 1.42185C20.8641 1.68628 20.7393 1.93168 20.5377 2.10407L10.9477 10.3341C10.4531 10.7557 9.308 10.8169 8.87297 10.3341L7.1355 8.29877C6.89435 8.03439 7.02714 7.6398 7.13552 7.29877C7.2439 6.95773 7.28598 6.87542 7.63552 6.79877C7.98505 6.72211 8.39436 6.53439 8.63552 6.79877L10.2377 8.26407L19.2377 0.554067C19.4431 0.38516 19.7072 0.304981 19.9718 0.331251C20.2364 0.357522 20.4796 0.488079 20.6477 0.694067Z" fill="#8CD23C"></path>
                    </svg>
                </span>
            </div>
        </div>
    );
}

export default ItemMessagesMy;