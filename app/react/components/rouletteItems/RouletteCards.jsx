import React, { useEffect, useState, useRef } from "react";
import uuid from 'react-uuid';

function RouletteCards(props) {

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
                                <div key={uuid()} className="scd-card flex flex-col items-center h-[236px] w-[303px] px-2 pt-2 pb-3 border border-black/20 rounded-[12px] gap-3">
                                    <div className="scd-card-image bg-[#F6F6F6] rounded-xl flex flex-col items-center justify-center flex-shrink-0 flex-grow w-full items-center">
                                        <img className="scd-card-pic" src="/img/card-find.d3de9e6d.png" alt="card"/>
                                    </div>
                                    <div className="scd-card-info flex justify-between self-end items-center w-full border border-solid border-[#F3F7FF] rounded-[100px] pl-4">
                                        <div className="scd-card-name text-black font-secondary-bold font-bold text-xs">Открыть за 149₽</div>
                                        <button className="shadow-basket btn-secondary flex justify-center items-center flex-shrink-0 text-white bg-gradient-secondary h-[44px] w-[44px] rounded-full">
                                            <img className="w-[20px] h-[20px]" src="/img/icon-buy.5c571de4.svg" alt="buy"/>
                                        </button>
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

export default RouletteCards;