import { useState, useEffect } from 'react';
import TimerCircle from '../timerСircle/TimerCircle';

function PrslTop() {
    //const [orient, setOrient] = useState('_lf-row');
    
    return (
        <div className="prsl-top rounded-md min-h-[122px] flex justify-center sm:justify-between items-center px-0 sm:px-6 py-2 sm:py-4 flex-wrap gap-y-2 gap-x-4"> 
            <div className="prsl-item-inf ">
                <div className="font-primary-italic mb-0 sm:mb-2 text-gradient text-sm sm:text-base xl:text-lg text-center sm:text-start text-[linear-gradient(90deg,#8CD23C_0%,#417A00_100%)]">Успей занять призовые места!</div>
                <div className="font-primary-italic text-xs min-[425px]:text-sm sm:text-xl xl:text-3xl text-white text-center sm:text-start">Статистика обновляется каждые 30 дней</div>
            </div>
            <div className="prsl-item-bar flex justify-center items-center gap-4 ">
                <div className="timer flex items-center gap-1">
                    <TimerCircle timeNumber='30' timeString='дней' imgCircle='icon-circle-progress.svg'/>
                    <TimerCircle timeNumber='24' timeString='часа' imgCircle='icon-circle-progress.svg'/>
                    <TimerCircle timeNumber='44' timeString='минуты' imgCircle='icon-circle-progress.svg'/>
                    <TimerCircle timeNumber='05' timeString='секунд' imgCircle='icon-circle-progress-3.svg'/>
                </div>
            </div>
        </div>
    );
}

export default PrslTop;
