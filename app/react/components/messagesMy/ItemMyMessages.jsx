import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';

function ItemMessagesMy(props) {
    const navigate = useNavigate();

    const goProfile = () => {
        (props.closeModalFastChat ? props.closeModalFastChat() : null);
        window.scrollTo({ top: 0 }); 
        navigate('/profile',  { state: {userName:'Shenderro' } });
    };

    return (                          
        <div onClick={props.openChat} className={`${props.read ? 'bg-[#F3F5FA]' : null} fm-message flex items-center justify-between py-3 pr-3 pl-1.5 cursor-pointer hover:bg-[#C8D5ED]/30 border-b border-solid border-[#EAEEF4]`}>
            <div className="flex items-center overflow-hidden whitespace-nowrap text-ellipsis">
                <div className={`${props.read ? 'bg-[#F3F5FA]' : null} fm-message-avatar-wrapper flex-shrink-0 overflow-hidden relative mr-1.5 rounded-full p-1.5`}>
                    <div onClick={goProfile}  className="fm-message-avatar flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 overflow-hidden rounded-full">
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
                    {!props.iconСheck ? 
                        <img src='/img/icon-check.svg' alt="check"/> 
                        :
                        <img src='/img/icon-check-default.svg' alt="check"/> 
                    }
                </span>
            </div>
        </div>
    );
}

export default ItemMessagesMy;