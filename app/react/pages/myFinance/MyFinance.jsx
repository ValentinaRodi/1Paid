import { useState, useEffect } from 'react';
import LayoutBtn from '../../components/LayoutBtn';
import SelectFinance from '../../components/selectFinance/SelectFinance';
import { createRoot } from "react-dom/client";
import AddBalance from '../../components/addBalance/AddBalance';
import OutputFunds from '../../components/outputFunds/OutputFunds';
import Navigation from '../../components/navigation/Navigation';
import Pagination from '../../components/pagination/Pagination';
import Title from '../../components/title/Title';
import uuid from 'react-uuid';
import FinanceItem from '../../components/financeItem/FinanceItem';

function MyFinance() {
    const [modalEl, setModalEl] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const body = document.querySelector('body');
    const [indexNav, setIndexNav] = useState(0);
    const [formValue, setFormValue] = useState({});

    const addFunds = () => {
        body.style.overflow = 'hidden';
        setModalEl(<AddBalance
            closeModal={closeModal} title='Пополнение баланса'
        />);
        setModalOpen(true);
    };

    const takeFunds = () => {
        body.style.overflow = 'hidden';
        setModalEl(<OutputFunds
            closeModal={closeModal}
        />);
        setModalOpen(true);
    };

    useEffect(() => {
        const modal = document.getElementById('modal');

        if(modalOpen) {
            modal.classList.add('modal');
            modal.textContent = '';
            
            const containerModal = document.createElement("div");
            const root = createRoot(containerModal);
            root.render(modalEl);
            modal.appendChild(containerModal);   
        };

        if(!modalOpen) {
            modal.classList.remove('modal');
            modal.textContent = '';
        };
        
    }, [modalEl]);

    const closeModal = () =>{
        body.style.overflow = 'auto';
        setModalOpen(false);
        setModalEl('');
    };

    const clickNav = (index) => {
        setIndexNav(index);
    };

    // Функция для обновления объекта formValue
    const changeFormValue = (key, value) => {
        (key in formValue) ? formValue[key] = value : formValue[key] = value;
       
        if(value === '') {
            delete formValue[`${key}`];
        }
    };

    const arr = ['За все время', 'За месяц', 'За неделю', 'За день'];
    const navArr =['Все операции', 'История пополнения', 'История вывода', 'Расходы', 'Заработанно'];
    const arrItem = [
        {   
            'balance': 'output',
            'name': 'Вывод баланса',
            'stage': 'progress',
        },
        {
            'balance': 'output',
            'name': 'Вывод баланса',
            'stage': 'cancel',
        },
        {
            'balance': 'output',
            'name': 'Вывод баланса',
            'stage': 'true',
        },
        {
            'balance': 'add',
            'name': 'Пополнение баланса',
            'stage': 'progress',
        },
        {
            'balance': 'add',
            'name': 'Пополнение баланса',
            'stage': 'true',
        },
        {
            'balance': 'outlay',
            'name': 'Расход',
            'stage': 'false',
        },
        {
            'balance': 'earn',
            'name': 'Заработано',
            'stage': 'false',
        },
        {
            'balance': 'return',
            'name': 'Возврат',
            'stage': 'false',
        },
    ];

    return (
        <div className="flex flex-wrap content-between layout-b pb-4 min-w-0">
            <div className="w-full layout-main">
                <div className="fh">
                    <Title title='Финансы'/>
                    <Navigation navArr={navArr} clickNav={clickNav}/>
                    <div className='w-full'>
                        <div className="fh-info flex justify-between items-center flex-wrap sm:flex-nowrap gap-4 sm:gap-6 rounded-lg bg-white p-4 sm:p-6 min-h-28">
                            <div className='flex gap-4 sm:gap-6 flex-shrink-0 w-full sm:w-auto justify-between'>
                                <div className="fh-info-balance pr-4 sm:pr-6 border-none sm:border-r botder-solid border-[#DBE0ED]">
                                    <div className="fh-info-balance-count font-bold font-secondary-bold text-xl sm:text-2xl text-black mb-1">8 163.50₽</div>
                                    <div className="fh-info-balance-label font-secondary-med text-[#A6B6D4] text-xs sm:text-sm">Общий баланс</div>
                                </div>
                                <div className="fh-info-total ">
                                    <div className="fh-info-total-count font-bold font-secondary-bold text-xl sm:text-2xl text-black mb-1 text-right">+163.50₽</div>
                                    <SelectFinance arr={arr} keyValue='Time' changeFormValue={changeFormValue}/>
                                </div>
                            </div>   
                            <div className="flex items-center w-full sm:w-auto justify-between sm:justify-end flex-nowrap sm:flex-wrap gap-2 h-full">
                                <button onClick={addFunds} className="smt-tab-btn flex justify-center items-center font-secondary-bold text-xs sm:text-sm text-white bg-gradient-primary rounded-full h-8 sm:h-10 px-2 sm:px-4 min-w-[148px] sm:min-w-[170px] bg-gradient-primary-hover">Пополнить баланс</button>
                                <button onClick={takeFunds} className="smt-tab-btn flex justify-center items-center font-secondary-bold text-xs sm:text-sm text-[#1E61EB] bg-white border border-solid border-[#1E61EB] rounded-full h-8 sm:h-10 px-2 sm:px-4 min-w-[148px] sm:min-w-[170px] hover:text-white hover:bg-[linear-gradient(37deg,#339cfc_0%,#0046d6_100%)]">Вывести средства</button>
                            </div>
                        </div>
                        <div className="fh-feed mt-4 sm:mt-6 grid grid-cols-1 gap-3">
                            {(indexNav === 0 && arrItem.length !== 0) ?
                                arrItem.map((item, index) => (
                                    <FinanceItem key={uuid()} index={index} stage={item.stage} balance={item.balance} name={item.name} numOper='2478271' time='48' money='+163.50' data='15.02.2023, 22:12'/>
                                ))
                               : null
                            }
                            {(indexNav === 1 && arrItem.length !== 0) ?
                                arrItem.map((item, index) => {
                                    if(item.balance === 'add') {
                                        return <FinanceItem key={uuid()} index={index} stage={item.stage} balance={item.balance} name={item.name} numOper='2478271' time='48' money='+163.50' data='15.02.2023, 22:12'/>
                                    }
                                })
                                : null
                            }
                            {(indexNav === 2 && arrItem.length !== 0) ?
                                arrItem.map((item, index) => {
                                    if(item.balance === 'output') {
                                        return <FinanceItem key={uuid()} index={index} stage={item.stage} balance={item.balance} name={item.name} numOper='2478271' time='48' money='+163.50' data='15.02.2023, 22:12'/>
                                    }                                
                                })
                                : null
                            }
                            {(indexNav === 3 && arrItem.length !== 0) ?
                                arrItem.map((item, index) => {
                                    if(item.balance === 'outlay') {
                                        return <FinanceItem key={uuid()} index={index} stage={item.stage} balance={item.balance} name={item.name} numOper='2478271' time='48' money='-200.50' data='15.02.2023, 22:12'/>
                                    }                                
                                })
                                : null
                            }
                            {(indexNav === 4 && arrItem.length !== 0) ?
                                arrItem.map((item, index) => {
                                    if(item.balance === 'earn') {
                                        return <FinanceItem key={uuid()} index={index} stage={item.stage} balance={item.balance} name={item.name} numOper='2478271' time='48' money='+163.50' data='15.02.2023, 22:12'/>
                                    }                                
                                })
                                : null
                            }
                        </div>
                    </div>
                    <Pagination />
                </div>
            </div>
            <LayoutBtn toTop='true'/>
        </div>
    );
};

export default MyFinance;