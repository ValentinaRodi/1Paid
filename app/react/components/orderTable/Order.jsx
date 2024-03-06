import React, { useEffect, useState, useRef } from "react";

function Order() {

    return (
        <div className="sotl-list w-full flex flex-col ">
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
            </div>
        </div>
    );
}

export default Order;