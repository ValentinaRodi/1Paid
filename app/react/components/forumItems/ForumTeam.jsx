import React, { useState, useEffect } from 'react';

function ForumTeam(props) {

    return (
        <div className='rounded-lg bg-white'>
            <div className='text-[#2E2E2E] flex items-center px-9 font-secondary-bold text-xs sm:text-sm h-[80px] border-b border-solid border-[#E0E3F2]'>Команда онлайн</div>
            <div className="px-9 pt-4 flex items-center overflow-hidden whitespace-nowrap text-ellipsis">
                <div className="null fm-message-avatar-wrapper flex-shrink-0 overflow-hidden relative mr-1.5 rounded-full p-1.5">
                    <div className="fm-message-avatar flex-shrink-0 w-8 h-8 sm:w-14 sm:h-14 overflow-hidden rounded-full">
                        <img className="sps-avatar-pic w-full h-full object-cover" src="/img/admin.png" alt="user"/>
                    </div>
                    <span className="fm-message-status block bg-gradient-secondary z-20 h-1.5 w-1.5 sm:h-2 sm:w-2 right-[11px] bottom-[7px] rounded-full border-0 border-white absolute"></span>
                    <span className="fm-message-status block bg-white z-10 h-3.5 w-3.5 sm:h-4 sm:w-4 right-[6px] bottom-[3px] rounded-full border-0 border-white absolute"></span>
                </div>
                <div className="fm-message-user overflow-hidden flex flex-col mr-[12px]">
                    <div className="fm-message-username font-secondary-bold text-black text-xs sm:text-sm">Alexey_Smirnov</div>
                    <div className="fm-message-text w-full min-[1440px]:max-w-[130px] min-[1670px]:max-w-[230px] font-primary-med text-[10px] sm:text-xs text-[#B9BCD8]">Разработчик</div>
                </div>
            </div>
            <div className="px-9 pt-4 flex items-center overflow-hidden whitespace-nowrap text-ellipsis">
                <div className="null fm-message-avatar-wrapper flex-shrink-0 overflow-hidden relative mr-1.5 rounded-full p-1.5">
                    <div className="fm-message-avatar flex-shrink-0 w-8 h-8 sm:w-14 sm:h-14 overflow-hidden rounded-full">
                        <img className="sps-avatar-pic w-full h-full object-cover" src="/img/admin.png" alt="user"/>
                    </div>
                    <span className="fm-message-status block bg-gradient-secondary z-20 h-1.5 w-1.5 sm:h-2 sm:w-2 right-[11px] bottom-[7px] rounded-full border-0 border-white absolute"></span>
                    <span className="fm-message-status block bg-white z-10 h-3.5 w-3.5 sm:h-4 sm:w-4 right-[6px] bottom-[3px] rounded-full border-0 border-white absolute"></span>
                </div>
                <div className="fm-message-user overflow-hidden flex flex-col mr-[12px]">
                    <div className="fm-message-username font-secondary-bold text-black text-xs sm:text-sm">Alexey_Smirnov</div>
                    <div className="fm-message-text w-full min-[1440px]:max-w-[130px] min-[1670px]:max-w-[230px] font-primary-med text-[10px] sm:text-xs text-[#B9BCD8]">Разработчик</div>
                </div>
            </div>
            <div className="px-9 pt-4 pb-4 flex items-center overflow-hidden whitespace-nowrap text-ellipsis">
                <div className="null fm-message-avatar-wrapper flex-shrink-0 overflow-hidden relative mr-1.5 rounded-full p-1.5">
                    <div className="fm-message-avatar flex-shrink-0 w-8 h-8 sm:w-14 sm:h-14 overflow-hidden rounded-full">
                        <img className="sps-avatar-pic w-full h-full object-cover" src="/img/admin.png" alt="user"/>
                    </div>
                    <span className="fm-message-status block bg-gradient-secondary z-20 h-1.5 w-1.5 sm:h-2 sm:w-2 right-[11px] bottom-[7px] rounded-full border-0 border-white absolute"></span>
                    <span className="fm-message-status block bg-white z-10 h-3.5 w-3.5 sm:h-4 sm:w-4 right-[6px] bottom-[3px] rounded-full border-0 border-white absolute"></span>
                </div>
                <div className="fm-message-user overflow-hidden flex flex-col mr-[12px]">
                    <div className="fm-message-username font-secondary-bold text-black text-xs sm:text-sm">Alexey_Smirnov</div>
                    <div className="fm-message-text w-full min-[1440px]:max-w-[130px] min-[1670px]:max-w-[230px] font-primary-med text-[10px] sm:text-xs text-[#B9BCD8]">Разработчик</div>
                </div>
            </div>
        </div>
    );
}

export default ForumTeam;
