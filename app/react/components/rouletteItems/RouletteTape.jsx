import React, { useEffect, useState, useRef } from "react";
import uuid from 'react-uuid';

function RouletteTape(props) {

    return (
        <div className="ocr flex w-full font-secondary-bold bg-white rounded-2xl py-6 overflow-x-hidden ocr-item-wrapper ">
            <div className="ocr-point flex-shrink-0  absolute top-[16px] left-[50%] z-10">
                <img className="ocr-image-pic w-full h-full object-cover" src="/img/icon-arrow-green.svg" alt="arrow green"/>
            </div>
            <div className="ocr-point flex-shrink-0 absolute bottom-[16px] left-[50%] rotate-180 z-10">
                <img className="ocr-image-pic w-full h-full object-cover" src="/img/icon-arrow-green.svg" alt="arrow green"/>
            </div>
            <div className="ocr-lenta flex items-center">
                <div className="flex items-center w-full gap-2">
                    {
                        (props.arrRoulet.length !== 0) ? (
                            props.arrRoulet.map((item, index) => (
                                <div key={uuid()} className="ocr-item flex flex-col items-center px-2 pt-2 pb-3 h-[222px] w-[176px] border border-black/20 rounded-[12px] gap-2">
                                    <div className="ocr-image flex-shrink-0 flex-grow">
                                        <img className="ocr-image-pic w-full h-full object-cover" src="/img/case-item.d663c019.png" alt="user"/>
                                    </div>
                                    <div className="ocr-item-info flex flex-col w-full">
                                        <div className="ocr-item-label font-secondary-bold text-black text-[13px]">Ранг 20</div>
                                        <div className="ocr-item-description font-secondary-med text-xs text-[#A6B1C7]">Уровень</div>
                                    </div>
                                </div>
                            ))
                        ) : null
                    }
                </div>
            </div>
        </div>         
    );
}

export default RouletteTape;