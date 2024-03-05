import { useState, useEffect } from 'react';

function PrslTop() {
    //const [orient, setOrient] = useState('_lf-row');
    
    return (
        <div className="prsl-top rounded-md min-h-[122px] flex justify-between items-center px-6"> 
            <div className="prsl-item-inf ">
                <div className="font-primary-italic mb-[8px] text-gradient font-bold text-lg italic text-[linear-gradient(90deg,#8CD23C_0%,#417A00_100%)]">Успей занять призовые места!</div>
                <div className="font-primary-italic font-bold text-3xl text-white italic">Статистика обновляется каждые 30 дней</div>
            </div>
            <div className="prsl-item-bar flex justify-center items-center gap-4 ">
                <div className="timer flex items-center gap-1">
                    <div className="timer-item relative flex-shrink-0 flex justify-center items-center w-[67px] h-[67px]">
                        <div className="circle-progress" data-percent="5" data-measure="67" data-measure-640="44">
                            <img src="/img/icon-circle-progress.svg" alt="circle-progress"/>
                        </div>
                        <div className="timer-item-inf absolute flex flex-col items-center justify-center  w-full h-full z-[1]">
                            <div className="timer-value font-primary-med text-center text-lg text-white leading-none 3sm:text-xs">30</div>
                            <div className="timer-value font-primary-bold text-center text-[11px] text-white/60 leading-none 3sm:hidden">дней</div>
                        </div>
                    </div>
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
    );
}

export default PrslTop;
