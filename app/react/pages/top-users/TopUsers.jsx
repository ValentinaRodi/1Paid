import { useState, useEffect } from 'react';
import PrslTop from '../../components/prslTop/PrslTop';
import TopBanner from '../../components/topBanner/TopBanner';
import LayoutBtn from '../../components/LayoutBtn';
import uuid from 'react-uuid';

function TopUsers() {
    
    useEffect(() => {
        const headerHeight = document.querySelector('.layout-h').getBoundingClientRect().height;
        const mainHeight = document.querySelector('.layout-main').getBoundingClientRect().height;
        const totalHeight = headerHeight + mainHeight;
        document.querySelector('.lf-feed').style.height = totalHeight + "px";
    }, []);
    
    const arr = [1,2,3,4,5,6,7,8,9,10];

    return (
        <div className="flex flex-wrap content-between layout-b pb-4 min-w-0">
            <div className='w-full layout-main'>
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
                <div className='flex justify-between mt-3 flex-wrap gap-y-2'>
                    <div className='min-w-[33%] h-[100px] rounded-xl  bg-white relative'>
                        <div className='absolute top-0 left-6 bg-gold w-36 h-[22px] rounded-b-xl text-white text-xs flex items-center justify-center'>10 000 РУБЛЕЙ</div>
                        <div className='flex justify-between items-center h-full'>
                            <div className={`h-full bg-[url('/img/user_foto.png')] bg-cover rounded-xl pl-6 flex flex-col h-full justify-center w-[148px]`}>
                                <div className='font-bold font-secondary-bold text-lg mb-2'>Santchezz</div>
                                <div className='relative bg-gold rounded-[100px] w-16 h-[22px] font-bold font-secondary-bold text-white text-xs flex items-center justify-center'>
                                    1 место
                                    <img className='opacity-20 block absolute top-1 left-[23px]' src='/img/shape.svg' alt='shape'/>
                                </div>
                            </div>
                            <div className='border-x-solid border-x border-x-[#DBE0ED] px-4 flex flex-col '>
                                <div className='font-bold font-secondary-bold text-base mb-2'>342 819</div>
                                <div className='font-bold font-secondary-bold text-[#B4BAD2] text-xs'>Купленные товары</div>
                            </div>
                            <div className='px-4'>
                                <div className='font-bold font-secondary-bold text-base mb-2 flex flex-col'>118 523₽</div>
                                <div className='font-bold font-secondary-bold text-[#B4BAD2] text-xs'>Заработанно</div>
                            </div>
                        </div>
                    </div>
                    <div className='min-w-[33%] h-[100px] rounded-xl  bg-white relative'>
                        <div className='absolute top-0 left-6 bg-silver w-36 h-[22px] rounded-b-xl text-white text-xs flex items-center justify-center'>10 000 РУБЛЕЙ</div>
                        <div className='flex justify-between items-center h-full'>
                            <div className={`h-full bg-[url('/img/user_foto.png')] bg-cover rounded-xl pl-6 flex flex-col h-full justify-center w-[148px]`}>
                                <div className='font-bold font-secondary-bold text-lg mb-2'>Santchezz</div>
                                <div className='relative bg-silver rounded-[100px] w-16 h-[22px] font-bold font-secondary-bold text-white text-xs flex items-center justify-center'>
                                    2 место
                                    <img className='opacity-20 block absolute top-1 left-[23px]' src='/img/shape.svg' alt='shape'/>
                                </div>
                            </div>
                            <div className='border-x-solid border-x border-x-[#DBE0ED] px-4 flex flex-col '>
                                <div className='font-bold font-secondary-bold text-base mb-2'>342 819</div>
                                <div className='font-bold font-secondary-bold text-[#B4BAD2] text-xs'>Купленные товары</div>
                            </div>
                            <div className='px-4'>
                                <div className='font-bold font-secondary-bold text-base mb-2 flex flex-col'>118 523₽</div>
                                <div className='font-bold font-secondary-bold text-[#B4BAD2] text-xs'>Заработанно</div>
                            </div>
                        </div>
                    </div>
                    <div className='min-w-[33%] h-[100px] rounded-xl  bg-white relative'>
                        <div className='absolute top-0 left-6 bg-bronze w-36 h-[22px] rounded-b-xl text-white text-xs flex items-center justify-center'>10 000 РУБЛЕЙ</div>
                        <div className='flex justify-between items-center h-full'>
                            <div className={`h-full bg-[url('/img/user_foto.png')] bg-cover rounded-xl pl-6 flex flex-col h-full justify-center w-[148px]`}>
                                <div className='font-bold font-secondary-bold text-lg mb-2'>Santchezz</div>
                                <div className='relative bg-bronze rounded-[100px] w-16 h-[22px] font-bold font-secondary-bold text-white text-xs flex items-center justify-center'>
                                    3 место
                                    <img className='opacity-20 block absolute top-1 left-[23px]' src='/img/shape.svg' alt='shape'/>
                                </div>
                            </div>
                            <div className='border-x-solid border-x border-x-[#DBE0ED] px-4 flex flex-col '>
                                <div className='font-bold font-secondary-bold text-base mb-2'>342 819</div>
                                <div className='font-bold font-secondary-bold text-[#B4BAD2] text-xs'>Купленные товары</div>
                            </div>
                            <div className='px-4'>
                                <div className='font-bold font-secondary-bold text-base mb-2 flex flex-col'>118 523₽</div>
                                <div className='font-bold font-secondary-bold text-[#B4BAD2] text-xs'>Заработанно</div>
                            </div>
                        </div>
                    </div>
                    {/* <TopBanner name='Santchezz' rank='1' tovar='342 819' money='10 000' moneyGet='118 523' userFoto='/img/user_foto.png'/>
                    <TopBanner name='Santchezz' rank='2' tovar='342 819' money='5 000' moneyGet='118 523' userFoto='/img/user_foto.png'/>
                    <TopBanner name='Santchezz' rank='3' tovar='342 819' money='1 000' moneyGet='118 523' userFoto='/img/user_foto.png'/> */}
                </div>
                <div className="w-full">
                    <div className="stu-total mt-6 font-secondary-bold text-lg text-[#C5CFE4]">Топ 10 мира</div>
                    <div className="stu-inner mt-4 flex flex-col gap-3 ">
                        <div className="stu-feed flex-grow grid grid-cols-1 gap-3">
                            {
                                arr.map((item, index) => {
                                    return (
                                        <div key={uuid()} className="tuc rounded-xl p-6 flex items-center gap-4 bg-white ">
                                            <div className="tuc-avatar font-secondary-bold text-lg text-[#1D222C]  pr-6">#{index+1}</div>
                                            <div className="tuc-avatar flex-shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden ">
                                                <img className="tuc-avatar-pic w-full h-full object-cover" src="/img/avatar-example-4.6cd623f4.png" alt="user"/>
                                            </div>
                                            <div className="tuc-username font-secondary-bold text-lg text-[#1D222C] ">Sansa</div>
                                            <div className="tuc-info flex items-center ml-auto text-lg font-secondary-bold text-[#969BA5] gap-4">
                                                <div className="tuc-info-bought flex items-center border-r-solid border-r border-r-[#DBE0ED] gap-1 pr-4">
                                                    <div className="tuc-info-bought-text ">Купленные товары:</div>
                                                    <div className="tuc-info-bought-count text-[#1D222C] ">863</div>
                                                </div>
                                                <div className="tuc-info-earned flex items-center gap-1">
                                                    <div className="tuc-info-earned-text">Заработано:</div>
                                                    <div className="tuc-info-earned-count text-[#1D222C] ">58924</div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <div className="stu-total font-secondary-bold text-lg text-black/20 gap-3 flex flex-col">Ваше место
                                <div className="tuc rounded-xl p-6 flex items-center gap-4 bg-[#E7EAF2]">
                                    <div className="tuc-avatar font-secondary-bold text-lg text-[#1D222C] pr-6">#231322</div>
                                    <div className="tuc-avatar flex-shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden ">
                                        <img className="tuc-avatar-pic w-full h-full object-cover" src="/img/avatar-example-4.6cd623f4.png" alt="user"/>
                                    </div>
                                    <div className="tuc-username font-secondary-bold text-lg text-[#1D222C] ">Evhen_823</div>
                                    <div className="tuc-info flex items-center ml-auto text-lg font-secondary-bold text-[#969BA5] gap-4">
                                        <div className="tuc-info-bought flex items-center border-r-solid border-r border-r-[#DBE0ED] gap-1 pr-4">
                                            <div className="tuc-info-bought-text ">Купленные товары:</div>
                                            <div className="tuc-info-bought-count text-[#1D222C]  pl-1">863</div>
                                        </div>
                                        <div className="tuc-info-earned flex items-center gap-1 ">
                                            <div className="tuc-info-earned-text">Заработано:</div>
                                            <div className="tuc-info-earned-count text-[#1D222C]  pl-1">58924</div>
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
