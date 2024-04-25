import { useState, useEffect } from 'react';

function TimerCircle(props) {
    //const [orient, setOrient] = useState('_lf-row');

    //Счетчик удаления тоара
    const [count, setCount] = useState(5);
    
    useEffect(() => {
        if(props.count) {
            const interval = setInterval(() => {
                setCount(prevCount => prevCount - 1);
            }, 1000);
    
            return () => {
                clearInterval(interval);
                props.onCloseModalDelTovar();
            };
        };
    }, []);

    useEffect(() => {
        if (props.count && count === 0) {
            props.onCloseModalDelTovar();
            setCount(5);
        };
    }, [count]);
    
    return (
        <div className="timer-item relative flex-shrink-0 flex justify-center items-center w-16 h-16 sm:w-[77px] sm:h-[77px]">
            <div className="circle-progress mt-0" data-percent="60" data-measure="77" data-measure-640="44">
                <img src={`/img/${props.imgCircle}`} alt="circle-progress"/>
            </div>
            <div className="top-[-2px] sm:top-[-6px] left-0 absolute flex flex-col items-center justify-center  w-full h-full z-[1]">
                <div className={`${props.color ? 'text-black mt-1' : 'text-white'} timer-value font-primary-med text-center text-sm leading-none sm:text-lg`}>{props.count ? count : props.timeNumber}</div>
                {props.timeString ?
                    <div className={`${props.color ? 'text-black' : 'text-white/60'} timer-value font-primary-bold text-center text-[9px] leading-none sm:text-[11px]`}>{props.timeString}</div>
                    : null
                }
            </div>
        </div>
    );
}
    
export default TimerCircle;