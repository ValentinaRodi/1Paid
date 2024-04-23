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
                <div className="ocd-item-wrapper flex items-center w-full z-10 p-5 flex justify-center items-center absolute z-0 top-[12px] left-[55px]">
                    <div className="ocd-item flex flex-col items-center h-[92px] w-[85px] relative">
                        <div className="w-[78px] h-[78px] bg-[#EAEFFB] border-[4px] border-solid border-white rounded-full" ></div>
                        <div className="absolute z-0 bottom-[11px] left-[13%] font-secondary-bold font-bold text-[10px] bg-[linear-gradient(90deg,#FB9B41_0%,#F2B96D_100%)] flex items-center justify-center w-[65px] h-[26px] rounded-[100px]">50 PD</div>
                    </div>
                </div>
                <div className="ocd-item-wrapper flex items-center w-full z-10 p-5 flex justify-center items-center absolute z-0 top-[12px] left-[-55px]">
                    <div className="ocd-item flex flex-col items-center h-[92px] w-[85px] relative">
                        <div className="w-[78px] h-[78px] bg-[#EAEFFB] border-[4px] border-solid border-white rounded-full " ></div>
                        <div className="absolute z-0 bottom-[11px] left-[13%] font-secondary-bold font-bold text-[10px] bg-[linear-gradient(90deg,#FB9B41_0%,#F2B96D_100%)] flex items-center justify-center w-[65px] h-[26px] rounded-[100px] pt-[3px]">500 PD</div>
                    </div>
                </div>
                <div className="ocd-item-wrapper flex items-center w-full z-10 p-5 flex justify-center items-center absolute z-0 bottom-0 left-[55px]">
                    <div className="ocd-item flex flex-col items-center h-[92px] w-[85px] relative">
                        <div className="w-[78px] h-[78px] bg-[#EAEFFB] border-[4px] border-solid border-white rounded-full " ></div>
                        <div className="absolute z-0 bottom-[11px] left-[13%] font-secondary-bold font-bold text-[10px] bg-[linear-gradient(90deg,#FB9B41_0%,#F2B96D_100%)] flex items-center justify-center w-[65px] h-[26px] rounded-[100px] pt-[3px]">10 PD</div>
                    </div>
                </div>
                <div className="ocd-item-wrapper flex items-center w-full z-10 p-5 flex justify-center items-center absolute z-0 bottom-0 left-[-55px]">
                    <div className="ocd-item flex flex-col items-center h-[92px] w-[85px] relative">
                        <div className="w-[78px] h-[78px] bg-[#EAEFFB] border-[4px] border-solid border-white rounded-full " ></div>
                        <div className="absolute z-0 bottom-[11px] left-[13%] font-secondary-bold font-bold text-[10px] bg-[linear-gradient(90deg,#FB9B41_0%,#F2B96D_100%)] flex items-center justify-center w-[65px] h-[26px] rounded-[100px] pt-[3px]">1000 PD</div>
                    </div>
                </div>
                <div className="ocd-item-wrapper flex items-center w-full z-10 p-5 flex justify-center items-center absolute z-0 top-[93px] left-[139px]">
                    <div className="ocd-item flex flex-col items-center h-[92px] w-[85px] relative">
                        <div className="w-[78px] h-[78px] bg-[#EAEFFB] border-[4px] border-solid border-white rounded-full " ></div>
                        <div className="absolute z-0 bottom-[11px] left-[13%] font-secondary-bold font-bold text-[10px] bg-[linear-gradient(90deg,#FB9B41_0%,#F2B96D_100%)] flex items-center justify-center w-[65px] h-[26px] rounded-[100px] pt-[3px]">150 PD</div>
                    </div>
                </div>
                <div className="ocd-item-wrapper flex items-center w-full z-10 p-5 flex justify-center items-center absolute z-0 top-[93px] left-[-139px]">
                    <div className="ocd-item flex flex-col items-center h-[92px] w-[85px] relative">
                        <div className="w-[78px] h-[78px] bg-[#EAEFFB] border-[4px] border-solid border-white rounded-full " ></div>
                        <div className="absolute z-0 bottom-[11px] left-[13%] font-secondary-bold font-bold text-[10px] bg-[linear-gradient(90deg,#FB9B41_0%,#F2B96D_100%)] flex items-center justify-center w-[65px] h-[26px] rounded-[100px] pt-[3px]">50 PD</div>
                    </div>
                </div>
                <div className="ocd-item-wrapper flex items-center w-full z-10 p-5 flex justify-center items-center absolute z-0 bottom-[86px] left-[144px]">
                    <div className="ocd-item flex flex-col items-center h-[92px] w-[85px] relative">
                        <div className="w-[78px] h-[78px] bg-[#EAEFFB] border-[4px] border-solid border-white rounded-full " ></div>
                        <div className="absolute z-0 bottom-[11px] left-[13%] font-secondary-bold font-bold text-[10px] bg-[linear-gradient(90deg,#FB9B41_0%,#F2B96D_100%)] flex items-center justify-center w-[65px] h-[26px] rounded-[100px] pt-[3px]">1500 PD</div>
                    </div>
                </div>
                <div className="ocd-item-wrapper flex items-center w-full z-10 p-5 flex justify-center items-center absolute z-0 bottom-[86px] left-[-144px]">
                    <div className="ocd-item flex flex-col items-center h-[92px] w-[85px] relative">
                        <div className="w-[78px] h-[78px] bg-[#EAEFFB] border-[4px] border-solid border-white rounded-full " ></div>
                        <div className="absolute z-0 bottom-[11px] left-[13%] font-secondary-bold font-bold text-[10px] bg-[linear-gradient(90deg,#FB9B41_0%,#F2B96D_100%)] flex items-center justify-center w-[65px] h-[26px] rounded-[100px] pt-[3px]">40 ранг</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RouletteDrum;