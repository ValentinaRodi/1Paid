import { useState, useEffect } from 'react';

function Achievement(props) {

    return (
        <div className="achc rounded-lg p-4 sm:p-6 flex flex-col justify-start items-center bg-white shadow-lg">
            <div className="achc-pic max-w-[100px] max-h-[100px] sm:max-w-[120px] sm:max-h-[120px] rounded-full border border-solid border-[#E9EAF4]">
                <img className={props.open === 'false' ? 'opacity-30 max-w-[80px] max-h-[80px] sm:max-w-[97px] sm:max-h-[97px]' : 'w-full h-full'} src={`/img/${props.icon}`} alt="picture"/>
            </div>
            <div className="achc-title mt-1.5 sm:mt-3 font-primary-bold text-center text-[11px] sm:text-[13px] text-black">{props.open === 'false' ? 'Не открытое достижение' : props.name}</div>
            <div className="achc-desc mt-1 sm:mt-2 font-secondary-med text-center text-[10px] sm:text-xs text-[#A6B1C7]">{props.desc}</div>
            {props.open === 'false' ?
                <div className="achc-progress mt-3 sm:mt-5 overflow-hidden rounded-lg w-full h-[3px] bg-[#F1EDED]">
                    <div className="achc-progress-line rounded-lg w-[65%] h-full bg-gradient-primary"></div>
                </div>
                : null
            }
        </div>       
    );
};

export default Achievement;