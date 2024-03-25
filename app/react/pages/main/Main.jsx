import CardsGame from '../../components/cardsGame/CardsGame';
import Prsl from '../../components/prsl/Prsl';
import LayoutBtn from '../../components/LayoutBtn';
import { useState, useEffect, useRef } from 'react';

function Main() {

    useEffect(() => {
        const headerHeight = document.querySelector('.layout-h').getBoundingClientRect().height;
        const mainHeight = document.querySelector('.layout-main').getBoundingClientRect().height;
        const totalHeight = headerHeight + mainHeight;
        document.querySelector('.lf-feed').style.height = totalHeight + "px";
    }, []);

    return (
        <div className="flex flex-wrap content-between layout-b pb-4 min-w-0">
            <div className='w-full layout-main'>
                <Prsl />
                <div className="sh flex justify-between gap-x-3 mt-4 items-center sm:mt-4 xl:mt-6 mb-0 sm:mb-6">
                    <div className="w-[252px] hidden">
                        <img src="/img/icon-btn-13.svg" alt="btn-icon" className=""/>
                    </div>
                    <div className="sh-title ">
                        <div >
                            <h2 className="sh-title-text font-secondary-bold text-bold text-2xl text-black">Выбор игры</h2>
                            <div className="sh-title-line mt-2 rounded-full w-9 h-1 2md:mt-2 bg-gradient-primary">
                            </div>
                        </div>
                    </div>
                    <div className="sh-bar flex items-center gap-2 2md:w-full 2md:flex-row-reverse">
                        <div className="sh-search rounded-full h-[50px] px-6 max-w-[270px] w-full flex items-center bg-[#E8EAF7] 2md:max-w-none 2md:flex-grow 2md:h-10 2md:px-3">
                            <button className="sh-search-icon bg-inherit flex-shrink-0 w-4 h-full [&amp;_svg]:w-full flex justify-center items-center text-[#B8BACF] duration-100 hover:text-black">
                                <img src="/img/icon-sh-search-icon.svg" alt="sh-search-icon"/>
                            </button>
                            <input maxLength="80" className="sh-search-input flex-grow ml-2.5 w-full h-full bg-transparent font-primary-med text-base text-black 2md:text-sm" placeholder="Поиск"/>
                        </div>
                    </div>
                </div>
                <CardsGame />
            </div>
            <LayoutBtn toTop='true'/>
        </div>  
          
    );
}

export default Main;
