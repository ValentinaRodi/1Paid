import { useState, useEffect } from 'react';
import PrslTop from '../../components/prslTop/PrslTop';
import TopBanner from '../../components/topBanner/TopBanner';
import LayoutBtn from '../../components/LayoutBtn';

function TopUsers() {
    
    
    return (
        <div className="flex flex-wrap content-between layout-b pb-4 min-w-0">
            <div className='w-full'>
                <div className="sh flex justify-between items-center gap-x-3  mb-6">
                    <div className="w-[252px] hidden">
                        <img src="/img/icon-btn-13.svg" alt="btn-icon" className=""/>
                    </div>
                    <div className="sh-title ">
                        <div >
                            <h2 className="sh-title-text font-secondary-bold text-bold text-2xl text-black">Топ Юзеров</h2>
                            <div className="sh-title-line mt-2 rounded-full w-9 h-1 2md:mt-2 bg-gradient-primary">
                            </div>
                        </div>
                    </div>
                </div>
                <PrslTop />
                <div className='flex justify-between'>
                    <TopBanner />
                    <TopBanner />
                    <TopBanner />
                </div>
                <div className="w-full">
                    <div className="stu-total mt-5 font-secondary-bold text-lg text-black/20 md:mt-4 md:text-sm">Топ 10 мира</div>



                    <div className="stu-inner mt-4 flex flex-col gap-3 2md:block 2md:gap-0 md:mt-3">
                        <div className="stu-feed flex-grow grid grid-cols-1 gap-3">
                            <div className="tuc rounded-xl p-6 flex items-center gap-4 bg-white md:block">
                                <div className="tuc-avatar font-secondary-bold text-lg text-[#1D222C] xl:text-base md:text-sm 2sm:text-xs pr-6">#4</div>
                                <div className="tuc-avatar flex-shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden xl:w-10 xl:h-10 md:w-8 md:h-8">
                                    <img className="tuc-avatar-pic w-full h-full object-cover" src="assets/images/avatar-example-4.6cd623f4.png" alt="user"/>
                                </div>
                                <div className="tuc-username font-secondary-bold text-lg text-[#1D222C] xl:text-base md:text-sm">Sansa</div>
                                <div className="tuc-info flex items-center ml-auto text-lg font-secondary-bold text-[#969BA5]">
                                    <div className="tuc-info-bought flex items-center md:border-l-0 md:pl-0 mr-4">
                                        <div className="tuc-info-bought-text">Купленные товары:</div>
                                        <div className="tuc-info-bought-count text-[#1D222C] xl:text-base md:text-sm pl-1">863</div>
                                    </div>
                                    <div className="tuc-info-earned flex items-center md:border-l-0 md:pl-0 ">
                                        <div className="tuc-info-earned-text">Заработано:</div>
                                        <div className="tuc-info-earned-count text-[#1D222C] xl:text-base md:text-sm pl-1">58924</div>
                                    </div>
                                </div>
                            </div>
                            <div className="stu-total mt-5 font-secondary-bold text-lg text-black/20 md:mt-4 md:text-sm">Ваше место
                                <div className="tuc rounded-xl p-6 flex items-center gap-4 bg-white md:block">
                                    <div className="tuc-avatar font-secondary-bold text-lg text-[#1D222C] xl:text-base md:text-sm 2sm:text-xs pr-6">#4 504</div>
                                    <div className="tuc-avatar flex-shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden xl:w-10 xl:h-10 md:w-8 md:h-8">
                                        <img className="tuc-avatar-pic w-full h-full object-cover" src="assets/images/avatar-example-4.6cd623f4.png" alt="user"/>
                                    </div>
                                    <div className="tuc-username font-secondary-bold text-lg text-[#1D222C] xl:text-base md:text-sm">Sansa</div>
                                    <div className="tuc-info flex items-center ml-auto text-lg font-secondary-bold text-[#969BA5]">
                                        <div className="tuc-info-bought flex items-center md:border-l-0 md:pl-0 mr-4">
                                            <div className="tuc-info-bought-text">Купленные товары:</div>
                                            <div className="tuc-info-bought-count text-[#1D222C] xl:text-base md:text-sm pl-1">863</div>
                                        </div>
                                        <div className="tuc-info-earned flex items-center md:border-l-0 md:pl-0 ">
                                            <div className="tuc-info-earned-text">Заработано:</div>
                                            <div className="tuc-info-earned-count text-[#1D222C] xl:text-base md:text-sm pl-1">58924</div>
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
