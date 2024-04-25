import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function RefsItem(props) {
    const navigate = useNavigate();
    
    const goProfile = () => {
        window.scrollTo({ top: 0 }); 
        navigate('/profile',  { state: {userName:'заблокирован', blockUser:'true' } });
    };

    return (             
        <div className="srf-ref flex items-center justify-between font-secondary-bold rounded-lg bg-white w-full h-[56px] max-h-[56px] px-4 sm:px-6">
            <div onClick={goProfile} className="cursor-pointer srf-ref-username text-[#1F62EC]  text-[9px] sm:text-[13px]">{props.name}</div>
            <div className="srf-ref-info flex flex-col sm:flex-row items-end sm:items-center justify-between text-[#969BA5] gap-y-0 gap-x-3">
                <div className="srf-ref-info-income flex gap-2 items-center text-[9px] sm:text-[13px]">Ваш доход:
                    <div className="srf-ref-info-income-count text-gradient pl-0 sm:pl-1 text-[9px] sm:text-[13px]">{props.moneyDG}DG</div>
                </div>
                <div className="srf-ref-info-spent gap-2 flex items-center border-none sm:border-x border-solid border-[#DBE0ED] px-0 sm:px-3 text-[9px] sm:text-[13px]">Потрачено:
                    <div className="srf-ref-info-spent-count font-bold text-[#1D222C] pl-0 sm:pl-1 text-[9px] sm:text-[13px]">{props.money}₽</div>
                </div>
                <div className="srf-ref-date text-[9px] sm:text-[13px] text-black">{props.data}</div>
            </div>
        </div>                       
    );
};

export default RefsItem;