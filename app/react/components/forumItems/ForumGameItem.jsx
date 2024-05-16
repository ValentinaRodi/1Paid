import React, { useState, useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';

function ForumGameItem(props) {
    const navigate = useNavigate();

    const goGame = () => {
        window.scrollTo({ 
            top: 0,  
        });
        navigate('/forum/Warface', { state: {titleGame:props.title } });
    };

    return (
        <div onClick={goGame} className="cursor-pointer flex flex-col min-[640px]:flex-row min-[950px]:flex-col min-[1100px]:flex-row justify-center min-[640px]:justify-between min-[950px]:justify-center gap-2 min-[640px]:gap-0 min-[950px]:gap-2 min-[1100px]:gap-0 min-[1100px]:justify-between  items-start min-[640px]:items-center min-[950px]:items-start min-[1100px]:items-center px-9 min-h-[100px] border-b border-solid border-[#E0E3F2] hover:bg-[#F6F9FF]">
            <div className='flex items-center gap-3'>
                <div  className="shrink-0 btn layout-btn-openchat open-fast-chat rounded-full w-8 h-8 sm:w-[40px] sm:h-[40px] flex items-center justify-center bg-gradient-primary shadow-2xl ">
                    <div className="btn-icon text-[#BDC6E0] w-[20px] h-[17px] [&amp;_svg]:w-full [&amp;_svg]:h-full text-white">
                        <img src="/img/icon-btn-icon-13.svg" alt="btn-icon"/>
                    </div>
                </div>
                <div className='font-secondary-bold text-xs sm:text-sm text-black'>{props.title}</div>
            </div>
            <div className='flex flex-col min-[420px]:flex-row gap-0 min-[420px]:gap-9 w-full min-[640px]:w-auto min-[950px]:w-full min-[1100px]:w-auto justify-between'>
                <div className='text-[10px] sm:text-xs font-secondary-med flex flex-row min-[420px]:flex-col justify-between items-start'>
                    <div className='text-[#CFD1E4]'>Созданные темы</div>
                    <div className=' text-black'>16.293</div>
                </div>
                <div className='text-[10px] sm:text-xs font-secondary-med flex flex-row min-[420px]:flex-col justify-between items-start'>
                    <div className='text-[#CFD1E4]'>Комментарии</div>
                    <div className=' text-black'>16.293</div>
                </div>
                <div className='text-[10px] sm:text-xs font-secondary-med flex flex-row min-[420px]:flex-col justify-between items-start'>
                    <div className='text-[#CFD1E4]'>Просмотров</div>
                    <div className=' text-black'>16.293</div>
                </div>
           </div>
        </div>
    );
}

export default ForumGameItem;
