
function FinanceItem(props) {
    

    return (
        <div className="p-4 sm:p-6 font-secondary-bold rounded-xl flex justify-between items-center flex-wrap sm:flex-nowrap text-xs sm:text-sm text-[#1D222C] gap-0 sm:gap-2 bg-white">
            <div className="">{props.name} #2{props.numOper}</div>
            <div className="flex sm:hidden items-center justify-start gap-x-1.5 text-[#A6B6D4] w-full">
                <div>Ожидание</div>
                <div>{props.time} часов.</div>
            </div>
            <div className="flex items-center justify-start sm:justify-end w-full font-secondary-bold text-[#969BA5] gap-2 h-auto sm:h-full">
                <div className="hidden sm:flex items-center justify-end flex-wrap gap-x-1.5 text-[#A6B6D4] pr-2 h-full border-r border-solid border-[#DBE0ED]">
                    <div>Ожидание</div>
                    <div>{props.time} часов.</div>
                </div>
                <div className="flex items-center flex-shrink-0 h-full text-[#1D222C] font-bold pr-2 border-r border-solid border-[#DBE0ED]">{props.money} ₽</div>
                <div className="flex items-center justify-end w-max text-[#1D222C] text-end h-full pr-2 border-r border-solid border-[#DBE0ED]">{props.data}</div>
                <div className="flex items-center justify-end text-[#E22929] cursor-pointer">
                    <div className="rounded-full w-[24px] h-[24px] flex justify-end items-center text-[#E22929] pr-2">
                        <img src='/img/icon-close-red.svg' alt="close"/>
                    </div>
                    <div className="w-min xl:w-auto ">Отменить операцию</div>
                </div>
            </div>
        </div>                        
    );
};

export default FinanceItem;