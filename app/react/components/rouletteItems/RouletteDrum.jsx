import React, { useEffect, useState, useRef } from "react";
import uuid from 'react-uuid';
import RouletteDrumItem from "./RouletteDrumItem";

function RouletteDrum(props) {

    return (
        <div className="ocd flex bg-white rounded-2xl h-[345px] min-[466px]:h-[474px] justify-center items-center w-full font-secondary-bold">
            <div className="ocd-drum z-10 flex justify-center items-center bg-[#3B5AEF] w-[280px] h-[285px] min-[466px]:w-[426px] min-[466px]:h-[426px] rounded-full relative">
                <div className="ocr-point flex-shrink-0  absolute top-[-1px] left-[45%] min-[466px]:left-[47%] z-10">
                    <img className="ocr-image-pic w-full h-full object-cover" src="/img/icon-roulette-white.svg" alt="arrow white"/>
                </div>
                <div className="ocd-drum-line block w-[269px] min-[466px]:w-[392px] h-[269px] min-[466px]:h-[392px] border-[8px] border-white/10 rounded-full absolute z-0"></div>
                <div className="ocd-drum-btn w-[120px] min-[466px]:w-[171px] h-[120px] min-[466px]:h-[171px] bg-white rounded-full absolute z-0 flex justify-center items-center">
                    <div className="flex flex-col justify-center items-center w-[101px] min-[466px]:w-[152px] h-[101px] min-[466px]:h-[152px] bg-[url(/img/icon-card.png)] bg-center bg-no-repeat rounded-full absolute z-1 border-[8px] border-solid border-[#F3F7FF]">
                        <span className="text-sm min-[466px]:text-base font-secondary-bold text-black/60 mt-3">Крутить</span>
                        <span className="text-base min-[466px]:text-xl font-secondary-bold font-bold">140₽</span>
                    </div>
                </div>
                <RouletteDrumItem class='top-left-left' prize='50 PD'/>
                <RouletteDrumItem class='top-left-right' prize='500 PD'/>
                <RouletteDrumItem class='center-bottom-left' prize='100 PD'/>
                <RouletteDrumItem class='center-bottom-right' prize='10 PD'/>
                <RouletteDrumItem class='center-top-left' prize='1000 PD'/>
                <RouletteDrumItem class='center-top-right' prize='200 PD'/>
                <RouletteDrumItem class='bottom-left-left' prize='2000 PD'/>
                <RouletteDrumItem class='bottom-left-right' prize='20 PD'/>
            </div>
        </div>
    );
}

export default RouletteDrum;