import React, { useEffect, useState, useRef } from "react";
import "./rouletteDrumItem.less";

import uuid from 'react-uuid';

function RouletteDrumItem(props) {

    return (
        <div className={`${props.class} ocd-item-wrapper flex items-center w-full z-10 p-5 flex justify-center items-center absolute z-0`}>
            <div className="ocd-item flex flex-col items-center h-[92px] w-[85px] relative">
                <div className="w-[55px] min-[466px]:w-[78px] h-[55px] min-[466px]:h-[78px] bg-[#EAEFFB] border-[4px] border-solid border-white rounded-full" ></div>
                <div className="absolute z-0 bottom-[31px] min-[466px]:bottom-[11px] left-[21%] min-[466px]:left-[13%] font-secondary-bold font-bold text-[7px] min-[466px]:text-[10px] bg-[linear-gradient(90deg,#FB9B41_0%,#F2B96D_100%)] flex items-center justify-center w-[50px] min-[466px]:w-[65px] h-[19px] min-[466px]:h-[26px] rounded-[100px]">{props.prize}</div>
            </div>
        </div>      
    );
}

export default RouletteDrumItem;