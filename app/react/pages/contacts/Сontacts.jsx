import React, { useEffect, useState, useRef } from "react";
import {  Link} from 'react-router-dom';
import uuid from 'react-uuid';
import ChatMessageMy from "../../components/chatMessage/ChatMessageMy";
import ChatMessageUser from "../../components/chatMessage/ChatMessageUser";
import StarRating from "../../components/starRating/StarRating";
import Title from '../../components/title/Title';

function Contacts() {
   
    return (
        
        <div className="layout-b pb-4 min-w-0 h-fit flex flex-wrap content-between">
            <div className="w-full layout-main h-full">
                <Title title='Контакты'/>
                <div className="sdb-main flex align-start w-full h-full gap-3 flex-col lg:flex-row">
                    <div className="sdb-bar flex flex-col w-full lg:max-w-[336px] ">
                        <div className="sdb-papper flex flex-col w-full bg-white rounded-xl p-4 sm:p-6 gap-3">
                            <div className="sdb-papper-title font-primary-bold font-bold w-full text-base sm:text-lg text-black">Контактная информация</div>
                            <div className="w-44 h-px bg-[#DBE0ED]"></div>
                            <div className="sdb-item flex w-full">
                                <div className="sdb-item-content flex flex-col">
                                    <a className="sdb-item-text font-secondary-bold font-bold text-sm sm:text-base text-[#1E61EB] mb-[2px]" href="#">ВКонтакте</a>
                                    <span className="sdb-item-text font-secondary-med text-[10px] sm:text-xs text-[#B4BAD2] uppercase">Сообщество</span>
                                </div>
                            </div>
                            <div className="w-44 h-px bg-[#DBE0ED]"></div>
                            <div className="sdb-item flex w-full">
                                <div className="sdb-item-content flex flex-col">
                                    <a className="sdb-item-text font-secondary-bold font-bold text-sm sm:text-base text-[#1E61EB] mb-[2px]" href="mailto:hello@warface.online">hello@warface.online</a>
                                    <span className="sdb-item-text font-secondary-med text-[10px] sm:text-xs text-[#B4BAD2] uppercase">Почта</span>
                                </div>
                            </div>
                            <div className="w-44 h-px bg-[#DBE0ED]"></div>
                            <div className="sdb-item flex w-full text-[12px]">
                                <div className="sdb-item-content flex flex-col">
                                    <a className="sdb-item-text font-secondary-bold font-bold text-sm sm:text-base text-black mb-[2px]" href="#">с 10:30 до 22:30</a>
                                    <span className="sdb-item-text font-secondary-med text-[10px] sm:text-xs text-[#B4BAD2] uppercase">ВРЕМЯ РАБОТЫ</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
       
    );
}

export default Contacts;