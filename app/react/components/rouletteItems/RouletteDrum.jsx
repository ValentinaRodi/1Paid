import React, { useEffect, useState, useRef } from "react";
import uuid from 'react-uuid';

function RouletteDrum(props) {

    return (

        <div className="ocd flex bg-white rounded-2xl h-[474px] justify-center items-center w-full font-secondary-bold">
            <div className="ocd-drum flex justify-center items-center bg-[#3B5AEF] min-w-[426px] min-h-[426px] max-w-[426px] max-h-[426px] rounded-full relative">
                <div className="ocr-point flex-shrink-0  absolute top-0 left-[47%] z-10">
                    <img className="ocr-image-pic w-full h-full object-cover" src="/img/icon-roulette-white.svg" alt="arrow white"/>
                </div>
                <div className="ocd-drum-line block min-w-[392px] min-h-[392px] border-[8px] border-white/10 rounded-full absolute z-0"></div>
                <div className="ocd-drum-btn min-w-[171px] min-h-[171px] bg-white rounded-full absolute z-0 flex justify-center items-center">
                    <div className="flex flex-col justify-center items-center min-w-[152px] min-h-[152px] bg-[url(/img/icon-card.png)] bg-center bg-no-repeat rounded-full absolute z-1 border-[8px] border-solid border-[#F3F7FF]">
                        <span className="text-base font-secondary-bold text-black/60 mt-3">Крутить</span>
                        <span className="text-xl font-secondary-bold font-bold">140₽</span>
                    </div>
                </div>
                <div className="ocd-item-wrapper flex items-center w-full z-10 p-5 flex justify-center items-center absolute z-0 top-0 left-0">
                    <div className="ocd-item flex flex-col items-center h-[92px] w-[85px] relative">
                        <div className="w-[78px] h-[78px] bg-[#EAEFFB] border-[4px] border-solid border-white rounded-full " ></div>
                        <div className="absolute z-0 bottom-0 left-[13%] font-secondary-bold font-bold text-[10px] bg-[linear-gradient(90deg,#FB9B41_0%,#F2B96D_100%)] flex items-center justify-center w-[65px] h-[26px] rounded-[100px]">40 ранг</div>
                        {/* <img className="ocd-item-pic w-full h-full object-cover" src="/img/oc-drum-item.a8b5ff35.svg" alt="user"/> */}
                    </div>
                </div>
            </div>
        </div>


        // <div className="ocr flex w-full font-secondary-bold bg-white rounded-2xl py-6 overflow-x-hidden ocr-item-wrapper ">
        //     <div className="ocr-point flex-shrink-0  absolute top-[16px] left-[50%] z-10">
        //         <img className="ocr-image-pic w-full h-full object-cover" src="/img/icon-arrow-green.svg" alt="arrow green"/>
        //     </div>
        //     <div className="ocr-point flex-shrink-0 absolute bottom-[16px] left-[50%] rotate-180 z-10">
        //         <img className="ocr-image-pic w-full h-full object-cover" src="/img/icon-arrow-green.svg" alt="arrow green"/>
        //     </div>
        //     <div className="ocr-lenta flex items-center">
        //         <div className="flex items-center w-full gap-2">
        //             {
        //                 (props.arrRoulet.length !== 0) ? (
        //                     props.arrRoulet.map((item, index) => (
        //                         <div key={uuid()} className="ocr-item flex flex-col items-center px-2 pt-2 pb-3 h-[222px] w-[176px] border border-black/20 rounded-[12px] gap-2">
        //                             <div className="ocr-image flex-shrink-0 flex-grow">
        //                                 <img className="ocr-image-pic w-full h-full object-cover" src="/img/case-item.d663c019.png" alt="user"/>
        //                             </div>
        //                             <div className="ocr-item-info flex flex-col w-full">
        //                                 <div className="ocr-item-label font-secondary-bold text-black text-[13px]">Ранг 20</div>
        //                                 <div className="ocr-item-description font-secondary-med text-xs text-[#A6B1C7]">Уровень</div>
        //                             </div>
        //                         </div>
        //                     ))
        //                 ) : null
        //             }
        //         </div>
        //     </div>
        // </div>         
    );
}

export default RouletteDrum;