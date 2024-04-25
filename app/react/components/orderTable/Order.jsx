import React, { useEffect, useState, useRef } from "react";
import uuid from 'react-uuid';
import TimerCircle from '../timerСircle/TimerCircle';

function Order() {
    const [arr, setArr] = useState([1,2]);

    const deleteOrder = (itemId) => {
        console.log('itemId', itemId);
        const newArr = arr.filter((element, index) => index !== 0);
        setArr(newArr);
    };

    return (
        <div id='order'>
            {
                (arr.length !== 0) ? (
                    arr.map((item, index) => {
                        return (
                            <div key={uuid()} id={index}  className="py-3 sotl-item flex rounded-lg items-center gap-x-2 sm:gap-x-3 justify-between font-secondary-bold text-[8px] sm:text-sm text-black bg-white w-full min-h-[56px] px-4 sm:px-6 mb-[12px] ">
                                <div className="flex w-[80%] items-center gap-x-2 sm:gap-x-3 gap-y-2 justify-between flex-wrap sm:flex-nowrap">
                                    <div className="w-[80%] flex gap-y-2 sm:gap-y-0 gap-x-2 sm:gap-x-3 justify-start sm:justify-between flex-wrap min-[1310px]:flex-nowrap">
                                        <div className="flex gap-x-4 sm:gap-x-6 flex-row flex-wrap">
                                            <div className="sotl-item-block flex items-center gap-1">
                                                <div className="sotl-item-label text-[#969BA5] ">Название:</div>
                                                <div className="sotl-item-value whitespace-nowrap text-ellipsis w-[62%] overflow-hidden hover:whitespace-unset hover:text-unset">Аккаунт Warface за test</div>
                                            </div>
                                            <div className="sotl-item-block flex items-center gap-1">
                                                <div className="sotl-item-label text-[#969BA5] ">Каталог:</div>
                                                <div className="sotl-item-value">Warface/Аккаунты</div>
                                            </div>
                                        </div>
                                        <div className="flex gap-x-3 flex-row flex-wrap">
                                            <div className="sotl-item-block flex items-center gap-1 ">
                                                <div className="sotl-item-label text-[#969BA5] ">Описание:</div>
                                                <div className="sotl-item-value whitespace-nowrap text-ellipsis w-[65%] overflow-hidden">Помогите набить 500 test</div>
                                            </div>
                                            <div className="sotl-item-block flex items-center gap-1">
                                                <div className="sotl-item-label text-[#969BA5] ">Фильтры:</div>
                                                <div className="sotl-item-value">Добавлены</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sotl-item-block flex items-center gap-2 min-w-[116px] w-max sm:w-auto">
                                        <div className="sotl-item-label text-[#969BA5] ">Цена:</div>
                                        <div className="flex flex-wrap gap-x-1">
                                            <div className="sotl-item-value">от 675</div>
                                            <div className="sotl-item-value">до 1345</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-end items-center flex-col-reverse sm:flex-row gap-2 sm:gap-0 md:gap-2 h-full ">
                                    <div className="flex justify-center items-center gap-px md:gap-2 self-end flex-wrap md:flex-nowrap">
                                        <div className="font-primary-bold text-center text-[9px] md:text-[11px] text-[#FF5343] leading-none">Удалиться через: </div>
                                        <TimerCircle timeNumber='24' timeString='часа' imgCircle='icon-circle-progress.svg' color='true'/>
                                    </div>
                                    <div className='flex justify-end self-end sm:self-start items-center h-full mr-[-6px] pl-0 md:pl-3 mt-[-2px] border-none md:border-l border-solid border-[#DBE0ED] md:self-center'>
                                        <button  onClick={() => deleteOrder(index)} className='w-[24px] h-[24px] p-0 bg-inherit hover:bg-[rgba(241,245,249,1)] flex items-center justify-center'>
                                            <img src="/img/icon-close-2.svg" alt="close"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                ) : (<div></div>)
            }
        </div>
    );
}

export default Order;