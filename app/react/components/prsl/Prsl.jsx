import { useState, useEffect } from 'react';

function Prsl() {
    //const [orient, setOrient] = useState('_lf-row');
    
    return (
        <div id="prsl" className="prsl rounded-md min-h-[100px] flex justify-between items-center">
            <div className="swiper prsl-slider w-full h-full px-4">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="prsl-item flex items-center justify-between gap-4 flex-wrap 2md:flex-col 2md:gap-2">
                            <div className="prsl-item-inf flex justify-center items-center gap-6">
                                <div className="prsl-item-pic w-[180px] flex justify-center items-center ml-6">
                                    <img className="w-full img-r" src="/img/raffle.161f3412.png" alt="raffle"/>
                                </div>
                                <div className="prsl-item-award flex items-center gap-2 sm:gap-1">
                                    <div className="prsl-item-award-inf">
                                        <div className="prsl-item-award-title font-secondary-bold text-base text-white">Аккаунт Warface</div>
                                        <div className="prsl-item-award-subtitle mt-1.5 font-secondary-bold text-sm text-white/40">25 Ранг</div>
                                    </div>
                                </div>
                            </div>
                            <div className="prsl-item-bar flex justify-center items-center gap-4 ">
                                <button className="flex justify-center items-center prsl-item-btn  btn-primary rounded w-[180px] h-10 justify-center items-center flex font-secondary-med 0text-[15px] text-white" href="#">Присоединиться</button>
                                <div className="timer flex items-center gap-1">
                                    <div className="timer-item relative flex-shrink-0 flex justify-center items-center w-[67px] h-[67px]">
                                        <div className="circle-progress" data-percent="80" data-measure="67" data-measure-640="44">
                                            <img src="/img/icon-circle-progress.svg" alt="circle-progress"/>
                                        </div>
                                        <div className="timer-item-inf absolute flex flex-col items-center justify-center  w-full h-full z-[1]">
                                            <div className="timer-value font-primary-med text-center text-lg text-white leading-none 3sm:text-xs">24</div>
                                            <div className="timer-value font-primary-bold text-center text-[11px] text-white/60 leading-none 3sm:hidden">часа</div>
                                        </div>
                                    </div>
                                    <div className="timer-item relative flex-shrink-0 flex justify-center items-center w-[67px] h-[67px]">
                                        <div className="circle-progress mt-4" data-percent="60" data-measure="67" data-measure-640="44">
                                            <img src="/img/icon-circle-progress-2.svg" alt="circle-progress"/>
                                        </div>
                                        <div className="timer-item-inf absolute flex flex-col items-center justify-center  w-full h-full z-[1]">
                                            <div className="timer-value font-primary-med text-center text-lg text-white leading-none 3sm:text-xs">44</div>
                                            <div className="timer-value font-primary-bold text-center text-[11px] text-white/60 leading-none 3sm:hidden">минуты</div>
                                        </div>
                                    </div>
                                    <div className="timer-item relative flex-shrink-0 flex justify-center items-center w-[67px] h-[67px]">
                                        <div className="circle-progress" data-percent="5" data-measure="67" data-measure-640="44">
                                            <img src="/img/icon-circle-progress-3.svg" alt="circle-progress"/>
                                        </div>
                                        <div className="timer-item-inf absolute flex flex-col items-center justify-center  w-full h-full z-[1]">
                                            <div className="timer-value font-primary-med text-center text-lg text-white leading-none 3sm:text-xs">05</div>
                                            <div className="timer-value font-primary-bold text-center text-[11px] text-white/60 leading-none 3sm:hidden">секунд</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="swiper-pagination prsl-pag">
                <div className="prsl-pag-item"></div>
                <div className="prsl-pag-item prsl-pag-item-active"></div>
                <div className="prsl-pag-item"></div>
            </div>
            <div className="prsl-btn prsl-btn-prev">
                <div className="btn-icon">
                    <img src="/img/icon-btn-icon.svg" alt="btn-icon"/>
                </div>
            </div>
            <div className="prsl-btn prsl-btn-next">
                <div className="btn-icon">
                    <img src="/img/icon-btn-icon-4.svg" alt="btn-icon"/>
                </div>
            </div>
        </div>
    );
}

export default Prsl;
