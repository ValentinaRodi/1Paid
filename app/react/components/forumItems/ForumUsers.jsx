import React, { useState, useEffect } from 'react';

function ForumUsers(props) {

    return (
        <div className='rounded-lg bg-white'>
            <div className='text-[#2E2E2E] flex items-center px-9 font-secondary-bold text-xs sm:text-sm h-[80px] border-b border-solid border-[#E0E3F2]'>Пользователи онлайн</div>
            <div className='px-9 pt-3 pb-9 text-[#AFB3D6] text-xs sm:text-sm font-secondary-med'>
                Vasya338, Alex4800, AndreyKo231, SashaCastom32, Vanysakl, <span className='text-[#FF3636]'>Admin2</span>, Staroy233, Vasya338, Alex4800, AndreyKo231,<br/>SashaCastom32, Vanysakl, <span className='text-[#FF3636]'>Admin2</span>, Staroy233, Vasya338, Alex4800, AndreyKo231,<br/>SashaCastom32, Vanysakl, <span className='text-[#FF3636]'>Admin2</span>, Staroy233, Vasya338, Alex4800, AndreyKo231,<br/>SashaCastom32, Vanysakl, <span className='text-[#FF3636]'>Admin2</span>, Staroy233, Vasya338, Alex4800, AndreyKo231,<br/>SashaCastom32, Vanysakl, <span className='text-[#FF3636]'>Admin2</span>, Staroy233, Vasya338, Alex4800, AndreyKo231,<br/>SashaCastom32, Vanysakl, <span className='text-[#FF3636]'>Admin2</span>, Staroy233.. и еще 159.
            </div>
            <div className='text-[#2E2E2E] flex items-center px-9 font-secondary-bold text-xs sm:text-sm h-[80px] border-t border-solid border-[#E0E3F2]'>Всего: 278 (пользователей: 209, <br/>гостей: 69)</div>
        </div>                
    );
}

export default ForumUsers;
