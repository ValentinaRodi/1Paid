import React, { useEffect, useState, useRef } from "react";
import uuid from 'react-uuid';

function RouletteCards(props) {
    

    return (
        <div className="ocr flex w-full font-secondary-bold bg-white rounded-2xl p-4 sm:p-6 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-2">
                {
                    (props.arrRoulet.length !== 0) ? (
                        props.arrRoulet.map((item, index) => {
                            if(index < 4) {
                                return (
                                    <div key={uuid()} className={`${props.selectedCardIndex === index ? 'border-[#7ebd36]' : 'border-black/20'} scd-card flex flex-col items-center w-full  px-2 pt-2 pb-3 border  rounded-[12px] gap-3`}>
                                        <div className="scd-card-image bg-[#F6F6F6] h-[160px] rounded-xl flex flex-col items-center justify-center flex-shrink-0 flex-grow w-full items-center">
                                            <img className="scd-card-pic" src="/img/card-find.d3de9e6d.png" alt="card"/>
                                        </div>
                                        <div className="scd-card-info flex justify-between self-end items-center w-full border border-solid border-[#F3F7FF] rounded-[100px] pl-4">
                                            <div className="scd-card-name text-black font-secondary-bold font-bold text-xs">Открыть за 149₽</div>
                                            <button onClick={() => props.clickCard(index)} className="shadow-basket btn btn-secondary flex justify-center items-center flex-shrink-0 text-white bg-gradient-secondary h-[44px] w-[44px] rounded-full">
                                                <img className="w-[25px] h-[25px]" src="/img/icon-hand.svg" alt="chouse"/>
                                            </button>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    ) : null
                }
            </div>
        </div>         
    );
}

export default RouletteCards;