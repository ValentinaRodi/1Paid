
function FinanceItem(props) {
    
    return (
        <div className="p-4 sm:p-6 font-secondary-bold rounded-xl flex justify-between items-center flex-wrap sm:flex-nowrap text-[10px] sm:text-sm text-[#1D222C] gap-0 sm:gap-2 bg-white">
            <div className="">{props.name} #2{props.numOper}</div>
            <div className="flex items-center justify-start sm:justify-end w-full font-secondary-bold text-[#969BA5] gap-2 h-auto sm:h-full">
                <div className="flex items-center justify-between sm:justify-end w-full">
                    {props.balance === 'output' && props.stage === 'progress' ?
                        <div className="hidden sm:flex items-center justify-end flex-wrap gap-x-1.5 text-[#A6B6D4] pr-2 h-full border-r border-solid border-[#DBE0ED]">
                            <div>Ожидание</div>
                            <div>{props.time} часов.</div>
                        </div>
                        : null
                    }
                    {props.balance === 'output' && props.stage === 'cancel' ?
                        <div className="hidden sm:flex items-center justify-end flex-wrap gap-x-1.5 text-[#A6B6D4] pr-2 h-full border-r border-solid border-[#DBE0ED]">
                            <div>Отменено</div>
                        </div>
                        : null
                    }
                    {props.balance === 'output' && props.stage === 'true' ?
                        <div className="hidden sm:flex items-center justify-end flex-wrap gap-x-1.5 text-[#A6B6D4] pr-2 h-full border-r border-solid border-[#DBE0ED]">
                            <div>Успешный вывод</div>
                        </div>
                        : null
                    }
                    {props.balance === 'add' && props.stage === 'true' ?
                        <div className="hidden sm:flex items-center justify-end flex-wrap gap-x-1.5 text-[#A6B6D4] pr-2 h-full border-r border-solid border-[#DBE0ED]">
                            <div>Попoлнено</div>
                        </div>
                        : null
                    }
                    {props.balance === 'add' && props.stage === 'progress' ?
                        <div className="hidden sm:flex items-center justify-end flex-wrap gap-x-1.5 text-[#A6B6D4] pr-2 h-full border-r border-solid border-[#DBE0ED]">
                            <div>Пополняется</div>
                        </div>
                        : null
                    }
                    {props.balance === 'outlay' ?
                        <div className="hidden sm:flex items-center justify-end flex-wrap gap-x-1.5 text-[#A6B6D4] pr-2 h-full border-r border-solid border-[#DBE0ED]">
                            <div>Расход</div>
                        </div>
                        : null
                    }
                    {props.balance === 'earn' ?
                        <div className="hidden sm:flex items-center justify-end flex-wrap gap-x-1.5 text-[#A6B6D4] pr-2 h-full border-r border-solid border-[#DBE0ED]">
                            <div>Заработано</div>
                        </div>
                        : null
                    }
                    {props.balance === 'return' ?
                        <div className="hidden sm:flex items-center justify-end flex-wrap gap-x-1.5 text-[#A6B6D4] pr-2 h-full border-r border-solid border-[#DBE0ED]">
                            <div>Возврат</div>
                        </div>
                        : null
                    }
                    <div className="flex items-center flex-shrink-0 h-full text-[#1D222C] font-bold pr-2 border-r border-solid border-[#DBE0ED]">{props.money} ₽</div>
                    <div className="flex items-center justify-end w-max text-[#1D222C] text-end h-full pr-2 border-r border-solid border-[#DBE0ED]">{props.data}</div>
                </div>
                {props.balance === 'output' && props.stage === 'progress' ?
                    <div className="flex items-center justify-end text-[#E22929] cursor-pointer">
                        <div className="rounded-full w-[24px] h-[24px] flex justify-end items-center text-[#E22929] pr-2">
                            <img src='/img/icon-close-red.svg' alt="close"/>
                        </div>
                        <div className="w-min xl:w-auto ">Отменить операцию</div>
                    </div>
                    : null
                }
                {props.balance === 'output' && props.stage === 'true' ?
                    <div className="flex items-center justify-end text-[#E22929]">
                        <div className="rounded-full w-full flex justify-end items-center text-[#E22929]">
                            <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M15.8216 0.694128C15.994 0.895687 16.0793 1.15748 16.0587 1.42191C16.038 1.68634 15.9132 1.93174 15.7116 2.10413L6.12163 10.3341C5.62703 10.7557 4.88666 10.707 4.45163 10.2241L0.26163 5.61413C0.020476 5.34975 -0.0613165 4.9768 0.0470632 4.63577C0.155443 4.29474 0.437529 4.03743 0.787063 3.96077C1.1366 3.88411 1.50048 3.99975 1.74163 4.26413L5.41163 8.26413L14.4116 0.554128C14.617 0.385221 14.8811 0.305042 15.1457 0.331312C15.4103 0.357583 15.6535 0.48814 15.8216 0.694128Z" fill="#8CD23C"/>
                            </svg>
                        </div>
                    </div>
                    : null
                }
                {props.balance === 'output' && props.stage === 'cancel' ?
                    <div className="flex items-center justify-end text-[#E22929]">
                        <div className="rounded-full w-[17px] h-[11px] flex justify-end items-center text-[#E22929]">
                            <img src="/img/icon-close-red.svg" alt="close"/>
                        </div>
                    </div>
                    : null
                }
                {props.balance === 'add' && props.stage === 'true' ?
                    <div className="flex items-center justify-end text-[#E22929]">
                        <div className="rounded-full w-full flex justify-end items-center text-[#E22929]">
                            <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M15.8216 0.694128C15.994 0.895687 16.0793 1.15748 16.0587 1.42191C16.038 1.68634 15.9132 1.93174 15.7116 2.10413L6.12163 10.3341C5.62703 10.7557 4.88666 10.707 4.45163 10.2241L0.26163 5.61413C0.020476 5.34975 -0.0613165 4.9768 0.0470632 4.63577C0.155443 4.29474 0.437529 4.03743 0.787063 3.96077C1.1366 3.88411 1.50048 3.99975 1.74163 4.26413L5.41163 8.26413L14.4116 0.554128C14.617 0.385221 14.8811 0.305042 15.1457 0.331312C15.4103 0.357583 15.6535 0.48814 15.8216 0.694128Z" fill="#8CD23C"/>
                            </svg>
                        </div>
                    </div>
                    : null
                }
                {props.balance === 'add' && props.stage === 'progress' ?
                    <div className="flex items-center justify-end text-[#E22929]">
                        <div className="rounded-full w-full flex justify-end items-center text-[#E22929]">
                            <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M15.8216 0.694128C15.994 0.895687 16.0793 1.15748 16.0587 1.42191C16.038 1.68634 15.9132 1.93174 15.7116 2.10413L6.12163 10.3341C5.62703 10.7557 4.88666 10.707 4.45163 10.2241L0.26163 5.61413C0.020476 5.34975 -0.0613165 4.9768 0.0470632 4.63577C0.155443 4.29474 0.437529 4.03743 0.787063 3.96077C1.1366 3.88411 1.50048 3.99975 1.74163 4.26413L5.41163 8.26413L14.4116 0.554128C14.617 0.385221 14.8811 0.305042 15.1457 0.331312C15.4103 0.357583 15.6535 0.48814 15.8216 0.694128Z" fill="#8FA0C3"/>
                            </svg>
                        </div>
                    </div>
                    : null
                }
                {props.balance === 'add' && props.stage === 'cancel' ?
                    <div className="flex items-center justify-end text-[#E22929]">
                        <div className="rounded-full w-full flex justify-end items-center text-[#E22929]">
                            <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M15.8216 0.694128C15.994 0.895687 16.0793 1.15748 16.0587 1.42191C16.038 1.68634 15.9132 1.93174 15.7116 2.10413L6.12163 10.3341C5.62703 10.7557 4.88666 10.707 4.45163 10.2241L0.26163 5.61413C0.020476 5.34975 -0.0613165 4.9768 0.0470632 4.63577C0.155443 4.29474 0.437529 4.03743 0.787063 3.96077C1.1366 3.88411 1.50048 3.99975 1.74163 4.26413L5.41163 8.26413L14.4116 0.554128C14.617 0.385221 14.8811 0.305042 15.1457 0.331312C15.4103 0.357583 15.6535 0.48814 15.8216 0.694128Z" fill="#E22929"/>
                            </svg>
                        </div>
                    </div>
                    : null
                }
                {props.balance === 'outlay' ?
                    <div className="flex items-center justify-end text-[#E22929]">
                        <div className="rounded-full flex justify-end items-center text-[#E22929]">
                            <img src="/img/icons8-minus.png" alt='minus' />
                        </div>
                    </div>
                    : null
                }
                {props.balance === 'earn' ?
                    <div className="flex items-center justify-end ">
                        <div className="rounded-full flex justify-end items-center text-[#8CD23C]">
                            <img src="/img/icons8-plus.png" alt='plus' />
                        </div>
                    </div>
                    : null
                }
                {props.balance === 'return' ?
                    <div className="flex items-center justify-end text-[#E22929]">
                        <div className="rounded-full w-full flex justify-end items-center text-[#E22929]">
                            <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M15.8216 0.694128C15.994 0.895687 16.0793 1.15748 16.0587 1.42191C16.038 1.68634 15.9132 1.93174 15.7116 2.10413L6.12163 10.3341C5.62703 10.7557 4.88666 10.707 4.45163 10.2241L0.26163 5.61413C0.020476 5.34975 -0.0613165 4.9768 0.0470632 4.63577C0.155443 4.29474 0.437529 4.03743 0.787063 3.96077C1.1366 3.88411 1.50048 3.99975 1.74163 4.26413L5.41163 8.26413L14.4116 0.554128C14.617 0.385221 14.8811 0.305042 15.1457 0.331312C15.4103 0.357583 15.6535 0.48814 15.8216 0.694128Z" fill="#8CD23C"/>
                            </svg>
                        </div>
                    </div>
                    : null
                }
            </div>
        </div>                        
    );
};

export default FinanceItem;