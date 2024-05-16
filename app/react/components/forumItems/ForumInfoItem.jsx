import React, { useState, useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';

function ForumInfoItem(props) {
    const navigate = useNavigate();

    const goRules = () => {
        window.scrollTo({ 
            top: 0,  
        });
        props.rulesTheme ? navigate('/forum/rules_themes') : navigate('/forum/rules_forum');
    };

    return (
        <div onClick={goRules} className="cursor-pointer flex flex-col min-[420px]:flex-row gap-2 min-[420px]:gap-0 justify-center min-[420px]:justify-between items-start min-[420px]:items-center px-9 min-h-[100px] border-b border-solid border-[#E0E3F2] hover:bg-[#F6F9FF]">
            <div className='flex items-center gap-3'>
                <div  className="shrink-0 btn layout-btn-openchat open-fast-chat rounded-full w-8 h-8 sm:w-[40px] sm:h-[40px] flex items-center justify-center bg-gradient-primary shadow-2xl ">
                    <div className="btn-icon text-[#BDC6E0] w-[20px] h-[17px] [&amp;_svg]:w-full [&amp;_svg]:h-full text-white">
                        <img src="/img/icon-btn-icon-13.svg" alt="btn-icon"/>
                    </div>
                </div>
                <div className='font-secondary-bold text-xs sm:text-sm text-black'>{props.title}</div>
            </div>
            <div className='text-xs text-[#CFD1E4] font-secondary-med flex w-full min-[420px]:w-auto flex-row min-[420px]:flex-col items-start justify-between'>
                <div>Дата и автор</div>
                <div>1 Ноя 2019 <span className='text-[#FF3F3F] underline'>admin</span></div>
            </div>
        </div>
    );
}

export default ForumInfoItem;
