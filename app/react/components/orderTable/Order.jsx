import React, { useEffect, useState, useRef } from "react";
import uuid from 'react-uuid';

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
                            <div key={uuid()} id={index} className="sotl-list w-full flex flex-col ">
                                <div className="sotl-item flex rounded-lg items-center justify-between font-secondary-bold text-sm text-black bg-white w-full h-[56px] p-[24px] max-h-[56px] mb-[12px] ">
                                    <div className="flex gap-x-6 flex-wrap">
                                        <div className="sotl-item-block flex items-center gap-1">
                                            <div className="sotl-item-label text-[#969BA5] ">Название:</div>
                                            <div className="sotl-item-value whitespace-nowrap text-ellipsis w-[62%] overflow-hidden hover:whitespace-unset hover:text-unset">Аккаунт Warface за test</div>
                                        </div>
                                        <div className="sotl-item-block flex items-center gap-1">
                                            <div className="sotl-item-label text-[#969BA5] ">Каталог:</div>
                                            <div className="sotl-item-value">Warface/Аккаунты</div>
                                        </div>
                                    </div>
                                    <div className="flex gap-x-3 flex-wrap ">
                                        <div className="sotl-item-block flex items-center gap-1 pr-3 border-r border-solid border-[#DBE0ED]">
                                            <div className="sotl-item-label text-[#969BA5] ">Описание:</div>
                                            <div className="sotl-item-value whitespace-nowrap text-ellipsis w-[65%] overflow-hidden">Помогите набить 500 test</div>
                                        </div>
                                        <div className="sotl-item-block flex items-center gap-1 pr-3 border-r border-solid border-[#DBE0ED]">
                                            <div className="sotl-item-label text-[#969BA5] ">Фильтры:</div>
                                            <div className="sotl-item-value">Добавлены</div>
                                        </div>
                                        <div className="sotl-item-block flex items-center gap-1 ">
                                            <div className="sotl-item-label text-[#969BA5] ">Цена:</div>
                                            <div className="sotl-item-value">от 675 до 1345</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2.5 ">
                                        <div className="font-primary-bold text-center text-[11px] text-[#FF5343] leading-none">Удалиться через: </div>
                                        <div className="timer-item relative flex-shrink-0 flex justify-center items-center ">
                                            <div className="circle-progress w-16 h-16" >
                                                <img src="/img/icon-circle-progress.svg" alt="circle-progress"/>
                                            </div>
                                            <div className="top-[-3px] left-[-6px] absolute flex flex-col items-center justify-center  w-full h-full z-[1]">
                                                <div className="timer-value font-primary-med text-center text-lg text-[#FF5343] leading-none 3sm:text-xs">24</div>
                                                <div className="timer-value font-primary-bold text-center text-[11px] text-[#FF5343] leading-none 3sm:hidden">часа</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex justify-end mb-5 pt-0 sm:pt-6'>
                                        <button onClick={() => deleteOrder(index)} className='p-0 bg-inherit hover:bg-[rgba(241,245,249,1)]'>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18 6L6 18M6 6L18 18" stroke="#B8B8B8" strokeWidth="1.5" strokeLinecap="round"/>
                                            </svg>
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