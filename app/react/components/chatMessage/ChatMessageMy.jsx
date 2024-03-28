import React, { useEffect, useState, useRef } from "react";
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';


function ChatMessageMy(props) {

    return (      
        <div className={`${props.tail ? 'mt-0' : 'mt-[-24px]'} chat-message max-w-[500px] mb-7 flex items-center`}>
            <div className="chat-message-user flex self-end w-10 sm:w-12 shrink-0">
                {(props.icon) ?
                    <Link className="fm-message-avatar-wrapper flex-shrink-0 overflow-hidden relative bg-white rounded-full" href="#">
                        <div className="fm-message-avatar flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 overflow-hidden rounded-full">
                            <img className="sps-avatar-pic w-full h-full object-cover" src={`/img/${props.avatar}`} alt="user"/>
                        </div>
                    </Link>
                    : null
                }
            </div>
            <div className={`${props.tail ? 'rounded-[28px] pt-2 pb-1 sm:pb-2 px-4' : 'rounded-[12px] py-2 px-3'} chat-message-content  block items-end text-black text-xs sm:text-sm font-secondary-med break-words whitespace-pre-wrap  relative bg-[#F3F7FF]`}>{props.text}
                <div className={`${props.tail ? 'mr-[-4px] mt-1.5' : 'mr-0 mt-[23px]'} chat-message-info flex items-center float-right ml-2`}>
                    <span className="chat-message-time font-roboto text-[#8A959F] text-[9px] sm:text-xs">{props.time}</span>
                </div>
                <div className={(props.tail) ? "absolute bottom-0 left-[-6px]" : null}>
                    <img src="/img/icon-tail.svg" alt="tail"/>
                </div>
            </div>
        </div>
    );
}

export default ChatMessageMy;