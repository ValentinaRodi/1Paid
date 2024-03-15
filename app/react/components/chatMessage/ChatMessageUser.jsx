import React, { useEffect, useState, useRef } from "react";
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';

function ChatMessageUser(props) {

    return (                          
        <div className={`${props.tail ? 'mt-[-24px]' : 'mt-0'} mb-7 chat-message flex items-center max-w-[500px] chat-message-last chat-message-out`}>
            <div className={`${props.tail ? 'rounded-[28px] py-2 px-4' : 'rounded-[12px] p-3'} chat-message-content block items-end text-sm font-secondary-med text-[14px] break-words whitespace-pre-wrap relative`}>{props.text}
                <div className={`${props.tail ? 'mr-[-4px] mt-1.5' : 'mr-0 mt-[23px]'} chat-message-info flex items-center float-right bottom-0 ml-[8px]`}>
                    <span className="chat-message-time text-[#E7E7E7] font-roboto text-xs mr-[4px]">{props.time}</span>
                    <img src="/img/icon-check-mark.svg" alt="check-mark"/>
                </div>
                <div className={(props.tail) ? "absolute bottom-0 right-[-6px]" : null}>
                    <img src="/img/icon-tail-blue.svg" alt="tail"/>
                </div>
            </div>
            <div className="chat-message-user flex justify-end w-[48px] shrink-0">
                {(props.avatar) ?
                    <a className="fm-message-avatar-wrapper flex-shrink-0 overflow-hidden relative bg-white rounded-full pb-2" href="#">
                        <div className="fm-message-avatar flex-shrink-0 w-[40px] h-[40px] overflow-hidden rounded-full">
                            <img className="sps-avatar-pic w-full h-full object-cover" src={`/img/${props.avatar}`} alt="user"/>
                        </div>
                    </a>
                    : null
                }
            </div>
        </div> 
    );
}

export default ChatMessageUser;