import React, { useState, useEffect } from 'react';

function ForumStatistics(props) {
   
    return (
        <div className='rounded-lg bg-white'>
            <div className='text-[#2E2E2E] flex items-center px-9 font-secondary-bold text-xs sm:text-sm h-[80px] border-b border-solid border-[#E0E3F2]'>Статистика форума</div>
            <div className='px-9 pt-9 flex items-center justify-between h-[60px]'>
                <p className='text-[#B7BBD6] text-xs sm:text-sm font-secondary-med'>Темы:</p>
                <p className='text-[#2E2E2E] text-xs sm:text-sm font-secondary-bold'>139.196</p>
            </div>
            <div className='px-9 flex items-center justify-between h-[60px]'>
                <p className='text-[#B7BBD6] text-xs sm:text-sm font-secondary-med'>Комментарии:</p>
                <p className='text-[#2E2E2E] text-xs sm:text-sm font-secondary-bold'>723.364</p>
            </div>
            <div className='px-9 pb-9 flex items-center justify-between h-[60px]'>
                <p className='text-[#B7BBD6] text-xs sm:text-sm font-secondary-med'>Пользователи:</p>
                <p className='text-[#2E2E2E] text-xs sm:text-sm font-secondary-bold'>138.614</p>
            </div>
        </div>
    );
}

export default ForumStatistics;
