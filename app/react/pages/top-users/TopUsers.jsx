import { useState, useEffect } from 'react';
import PrslTop from '../../components/prslTop/PrslTop';
import TopBanner from '../../components/topBanner/TopBanner';
import LayoutBtn from '../../components/LayoutBtn';
import uuid from 'react-uuid';
import Title from '../../components/title/Title';

function TopUsers() {
    
    const arr = [1,2,3,4,5,6,7];

    return (
        <div className="flex flex-wrap content-between layout-b pb-4 min-w-0">
            <div className='w-full layout-main'>
                <Title title='Топ Юзеров'/>
                <PrslTop />
                <div className='flex justify-center mt-3 flex-wrap 2xl:flex-nowrap gap-2'>
                    <TopBanner name='Santchezz' rank='1' tovar='342 819' money='10 000' moneyGet='118 523' userFoto='user_foto.png'/>
                    <TopBanner name='Santchezz' rank='2' tovar='342 819' money='5 000' moneyGet='118 523' userFoto='user_foto.png'/>
                    <TopBanner name='Santchezz' rank='3' tovar='342 819' money='1 000' moneyGet='118 523' userFoto='user_foto.png'/>
                </div>
                <div className="w-full">
                    <div className="stu-total mt-6 font-secondary-bold text-lg text-[#C5CFE4]">Топ 10 мира</div>
                    <div className="stu-inner mt-4 flex flex-col gap-3 ">
                        <div className="stu-feed flex-grow grid grid-cols-1 gap-3">
                            {
                                arr.map((item, index) => {
                                    return (
                                        <div key={uuid()} className="tuc rounded-xl py-2 px-4 sm:px-6 sm:py-6 flex items-center gap-4 bg-white lustify-between">
                                            <div className='flex  justify-between gap-2 sm:gap-4 flex-col-reverse items-start sm:flex-row sm:items-center'>
                                                <div className="tuc-avatar font-secondary-bold text-[#1D222C] pr-0 md:pr-6 text-xs sm:text-lg">#{index+1}</div>
                                                <div className='flex items-center justify-between gap-4 '>
                                                    <div className="tuc-avatar flex-shrink-0 rounded-full w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] overflow-hidden ">
                                                        <img className="tuc-avatar-pic w-full h-full object-cover" src="/img/avatar-example-4.6cd623f4.png" alt="user"/>
                                                    </div>
                                                    <div className="tuc-username font-secondary-bold text-[#1D222C] text-sm sm:text-lg">Sansa</div>
                                                </div>
                                            </div>
                                            <div className="tuc-info flex items-center ml-auto text-lg font-secondary-bold text-[#969BA5] gap-4 flex-wrap sm:flex-nowrap justify-end sm:justify-between">
                                                <div className="tuc-info-bought flex items-center border-r-solid border-r-0 sm:border-r border-r-[#DBE0ED] gap-1 pr-0 sm:pr-4 flex-wrap">
                                                    <div className="tuc-info-bought-text text-xs sm:text-lg">Купленные товары:</div>
                                                    <div className="tuc-info-bought-count text-[#1D222C] text-xs sm:text-lg">863</div>
                                                </div>
                                                <div className="tuc-info-earned flex items-center gap-1 flex-wrap">
                                                    <div className="tuc-info-earned-text text-xs sm:text-lg">Заработано:</div>
                                                    <div className="tuc-info-earned-count text-[#1D222C] text-xs sm:text-lg">58924</div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <div className="stu-total font-secondary-bold text-lg text-black/20 gap-3 flex flex-col">Ваше место
                                <div className="tuc rounded-xl py-2 px-4 sm:px-6 sm:py-6 flex items-center gap-4 bg-[#E7EAF2] justify-between">
                                    <div className='flex justify-between gap-4 flex-col-reverse items-start sm:flex-row sm:items-center'>
                                        <div className="tuc-avatar font-secondary-bold text-[#1D222C] pr-0 md:pr-6 text-xs sm:text-lg">#231322</div>
                                        <div className='flex items-center justify-between gap-4'>
                                            <div className="tuc-avatar flex-shrink-0 rounded-full w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] overflow-hidden ">
                                                <img className="tuc-avatar-pic w-full h-full object-cover" src="/img/avatar-example-4.6cd623f4.png" alt="user"/>
                                            </div>
                                            <div className="tuc-username font-secondary-bold text-sm sm:text-lg text-[#1D222C] ">Evhen_823</div>
                                        </div>
                                    </div>
                                    <div className="tuc-info flex items-center ml-auto text-lg font-secondary-bold text-[#969BA5] gap-4 flex-wrap justify-end sm:justify-between sm:flex-nowrap">
                                        <div className="tuc-info-bought flex items-center border-r-solid border-r-0 sm:border-r border-r-[#DBE0ED] gap-1 pr-0 flex-wrap sm:pr-4">
                                            <div className="tuc-info-bought-text text-xs sm:text-lg">Купленные товары:</div>
                                            <div className="tuc-info-bought-count text-[#1D222C] pl-1 text-xs sm:text-lg">863</div>
                                        </div>
                                        <div className="tuc-info-earned flex items-center gap-1 flex-wrap">
                                            <div className="tuc-info-earned-text text-xs sm:text-lg">Заработано:</div>
                                            <div className="tuc-info-earned-count text-[#1D222C] pl-1 text-xs sm:text-lg">58924</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <LayoutBtn />
        </div>
    );
}

export default TopUsers;
