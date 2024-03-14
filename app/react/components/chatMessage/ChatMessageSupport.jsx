import React, { useEffect, useState, useRef } from "react";
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';


function ChatMessageSupport(props) {

    return (      
        <div className={`${props.tail ? 'mt-0' : 'mt-[-24px]'} chat-message max-w-[500px] flex items-start justify-between mb-7`}>
            <div className="flex items-center chat-message-last false gap-2">
                <div className="chat-message-user flex self-end w-[52px] shrink-0">
                    {(props.icon) ?
                        <a className="fm-message-avatar-wrapper flex-shrink-0 overflow-hidden relative bg-white rounded-full p-[6px]" href="#">
                            <div className="fm-message-avatar flex-shrink-0 w-[40px] h-[40px] overflow-hidden rounded-full">
                                <img className="sps-avatar-pic w-full h-full object-cover" src="/img/avatar-example-bot.1e9be783.png" alt="user"/>
                            </div>
                        </a>
                        : null
                    }
                </div>
                <div className={`${props.tail ? 'rounded-[28px] py-2 px-4' : 'rounded-[12px] p-3'} chat-message-content  block items-end text-black text-sm font-secondary-med break-words whitespace-pre-wrap  relative bg-[#F3F7FF]`}>{props.text}
                    <div className={`${props.tail ? 'mr-[-4px] mt-1.5' : 'mr-0 mt-[23px]'} chat-message-info flex items-center float-right ml-2`}>
                        <span className="chat-message-time font-roboto text-[#8A959F] text-xs">{props.time}</span>
                    </div>
                    <div className={(props.tail) ? "absolute bottom-0 left-[-6px]" : null}>
                        <img src="/img/icon-tail.svg" alt="tail"/>
                    </div>
                </div>
            </div>
            {(props.date) ?
                <div className="px-3 py-1 mt-2.5 mr-4 rounded-[34px] bg-[#0000000D] font-roboto text-xs text-[#979797B2]">12.09.2019</div>
                : null
            }
        </div>
    );
}

export default ChatMessageSupport;