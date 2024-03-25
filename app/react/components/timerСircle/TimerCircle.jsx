import { useState, useEffect } from 'react';

function TimerCircle(props) {
    //const [orient, setOrient] = useState('_lf-row');
    
    return (
        <div className="timer-item relative flex-shrink-0 flex justify-center items-center w-14 h-14 sm:w-[67px] sm:h-[67px]">
            <div className="circle-progress mt-0" data-percent="60" data-measure="67" data-measure-640="44">
                <img src={`/img/${props.imgCircle}`} alt="circle-progress"/>
            </div>
            <div className="timer-item-inf absolute flex flex-col items-center justify-center  w-full h-full z-[1]">
                <div className="timer-value font-primary-med text-center text-sm text-white leading-none sm:text-lg">{props.timeNumber}</div>
                <div className="timer-value font-primary-bold text-center text-[9px] text-white/60 leading-none sm:text-[11px]">{props.timeString}</div>
            </div>
        </div>
    );
}
    
export default TimerCircle;