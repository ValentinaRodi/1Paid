import { useState, useEffect } from 'react';
import LayoutBtn from '../../components/LayoutBtn';
import { Link } from 'react-router-dom';

function MyAchievements() {

    useEffect(() => {
        const headerHeight = document.querySelector('.layout-h').getBoundingClientRect().height;
        const mainHeight = document.querySelector('.layout-main').getBoundingClientRect().height;
        const totalHeight = headerHeight + mainHeight;
        document.querySelector('.lf-feed').style.height = totalHeight + "px";
    }, []);
    
    return (
        <div className="flex flex-wrap content-between layout-b pb-4 min-w-0">
            <div className="w-full layout-main">
                <div className="sac mt-5">
                    <div className="sh flex justify-between items-center gap-x-3 mb-10">
                        <div className="flex flex-col justify-start">
                            <h2 className="sh-title-text font-secondary-bold text-bold text-2xl text-black">Мои достижения</h2>
                            <div className="sh-title-line mt-2 rounded-full w-9 h-1 bg-gradient-primary">
                            </div>
                        </div>
                    </div>
                    <div className="sac-grid mt-10">
                    <div className="achc rounded-lg p-6 flex flex-col justify-center items-center bg-white shadow-lg  ">
                        <div className="achc-pic max-w-[97px] max-h-[97px] rounded-full border-solid border border-[#E9EAF4]">
                            <img className="w-full h-full opacity-30 " src="/img/achievements-example.7996faae.png" alt="picture"/>
                        </div>
                        <div className="achc-title mt-3 font-primary-bold text-center text-[13px] text-black  ">Не открытое достижение</div>
                        <div className="achc-desc mt-2 mb-3 font-secondary-med text-center text-xs text-[#A6B1C7]  ">Получить 50 лайков</div>
                        <div className="achc-progress mt-auto overflow-hidden rounded-lg w-full h-[3px] bg-[#F1EDED]">
                        <div className="achc-progress-line rounded-lg w-[65%] h-full bg-gradient-primary"></div>
                        </div>
                    </div>
                    <div className="achc rounded-lg p-6 flex flex-col justify-center items-center bg-white shadow-lg  ">
                        <div className="achc-pic max-w-[120px] max-h-[120px] ">
                            <img className="w-full h-full" src="/img/achievements-example.7996faae.png" alt="picture"/>
                        </div>
                        <div className="achc-title mt-3 font-primary-bold text-center text-[13px] text-black  ">Звезда</div>
                        <div className="achc-desc mt-2 mb-3 font-secondary-med text-center text-xs text-[#A6B1C7]  ">Получить 50 лайков</div>
                    </div>
                    <div className="achc rounded-lg p-6 flex flex-col justify-center items-center bg-white shadow-lg  ">
                        <div className="achc-pic max-w-[120px] max-h-[120px] ">
                            <img className="w-full h-full" src="/img/achievements-example.7996faae.png" alt="picture"/>
                        </div>
                        <div className="achc-title mt-3 font-primary-bold text-center text-[13px] text-black  ">Звезда</div>
                        <div className="achc-desc mt-2 mb-3 font-secondary-med text-center text-xs text-[#A6B1C7]  ">Получить 50 лайков</div>
                    </div>
                    <div className="achc rounded-lg p-6 flex flex-col justify-center items-center bg-white shadow-lg  ">
                        <div className="achc-pic max-w-[120px] max-h-[120px] ">
                            <img className="w-full h-full" src="/img/achievements-example.7996faae.png" alt="picture"/>
                        </div>
                        <div className="achc-title mt-3 font-primary-bold text-center text-[13px] text-black  ">Звезда</div>
                        <div className="achc-desc mt-2 mb-3 font-secondary-med text-center text-xs text-[#A6B1C7]  ">Получить 50 лайков</div>
                    </div>
                    <div className="achc rounded-lg p-6 flex flex-col justify-center items-center bg-white shadow-lg  ">
                        <div className="achc-pic max-w-[120px] max-h-[120px] ">
                            <img className="w-full h-full" src="/img/achievements-example.7996faae.png" alt="picture"/>
                        </div>
                        <div className="achc-title mt-3 font-primary-bold text-center text-[13px] text-black  ">Звезда</div>
                        <div className="achc-desc mt-2 mb-3 font-secondary-med text-center text-xs text-[#A6B1C7]  ">Получить 50 лайков</div>
                    </div>
                    <div className="achc rounded-lg p-6 flex flex-col justify-center items-center bg-white shadow-lg  ">
                        <div className="achc-pic max-w-[120px] max-h-[120px] ">
                            <img className="w-full h-full" src="/img/achievements-example.7996faae.png" alt="picture"/>
                        </div>
                        <div className="achc-title mt-3 font-primary-bold text-center text-[13px] text-black  ">Звезда</div>
                        <div className="achc-desc mt-2 mb-3 font-secondary-med text-center text-xs text-[#A6B1C7]  ">Получить 50 лайков</div>
                    </div>
                    <div className="achc rounded-lg p-6 flex flex-col justify-center items-center bg-white shadow-lg  ">
                        <div className="achc-pic max-w-[120px] max-h-[120px] ">
                            <img className="w-full h-full" src="/img/achievements-example.7996faae.png" alt="picture"/>
                        </div>
                        <div className="achc-title mt-3 font-primary-bold text-center text-[13px] text-black  ">Звезда</div>
                        <div className="achc-desc mt-2 mb-3 font-secondary-med text-center text-xs text-[#A6B1C7]  ">Получить 50 лайков</div>
                    </div>
                    <div className="achc rounded-lg p-6 flex flex-col justify-center items-center bg-white shadow-lg  ">
                        <div className="achc-pic max-w-[120px] max-h-[120px] ">
                            <img className="w-full h-full" src="/img/achievements-example.7996faae.png" alt="picture"/>
                        </div>
                        <div className="achc-title mt-3 font-primary-bold text-center text-[13px] text-black  ">Звезда</div>
                        <div className="achc-desc mt-2 mb-3 font-secondary-med text-center text-xs text-[#A6B1C7]  ">Получить 50 лайков</div>
                    </div>
                    <div className="achc rounded-lg p-6 flex flex-col justify-center items-center bg-white shadow-lg  ">
                        <div className="achc-pic max-w-[120px] max-h-[120px] ">
                            <img className="w-full h-full" src="/img/achievements-example.7996faae.png" alt="picture"/>
                        </div>
                        <div className="achc-title mt-3 font-primary-bold text-center text-[13px] text-black  ">Звезда</div>
                        <div className="achc-desc mt-2 mb-3 font-secondary-med text-center text-xs text-[#A6B1C7]  ">Получить 50 лайков</div>
                    </div>
                    <div className="achc rounded-lg p-6 flex flex-col justify-center items-center bg-white shadow-lg  ">
                        <div className="achc-pic max-w-[120px] max-h-[120px] ">
                            <img className="w-full h-full" src="/img/achievements-example.7996faae.png" alt="picture"/>
                        </div>
                        <div className="achc-title mt-3 font-primary-bold text-center text-[13px] text-black  ">Звезда</div>
                        <div className="achc-desc mt-2 mb-3 font-secondary-med text-center text-xs text-[#A6B1C7]  ">Получить 50 лайков</div>
                    </div>
                    </div>
                </div>
            </div>
            <LayoutBtn />
        </div>
    );
};

export default MyAchievements;