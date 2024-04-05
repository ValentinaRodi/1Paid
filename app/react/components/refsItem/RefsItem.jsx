import { useState, useEffect } from 'react';
import LayoutBtn from '../../components/LayoutBtn';
import { Link } from 'react-router-dom';
import Pagination from '../../components/pagination/Pagination';
import Title from '../../components/title/Title';


function RefsItem(props) {

    const [refs, setRefs] = useState('https://1paid.com/ref/38921');

    const handleCopy = () => {
        //Только по протоколу HTTPS
        if(window.isSecureContext) {
            navigator.clipboard.writeText(refs);
        };
    };

    return (             
        <div className="srf-ref flex items-center justify-between font-secondary-bold rounded-lg bg-white w-full h-[56px] max-h-[56px] px-4 sm:px-6">
            <div className="srf-ref-username text-[#1F62EC] text-[9px] sm:text-[13px]">{props.name}</div>
            <div className="srf-ref-info flex flex-col sm:flex-row items-end sm:items-center justify-between text-[#969BA5] gap-3">
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